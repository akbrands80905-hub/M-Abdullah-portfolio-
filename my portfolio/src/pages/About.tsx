import { useState } from 'react';
import { Button, ButtonAnchor } from '../components/Button';
import { Seo } from '../components/Seo';
import { TechStack } from '../components/TechStack';
import { site } from '../data/site';

export function About() {
  const [cvNote, setCvNote] = useState(false);

  const onCvClick = () => {
    if (site.cvUrl) {
      window.open(site.cvUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setCvNote(true);
  };

  return (
    <>
      <Seo
        title="About — M Abdullah"
        description="About M Abdullah, a frontend and full-stack developer focused on clean UI, maintainable code, and practical business software."
      />
      <section className="page-wrap py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">{site.role}</p>
        <h1 className="mt-3 font-display text-4xl text-navy sm:text-5xl">{site.name}</h1>
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
          <p>
            I build modern websites and full-stack applications for businesses and products — interfaces people can use, and the APIs, data, and payments that sit behind them when the product needs it.
          </p>
          <p>
            The work is straightforward: understand the problem, keep the UI clear, write code that can be changed later, and ship a responsive experience. I would rather a focused MVP that holds together than a large surface area that does not.
          </p>
          <p>
            Recent projects include a boutique hotel booking product (frontend in progress, booking engine planned) and QuoteFlow AI, a subscription SaaS with authentication, a dashboard, PostgreSQL/Prisma, and Stripe billing architecture.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" onClick={onCvClick}>
            Download CV
          </Button>
          <ButtonAnchor href={site.github} variant="secondary" target="_blank" rel="noreferrer">
            GitHub
          </ButtonAnchor>
        </div>
        {cvNote ? (
          <p className="mt-4 max-w-xl text-sm text-muted" role="status">
            No CV file is attached yet. Add a PDF to <code className="text-navy">public/cv.pdf</code> and set <code className="text-navy">site.cvUrl</code> in <code className="text-navy">src/data/site.ts</code>.
          </p>
        ) : null}

        <div className="mt-14">
          <h2 className="font-display text-3xl text-navy">Skills</h2>
          <p className="mt-3 max-w-xl text-muted">Shown because they appear in current work, not as a generic keyword list.</p>
          <div className="mt-8">
            <TechStack />
          </div>
        </div>
      </section>
    </>
  );
}
