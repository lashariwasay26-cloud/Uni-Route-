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
    <div id="brainstorm-stage" className="max-w-3xl mx-auto space-y-4 sm:space-y-6 animate-in fade-in-50">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
          Find the story behind your essay.
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
          Before writing, think about the experiences, people, challenges, interests, and moments that shaped you.
        </p>
      </div>

      <div className="space-y-3.5">
        {answers.map((item, idx) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-2.5 sm:space-y-3 shadow-xs relative"
          >
            <div className="flex items-start justify-between gap-3">
              <label className="block text-xs sm:text-sm font-bold text-slate-950">
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
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <textarea
              rows={3}
              value={item.answer}
              onChange={(e) => handleAnswerChange(item.id, e.target.value)}
              placeholder="Reflect on your experience, thoughts, and lessons learned..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 sm:p-3 text-[11px] sm:text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-all leading-relaxed resize-y"
            />
          </div>
        ))}
      </div>

      {/* Add Custom Question Button */}
      {!showAddModal ? (
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full py-2.5 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Your Own Question</span>
        </button>
      ) : (
        <div className="bg-white border border-indigo-300 rounded-xl p-4 space-y-3 shadow-md animate-in zoom-in-95">
          <label className="block text-xs font-bold text-indigo-900 uppercase">
            New Custom Question
          </label>
          <input
            type="text"
            value={newQuestionText}
            onChange={(e) => setNewQuestionText(e.target.value)}
            placeholder="e.g. What project or community effort am I most proud of?"
            className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-950 rounded-lg p-2.5 focus:outline-none focus:border-indigo-600"
          />
          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              onClick={() => setShowAddModal(false)}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={handleAddCustomQuestion}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold shadow-xs hover:bg-black"
            >
              Add Question
            </button>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-200/80">
        <button
          onClick={onBack}
          className="h-10 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-3">
          <button
            onClick={onSave}
            className="h-10 px-2.5 sm:px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] sm:text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Save className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Save Brainstorm</span>
          </button>

          <button
            onClick={onContinue}
            className="h-10 px-2.5 sm:px-6 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-[11px] sm:text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span className="truncate">Continue to Draft</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
