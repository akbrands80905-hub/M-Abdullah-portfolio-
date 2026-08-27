import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { Seo } from '../components/Seo';

export function NotFound() {
  return (
    <>
      <Seo title="Page not found — M Abdullah" description="The page you requested does not exist." />
      <section className="page-wrap py-24 text-center">
        <h1 className="font-display text-4xl text-navy">Page not found</h1>
        <p className="mt-4 text-muted">That URL is not part of this site.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink to="/">Home</ButtonLink>
          <Link to="/work" className="inline-flex items-center text-sm text-navy hover:text-cobalt">
            Work
          </Link>
        </div>
      </section>
    </>
  );
}
