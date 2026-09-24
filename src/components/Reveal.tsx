'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  duration = 0.6,
  className = '',
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
