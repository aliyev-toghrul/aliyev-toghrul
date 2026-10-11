import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toghrul Aliyev | ML & AI Engineer Portfolio",
  description:
    "Portfolio of Toghrul Aliyev, an AI & Machine Learning Engineer specializing in RAG architectures, LLM integrations, deep learning modeling, and AI automation.",
  keywords: [
    "Toghrul Aliyev",
    "Toghrul Aliyev AI",
    "Toğrul Əliyev",
    "AI Engineer Azerbaijan",
    "Machine Learning Engineer Baku",
    "RAG architecture",
    "LLM integration",
    "Deep Learning",
    "Python",
    "Data Science",
  ],
  verification: {
    google: "cXfOMfwGfzvsJSe3vGvVVbp3qScxp93gvES4B3npl6A",
  },
  openGraph: {
    title: "Toghrul Aliyev | ML & AI Engineer Portfolio",
    description:
      "AI & Machine Learning Engineer specializing in RAG architectures, LLM integrations, and AI automation.",
    url: "https://toghrulaliyev.vercel.app",
    siteName: "Toghrul Aliyev Portfolio",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Toghrul Aliyev",
  alternateName: "Toğrul Əliyev",
  jobTitle: "AI & Machine Learning Engineer",
  url: "https://toghrulaliyev.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/toghrul-aliyev17",
    "https://github.com/aliyev-toghrul",
    "https://www.kaggle.com/toghrulaliyev",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Baku Engineering University - Inha University",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models (LLM)",
    "Retrieval-Augmented Generation (RAG)",
    "Deep Learning",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
