'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import { EDUCATION } from '@/data/cvData';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <Reveal>
        <h2 className="section-header">education</h2>
      </Reveal>
      <div className="flex flex-col gap-10">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1} y={20}>
            <div className="border-b border-border pb-8">
              <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                <span className="font-display text-2xl md:text-3xl text-foreground">
                  {e.degree}
                </span>
                <span className="font-mono-label text-[13px] text-primary font-medium">
                  {e.years}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground/90">{e.school}</span>
                <span>·</span>
                <span>{e.location}</span>
                <span>·</span>
                <span className="font-mono-label text-xs text-primary font-semibold">
                  {e.gpa}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
