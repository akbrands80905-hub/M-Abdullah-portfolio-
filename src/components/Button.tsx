import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

type Shared = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const styles: Record<Variant, string> = {
  primary:
    'bg-cobalt text-white shadow-sm hover:bg-navy hover:-translate-y-0.5 disabled:translate-y-0 disabled:bg-muted',
  secondary:
    'border border-navy/15 bg-white text-navy hover:border-navy/40 hover:bg-white/80',
  ghost: 'text-navy hover:text-cobalt',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt disabled:cursor-not-allowed disabled:opacity-60';

export function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: Shared & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...props
}: Shared & LinkProps) {
  return (
    <Link className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  children,
  className = '',
  variant = 'primary',
  ...props
}: Shared & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
