import React from "react";
import { PortfolioData } from "../types";
import { Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface CertificationsProps {
  data: PortfolioData;
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <section id="certifications-section" className="py-20 border-t border-slate-900/60 bg-slate-950/40 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
            <Award className="w-4 h-4" />
            <span>Credentials Validation</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight font-sans">
            Domain Certifications
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-lg font-sans">
            Industry recognized assessments, confirming operational capabilities in ML architectures, NLP core systems, and data pipelines.
          </p>
        </div>

        {/* Certifications cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {data.certifications.map((cert, index) => {
            const hasProvider = !!cert.provider;

            return (
              <div
                key={index}
                className="bg-slate-900/20 border border-slate-800/80 rounded-xl p-6 relative flex flex-col justify-between hover:border-slate-700/60 transition-all shadow-md group"
              >
                <div className="space-y-4">
                  {/* Badge logo */}
                  <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 inline-block">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-teal-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
                      Target Area Certification
                    </p>
                  </div>
                </div>

                {/* Provider status */}
                <div className="mt-8 pt-4 border-t border-slate-900/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    Credential Issuer
                  </span>
                  {hasProvider ? (
                    <div className="flex items-center gap-1.5 text-xs text-slate-200 font-semibold mt-1.5 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{cert.provider}</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400/80 italic mt-1.5 border-b border-dashed border-slate-800 pb-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Customizer needed</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
