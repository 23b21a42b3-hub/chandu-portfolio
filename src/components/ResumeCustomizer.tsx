import React, { useState } from "react";
import { PortfolioData } from "../types";
import { Sparkles, X, Plus, Trash, GraduationCap, Award, Link, Trophy, RefreshCw, Eye, Upload } from "lucide-react";

interface ResumeCustomizerProps {
  data: PortfolioData;
  onChange: (newData: PortfolioData) => void;
  onReset: () => void;
}

export default function ResumeCustomizer({ data, onChange, onReset }: ResumeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"education" | "certifications" | "socials" | "achievements">("education");

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          ...data,
          profilePicture: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateEducation = (field: string, value: string) => {
    onChange({
      ...data,
      education: {
        ...data.education,
        [field]: value,
        isCustomized: true,
      },
    });
  };

  const updateCertification = (index: number, provider: string) => {
    const updated = [...data.certifications];
    updated[index] = {
      ...updated[index],
      provider: provider,
      isCustomized: !!provider,
    };
    onChange({
      ...data,
      certifications: updated,
    });
  };

  const updateSocials = (field: string, value: string) => {
    onChange({
      ...data,
      socials: {
        ...data.socials,
        [field]: value,
      },
    });
  };

  const updateAchievement = (index: number, description: string) => {
    const updated = [...data.achievements];
    updated[index] = {
      ...updated[index],
      description: description,
      isCustomized: !!description,
    };
    onChange({
      ...data,
      achievements: updated,
    });
  };

  return (
    <>
      {/* Floating control button */}
      <button
        id="toggle-customizer-btn"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold rounded-full shadow-lg shadow-teal-900/30 border border-teal-400/20 cursor-pointer transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span>Personalize Portfolio</span>
        {(!data.education.isCustomized || !data.certifications[0].isCustomized || !data.socials.github) && (
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
        )}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Sidebar */}
      <div
        id="customizer-drawer"
        className={`fixed top-0 right-0 h-full w-full max-w-lg bg-slate-900 border-l border-slate-800 shadow-2xl z-50 flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" />
              <h2 className="text-xl font-bold text-slate-100">Portfolio Personalization</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Your resume had missing fields or placeholders. Complete them below to update the live system.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 bg-slate-950/40">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "education"
                ? "border-teal-500 text-teal-400 bg-slate-800/10"
                : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/5"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Education
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "certifications"
                ? "border-teal-500 text-teal-400 bg-slate-800/10"
                : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/5"
            }`}
          >
            <Award className="w-4 h-4" />
            Certs
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "achievements"
                ? "border-teal-500 text-teal-400 bg-slate-800/10"
                : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/5"
            }`}
          >
            <Trophy className="w-4 h-4" />
            Profiles
          </button>
          <button
            onClick={() => setActiveTab("socials")}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "socials"
                ? "border-teal-500 text-teal-400 bg-slate-800/10"
                : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/5"
            }`}
          >
            <Link className="w-4 h-4" />
            Avatar & Socials
          </button>
        </div>

        {/* Form Fields container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === "education" && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Education Placeholder</h3>
              <div className="bg-slate-950/40 p-4 border border-slate-800 rounded-xl space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Expected Graduation Year</label>
                  <input
                    type="text"
                    placeholder="e.g. 2027"
                    value={data.education.graduationYear}
                    onChange={(e) => updateEducation("graduationYear", e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">GPA / CGPA</label>
                  <input
                    type="text"
                    placeholder="e.g. 8.35/10 or 8.5"
                    value={data.education.cgpa}
                    onChange={(e) => updateEducation("cgpa", e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Certifications Providers</h3>
              <p className="text-xs text-slate-400">Provide the issuer names for your core certifications.</p>
              
              <div className="space-y-4">
                {data.certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-950/40 p-4 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-semibold text-slate-300 block">{cert.name}</span>
                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 mb-1">Provider Issuer</label>
                      <input
                        type="text"
                        placeholder="e.g. Coursera, DeepLearning.AI, Google Career Certificates"
                        value={cert.provider}
                        onChange={(e) => updateCertification(index, e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Achievements & Hackathons</h3>
              <p className="text-xs text-slate-400">Describe your actual technical achievements, coding profiles details, or hackathon wins.</p>

              <div className="space-y-4">
                {data.achievements.map((ach, index) => (
                  <div key={index} className="bg-slate-950/40 p-4 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-semibold text-slate-300 block">{ach.title}</span>
                    <div>
                      <textarea
                        rows={3}
                        placeholder={
                          index === 0 
                            ? "e.g. LeetCode Max Rating: 1530+, solved 200+ algorithm challenges across profiles"
                            : index === 1 
                            ? "e.g. Built 4 open-source repositories with ML models, including a text classifier receiving 10+ stars"
                            : "e.g. Participated in KIET Innominds Hackathon, developing an early prototype server in 24 hours"
                        }
                        value={ach.description}
                        onChange={(e) => updateAchievement(index, e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "socials" && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Avatar & Social Links</h3>
              <p className="text-xs text-slate-400">Customize your professional avatar and link addresses for recruiters to verify your profile.</p>

              <div className="bg-slate-950/40 p-4 border border-slate-800 rounded-xl space-y-4">
                {/* Upload Section */}
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    <span>Upload Actual Image File</span>
                  </label>
                  
                  <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-slate-800 hover:border-teal-500/40 bg-slate-950/40 rounded-xl p-4 transition-all group cursor-pointer text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <Upload className="w-6 h-6 text-slate-500 group-hover:text-teal-400 mb-2 transition-colors" />
                    <span className="text-xs text-slate-300 font-semibold group-hover:text-slate-100 transition-colors">Click or drag your actual photo here</span>
                    <span className="text-[10px] text-slate-500 mt-1">Supports JPEG, PNG, WEBP (saves locally)</span>
                  </div>

                  {data.profilePicture && data.profilePicture.startsWith("data:") && (
                    <div className="flex items-center gap-2 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs text-emerald-400 font-medium font-sans">Actual photo is loaded & active!</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-800/60 pt-4">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Or Paste a Photo URL</label>
                  <input
                    type="text"
                    placeholder="Paste public image link (https://...)"
                    value={data.profilePicture.startsWith("data:") ? "" : data.profilePicture}
                    onChange={(e) => onChange({ ...data, profilePicture: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                  />
                </div>

                <div className="border-t border-slate-800/60 pt-4">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">GitHub Profile Link</label>
                  <input
                    type="text"
                    placeholder="e.g. https://github.com/chandu-yegireddy"
                    value={data.socials.github}
                    onChange={(e) => updateSocials("github", e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">LeetCode URL</label>
                  <input
                    type="text"
                    placeholder="e.g. https://leetcode.com/chandu-y"
                    value={data.socials.leetcode}
                    onChange={(e) => updateSocials("leetcode", e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">CodeChef Link</label>
                  <input
                    type="text"
                    placeholder="e.g. https://www.codechef.com/users/chandu_y"
                    value={data.socials.codechef}
                    onChange={(e) => updateSocials("codechef", e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">HackerRank Link</label>
                  <input
                    type="text"
                    placeholder="e.g. https://hackerrank.com/chandu"
                    value={data.socials.hackerrank}
                    onChange={(e) => updateSocials("hackerrank", e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-semibold cursor-pointer py-1.5 px-3 hover:bg-rose-500/10 rounded-lg transition-colors border border-transparent hover:border-rose-500/20"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Default
          </button>
          
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold cursor-pointer py-2 px-4 border border-teal-500/30 hover:border-teal-400/50 rounded-lg bg-teal-500/5 transition-all"
          >
            <Eye className="w-4 h-4" />
            Preview Portfolio
          </button>
        </div>
      </div>
    </>
  );
}
