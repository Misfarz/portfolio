'use client';

import React, { useEffect, useState } from 'react';
import { Asterisk, Moon, Sun, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenCvModal: () => void;
}

export default function Header({ onOpenCvModal }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    }

    const handleScroll = () => {
      const sections = ['about', 'background', 'projects', 'services', 'skills', 'education', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navItems = [
    { label: 'about', href: '#about' },
    { label: 'background', href: '#background' },
    { label: 'projects', href: '#projects' },
    { label: 'services', href: '#services' },
    { label: 'skills', href: '#skills' },
    { label: 'connect', href: '#connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-10 flex items-start justify-between">
        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 pointer-events-auto bg-background/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-border shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`font-mono-label text-[13px] transition-colors duration-200 relative ${
                  isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action buttons + Vertical Brand Mark */}
        <div className="flex items-center gap-4 ml-auto pointer-events-auto">
          {/* Quick CV Button */}
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur-md font-mono-label text-xs text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-xs"
            title="View Full CV / Resume"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span className="hidden sm:inline">View</span> CV
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border bg-background/80 backdrop-blur-md text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-xs"
            title={isDark ? 'Switch to Editorial Warm mode' : 'Switch to Dark Charcoal mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Vertical brand mark matching Havana Reyes */}
          <div className="flex items-start gap-4 pl-2">
            <Asterisk className="w-6 h-6 md:w-7 md:h-7 text-primary mt-0.5 animate-spin-slow" strokeWidth={2.5} />
            <span
              className="font-mono-label text-[13px] text-primary tracking-[0.3em] select-none font-medium"
              style={{ writingMode: 'vertical-rl' }}
            >
              misfar
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
