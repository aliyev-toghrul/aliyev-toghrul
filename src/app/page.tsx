"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Resume", "Portfolio", "Blog", "Contact"];

  const projects = [
    {
      title: "DTS Thermodynamic ML Modeling",
      category: "Physics-Informed Deep Learning",
      description:
        "Built a physics-informed ConvLSTM to predict wellbore flow-rate from DTS sensor data; processed 1GB+ (~26M lines) of high-noise data with thermodynamic feature engineering (spatial gradients dT/dz, thermal curvature, rolling statistics). Achieved R² = 0.94 on held-out test data; evolved architecture Conv1D-BiLSTM → ConvLSTM with AdamW + Cosine Annealing and strict 80/20 spatial depth split to validate OOD extrapolation.",
      stack: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      link: "https://github.com/aliyev-toghrul/DTS-Thermodynamic-ML-Modeling",
      badge: "Research Task",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      year: "2026",
    },
    {
      title: "ZeroT — AI-Native Cybersecurity Platform",
      category: "AI & Cybersecurity",
      description:
        "AI-powered cybersecurity readiness platform built for SMEs without in-house security teams. GDG Baku Build with AI Hackathon Top 10 Finalist. Ingests suspicious emails and URLs, runs AI triage via Gemini 2.5, and returns plain-language risk assessments with guided response playbooks and a live readiness scorecard. Validated on 100+ real malicious/benign URLs sourced from Kaggle and opendata.az. Built as a full Next.js 15 + React 18 monorepo with Gemini 2.5 backend and Vercel deployment.",
      stack: ["Next.js 15", "React 18", "Gemini 2.5", "Vercel", "opendata.az", "Kaggle datasets"],
      link: "https://zerot.vercel.app",
      badge: "Hackathon Finalist",
      badgeColor: "bg-[#3ff2d7]/20 text-[#3ff2d7] border-[#3ff2d7]/30",
      year: "2025",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "C++*", "SQL"],
    },
    {
      category: "ML / DL",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "ConvLSTM", "Matplotlib", "Seaborn"],
    },
    {
      category: "NLP & Data",
      items: ["HuggingFace", "Firecrawl", "BeautifulSoup", "Playwright"],
    },
    {
      category: "AI / LLMs",
      items: ["Gemini 2.5", "Claude API", "OpenAI SDK", "Groq", "Ollama", "OpenRouter", "Fal.ai", "FastAPI", "Prompt Engineering"],
    },
    {
      category: "Automation",
      items: ["n8n", "Make.com", "Telegram Bot API"],
    },
    {
      category: "Databases",
      items: ["Supabase", "Firebase", "MongoDB*"],
    },
    {
      category: "Dev Tools",
      items: ["Jupyter", "Google Colab", "Streamlit", "GitHub Actions"],
    },
    {
      category: "Infra",
      items: ["Docker", "Git", "Arch Linux", "Vercel", "DigitalOcean"],
    },
  ];

  const experience = [
    {
      role: "Section Leader",
      org: "Stanford Code in Place",
      period: "2026 – Present",
      type: "Part-time",
      bullets: [
        "Selected to mentor 17 students globally; running weekly Python sessions and guiding learners through Stanford's introductory CS curriculum.",
        "Reviews code submissions and provides structured feedback aligned with Stanford's teaching standards.",
      ],
    },
    {
      role: "Research Contributor — ML Systems",
      org: "Baku Engineering University",
      period: "2025 – Present",
      type: "Research",
      bullets: [
        "Conducted two supervised literature reviews on neural network architectures and meta-heuristic multi-agent decision-making systems under Artughrul Qayibov.",
        "Synthesized findings from peer-reviewed papers and published both summaries on LinkedIn, reaching practitioners in the AI/ML community.",
      ],
    },
    {
      role: "Open-Source Contributor",
      org: "github.com/aliyev-toghrul",
      period: "2024 – Present",
      type: "Open Source",
      bullets: [
        "Maintains public project portfolio across deep learning, AI cybersecurity, and NLP automation domains.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.S. Data Science & Analytics",
      school: "BEU × INHA University — Dual Degree",
      period: "2025 – 2029",
      detail: "Dual Degree Program · Baku Engineering University × INHA University, South Korea",
    },
  ];

  const certs = [
    { name: "Machine Learning Specialization", issuer: "DeepLearning.AI · Andrew Ng" },
    { name: "Prompting Essentials (4-course)", issuer: "Google" },
    { name: "Data Analysis with Python", issuer: "IBM / Coursera" },
    { name: "SQL Basic", issuer: "HackerRank" },
  ];

  const blogPosts = [
    {
      title: "The Neural Network Family: A Guide to Every Major Architecture",
      date: "2025",
      tag: "Deep Learning",
      description:
        "Covers seven architectures — ANN, FNN, CNN, RNN/LSTM/GRU, Transformer, GNN, SNN — each mapped to its structural rationale and the class of problem it solves best. Supervised by Artughrul Qayibov, BEU.",
      link: "https://www.linkedin.com/posts/toghrul-aliyev17_ai-artificialintelligence-neuralnetworks-activity-7448614843626029057-fyPu",
    },
    {
      title: "Meta-Heuristic Based Multi-Agent Decision-Making Systems",
      date: "2025",
      tag: "Research",
      description:
        "Synthesis of peer-reviewed literature on meta-heuristic optimization applied to multi-agent architectures — exploring the gap between theoretical models and production deployment.",
      link: "https://www.linkedin.com/posts/toghrul-aliyev17_multiagentsystems-swarmintelligence-metaheuristics-activity-7444503086833807360-5cin",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-zinc-300 font-sans selection:bg-[#3ff2d7]/30">
      <main className="max-w-6xl mx-auto px-4 py-8 lg:py-20 flex flex-col lg:flex-row gap-6 items-start">

        {/* ── SIDEBAR ── */}
        <aside className="w-full lg:w-[280px] lg:sticky lg:top-10 bg-[#242424] border border-zinc-800 rounded-3xl p-8 flex flex-col items-center shrink-0">
          <div className="bg-[#333333] rounded-3xl p-4 mb-6 shadow-xl">
            <img
              src="https://avatars.githubusercontent.com/u/205692610?v=4"
              alt="Toghrul Aliyev"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl object-cover bg-[#242424]"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-white mb-3">Toghrul Aliyev</h1>
            <span className="px-4 py-1.5 bg-[#333333] text-xs font-medium text-white rounded-lg">
              ML / AI Engineer
            </span>
          </div>

          <div className="w-full border-t border-zinc-800 pt-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#242424] border border-zinc-800 rounded-xl flex items-center justify-center text-[#3ff2d7] shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Email</p>
                <a href="mailto:toghrulaliyev724@gmail.com" className="text-xs text-zinc-200 truncate block hover:text-[#3ff2d7] transition-colors">
                  toghrulaliyev724@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#242424] border border-zinc-800 rounded-xl flex items-center justify-center text-[#3ff2d7] shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15 19.79 19.79 0 0 1 1.94 6.4 2 2 0 0 1 3.91 4.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Phone</p>
                <a href="tel:+994505190132" className="text-xs text-zinc-200 hover:text-[#3ff2d7] transition-colors">+994 50 519 0132</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#242424] border border-zinc-800 rounded-xl flex items-center justify-center text-[#3ff2d7] shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Location</p>
                <p className="text-xs text-zinc-200">Baku, Azerbaijan</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 space-y-3">
            <a
              href="https://linkedin.com/in/toghrul-aliyev-a83b3037b"
              target="_blank"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#3ff2d7]/10 border border-[#3ff2d7]/30 rounded-xl text-[#3ff2d7] text-xs font-medium hover:bg-[#3ff2d7]/20 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>

            <div className="flex justify-center gap-4 pt-1">
              <a href="https://github.com/aliyev-toghrul" target="_blank" aria-label="GitHub" className="text-zinc-400 hover:text-[#3ff2d7] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/toghrul-aliyev-a83b3037b" target="_blank" aria-label="LinkedIn" className="text-zinc-400 hover:text-[#3ff2d7] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </aside>

        {/* ── CONTENT AREA ── */}
        <div className="flex-1 w-full min-w-0 flex flex-col gap-6 relative">

          {/* Desktop Nav */}
          <nav className="absolute top-0 right-0 z-10 hidden lg:flex bg-[#282829] border border-zinc-800 rounded-bl-3xl rounded-tr-3xl overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-5 text-sm font-medium transition-colors ${
                  activeTab === tab ? "text-[#3ff2d7]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Mobile Nav */}
          <nav className="lg:hidden bg-[#242424] border border-zinc-800 rounded-2xl flex justify-around p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2.5 text-xs font-medium rounded-xl transition-colors ${
                  activeTab === tab ? "bg-[#333333] text-[#3ff2d7]" : "text-zinc-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Main Article */}
          <article className="bg-[#242424] border border-zinc-800 rounded-3xl p-6 lg:p-10 min-h-[600px]">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                {activeTab}
                <div className="absolute -bottom-1 left-0 w-10 h-1 bg-[#3ff2d7] rounded-full"></div>
              </h2>
            </header>

            {/* ── ABOUT ── */}
            {activeTab === "About" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-zinc-400 leading-relaxed mb-10">
                  Freshman at BEU–INHA University who builds first and learns by doing. Trained a
                  physics-informed ConvLSTM to R² = 0.94 on 1GB+ of real sensor data, shipped an AI
                  cybersecurity platform to a national hackathon final, and runs production-grade n8n
                  automation workflows. Comfortable across the full experiment
                  cycle: data wrangling, model iteration, metric analysis, and deployment. Seeking a
                  remote ML/AI internship or part-time role where I can contribute and grow fast.
                </p>

                <h3 className="text-2xl font-bold text-white mb-6">What I&apos;m Doing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><path d="M12 14v8"/><path d="m8 18 4 4 4-4"/><path d="m19 9-4 4 4 4"/><path d="m5 15 4-4-4-4"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Deep Learning & ML</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Building physics-informed neural networks and ConvLSTM architectures on real-world scientific datasets.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">NLP Pipelines</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        End-to-end data pipelines: web scraping with Playwright and Firecrawl, data extraction, and LLM-powered summarization via native SDKs.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">AI-Native Products</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Shipping AI-powered products with Gemini 2.5, Fal.ai, and Telegram bots — from hackathon prototypes to production. Automating workflows with n8n and Make.com.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Teaching & Research</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Stanford Code in Place Section Leader. Research on Meta-Heuristic Multi-Agent Decision-Making Systems at BEU.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ── RESUME ── */}
            {activeTab === "Resume" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-10">

                <a
                  href="https://linkedin.com/in/toghrul-aliyev-a83b3037b"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#3ff2d7]/10 border border-[#3ff2d7]/30 rounded-xl text-[#3ff2d7] text-sm font-medium hover:bg-[#3ff2d7]/20 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Full CV (PDF)
                </a>

                {/* Education */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#3ff2d7]/20 flex items-center justify-center text-xs">🎓</span>
                    Education
                  </h3>
                  {education.map((e, i) => (
                    <div key={i} className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6">
                      <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                        <p className="font-bold text-white">{e.degree}</p>
                        <span className="text-xs text-zinc-500 font-mono">{e.period}</span>
                      </div>
                      <p className="text-sm text-[#3ff2d7] mb-1">{e.school}</p>
                      <p className="text-xs text-zinc-500">{e.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#3ff2d7]/20 flex items-center justify-center text-xs">💼</span>
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {experience.map((e, i) => (
                      <div key={i} className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6">
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                          <p className="font-bold text-white">{e.role}</p>
                          <span className="text-xs text-zinc-500 font-mono">{e.period}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <p className="text-sm text-[#3ff2d7]">{e.org}</p>
                          <span className="text-[10px] px-2 py-0.5 bg-[#333] rounded-full text-zinc-400">{e.type}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {e.bullets.map((b, j) => (
                            <li key={j} className="text-xs text-zinc-400 flex gap-2">
                              <span className="text-[#3ff2d7] mt-0.5 shrink-0">·</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#3ff2d7]/20 flex items-center justify-center text-xs">⚙️</span>
                    Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((s, i) => (
                      <div key={i} className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-5">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">{s.category}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.items.map((item, j) => (
                            <span key={j} className="text-xs px-2.5 py-1 bg-[#2a2a2a] border border-zinc-700 rounded-lg text-zinc-300">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-zinc-600 mt-3">* C++: basic level · MongoDB: familiar · SQL: basic/intermediate</p>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#3ff2d7]/20 flex items-center justify-center text-xs">📜</span>
                    Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {certs.map((c, i) => (
                      <div key={i} className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-5 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#3ff2d7]/10 border border-[#3ff2d7]/20 flex items-center justify-center text-[#3ff2d7] shrink-0 mt-0.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white leading-tight">{c.name}</p>
                          <p className="text-xs text-zinc-500 mt-0.5">{c.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </section>
            )}

            {/* ── PORTFOLIO ── */}
            {activeTab === "Portfolio" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Selected projects in deep learning research and AI-native product engineering.
                </p>
                <div className="space-y-6">
                  {projects.map((p, i) => (
                    <div key={i} className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors group">
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#3ff2d7] transition-colors">
                              {p.title}
                            </h3>
                            <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${p.badgeColor}`}>
                              {p.badge}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500">{p.category} · {p.year}</p>
                        </div>
                        <a
                          href={p.link}
                          target="_blank"
                          className="flex items-center gap-1.5 text-xs text-[#3ff2d7] hover:text-white transition-colors shrink-0"
                        >
                          View Project
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </a>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{p.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((tech, j) => (
                          <span key={j} className="text-[11px] px-2.5 py-1 bg-[#2a2a2a] border border-zinc-700/60 rounded-lg text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-center">
                  <a
                    href="https://github.com/aliyev-toghrul"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#3ff2d7] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    View all repositories on GitHub →
                  </a>
                </div>
              </section>
            )}

            {/* ── BLOG ── */}
            {activeTab === "Blog" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Writing about deep learning, NLP engineering, and AI products.
                </p>
                <div className="space-y-4">
                  {blogPosts.map((post, i) => (
                    <a
                      key={i}
                      href={post.link}
                      target="_blank"
                      className="block bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-[10px] px-2.5 py-1 bg-[#3ff2d7]/10 border border-[#3ff2d7]/20 text-[#3ff2d7] rounded-full font-medium">
                            {post.tag}
                          </span>
                          <span className="text-xs text-zinc-600 font-mono">{post.date}</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 group-hover:text-[#3ff2d7] transition-colors shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#3ff2d7] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{post.description}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* ── CONTACT ── */}
            {activeTab === "Contact" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Open to remote ML/AI engineering and research internship opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Email",
                      value: "toghrulaliyev724@gmail.com",
                      href: "mailto:toghrulaliyev724@gmail.com",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                    },
                    {
                      label: "Phone",
                      value: "+994 50 519 0132",
                      href: "tel:+994505190132",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15 19.79 19.79 0 0 1 1.94 6.4 2 2 0 0 1 3.91 4.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                    },
                    {
                      label: "LinkedIn",
                      value: "linkedin.com/in/toghrul-aliyev-a83b3037b",
                      href: "https://linkedin.com/in/toghrul-aliyev-a83b3037b",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                    },
                    {
                      label: "GitHub",
                      value: "github.com/aliyev-toghrul",
                      href: "https://github.com/aliyev-toghrul",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="flex items-center gap-4 bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-5 hover:border-[#3ff2d7]/40 hover:bg-[#3ff2d7]/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#3ff2d7]/10 border border-[#3ff2d7]/20 flex items-center justify-center text-[#3ff2d7] shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">{item.label}</p>
                        <p className="text-sm text-zinc-200 truncate group-hover:text-[#3ff2d7] transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

              </section>
            )}

          </article>

          <footer className="text-center text-xs text-zinc-600 pb-4">
            © {new Date().getFullYear()} Toghrul Aliyev
          </footer>
        </div>

      </main>
    </div>
  );
}
