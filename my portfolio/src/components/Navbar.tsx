import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, site } from '../data/site';
import { ButtonLink } from './Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="page-wrap flex h-16 items-center justify-between sm:h-[4.25rem]">
        <Link to="/" className="text-sm font-semibold tracking-[0.18em] text-navy">
          {site.shortName}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'font-semibold text-navy' : 'text-muted hover:text-navy'}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink to="/contact">Start a Project</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 h-0.5 w-4 bg-navy transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-navy transition ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-0.5 w-4 bg-navy transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="page-wrap flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-base ${isActive ? 'bg-white font-semibold text-navy' : 'text-muted'}`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
              <ButtonLink to="/contact" className="mt-2 w-full">
                Start a Project
              </ButtonLink>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
