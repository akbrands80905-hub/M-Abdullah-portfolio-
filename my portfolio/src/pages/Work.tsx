import { featuredProjects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';

export function Work() {
  return (
    <>
      <Seo
        title="Work — M Abdullah"
        description="Selected web development work by M Abdullah, including a hotel booking system and QuoteFlow AI, a subscription SaaS product."
      />
      <section className="page-wrap py-14 sm:py-20">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          description="Two flagship case studies. A third can be added to the project data without changing this layout. Weather and task-management experiments stay on GitHub."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
          <article className="flex min-h-[280px] flex-col justify-between rounded-3xl border border-dashed border-navy/20 bg-white/60 p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">Next flagship</p>
              <h3 className="mt-3 font-display text-2xl text-navy">Slot reserved</h3>
              <p className="mt-3 max-w-sm text-sm text-muted">
                Add another project in the data file and it will appear here with the same card and case-study template.
              </p>
            </div>
            <p className="text-sm text-muted">Coming later</p>
          </article>
        </div>
      </section>
    </>
  );
}
