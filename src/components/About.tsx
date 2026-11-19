import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { EDUCATION, PROFILE } from '@/data/portfolioData';

const AT_A_GLANCE = [
  { label: 'Based in', value: PROFILE.location },
  { label: 'Focus', value: 'Full-stack web development & IT support' },
  { label: 'Currently', value: 'IT Support Technician at SNV' },
  { label: 'Education', value: `${EDUCATION.degree}, ${EDUCATION.institution}` },
  { label: 'Open to', value: 'Remote projects, contract work & full-time roles' },
];

const About = () => {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Technical support discipline, applied to building software"
          description="A Computer Science graduate working across end-user IT support and modern web application development — two disciplines that reinforce each other."
        />

        <Reveal className="mt-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 space-y-5 lg:col-span-7">
              {PROFILE.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base leading-relaxed sm:text-[17px] ${
                    index === 0 ? 'text-foreground/90' : 'text-muted-foreground'
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Working principles
                </span>
                {['Root-cause first', 'Clear communication', 'Maintainable delivery'].map(
                  (principle) => (
                    <span key={principle} className="text-sm text-foreground/90">
                      {principle}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="panel p-6">
                <p className="eyebrow">At a glance</p>
                <dl className="mt-4">
                  {AT_A_GLANCE.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[84px_1fr] gap-3 border-t border-border/70 py-3 first:border-t-0 first:pt-0 last:pb-0"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="text-sm leading-snug text-foreground/90">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
