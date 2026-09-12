import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus, Trash2, Save, Sparkles, Check } from 'lucide-react';
import { BrainstormAnswer } from '../../../types';

interface BrainstormStageProps {
  answers: BrainstormAnswer[];
  setAnswers: React.Dispatch<React.SetStateAction<BrainstormAnswer[]>>;
  onBack: () => void;
  onContinue: () => void;
  onSave: () => void;
  saveStatus?: string;
}

export const BrainstormStage: React.FC<BrainstormStageProps> = ({
  answers,
  setAnswers,
  onBack,
  onContinue,
  onSave,
  saveStatus = 'Saved',
}) => {
  const [newQuestionText, setNewQuestionText] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAnswerChange = (id: string, text: string) => {
    setAnswers((prev) =>
      prev.map((item) => (item.id === id ? { ...item, answer: text } : item))
    );
  };

  const handleAddCustomQuestion = () => {
    if (!newQuestionText.trim()) return;
    const newId = `custom-${Date.now()}`;
    setAnswers((prev) => [
      ...prev,
      {
        id: newId,
        question: newQuestionText.trim(),
        answer: '',
        isCustom: true,
      },
    ]);
    setNewQuestionText('');
    setShowAddModal(false);
  };

  const handleRemoveQuestion = (id: string) => {
    setAnswers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div id="brainstorm-stage" className="max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in-50">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
          Find the story behind your essay.
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Before writing, think about the experiences, people, challenges, interests, and moments that shaped you.
        </p>
      </div>

      <div className="space-y-4">
        {answers.map((item, idx) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-3 shadow-xs relative"
          >
            <div className="flex items-start justify-between gap-3">
              <label className="block text-sm font-extrabold text-slate-950">
                <span className="text-indigo-600 font-black mr-1.5">
                  Q{idx + 1}.
                </span>
                {item.question}
              </label>

              {item.isCustom && (
                <button
                  onClick={() => handleRemoveQuestion(item.id)}
                  className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Remove question"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <textarea
              rows={3}
              value={item.answer}
              onChange={(e) => handleAnswerChange(item.id, e.target.value)}
              placeholder="Reflect on your experience, thoughts, and lessons learned..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-all leading-relaxed resize-y"
            />
          </div>
        ))}
      </div>

      {/* Add Custom Question Button */}
      {!showAddModal ? (
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full py-3.5 rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Your Own Question</span>
        </button>
      ) : (
        <div className="bg-white border border-indigo-300 rounded-2xl p-4 space-y-3 shadow-md animate-in zoom-in-95">
          <label className="block text-xs font-bold text-indigo-900 uppercase">
            New Custom Question
          </label>
          <input
            type="text"
            value={newQuestionText}
            onChange={(e) => setNewQuestionText(e.target.value)}
            placeholder="e.g. What project or community effort am I most proud of?"
            className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-950 rounded-xl p-3 focus:outline-none focus:border-indigo-600"
          />
          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              onClick={() => setShowAddModal(false)}
              className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={handleAddCustomQuestion}
              className="px-4 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold shadow-xs hover:bg-black"
            >
              Add Question
            </button>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
        <button
          onClick={onBack}
          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onSave}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-4 h-4 text-slate-500" />
            <span>Save Brainstorm</span>
          </button>

          <button
            onClick={onContinue}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Continue to Draft</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
