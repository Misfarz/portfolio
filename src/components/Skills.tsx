'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import { SKILL_CATEGORIES } from '@/data/cvData';

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <Reveal>
        <h2 className="section-header">technical proficiency</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {SKILL_CATEGORIES.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.06} y={20}>
            <div className="border border-border/80 p-6 md:p-7 rounded-sm bg-card/40 hover:border-primary/50 transition-colors duration-200">
              <span className="font-mono-label text-xs text-primary tracking-wider uppercase block mb-3">
                0{i + 1} / {category.title}
              </span>
              <ul className="space-y-2 mt-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-display text-lg md:text-xl text-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
