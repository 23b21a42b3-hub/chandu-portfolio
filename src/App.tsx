import React, { useState, useEffect } from "react";
import { PortfolioData, INITIAL_PORTFOLIO_DATA } from "./types";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ResumeCustomizer from "./components/ResumeCustomizer";
import { Sparkles, Terminal, ArrowUpRight, Github, Code, ExternalLink } from "lucide-react";

export default function App() {
  const [data, setData] = useState<PortfolioData>(INITIAL_PORTFOLIO_DATA);

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("chandu_portfolio_data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed);
      } catch (e) {
        console.error("Error reading saved data", e);
      }
    }
  }, []);

  // Save changes to localStorage helper
  const handleDataChange = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem("chandu_portfolio_data", JSON.stringify(newData));
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to revert all personalizations back to the official PDF values?")) {
      setData(INITIAL_PORTFOLIO_DATA);
      localStorage.removeItem("chandu_portfolio_data");
    }
  };

  // Sections navigation
  const navLinks = [
    { name: "About", href: "#about-section" },
    { name: "Timeline", href: "#experience-section" },
    { name: "Projects", href: "#projects-section" },
    { name: "Skills", href: "#skills-section" },
    { name: "Education", href: "#education-section" },
    { name: "Credentials", href: "#certifications-section" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Decorative Top-Edge Border Accent */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-indigo-500 to-emerald-500 z-50" />

      {/* Persistent Technical Navigation Header */}
      <header className="fixed top-1 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo / System Title */}
          <a href="#hero-section" className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="p-1 px-2.5 bg-slate-900 border border-slate-800 rounded text-xs font-mono font-bold text-teal-400 group-hover:border-teal-500/40 transition-colors">
              YC.sys
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline group-hover:text-slate-200 transition-colors">
              // AI_ML_DEPLOYMENT
            </span>
          </a>

          {/* Links Grid */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-semibold text-slate-400 hover:text-teal-400 tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Trigger */}
          <a
            href="#contact-section"
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-mono font-bold text-slate-300 rounded transition-colors"
          >
            CONNECT_PORTAL
          </a>

        </div>
      </header>

      {/* Main Content Segments */}
      <main className="relative">
        <Hero data={data} />
        <About data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Skills data={data} />
        <Education data={data} />
        <Certifications data={data} />
        <Achievements data={data} />
        <Contact data={data} />
      </main>

      {/* Interactive Customizer Panel */}
      <ResumeCustomizer data={data} onChange={handleDataChange} onReset={handleReset} />

    </div>
  );
}
