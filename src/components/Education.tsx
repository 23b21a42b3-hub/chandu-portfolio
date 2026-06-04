import React from "react";
import { PortfolioData } from "../types";
import { GraduationCap, MapPin, Calendar, Award, Sparkles } from "lucide-react";

interface EducationProps {
  data: PortfolioData;
}

export default function Education({ data }: EducationProps) {
  const isCustomized = data.education.isCustomized && (data.education.graduationYear || data.education.cgpa);

  return (
    <section id="education-section" className="py-20 border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Infrastructure</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight font-sans">
            Formal Engineering Training
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-lg font-sans">
            Specialized curriculum detailing foundational machine learning structures and modern software disciplines.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900/30 to-indigo-950/10 border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            {/* Left Info Column */}
            <div className="space-y-4">
              <div>
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold text-teal-400 bg-teal-400/10 rounded-full border border-teal-500/20 inline-block uppercase tracking-wider mb-2">
                  Specialization Stream: CSE (AI/ML)
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">
                  {data.education.degree}
                </h3>
                <p className="text-slate-300 font-medium text-sm mt-1">
                  {data.education.major}
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-400 font-sans">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{data.education.institution}, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Right Status Panel */}
            <div className="w-full md:w-56 bg-slate-950/60 border border-slate-900 rounded-xl p-4 space-y-3.5 flex flex-col justify-center">
              
              {/* Graduation date block */}
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Expected Graduation</span>
                </div>
                {data.education.graduationYear ? (
                  <p className="text-sm font-bold text-slate-200 mt-1">{data.education.graduationYear}</p>
                ) : (
                  <span className="text-xs text-rose-400/80 italic block mt-1 border-b border-dashed border-rose-500/20 pb-1">
                    (Click customizer to add)
                  </span>
                )}
              </div>

              {/* CGPA block */}
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                  <Award className="w-3.5 h-3.5 text-slate-500" />
                  <span>Academic Standing [CGPA]</span>
                </div>
                {data.education.cgpa ? (
                  <p className="text-sm font-bold text-teal-400 mt-1">{data.education.cgpa}</p>
                ) : (
                  <span className="text-xs text-rose-400/80 italic block mt-1">
                    (Click customizer to add)
                  </span>
                )}
              </div>

            </div>

          </div>

          {!isCustomized && (
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 bg-slate-900/10 -mx-6 -mb-6 p-4">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 animate-pulse" />
              <span>
                Note: In his PDF, Yegireddy's graduation year and CGPA were left as placeholders. Use the <strong>Personalize Portfolio</strong> button below to set them!
              </span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
