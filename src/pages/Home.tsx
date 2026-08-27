import { featuredProjects } from '../data/projects';
import { site } from '../data/site';
import { ButtonLink } from '../components/Button';
import { CTA } from '../components/CTA';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { TechStack } from '../components/TechStack';

export function Home() {
  return (
    <>
      <Seo
        title="M Abdullah — Frontend & Full-Stack Developer"
        description="Freelance frontend and full-stack developer building modern websites, web applications, and SaaS products with React, Node.js, and Stripe."
      />
      <Hero />
      <section className="page-wrap pb-8">
        <Reveal>
          <div className="rounded-3xl border border-line bg-white px-6 py-8 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">Proof of work</p>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-navy">{site.proof}</p>
          </div>
        </Reveal>
      </section>
      <section className="page-wrap py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="Flagship case studies. Smaller experiments stay on GitHub."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink to="/work" variant="secondary">
            See all featured work
          </ButtonLink>
        </div>
      </section>
      <section className="page-wrap py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Stack"
            title="Tools I actually use"
            description="Technologies from current projects — not a padded list."
          />
        </Reveal>
        <div className="mt-8">
          <TechStack compact />
        </div>
      </section>
      <section className="page-wrap py-12 sm:py-16">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-line bg-white p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">About</p>
              <h2 className="mt-3 font-display text-3xl text-navy">Clean interfaces, practical systems.</h2>
              <p className="mt-4 max-w-xl text-muted">
                I build for businesses that need a website or application that looks considered and works under real constraints — budgets, timelines, and features that have to hold together.
              </p>
              <div className="mt-6">
                <ButtonLink to="/about" variant="secondary">
                  More about me
                </ButtonLink>
              </div>
            </div>
            <ul className="grid content-center gap-3 text-sm text-navy">
              <li className="rounded-2xl bg-paper px-4 py-3">Responsive UI with a clear hierarchy</li>
              <li className="rounded-2xl bg-paper px-4 py-3">Maintainable React and TypeScript</li>
              <li className="rounded-2xl bg-paper px-4 py-3">APIs, auth, and payment flows when the product needs them</li>
            </ul>
          </div>
        </Reveal>
      </section>
      <CTA
        title="Have a project in mind?"
        description="Share the problem, the timeline, and the budget range. I’ll come back with a clear next step — not a vague pitch."
      />
    </>
  );
}
