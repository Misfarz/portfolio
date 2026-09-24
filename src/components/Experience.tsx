'use client';

import React, { useState } from 'react';
import { ArrowUpRight, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { EXPERIENCE } from '@/data/cvData';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="background" className="section-container">
      <Reveal>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="section-header !mb-0">background</h2>
          <span className="font-mono-label text-xs text-steel hidden sm:inline-block">
            03 chronological roles
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col mt-8">
        {EXPERIENCE.map((job, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <Reveal key={job.company} delay={i * 0.08} y={20}>
              <div className="border-b border-border transition-colors duration-200">
                <button
                  onClick={() => toggleExpand(i)}
                  className="w-full text-left py-7 group flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-200">
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono-label text-xs text-steel opacity-80">
                        <MapPin className="w-3 h-3 text-steel" />
                        {job.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm flex-wrap">
                      <span className="font-mono-label text-[13px] text-primary font-medium">
                        {job.years}
                      </span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-muted-foreground text-sm font-medium">{job.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1 sm:pt-0">
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

                {/* Expandable detailed accomplishments */}
                {isExpanded && (
                  <div className="pb-8 pt-1 pl-1 md:pl-2">
                    <ul className="space-y-3 max-w-3xl">
                      {job.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
