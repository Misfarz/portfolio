'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PERSONAL_INFO } from '@/data/cvData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

function useKolkataTime() {
  const [now, setNow] = useState('');

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Kolkata',
      timeZoneName: 'short',
    });

    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return now;
}

export default function Connect() {
  const time = useKolkataTime();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="connect" className="section-container">
      <Reveal>
        <h2 className="section-header">connect</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Get in touch */}
        <Reveal>
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-8">Get in touch</h3>
          <div className="flex flex-col gap-2">
            {/* Email */}
            <div className="flex items-center justify-between py-3 border-b border-border min-h-[48px] group">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 flex-1"
              >
                <span className="text-primary">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="text-base text-muted-foreground group-hover:text-primary transition-colors duration-200">
                  {PERSONAL_INFO.email}
                </span>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-1.5 text-steel hover:text-primary transition-colors cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between py-3 border-b border-border min-h-[48px] group">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 flex-1"
              >
                <span className="text-primary">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="text-base text-muted-foreground group-hover:text-primary transition-colors duration-200">
                  {PERSONAL_INFO.phone}
                </span>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 text-steel hover:text-primary transition-colors cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-3 group border-b border-border min-h-[48px]"
            >
              <span className="text-primary">
                <LinkedinIcon className="w-5 h-5" />
              </span>
              <span className="text-base text-muted-foreground group-hover:text-primary transition-colors duration-200">
                linkedin.com/in/misfaryusaf
              </span>
              <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-3 group border-b border-border min-h-[48px]"
            >
              <span className="text-primary">
                <GithubIcon className="w-5 h-5" />
              </span>
              <span className="text-base text-muted-foreground group-hover:text-primary transition-colors duration-200">
                github.com/misfaryusaf
              </span>
              <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
            </a>
          </div>
        </Reveal>

        {/* Right Column: Location & Availability */}
        <Reveal delay={0.15}>
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-8">Location</h3>
          <div className="flex items-center gap-4 py-3 border-b border-border min-h-[48px]">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-base text-muted-foreground">{PERSONAL_INFO.location}</span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <p className="font-mono-label text-[13px] text-muted-foreground">
              {time || 'IST (India Standard Time)'}
            </p>
          </div>

          <p className="text-base text-muted-foreground mt-6 leading-relaxed max-w-sm">
            {PERSONAL_INFO.status}. Ready to contribute immediately to innovative engineering teams.
          </p>

          <div className="mt-8 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Engineering%20Opportunity`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-mono-label text-xs tracking-wider uppercase font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              <span>Initiate Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
