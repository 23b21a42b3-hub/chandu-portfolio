import React, { useState } from "react";
import { PortfolioData } from "../types";
import { Mail, Linkedin, MapPin, CheckCircle, Copy, Send, Sparkles } from "lucide-react";

interface ContactProps {
  data: PortfolioData;
}

export default function Contact({ data }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", query: "" });
      }, 5000);
    }
  };

  return (
    <section id="contact-section" className="py-20 border-t border-slate-900/60 bg-slate-950/40 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
            <Mail className="w-4 h-4" />
            <span>Connection Portal</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight font-sans">
            Initiate Contact Sequence
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-lg font-sans">
            Get in touch to discuss internships, collaboration, or specific AI implementation opportunities.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Quick Info & Social Cards (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            {/* Quick credentials card */}
            <div className="bg-slate-900/20 border border-slate-800/80 p-6 rounded-2xl space-y-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  Candidate Credentials
                </span>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Based in down-town Kakinada. Accessible for remote contributions or on-premise alignment.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email line */}
                <div className="group flex items-center justify-between p-3 bg-slate-950/60 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="text-xs font-mono text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
                      {data.socials.email}
                    </span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-teal-400 transition-colors cursor-pointer"
                    title="Copy Address"
                  >
                    {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn link */}
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-900 rounded-xl hover:border-teal-500/10 hover:bg-slate-900/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-xs font-mono text-slate-300">
                      linkedin.com/in/chandu
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                    GO ↗
                  </span>
                </a>

                {/* Location Display */}
                <div className="flex items-center gap-3 p-3 bg-slate-950/30 rounded-xl border border-transparent">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <span className="text-xs text-slate-400 font-sans">
                    {data.location}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Inquiry form card (7 cols) */}
          <div className="md:col-span-7 bg-slate-900/20 border border-slate-800/80 p-6 md:p-8 rounded-2xl flex flex-col justify-between">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-full animate-bounce">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Connection Stream Established</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                    Thank you. Your message package has been simulated and processed. Standard response loop defaults to 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                      Interactive Terminal Message
                    </span>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Identification / Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rachel Carter (Hiring Manager)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-200 placeholder-slate-700 text-xs rounded-lg focus:outline-none focus:border-teal-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Target Gateway / Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. rachel@enterprise-ai.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-200 placeholder-slate-700 text-xs rounded-lg focus:outline-none focus:border-teal-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Message Payload
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We are looking for an AI/ML student familiar with NLP screening pipelines..."
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-200 placeholder-slate-700 text-xs rounded-lg focus:outline-none focus:border-teal-500/50 resize-none font-sans"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-slate-950 hover:text-slate-950 font-bold text-xs rounded-lg transition-transform hover:-translate-y-0.5 shadow-md mt-4 cursor-pointer"
                >
                  Dispatch Connection Signal
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer info line */}
        <div className="mt-16 pt-8 border-t border-slate-900/40 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>Yegireddy Chandu — Continuous Learning & Development Architecture</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Built using elegant React with Tailwind CSS</span>
          </span>
        </div>

      </div>
    </section>
  );
}
