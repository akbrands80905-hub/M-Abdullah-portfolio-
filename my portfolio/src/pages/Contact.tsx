import { ContactForm } from '../components/ContactForm';
import { Seo } from '../components/Seo';
import { site } from '../data/site';

export function Contact() {
  return (
    <>
      <Seo
        title="Contact — M Abdullah"
        description="Start a web development project with M Abdullah. Share your project type, budget, and goals."
      />
      <section className="page-wrap grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">Contact</p>
          <h1 className="mt-3 font-display text-4xl text-navy sm:text-5xl">Start a project</h1>
          <p className="mt-4 max-w-md text-muted">
            Tell me what you need built, the budget range, and any timeline. I use this to understand scope — not to send a canned reply.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <span className="font-medium text-navy">GitHub</span>
              <br />
              <a className="text-cobalt hover:underline" href={site.github} target="_blank" rel="noreferrer">
                {site.github.replace('https://', '')}
              </a>
            </li>
            <li>
              <span className="font-medium text-navy">LinkedIn</span>
              <br />
              {site.linkedin ? (
                <a className="text-cobalt hover:underline" href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              ) : (
                <span className="text-muted">Add your LinkedIn URL in src/data/site.ts</span>
              )}
            </li>
            <li>
              <span className="font-medium text-navy">Email</span>
              <br />
              {site.email ? (
                <a className="text-cobalt hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              ) : (
                <span className="text-muted">Add your email in src/data/site.ts</span>
              )}
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
