'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/cvData';

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-8 pt-36 md:pt-40 pb-20 max-w-7xl mx-auto relative"
    >
      {/* Top subtitle metadata */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-label bg-primary/10 text-primary border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Full Stack Software Engineer
        </span>
        <span className="hidden sm:inline-block font-mono-label text-xs text-steel">
          React · TypeScript · Node.js · AWS
        </span>
      </motion.div>

      {/* Massive display hero word matching Havana reference */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="font-display font-semibold text-primary text-7xl md:text-8xl lg:text-[130px] leading-none tracking-tight mb-16 md:mb-20 md:-ml-2 select-none"
      >
        systems
      </motion.h1>

      {/* Editorial narrative text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        className="max-w-4xl"
      >
        <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug text-foreground mb-8">
          I builds web applications, RESTful APIs, and cloud-based architectures — watching ambitious products struggle not for lack of ideas, but for lack of reliable serverless pipelines, clean database schemas, and real-time resilience.
        </p>
        <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug text-primary">
          engineers the robust foundations modern software demands.
        </p>
      </motion.div>

      {/* Bottom bar & anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-14 flex items-center gap-6"
      >
        <a
          href="#background"
          className="inline-flex items-center gap-2 font-mono-label text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <span>Explore engineering timeline</span>
          <ArrowDown className="w-3.5 h-3.5 text-primary animate-bounce" />
        </a>
      </motion.div>

      {/* Slanted stamp matching Havana reference */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="font-mono-label text-xs text-steel tracking-[0.25em] absolute bottom-10 right-8 rotate-[-4deg] select-none"
      >
        {PERSONAL_INFO.established}
      </motion.span>
    </section>
  );
}
