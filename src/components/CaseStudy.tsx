import { type Project } from '../data/projects';
import { ButtonAnchor, ButtonLink } from './Button';
import { CTA } from './CTA';
import { ProjectVisual } from './ProjectVisual';

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      <header className="page-wrap grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">Case study</p>
          <h1 className="mt-3 font-display text-4xl text-navy sm:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-navy/10 bg-white px-3 py-1 text-xs font-medium">{project.status}</span>
            <span className="rounded-full bg-paper px-3 py-1 text-xs text-navy">{project.role}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <ButtonAnchor href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo
              </ButtonAnchor>
            ) : (
              <span className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm text-muted">
                Live Demo Coming Soon
              </span>
            )}
            {project.githubUrl ? (
              <ButtonAnchor href={project.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
                GitHub
              </ButtonAnchor>
            ) : (
              <span className="inline-flex items-center text-sm text-muted">GitHub link coming soon</span>
            )}
            <ButtonLink to="/work" variant="ghost">
              All work
            </ButtonLink>
          </div>
        </div>
        <ProjectVisual project={project} className="min-h-[240px]" />
      </header>

      <div className="page-wrap space-y-10 pb-8">
        <p className="max-w-3xl text-lg leading-relaxed text-navy/90">{project.summary}</p>
        {project.sections.map((section) => (
          <section key={section.heading} className="max-w-3xl border-t border-line pt-8">
            <h2 className="font-display text-2xl text-navy">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <section className="max-w-3xl border-t border-line pt-8">
          <h2 className="font-display text-2xl text-navy">Technology</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li key={item} className="rounded-full bg-white px-3 py-1 text-sm text-navy ring-1 ring-line">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="max-w-3xl border-t border-line pt-8">
          <h2 className="font-display text-2xl text-navy">Live Demo</h2>
          <p className="mt-3 text-muted">
            {project.liveUrl ? (
              <a className="text-cobalt underline" href={project.liveUrl} target="_blank" rel="noreferrer">
                {project.liveUrl}
              </a>
            ) : (
              'No public live demo is listed yet.'
            )}
          </p>
        </section>
        <section className="max-w-3xl border-t border-line pt-8">
          <h2 className="font-display text-2xl text-navy">GitHub</h2>
          <p className="mt-3 text-muted">
            {project.githubUrl ? (
              <a className="text-cobalt underline" href={project.githubUrl} target="_blank" rel="noreferrer">
                {project.githubUrl}
              </a>
            ) : (
              'Repository URL will be added when the project is published.'
            )}
          </p>
        </section>
      </div>

      <CTA
        eyebrow="Like what you see?"
        title="Let's discuss your project."
        description="If this approach fits what you need — a modern web product with a clear scope — start a conversation."
      />
    </article>
  );
}
