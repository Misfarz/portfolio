'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PROJECTS } from '@/data/cvData';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <Reveal>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="section-header !mb-0">featured architecture & systems</h2>
          <span className="font-mono-label text-xs text-steel hidden sm:inline-block">
            04 engineering projects
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col divide-y divide-border mt-8">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08} y={24}>
            <div className="py-10 group transition-colors duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Index Number */}
                <div className="lg:col-span-1">
                  <span
                    className={`font-mono-label text-base text-steel pt-1 inline-block ${
                      i === 1 ? 'lg:rotate-[-6deg]' : i === 3 ? 'lg:rotate-[4deg]' : ''
                    }`}
                  >
                    {project.number}
                  </span>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-[34px] text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono-label text-xs text-primary mt-1 tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed mt-2">
                    {project.summary}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-3 space-y-2 border-l-2 border-border/80 pl-4">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-muted-foreground leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Links */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-1 lg:pl-4">
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

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-4">
                    <a
                      href={project.github || 'https://github.com/misfaryusaf'}
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
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
