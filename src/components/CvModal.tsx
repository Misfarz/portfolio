'use client';

import React from 'react';
import { X, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, EDUCATION, SKILL_CATEGORIES } from '@/data/cvData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-background text-foreground border border-border rounded-lg shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/60 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-mono-label text-xs tracking-wider uppercase text-primary font-semibold">
              Curriculum Vitae
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-mono-label text-xs text-muted-foreground">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-primary text-primary-foreground font-mono-label text-xs font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 space-y-8 bg-card text-foreground font-sans">
          {/* Header */}
          <div className="text-center border-b border-border pb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs font-mono-label text-muted-foreground">
              <span>{PERSONAL_INFO.phone}</span>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>|</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs font-mono-label text-primary">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Linkedin
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Github
              </a>
              <span>|</span>
              <a href="#about" onClick={onClose} className="hover:underline">
                Portfolio Website
              </a>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="font-mono-label text-xs font-bold uppercase tracking-widest text-primary border-b border-border/80 pb-1 mb-2">
              Objective
            </h2>
            <p className="text-sm text-foreground/90 leading-relaxed">
              Full Stack Software Engineer with experience building web applications, RESTful APIs, and cloud-based systems using React, TypeScript, Node.js, and AWS. Experienced in database design, payment integrations, real-time communication, and scalable application architecture, with a focus on clean, maintainable code.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-mono-label text-xs font-bold uppercase tracking-widest text-primary border-b border-border/80 pb-1 mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE.map((exp) => (
                <div key={exp.company} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <span className="text-base font-semibold text-foreground">
                      • {exp.company}
                    </span>
                    <span className="font-mono-label text-xs text-muted-foreground font-medium">
                      {exp.years}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between text-xs text-muted-foreground italic">
                    <span>{exp.role}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground/85 pt-1 pl-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed pl-1">
                        <span className="-ml-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono-label text-xs font-bold uppercase tracking-widest text-primary border-b border-border/80 pb-1 mb-3">
              Education
            </h2>
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="text-base font-semibold text-foreground">
                    • {edu.school}
                  </span>
                  <span className="font-mono-label text-xs text-muted-foreground font-medium">
                    {edu.years}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between text-xs text-muted-foreground">
                  <span className="italic">{edu.degree}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="font-mono-label text-xs text-primary font-medium pt-0.5">
                  {edu.gpa}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono-label text-xs font-bold uppercase tracking-widest text-primary border-b border-border/80 pb-1 mb-4">
              Projects
            </h2>
            <div className="space-y-6">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-semibold text-foreground">
                      • {proj.title}
                    </span>
                  </div>
                  <div className="text-xs font-mono-label text-muted-foreground">
                    <span className="font-semibold text-foreground/80">Tools: </span>
                    {proj.tools.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground/85 pt-1 pl-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed pl-1">
                        <span className="-ml-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-mono-label text-xs font-bold uppercase tracking-widest text-primary border-b border-border/80 pb-1 mb-3">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-foreground/90">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="text-xs leading-relaxed">
                  <span className="font-semibold text-foreground">• {cat.title}: </span>
                  <span className="text-muted-foreground">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
