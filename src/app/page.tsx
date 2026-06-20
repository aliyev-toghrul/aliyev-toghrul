"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setIsDark(false);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const onEnter = () => {};
    const onLeave = () => {};
    const interactives = document.querySelectorAll("a, button, .glow-card, .skill-tag");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [activeTab]);


  const tabs = ["About", "Resume", "Portfolio", "Blog", "Contact"];

  const projects = [
    {
      title: "Physics-Informed Wellbore Flow Prediction (ConvLSTM)",
      category: "Physics-Informed Deep Learning",
      description:
        "Developed a spatial-temporal regression pipeline using PyTorch to predict wellbore flow rates from DTS fiber-optic sensor data. Processed 1GB+ (~26M lines) of high-noise data with thermodynamic feature engineering (spatial gradients dT/dz, thermal curvature, rolling statistics). Implemented a spatial-split validation strategy to ensure generalization (OOD extrapolation), achieving R² = 0.94. Architecture evolved from Conv1D-BiLSTM → ConvLSTM with AdamW + Cosine Annealing.",
      stack: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      link: "https://github.com/aliyev-toghrul/DTS-Thermodynamic-ML-Modeling",
      badge: "Research Task",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      year: "Mar – Apr 2026",
    },
    {
      title: "ZeroT — Zero Thread Shield",
      category: "AI & Cybersecurity",
      description:
        "Built an AI-native cybersecurity readiness platform for SMEs as part of the GDG Baku 'Build with AI' Hackathon — reached the Top 10 Finals. The platform combines real-time OSINT threat feeds, a hybrid AI threat scanner powered by Google Gemini 2.5, and a founder dashboard. Ingests suspicious emails and URLs, runs AI triage, and returns plain-language risk assessments with guided response playbooks and a live readiness scorecard. Validated on 100+ real malicious/benign URLs from Kaggle and opendata.az.",
      stack: ["Next.js 15", "React 18", "Gemini 2.5", "Vercel", "opendata.az", "Kaggle datasets"],
      link: "https://zerot.vercel.app",
      badge: "GDG Baku Hackathon Finalist",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      year: "Mar 2026",
    },
    {
      title: "AI Automation Hackathon — n8n & Fal.ai",
      category: "AI Automation",
      description:
        "Built an end-to-end AI automation pipeline for a hackathon challenge combining n8n workflow orchestration with Fal.ai's generative media APIs. Designed multi-step agentic flows that trigger on events, process data through LLM nodes, and produce AI-generated outputs — demonstrating production-ready automation architecture.",
      stack: ["n8n", "Fal.ai", "Make.com", "Telegram Bot API", "Python"],
      link: "https://github.com/aliyev-toghrul",
      badge: "Hackathon",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      year: "2026",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "C++*", "SQL"],
    },
    {
      category: "ML / DL",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Polars", "ConvLSTM", "Matplotlib", "Seaborn"],
    },
    {
      category: "NLP & Data",
      items: ["HuggingFace", "Firecrawl", "Jina", "BeautifulSoup", "Playwright", "Selenium", "spaCy"],
    },
    {
      category: "AI / LLMs",
      items: ["Gemini 2.5", "Claude API", "OpenAI SDK", "Groq", "Ollama", "OpenRouter", "LangChain", "Fal.ai", "FastAPI", "Prompt Engineering"],
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
      role: "AI Engineering Intern",
      org: "Microsoft — AI Innovators Summer Program",
      period: "Jun 4 – Jul 27, 2026",
      type: "Internship",
      bullets: [
        "Selected for Microsoft's AI Innovators Summer Program led by Barbaros Günay, CSA Manager at Microsoft.",
        "Building RAG (Retrieval-Augmented Generation) systems and ML pipelines; working on AI automation and machine learning model development.",
      ],
    },
    {
      role: "Computer Science Translator",
      org: "Khan Academy",
      period: "May 2026 – Present",
      type: "Volunteer",
      bullets: [
        "Translating Khan Academy's Computer Science curriculum into Azerbaijani, making CS education accessible to Azerbaijani-speaking learners globally.",
      ],
    },
    {
      role: "Section Leader",
      org: "Stanford Code in Place",
      period: "Apr – May 2026",
      type: "Part-time · Completed",
      bullets: [
        "Selected from a global applicant pool to mentor students in Stanford's introductory Python programming course.",
        "Led weekly small-group sessions, reviewed code submissions, and provided structured feedback aligned with Stanford's teaching standards.",
      ],
    },
    {
      role: "Research Contributor — ML Systems",
      org: "Baku Engineering University",
      period: "2025 – May 2026",
      type: "Research · Completed",
      bullets: [
        "Conducted two supervised literature reviews on neural network architectures and meta-heuristic multi-agent decision-making systems under lecturer Artughrul Qayibov.",
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
      detail: "Dual Degree Program · Baku Engineering University × INHA University, South Korea · GPA: 3.67",
    },
  ];

  const certs = [
    { name: "Machine Learning Specialization", issuer: "DeepLearning.AI · Andrew Ng" },
    { name: "Google AI Essentials Specialization (4-course)", issuer: "Google · Mar 2026 · ID: SQNCONMLK4MR" },
    { name: "Natural Sciences & Research", issuer: "Constructor University · May 2026" },
    { name: "Advanced Prompting", issuer: "Google" },
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
    <div className="min-h-screen t-bg t-body font-sans selection:bg-blue-900/40">
      {/* Floating theme toggle — fixed to page corner */}
      <button
        onClick={toggleTheme}
        className="theme-toggle fixed top-5 right-5 z-50"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </button>

      <main className="max-w-6xl mx-auto px-4 py-8 lg:py-20 flex flex-col lg:flex-row gap-6 items-start">

        {/* ── SIDEBAR ── */}
        <aside className="w-full lg:w-[280px] lg:sticky lg:top-10 t-surface t-border border rounded-3xl p-8 flex flex-col items-center shrink-0">
          <div className="t-icon-bg rounded-3xl p-4 mb-6 shadow-xl avatar-wrap">
            <img
              src="/me.png"
              alt="Toghrul Aliyev"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl object-cover t-surface"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-xl font-bold t-heading mb-3">Toghrul Aliyev</h1>
            <span className="px-4 py-1.5 bg-[#06061e] text-xs font-semibold text-blue-200 rounded-lg border border-blue-800">
              ML / AI Engineer
            </span>
          </div>

          <div className="w-full t-border border-t pt-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 t-icon-bg t-border border rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase t-faint font-bold tracking-wider">Email</p>
                <a href="mailto:toghrulaliyev724@gmail.com" className="text-xs t-body truncate block hover:text-cyan-400 transition-colors">
                  toghrulaliyev724@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 t-icon-bg t-border border rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15 19.79 19.79 0 0 1 1.94 6.4 2 2 0 0 1 3.91 4.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase t-faint font-bold tracking-wider">Phone</p>
                <a href="tel:+994505190132" className="text-xs t-body hover:text-cyan-400 transition-colors">+994 50 519 0132</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 t-icon-bg t-border border rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase t-faint font-bold tracking-wider">Location</p>
                <p className="text-xs t-body">Baku, Azerbaijan</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 space-y-3">
            <a
              href="https://linkedin.com/in/toghrul-aliyev-a83b3037b"
              target="_blank"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#06061e] rounded-xl text-blue-200 text-xs font-semibold hover:bg-[#0a0a2e] transition-all border border-blue-800"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>

            <div className="flex justify-center gap-4 pt-1">
              <a href="https://github.com/aliyev-toghrul" target="_blank" aria-label="GitHub" className="sidebar-icon text-slate-500 hover:text-cyan-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/toghrul-aliyev-a83b3037b" target="_blank" aria-label="LinkedIn" className="sidebar-icon text-slate-500 hover:text-cyan-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </aside>

        {/* ── CONTENT AREA ── */}
        <div className="flex-1 w-full min-w-0 flex flex-col gap-6 relative">

          {/* Desktop Nav */}
          <nav className="absolute top-0 right-0 z-10 hidden lg:flex t-surface t-border border rounded-bl-3xl rounded-tr-3xl overflow-hidden px-2 items-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-tab px-6 py-2.5 my-2 mx-1 text-sm font-medium transition-all rounded-lg ${
                  activeTab === tab ? "t-accent-t active nav-active" : "t-muted hover:t-body"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Mobile Nav */}
          <nav className="lg:hidden t-surface t-border border rounded-2xl flex justify-around p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2.5 text-xs font-medium rounded-xl transition-colors ${
                  activeTab === tab ? "t-icon-bg text-blue-300" : "text-slate-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Main Article */}
          <article className="t-bg t-border border rounded-3xl p-6 lg:p-10 min-h-[600px]">
            <header className="mb-8">
              <h2 className="text-3xl font-bold t-heading mb-2">
                {activeTab}
              </h2>
              <div className="w-10 h-1 bg-[#06061e] rounded-full"></div>
            </header>

            {/* ── ABOUT ── */}
            {activeTab === "About" && (
              <section className="fade-up">
                <p className="t-body leading-relaxed mb-10">
                  I&apos;m an AI &amp; ML engineer focused on building real systems — from deep learning models trained on scientific data to RAG pipelines and end-to-end automation workflows. Currently interning at Microsoft&apos;s AI Innovators Summer Program, where I work on retrieval-augmented generation and machine learning projects.
                  <br /><br />
                  I study Data Science at BEU × INHA University and have contributed to research on neural architectures and meta-heuristic multi-agent systems. I work across the full ML stack: data engineering, model training, LLM integration, and deployment.
                </p>

                <h3 className="text-2xl font-bold t-heading mb-6">What I&apos;m Doing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glow-card relative overflow-hidden t-card-alt t-border border rounded-2xl p-6 flex gap-4 shadow-lg before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-600 before:via-blue-400 before:to-cyan-400">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center text-blue-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><path d="M12 14v8"/><path d="m8 18 4 4 4-4"/><path d="m19 9-4 4 4 4"/><path d="m5 15 4-4-4-4"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold t-heading mb-2">ML Modeling & Training</h4>
                      <p className="text-xs t-muted leading-relaxed">
                        Designing and training deep learning models — ConvLSTM, transformers, and RAG pipelines — on real-world scientific and production datasets.
                      </p>
                    </div>
                  </div>

                  <div className="glow-card relative overflow-hidden t-card-alt t-border border rounded-2xl p-6 flex gap-4 shadow-lg before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-600 before:via-blue-400 before:to-cyan-400">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center text-blue-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold t-heading mb-2">AI Engineering</h4>
                      <p className="text-xs t-muted leading-relaxed">
                        Building reliable AI systems and pipelines — RAG architectures, LLM integrations, and model deployment — with a focus on clean, production-ready engineering.
                      </p>
                    </div>
                  </div>

                  <div className="glow-card relative overflow-hidden t-card-alt t-border border rounded-2xl p-6 flex gap-4 shadow-lg before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-600 before:via-blue-400 before:to-cyan-400">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center text-blue-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold t-heading mb-2">AI Automation</h4>
                      <p className="text-xs t-muted leading-relaxed">
                        Shipping agentic workflows and AI-native products using n8n, Make.com, Fal.ai, and Telegram bots — from hackathon prototypes to deployed tools.
                      </p>
                    </div>
                  </div>

                  <div className="glow-card relative overflow-hidden t-card-alt t-border border rounded-2xl p-6 flex gap-4 shadow-lg before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-600 before:via-blue-400 before:to-cyan-400">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center text-blue-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold t-heading mb-2">NLP & Data Pipelines</h4>
                      <p className="text-xs t-muted leading-relaxed">
                        End-to-end data pipelines: web scraping with Playwright, Selenium, and Firecrawl, data extraction, and LLM-powered summarization via native SDKs.
                      </p>
                    </div>
                  </div>

                  <div className="glow-card relative overflow-hidden t-card-alt t-border border rounded-2xl p-6 flex gap-4 shadow-lg before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-600 before:via-blue-400 before:to-cyan-400">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center text-blue-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold t-heading mb-2">Research</h4>
                      <p className="text-xs t-muted leading-relaxed">
                        Investigating ML architectures, meta-heuristic systems, and physics-informed models through supervised academic research and technical projects.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ── RESUME ── */}
            {activeTab === "Resume" && (
              <section className="fade-up space-y-10">

                <a
                  href="https://linkedin.com/in/toghrul-aliyev-a83b3037b"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#06061e] rounded-xl text-blue-200 text-sm font-semibold hover:bg-[#0a0a2e] transition-all border border-[#1e3a8a]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Full CV (PDF)
                </a>

                {/* Education */}
                <div>
                  <h3 className="text-lg font-bold t-heading mb-6 flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    Education
                  </h3>
                  <div className="relative pl-6 border-l-2 t-border space-y-6">
                    {education.map((e, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[1.45rem] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-[#1e3a8a] shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                        <p className="font-bold t-heading text-sm">{e.school}</p>
                        <p className="text-sm t-muted">{e.degree}</p>
                        <p className="text-xs text-cyan-400 mt-0.5 font-mono">{e.period}</p>
                        {e.detail && <p className="text-xs t-faint mt-1">{e.detail}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-bold t-heading mb-6 flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3ff2d7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    Experience
                  </h3>
                  <div className="relative pl-6 border-l-2 t-border space-y-8">
                    {experience.map((e, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[1.45rem] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-[#1e3a8a] shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <p className="font-bold t-heading text-sm">{e.role}</p>
                          <span className="text-[10px] px-2.5 py-1 bg-blue-600 text-white rounded-full font-semibold shadow-[0_0_8px_rgba(59,130,246,0.5)]">{e.type}</span>
                        </div>
                        <p className="text-sm t-muted">{e.org}</p>
                        <p className="text-xs text-cyan-400 mt-0.5 mb-2 font-mono">{e.period}</p>
                        <ul className="space-y-1.5">
                          {e.bullets.map((b, j) => (
                            <li key={j} className="text-xs t-muted flex gap-2 leading-relaxed">
                              <span className="text-cyan-400 shrink-0 mt-0.5">–</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-bold t-heading mb-6 flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3ff2d7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><path d="M12 14v8"/><path d="m8 18 4 4 4-4"/><path d="m19 9-4 4 4 4"/><path d="m5 15 4-4-4-4"/></svg>
                    My Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.flatMap(s => s.items).map((item, j) => (
                      <span key={j} className="skill-tag text-xs px-3 py-1.5 t-card t-border border rounded-full t-body">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] t-faint mt-3">* C++: basic level · MongoDB: familiar · SQL: basic/intermediate</p>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-lg font-bold t-heading mb-6 flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3ff2d7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                    Certifications
                  </h3>
                  <div className="relative pl-6 border-l-2 t-border space-y-6">
                    {certs.map((c, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[1.45rem] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-[#1e3a8a] shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                        <p className="text-sm font-semibold t-heading leading-tight">{c.name}</p>
                        <p className="text-xs t-faint mt-0.5">{c.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </section>
            )}

            {/* ── PORTFOLIO ── */}
            {activeTab === "Portfolio" && (
              <section className="fade-up space-y-6">
                <p className="t-muted text-sm leading-relaxed">
                  Selected projects in deep learning research and AI-native product engineering.
                </p>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2">
                  {["All", "AI & Cybersecurity", "Deep Learning", "AI Automation"].map((cat) => (
                    <button
                      key={cat}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        cat === "All"
                          ? "bg-blue-600 text-white border-indigo-600"
                          : "bg-transparent text-slate-400 border-[#1f2535] hover:border-[#1e3a8a] hover:text-blue-300"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                  {/* ZeroT — Zero Thread Shield */}
                  <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer aspect-[4/3]">
                    {/* Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1530] to-[#060b1a] flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-full h-full">
                        {/* Background glow */}
                        <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                        {/* Shield icon */}
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          <path d="m9 12 2 2 4-4" stroke="#22d3ee" strokeWidth="1.5"/>
                        </svg>
                        {/* Floating dots */}
                        <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60" />
                        <div className="absolute top-8 right-12 w-1 h-1 bg-cyan-400 rounded-full opacity-40" />
                        <div className="absolute bottom-6 left-8 w-1 h-1 bg-indigo-300 rounded-full opacity-50" />
                        <div className="absolute bottom-10 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-30" />
                        {/* Label */}
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                          <span className="text-blue-300 text-xs font-mono tracking-widest opacity-60">ZERO THREAD SHIELD</span>
                        </div>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] px-2.5 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 rounded-full font-medium backdrop-blur-sm">
                        AI &amp; Cybersecurity
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4">
                      <p className="text-white text-sm font-bold text-center">Zero Thread Shield</p>
                      <p className="text-zinc-400 text-xs text-center leading-relaxed">AI-native cybersecurity platform for SMEs — GDG Baku Hackathon Top 10 Finalist</p>
                      <div className="flex gap-2 mt-1">
                        <a
                          href="https://zerot.vercel.app"
                          target="_blank"
                          className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-xs font-medium hover:bg-blue-500/30 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                          Preview
                        </a>
                        <a
                          href="https://github.com/aliyev-toghrul/ZeroT"
                          target="_blank"
                          className="flex items-center gap-1.5 px-4 py-1.5 bg-zinc-800 border border-zinc-600 text-zinc-200 rounded-full text-xs font-medium hover:bg-zinc-700 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Coming soon placeholder */}
                  <div className="relative rounded-2xl overflow-hidden border border-dashed border-[#1f2535] aspect-[4/3] flex items-center justify-center bg-[#1a1a1a]">
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center mx-auto mb-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                      </div>
                      <p className="text-zinc-600 text-xs">More coming soon</p>
                    </div>
                  </div>

                </div>

                <div className="pt-2 text-center">
                  <a
                    href="https://github.com/aliyev-toghrul"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm t-muted hover:text-cyan-400 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    View all repositories on GitHub →
                  </a>
                </div>
              </section>
            )}

            {/* ── BLOG ── */}
            {activeTab === "Blog" && (
              <section className="fade-up space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">

                  {/* Post 1 */}
                  <div className="glow-card t-card t-border border rounded-2xl overflow-hidden group">
                    <div className="relative overflow-hidden h-44">
                      <img src="/blog-nn.png" alt="Neural Network Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] px-2.5 py-1 bg-blue-600 text-white rounded-full font-semibold backdrop-blur-sm shadow-lg shadow-blue-500/30">Deep Learning</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs t-faint mb-3">
                        <span className="flex items-center gap-1">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          May 2026
                        </span>
                        <span className="flex items-center gap-1">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          8 mins
                        </span>
                      </div>
                      <h3 className="text-sm font-bold t-heading mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                        The Neural Network Family: A Guide to Every Major Architecture
                      </h3>
                      <p className="text-xs t-muted leading-relaxed mb-4">
                        A visual deep-dive into FNN, CNN, RNN/LSTM, Transformers, GNNs, and Spiking Neural Networks — when to use each and why it matters for applied AI.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="skill-tag text-[10px] px-2.5 py-1 t-card t-border border rounded-full t-muted">Neural Networks</span>
                        <a href="https://www.linkedin.com/in/toghrul-aliyev-a83b3037b/" target="_blank" className="text-xs text-cyan-400 hover:text-white transition-colors flex items-center gap-1 font-medium">
                          Read More
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Post 2 */}
                  <div className="glow-card t-card t-border border rounded-2xl overflow-hidden group">
                    <div className="relative overflow-hidden h-44">
                      <img src="/blog-multiagent.png" alt="Decentralized AI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] px-2.5 py-1 bg-blue-600 text-white rounded-full font-semibold backdrop-blur-sm">AI Research</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs t-faint mb-3">
                        <span className="flex items-center gap-1">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          Apr 2026
                        </span>
                        <span className="flex items-center gap-1">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          10 mins
                        </span>
                      </div>
                      <h3 className="text-sm font-bold t-heading mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
                        Meta-Heuristic Based Multi-Agent Decision-Making Systems Research
                      </h3>
                      <p className="text-xs t-muted leading-relaxed mb-4">
                        Exploring decentralized AI via co-evolutionary algorithms — how distributed swarm intelligence outperforms centralized controllers by ~28x in multi-UAV path planning benchmarks.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="skill-tag text-[10px] px-2.5 py-1 t-card t-border border rounded-full t-muted">Multi-Agent Systems</span>
                        <a href="https://www.linkedin.com/in/toghrul-aliyev-a83b3037b/" target="_blank" className="text-xs text-cyan-400 hover:text-white transition-colors flex items-center gap-1 font-medium">
                          Read More
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            )}

            {/* ── CONTACT ── */}
            {activeTab === "Contact" && (
              <section className="fade-up space-y-8">
                {/* Info cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      label: "Location",
                      value: "Baku, Azerbaijan",
                      href: "#",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="glow-card flex items-center gap-3 bg-[#14171e] border border-[#1f2535] rounded-2xl p-4 hover:border-blue-500/50 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#06061e] border border-[#1e3a8a] flex items-center justify-center text-blue-300 shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase t-faint font-bold tracking-wider">{item.label}</p>
                        <p className="text-xs t-body truncate group-hover:text-cyan-400 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Contact Form */}
                <form
                  action="https://formspree.io/f/xzzblwpq"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs t-muted mb-1.5 block">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full bg-[#14171e] border border-[#1f2535] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-[#14171e] border border-[#1f2535] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 mb-1.5 block">Your Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      required
                      className="w-full bg-[#14171e] border border-[#1f2535] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#06061e] text-blue-200 font-semibold rounded-xl hover:bg-[#0a0a2e] transition-all text-sm border border-blue-800"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </button>
                </form>

              </section>
            )}

          </article>

          <footer className="text-center text-xs t-faint pb-4">
            © {new Date().getFullYear()} Toghrul Aliyev
          </footer>
        </div>

      </main>
    </div>
  );
}
