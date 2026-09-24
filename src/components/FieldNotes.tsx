'use client';

import React from 'react';
import Reveal from '@/components/Reveal';

export default function FieldNotes() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-28">
      <Reveal>
        <h2 className="section-header">in the field</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="md:col-span-7" y={24}>
          <figure>
            <div className="overflow-hidden bg-foreground rounded-xs border border-border">
              <img
                src="/images/workshop.jpg"
                alt="Architecture design session detailing microservices, SQS, and distributed event queues"
                className="w-full h-full object-cover opacity-95 hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
            <figcaption className="flex items-baseline gap-4 mt-4">
              <span className="font-mono-label text-xs text-primary font-semibold">fig. 01</span>
              <span className="text-sm text-muted-foreground">
                Distributed architecture planning & asynchronous AWS SQS queue design — Studio
              </span>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal className="md:col-span-5 md:mt-24" delay={0.15} y={32}>
          <figure className="md:rotate-[1.5deg]">
            <div className="overflow-hidden bg-foreground border border-border rounded-xs shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)]">
              <img
                src="/images/planning.jpg"
                alt="System design notebook with cache strategy and low-latency code workspace"
                className="w-full h-full object-cover opacity-95 hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
            <figcaption className="flex items-baseline gap-4 mt-4">
              <span className="font-mono-label text-xs text-primary font-semibold">fig. 02</span>
              <span className="text-sm text-muted-foreground">
                Cache strategy, WebRTC signaling workflows, and low-latency code execution
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
