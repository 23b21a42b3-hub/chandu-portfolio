import React from "react";
import { PortfolioData } from "../types";
import { Trophy, HelpCircle, AlertCircle, CheckCircle2, Github, ExternalLink, Code2 } from "lucide-react";

interface AchievementsProps {
  data: PortfolioData;
}

export default function Achievements({ data }: AchievementsProps) {
  // Let's check status of customizations
  const leetcode = data.socials.leetcode;
  const codechef = data.socials.codechef;
  const hackerrank = data.socials.hackerrank;
  const github = data.socials.github;

  const cards = [
    {
      title: "Algorithmic Solvers (Coding Profiles)",
      subtitle: "LeetCode, CodeChef, HackerRank stats.",
      hasData: !!leetcode || !!codechef || !!hackerrank,
      customText: data.achievements[0].description,
      fallbackPlaceholder: "Add LeetCode / CodeChef / HackerRank profiles to view score metrics.",
      socialLinks: [
        { name: "LeetCode", url: leetcode, icon: <Code2 className="w-3.5 h-3.5" /> },
        { name: "CodeChef", url: codechef, icon: <Code2 className="w-3.5 h-3.5" /> },
        { name: "HackerRank", url: hackerrank, icon: <Code2 className="w-3.5 h-3.5" /> },
      ].filter(l => !!l.url)
    },
    {
      title: "Open Source Activity (GitHub)",
      subtitle: "Live repositories, automation scripts.",
      hasData: !!github,
      customText: data.achievements[1].description,
      fallbackPlaceholder: "Add your GitHub repositories or deployment links to sync commits dynamically.",
      socialLinks: github ? [{ name: "GitHub Repository Logs", url: github, icon: <Github className="w-3.5 h-3.5" /> }] : []
    },
    {
      title: "Special Operations (Hackathons & Achievements)",
      subtitle: "Competitions, workshop participation.",
      hasData: data.achievements[2].isCustomized,
      customText: data.achievements[2].description,
      fallbackPlaceholder: "Add hackathon participation or specific academy achievements in the customizer."
    }
  ];

  return (
    <section id="achievements-section" className="py-20 border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
            <Trophy className="w-4 h-4" />
            <span>Verification Channels</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight font-sans">
            Technical Milestones & Capabilities
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-lg font-sans">
            Performance metrics, live codebases, and hackathon records verified against peer platforms.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-900/10 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700/60 transition-all shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                    Milestone Card #{idx + 1}
                  </span>
                  
                  {card.hasData || card.customText ? (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-amber-400/85 uppercase tracking-wide bg-amber-500/5 border border-amber-500/15 px-2 py-0.5 rounded-full">
                      <AlertCircle className="w-3 h-3" />
                      <span>Configure</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white font-sans leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-sans">
                    {card.subtitle}
                  </p>
                </div>

                <div className="bg-slate-950/40 border border-slate-900 rounded-lg p-3.5 min-h-[90px] flex flex-col justify-center">
                  {card.customText ? (
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{card.customText}</p>
                  ) : (
                    <p className="text-xs text-slate-500 italic leading-relaxed font-sans">{card.fallbackPlaceholder}</p>
                  )}
                </div>
              </div>

              {/* Link integration */}
              {card.socialLinks && card.socialLinks.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-900/60 flex flex-wrap gap-2">
                  {card.socialLinks.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-teal-400 hover:text-teal-300 border border-teal-500/20 hover:border-teal-500/40 bg-teal-500/5 px-2.5 py-1.5 rounded transition-all cursor-pointer"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
