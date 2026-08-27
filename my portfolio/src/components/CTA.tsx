import { ButtonLink } from './Button';

type CTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: string;
};

export function CTA({
  eyebrow = 'Next step',
  title,
  description,
  action = 'Start a Project',
}: CTAProps) {
  return (
    <section className="page-wrap py-16 sm:py-24">
      <div className="rounded-3xl border border-navy/10 bg-navy px-6 py-10 text-white sm:px-12 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">{eyebrow}</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-base text-white/75">{description}</p>
        <div className="mt-8">
          <ButtonLink to="/contact" className="bg-white text-navy hover:bg-paper hover:text-navy">
            {action}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
