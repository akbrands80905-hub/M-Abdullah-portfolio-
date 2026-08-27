import { Navigate, useParams } from 'react-router-dom';
import { CaseStudy } from '../components/CaseStudy';
import { Seo } from '../components/Seo';
import { getProjectBySlug } from '../data/projects';

export function CaseStudyPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <Seo
        title={`${project.title} — Case Study | M Abdullah`}
        description={project.tagline}
      />
      <CaseStudy project={project} />
    </>
  );
}
