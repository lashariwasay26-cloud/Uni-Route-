import React, { useState, useRef } from 'react';
import { Mic, Square, Sparkles, Loader2, Play, Volume2, Copy, Check } from 'lucide-react';

export const VoiceRecorderWidget: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    setTranscription(null);
    setAudioBlob(null);
    setAudioUrl(null);
    chunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        transcribeAudio(blob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((t) => t.stop());
      setIsRecording(false);
    }
  };

  const transcribeAudio = async (blobToTranscribe: Blob) => {
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blobToTranscribe);
      reader.onloadend = async () => {
        const base64Data = (reader.result as string)?.split(',')[1];
        if (!base64Data) {
          setLoading(false);
          return;
        }

        const res = await fetch('/api/transcribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ audioBase64: base64Data, mimeType: 'audio/webm' }),
        });
        const data = await res.json();
        setTranscription(data.transcription || 'No speech recognized.');
        setLoading(false);
      };
    } catch (err) {
      console.error('Transcription error:', err);
      setTranscription('Failed to transcribe audio.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 my-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
          <Mic className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            AI Voice Transcription Studio
            <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Gemini 3.5 Transcribe</span>
          </h3>
          <p className="text-xs text-slate-500">Record mock interview answers, essay ideas, or voice notes and get instant AI transcriptions.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200/65">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="px-6 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm flex items-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Mic className="w-5 h-5 animate-pulse" />
            Start Voice Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="px-6 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm flex items-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer animate-bounce"
          >
            <Square className="w-5 h-5 fill-current" />
            Stop Recording
          </button>
        )}

        {audioUrl && !isRecording && (
          <audio controls src={audioUrl} className="h-10 rounded-xl" />
        )}
      </div>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-8 text-purple-600 font-semibold text-sm">
          <Loader2 className="w-5 h-5 animate-spin" />
          Transcribing audio with Gemini 3.5 Transcribe...
        </div>
      )}

      {transcription && !loading && (
        <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Transcription Output
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(transcription);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-xs px-3 py-1 rounded-xl bg-white border border-purple-200 text-purple-700 font-semibold flex items-center gap-1 hover:bg-purple-100 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed font-normal whitespace-pre-wrap">
            {transcription}
          </p>
        </div>
      )}
    </div>
  );
};
