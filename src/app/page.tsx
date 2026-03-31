import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-100 dark:border-zinc-900 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tighter transition-opacity hover:opacity-70 cursor-default">
            T. ALIYEV
          </span>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#projects" className="hover:text-zinc-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-zinc-500 transition-colors">Skills</a>
            <a href="https://github.com/aliyev-toghrul" target="_blank" className="hover:text-zinc-500 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/toghrul-aliyev-a83b3037b" target="_blank" className="hover:text-zinc-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
            <img src="/avatar.jpg" alt="Toghrul Aliyev" className="w-28 h-28 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-800 shrink-0" />
            <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Engineering the <span className="text-zinc-400">Intelligence Layer</span> of the Web.
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              I am Toghrul Aliyev, a Data Analytics & AI/ML engineer focused on building 
              autonomous systems, LLM agent architectures, and production-grade AI platforms. 
              Currently bridging the gap between raw data and actionable intelligence at BEU-INHA.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="h-12 px-8 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                View Systems
              </a>
              <a 
                href="mailto:toghrulaliyev724@gmail.com" 
                className="h-12 px-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                Contact
              </a>
            </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12">Featured Deployments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* ZeroT */}
            <div className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 relative">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-tighter opacity-20 group-hover:opacity-40 transition-opacity">
                  ZeroT
                </div>
                {/* Image Placeholder or actual if available */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white dark:bg-black px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                    Deployed @ Hackathon
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                ZeroT Cybersecurity
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                An AI-native cybersecurity platform for SMEs. Features real-time OSINT threat feeds, 
                hybrid intelligence scanning via Gemini Pro, and an autonomous security assistant.
              </p>
              <div className="flex gap-3">
                <span className="text-xs font-medium text-zinc-500">Next.js 15</span>
                <span className="text-xs font-medium text-zinc-500">TypeScript</span>
                <span className="text-xs font-medium text-zinc-500">Gemini AI</span>
                <span className="text-xs font-medium text-zinc-500">Vercel</span>
              </div>
            </div>

            {/* Gist */}
            <div className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 relative">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-tighter opacity-20 group-hover:opacity-40 transition-opacity">
                  Gist
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white dark:bg-black px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                    AI Content Intelligence
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                Gist
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                AI-powered content intelligence tool. Scrapes any URL via Firecrawl, 
                runs Gemini Flash analysis, and extracts tone, entities, and insights 
                through a FastAPI microservice and Opal pipeline.
              </p>
              <div className="flex gap-3">
                <span className="text-xs font-medium text-zinc-500">FastAPI</span>
                <span className="text-xs font-medium text-zinc-500">Gemini</span>
                <span className="text-xs font-medium text-zinc-500">Firecrawl</span>
                <span className="text-xs font-medium text-zinc-500">Docker</span>
              </div>
            </div>

            {/* Coursera Solver */}
            <div className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 relative">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-tighter opacity-20 group-hover:opacity-40 transition-opacity">
                  Automation
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white dark:bg-black px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                    Internal Tooling
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                Coursera Auto-Solver
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                A production-grade automation script using Playwright and GPT-4o-mini to solve 
                and submit Coursera quizzes autonomously with high accuracy.
              </p>
              <div className="flex gap-3">
                <span className="text-xs font-medium text-zinc-500">Python</span>
                <span className="text-xs font-medium text-zinc-500">Playwright</span>
                <span className="text-xs font-medium text-zinc-500">OpenAI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 scroll-mt-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12">Technical Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Intelligence</h4>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>NLP & LLM Agents</li>
                <li>Predictive Modeling</li>
                <li>RAG Architecture</li>
                <li>PyTorch / TensorFlow</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Engineering</h4>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>Python (FastAPI/Flask)</li>
                <li>TypeScript (Next.js)</li>
                <li>PostgreSQL / Redis</li>
                <li>Vector Databases</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">DevOps</h4>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>Linux (Arch Power User)</li>
                <li>Docker & CI/CD</li>
                <li>Bash Scripting</li>
                <li>Cloud Deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Mathematics</h4>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>Calculus II</li>
                <li>Matrix Algebra</li>
                <li>Statistical Analysis</li>
                <li>Optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 border-t border-zinc-100 dark:border-zinc-900 text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-6">
          <p>© 2026 Toghrul Aliyev. Built with Next.js 16 & Tailwind 4.</p>
          <div className="flex gap-6">
            <a href="https://github.com/aliyev-toghrul" className="hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/toghrul-aliyev-a83b3037b" className="hover:text-zinc-900 dark:hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
