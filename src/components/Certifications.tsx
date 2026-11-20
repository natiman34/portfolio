import { useState } from 'react';
import FilterTabs from '@/components/FilterTabs';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { CERTIFICATIONS } from '@/data/portfolioData';
import { filterCertificationsByTrack } from '@/utils/portfolio';

const CERT_TRACKS = ['All', 'IT & Systems', 'Development & Security'] as const;

const Certifications = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const visibleCerts = filterCertificationsByTrack(CERTIFICATIONS, selectedTrack);

  return (
    <section id="certifications" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="Credentials"
          title="Continuous training across support, systems and security"
          description="Completed certifications and coursework covering IT help desk practice, Windows troubleshooting, networking fundamentals and front-end engineering."
        >
          <FilterTabs
            label="Filter certifications by track"
            options={CERT_TRACKS}
            value={selectedTrack}
            onChange={setSelectedTrack}
          />
        </SectionHeading>

        <Reveal className="mt-12">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Credential log
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {String(visibleCerts.length).padStart(2, '0')} entries
            </p>
          </div>

          <ul className="grid gap-x-12 md:grid-cols-2">
            {visibleCerts.map((certification) => (
              <li
                key={certification.id}
                className="flex flex-col gap-1.5 border-b border-border/70 py-4"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm font-medium leading-snug text-foreground">
                    {certification.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground">
                    {certification.date}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground">
                  {certification.issuer}
                  <span aria-hidden="true" className="px-1.5 text-border">
                    /
                  </span>
                  {certification.track}
                </p>

                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground/80">
                  {certification.skills.join(' · ')}
                </p>
              </li>
            ))}
          </ul>

          {visibleCerts.length === 0 ? (
            <p className="py-10 text-sm text-muted-foreground">
              No credentials in this track yet.
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
};

export default Certifications;
