'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/data/cvData';

export default function Services() {
  return (
    <section id="services" className="section-container">
      <Reveal>
        <h2 className="section-header">capabilities & core focus</h2>
      </Reveal>
      <div className="flex flex-col">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08} y={20}>
            <div className="border-b border-border py-8 grid grid-cols-[auto_1fr] gap-6 md:gap-12 items-start group">
              <span
                className={`font-mono-label text-sm text-steel pt-2 transition-transform duration-300 ${
                  i === 2 ? 'md:translate-y-3 md:rotate-[-6deg] inline-block' : ''
                }`}
              >
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
