'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/cvData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </span>
          <span className="text-muted-foreground/40 hidden sm:inline">·</span>
          <span className="font-mono-label text-xs text-steel hidden sm:inline">
            Built with Next.js & Framer Motion
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono-label text-[13px] text-muted-foreground">
            {PERSONAL_INFO.title} — {PERSONAL_INFO.location}
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
