import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import { ButtonAnchor, ButtonLink } from './Button';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="page-wrap grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
      <div>
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {site.name}
        </motion.p>
        <motion.h1
          className="mt-3 font-display text-[2.1rem] leading-tight text-navy sm:text-5xl lg:text-[3.4rem]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {site.headline}
        </motion.h1>
        <p className="mt-2 text-base font-medium text-navy/80">{site.role}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{site.supporting}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/contact">Start a Project</ButtonLink>
          <ButtonLink to="/work" variant="secondary">
            View My Work
          </ButtonLink>
          <ButtonAnchor href={site.github} variant="ghost" target="_blank" rel="noreferrer">
            GitHub
          </ButtonAnchor>
        </div>
      </div>
      <motion.div
        className="rounded-3xl border border-line bg-white p-6 shadow-card"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">Capability</p>
        <p className="mt-4 font-display text-2xl text-navy">{site.proof}</p>
        <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-paper p-4">
            <dt className="text-muted">Focus</dt>
            <dd className="mt-1 font-medium text-navy">Web &amp; product builds</dd>
          </div>
          <div className="rounded-2xl bg-paper p-4">
            <dt className="text-muted">Stack</dt>
            <dd className="mt-1 font-medium text-navy">React · Node · Stripe</dd>
          </div>
          <div className="rounded-2xl bg-paper p-4">
            <dt className="text-muted">Engagement</dt>
            <dd className="mt-1 font-medium text-navy">Freelance projects</dd>
          </div>
          <div className="rounded-2xl bg-paper p-4">
            <dt className="text-muted">Status</dt>
            <dd className="mt-1 font-medium text-navy">Available for work</dd>
          </div>
        </dl>
      </motion.div>
    </section>
  );
}
