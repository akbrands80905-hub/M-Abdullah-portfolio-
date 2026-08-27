import { Link } from 'react-router-dom';
import { navLinks, site } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="page-wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-navy">{site.shortName}</p>
          <p className="mt-3 font-display text-2xl text-navy">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">Quick links</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted hover:text-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href={site.github} className="hover:text-navy" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              {site.linkedin ? (
                <a href={site.linkedin} className="hover:text-navy" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              ) : (
                <span>LinkedIn — add profile URL in site data</span>
              )}
            </li>
            <li>
              {site.email ? (
                <a href={`mailto:${site.email}`} className="hover:text-navy">
                  {site.email}
                </a>
              ) : (
                <span>Email — add address in site data</span>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="page-wrap py-5 text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
