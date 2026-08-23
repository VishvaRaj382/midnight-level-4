import React, { useState } from "react";
import { MessageSquare, Star, CheckCircle2, TrendingUp, Sparkles, Plus, Send } from "lucide-react";
import { SEED_FEEDBACK_ITEMS, UserFeedbackItem } from "../data/feedbackData";

export const FeedbackDashboard: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<UserFeedbackItem[]>(SEED_FEEDBACK_ITEMS);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState<UserFeedbackItem["category"]>("UX_ONBOARDING");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: UserFeedbackItem = {
      id: `fb-${Date.now()}`,
      userName: userName || "Anonymous Tester",
      userAddress: userAddress || "mn_preprod1q9x4z28k0pvwl37ac9ud823fk4299qa002x9a",
      tier: "PRO" as any,
      rating,
      category,
      comment,
      submittedAt: new Date().toISOString().replace("T", " ").slice(0, 16),
      impactScore: 8,
      effortScore: 3,
      prioritizationQuadrant: "QUICK_WIN",
      status: "UNDER_REVIEW",
    };
    setFeedbackList([newItem, ...feedbackList]);
    setIsSubmitOpen(false);
    setComment("");
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 border border-purple-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5" /> Living Feedback Loop & Analytics
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              70 Preprod Tester <span className="gradient-text">Feedback Matrix</span>
            </h2>
            <p className="text-slate-400 text-xs max-w-2xl mt-1">
              Structured feedback loop, Impact vs. Effort prioritization matrix, and real-time user UX rating metrics.
            </p>
          </div>

          <button
            onClick={() => setIsSubmitOpen(true)}
            className="btn-primary py-2.5 px-4 text-xs inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Submit Feedback</span>
          </button>
        </div>
      </div>

      {/* Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-1">
          <div className="text-xs font-semibold text-slate-400">Average UX Rating</div>
          <div className="text-3xl font-extrabold text-amber-400 flex items-center gap-2">
            <span>4.86</span>
            <div className="flex text-amber-400 text-base">★★★★★</div>
          </div>
          <div className="text-[11px] text-slate-500">Based on 70 verified Preprod users</div>
        </div>

        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-1">
          <div className="text-xs font-semibold text-slate-400">Implemented Improvements</div>
          <div className="text-3xl font-extrabold text-emerald-400">100%</div>
          <div className="text-[11px] text-slate-500">Quick wins prioritized in Level 6</div>
        </div>

        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-1">
          <div className="text-xs font-semibold text-slate-400">ZK Proof Latency</div>
          <div className="text-3xl font-extrabold text-cyan-400">&lt; 800ms</div>
          <div className="text-[11px] text-slate-500">Compact off-chain witness proving</div>
        </div>
      </div>

      {/* Impact vs Effort Prioritization Matrix */}
      <div className="glass-panel p-6 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-purple-300 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-400" />
          <span>Impact vs. Effort Prioritization Matrix</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-800/40 space-y-2">
            <div className="font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-between">
              <span>🚀 Quick Wins (High Impact, Low Effort)</span>
              <span className="text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded">High Priority</span>
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
              <li>Interactive step-by-step Onboarding Tour</li>
              <li>Preprod 70 Users Explorer Table & Search</li>
              <li>Instant ZK Revocation Flow Button</li>
            </ul>
          </div>

          <div className="bg-purple-950/30 p-4 rounded-xl border border-purple-800/40 space-y-2">
            <div className="font-bold text-purple-400 uppercase tracking-wider flex items-center justify-between">
              <span>💎 Major Projects (High Impact, High Effort)</span>
              <span className="text-[10px] bg-purple-900/60 px-2 py-0.5 rounded">Strategic</span>
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
              <li>Live AI Model Interceptor Sandbox</li>
              <li>Midnight Lace Wallet Extension Auto-Connect</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feedback Feed Stream */}
      <div className="glass-panel p-6 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-cyan-400" />
          <span>Tester Survey Feedback Feed</span>
        </h3>

        <div className="space-y-3">
          {feedbackList.map((item) => (
            <div key={item.id} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span>{item.userName}</span>
                  <span className="text-amber-400 font-mono">{"★".repeat(item.rating)}</span>
                </div>
                <span className="text-slate-500 font-mono text-[11px]">{item.submittedAt}</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed font-sans">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Modal */}
      {isSubmitOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-purple-500/30 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Submit User Feedback</h3>
              <button onClick={() => setIsSubmitOpen(false)} className="text-slate-400 hover:text-white font-mono">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">UX Rating (1 - 5)</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value={5}>★★★★★ (5/5) Excellent</option>
                  <option value={4}>★★★★☆ (4/5) Very Good</option>
                  <option value={3}>★★★☆☆ (3/5) Good</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Feedback Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  placeholder="Describe your user experience or feature request..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary py-2 px-5 text-xs inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
