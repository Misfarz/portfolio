'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import { PERSONAL_INFO } from '@/data/cvData';

export default function ProfilePanel() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Reveal className="aspect-square lg:aspect-auto bg-foreground overflow-hidden" y={0}>
          <img
            src="/images/portrait.jpg"
            alt="Mohammed Misfar Yusaf C, Full Stack Software Engineer"
            className="w-full h-full object-cover opacity-95 grayscale-15 hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
            loading="lazy"
          />
        </Reveal>
        <Reveal
          delay={0.15}
          className="bg-primary px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center items-center text-center"
        >
          <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-3">
            {PERSONAL_INFO.name}
          </h2>
          <p className="font-mono-label text-xs tracking-[0.3em] text-primary-foreground/80 uppercase mb-8">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-base md:text-lg text-primary-foreground/95 leading-relaxed max-w-lg mb-8">
            Misfar is a software engineer specializing in scalable full-stack applications, distributed cloud systems, and real-time communication architectures. He collaborates with engineering teams to engineer resilient RESTful APIs, high-performance web applications, and seamless real-time user experiences.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#connect"
              className="px-6 py-2.5 rounded-full bg-primary-foreground text-primary font-mono-label text-xs tracking-wider uppercase font-semibold hover:bg-primary-foreground/90 transition-all duration-200 cursor-pointer shadow-sm"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
