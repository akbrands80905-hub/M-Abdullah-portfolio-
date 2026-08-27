import { Link } from 'react-router-dom';
import { type Project } from '../data/projects';
import { ButtonAnchor, ButtonLink } from './Button';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <ProjectVisual project={project} className="h-48" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-navy/10 bg-paper px-3 py-1 text-xs font-medium text-navy">
            {project.status}
          </span>
          <span className="text-xs text-muted">{project.role}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl text-navy">
          <Link to={`/projects/${project.slug}`} className="hover:text-cobalt">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((item) => (
            <li key={item} className="rounded-full bg-paper px-2.5 py-1 text-xs text-navy">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink to={`/projects/${project.slug}`}>View Case Study</ButtonLink>
          {project.liveUrl ? (
            <ButtonAnchor href={project.liveUrl} variant="secondary" target="_blank" rel="noreferrer">
              Live Demo
            </ButtonAnchor>
          ) : (
            <span className="inline-flex items-center text-sm text-muted">Live Demo Coming Soon</span>
          )}
          {project.githubUrl ? (
            <ButtonAnchor href={project.githubUrl} variant="ghost" target="_blank" rel="noreferrer">
              GitHub
            </ButtonAnchor>
          ) : null}
        </div>
      </div>
    </article>
  );
}
