'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PROJECTS, PERSONAL_INFO } from '@/data/cvData';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="section-container">
      <Reveal>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="section-header !mb-0">featured architecture & systems</h2>
          <span className="font-mono-label text-xs text-steel hidden sm:inline-block">
            04 engineering projects
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col mt-8">
        {PROJECTS.map((project, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <Reveal key={project.id} delay={i * 0.08} y={20}>
              <div className="border-b border-border transition-colors duration-200">
                {/* Header row with toggle button */}
                <button
                  onClick={() => toggleExpand(i)}
                  className="w-full text-left py-7 group flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1 flex items-start sm:items-center gap-5 md:gap-8">
                    {/* Index number */}
                    <span
                      className={`font-mono-label text-base text-steel pt-1 sm:pt-0 inline-block shrink-0 transition-transform ${
                        i === 1 ? 'md:rotate-[-6deg]' : i === 3 ? 'md:rotate-[4deg]' : ''
                      }`}
                    >
                      {project.number}
                    </span>

                    {/* Title & subtitle info */}
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm flex-wrap">
                        <span className="font-mono-label text-[13px] text-primary font-medium">
                          {project.subtitle}
                        </span>
                        <span className="text-muted-foreground/40 hidden md:inline">·</span>
                        <span className="font-mono-label text-xs text-muted-foreground hidden md:inline">
                          {project.tools.slice(0, 3).join(', ')}...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown toggle matching the background section */}
                  <div className="flex items-center gap-3 pt-1 sm:pt-0 shrink-0">
                    <span className="font-mono-label text-xs text-muted-foreground hidden md:inline-block group-hover:text-primary transition-colors">
                      {isExpanded ? 'collapse' : 'view details'}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                      }`}
                    />
                  </div>
                </button>

                {/* Expandable detailed architecture section */}
                {isExpanded && (
                  <div className="pb-8 pt-1 pl-1 md:pl-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    {/* Left details: summary + bullets */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                      <p className="text-base text-foreground/90 leading-relaxed font-sans">
                        {project.summary}
                      </p>

                      <ul className="space-y-3 mt-1">
                        {project.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right column: Tech stack badges & View Source */}
                    <div className="lg:col-span-4 flex flex-col justify-between pt-2 border-t lg:border-t-0 lg:border-l lg:border-border/80 lg:pl-6">
                      <div>
                        <span className="font-mono-label text-xs text-steel uppercase tracking-wider block mb-3">
                          Technology Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="font-mono-label text-xs px-2.5 py-1 rounded bg-muted/70 text-foreground/80 border border-border"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/60">
                        <a
                          href={project.github || PERSONAL_INFO.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono-label text-xs text-primary hover:underline group/link"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Source</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
