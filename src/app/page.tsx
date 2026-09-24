'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import ProfilePanel from '@/components/ProfilePanel';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';
import CvModal from '@/components/CvModal';

export default function HomePage() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header onOpenCvModal={() => setIsCvModalOpen(true)} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Education />
        <ProfilePanel />
        <Connect />
      </main>
      <Footer />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
