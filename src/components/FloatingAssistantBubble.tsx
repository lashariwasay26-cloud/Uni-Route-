import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowRight, Send, MessageSquare, GraduationCap, ChevronRight, Bot, User } from 'lucide-react';
import { ChatMarkdownRenderer } from './ChatMarkdownRenderer';

interface FloatingAssistantBubbleProps {
  onOpenScholarships?: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'model';
  text: string;
}

export const FloatingAssistantBubble: React.FC<FloatingAssistantBubbleProps> = ({ onOpenScholarships }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'model',
      text: "👋 Hello! I am your **UniRoute AI Admissions Counselor**, powered by Gemini. Ask me anything about global scholarships, SAT prep, or university admissions!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const QUICK_PROMPTS = [
    '🎓 Full-Ride Scholarships for International Students',
    '🇵🇰 Top Scholarships in Pakistan (HEC, PEEF, LUMS)',
    '📚 Digital SAT Prep Strategy & Tips',
    '✍️ How to Write a Strong Common App Essay',
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputMessage('');
    setLoading(true);

    try {
      const res = await fetch('/api/counselor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });
      const data = await res.json();
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'model',
        text: data.reply || "I'm here to assist with your university applications!",
      };
      setMessages([...newMessages, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'model',
        text: "I am experiencing high traffic right now. Please feel free to ask again in a moment!",
      };
      setMessages([...newMessages, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="mb-3 sm:mb-4 w-[calc(100vw-1.5rem)] sm:w-[400px] h-[480px] sm:h-[520px] bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg shadow-inner">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-tight flex items-center gap-1.5">
                    Gemini AI Counselor
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[11px] text-indigo-100/90">Multi-turn admissions advisor</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-purple-600 text-white shadow-sm'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed text-xs sm:text-sm ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-xs shadow-sm'
                        : 'bg-white border border-slate-200/80 text-slate-800 rounded-tl-xs shadow-2xs'
                    }`}
                  >
                    <ChatMarkdownRenderer content={msg.text} isUser={msg.sender === 'user'} />
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-slate-400 text-xs py-2">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 animate-spin">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span>Counselor is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            {messages.length <= 2 && (
              <div className="px-3 py-2 bg-slate-100/80 border-t border-slate-200/60 overflow-x-auto flex gap-1.5 shrink-0">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 font-medium whitespace-nowrap transition-all shadow-2xs cursor-pointer shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2 shrink-0">
              <input
                type="text"
                placeholder="Ask your counselor anything..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={loading || !inputMessage.trim()}
                className="p-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors disabled:opacity-50 cursor-pointer shrink-0 shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer relative group"
        title="Chat with Gemini AI Counselor"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
      </button>
    </div>
  );
};
