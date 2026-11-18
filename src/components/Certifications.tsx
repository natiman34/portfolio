import { useState } from 'react';
import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolioData';
import { filterCertificationsByTrack } from '@/utils/portfolio';

const CERT_TRACKS = ['All', 'Development & Security', 'IT & Systems'] as const;

const Certifications = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const visibleCerts = filterCertificationsByTrack(CERTIFICATIONS, selectedTrack);

  return (
    <section id="certifications" className="py-20 lg:py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-2">
              Certifications &amp; Training
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Verified training in development, security, and IT systems
            </h2>
            <p className="text-base text-muted-foreground">
              Completed coursework and technical certifications across frontend &amp; backend fundamentals, cybersecurity essentials, and practical IT support.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter certifications by track"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-secondary/70 border border-border self-start lg:self-auto"
          >
            {CERT_TRACKS.map((track) => {
              const isSelected = selectedTrack === track;
              return (
                <button
                  key={track}
                  type="button"
                  onClick={() => setSelectedTrack(track)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isSelected
                      ? 'bg-card text-foreground shadow-sm border border-border'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {track}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {visibleCerts.map((cert) => (
            <article
              key={cert.id}
              className="surface-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4 min-w-0"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground leading-snug break-words">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span>{cert.issuer}</span>
                    <span aria-hidden="true"> · </span>
                    <span className="text-primary">{cert.track}</span>
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-1.5 break-words">
                    {cert.skills.join(' · ')}
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0 tabular-nums pl-12 sm:pl-0 pt-0.5">
                {cert.date}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
