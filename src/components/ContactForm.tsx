import { type ChangeEvent, type FormEvent, useMemo, useState } from 'react';
import { site } from '../data/site';
import { Button } from './Button';

const projectTypes = [
  'Business Website',
  'Web Application',
  'SaaS Product',
  'E-commerce',
  'Mobile App',
  'Other',
] as const;

const budgets = ['Under $500', '$500–$2,000', '$2,000–$5,000', '$5,000+', "Let's Discuss"] as const;

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
};

const empty: FormState = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);

  const fieldClass =
    'mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-cobalt';

  const validate = useMemo(
    () => (next: FormState) => {
      const nextErrors: Partial<FormState> = {};
      if (!next.name.trim()) nextErrors.name = 'Please enter your name.';
      if (!next.email.trim() || !emailPattern.test(next.email)) nextErrors.email = 'Enter a valid email address.';
      if (!next.projectType) nextErrors.projectType = 'Select a project type.';
      if (!next.budget) nextErrors.budget = 'Select a budget range.';
      if (next.description.trim().length < 20) nextErrors.description = 'Please share at least 20 characters.';
      return nextErrors;
    },
    [],
  );

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    setStatus('idle');

    try {
      if (site.formEndpoint) {
        const response = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error('Form service error');
      }
      setStatus('sent');
      setValues(empty);
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const update = (key: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Name
          <input className={fieldClass} name="name" autoComplete="name" value={values.name} onChange={update('name')} />
          {errors.name ? <span className="mt-1 block text-xs text-red-600">{errors.name}</span> : null}
        </label>
        <label className="block text-sm font-medium text-navy">
          Email
          <input className={fieldClass} name="email" type="email" autoComplete="email" value={values.email} onChange={update('email')} />
          {errors.email ? <span className="mt-1 block text-xs text-red-600">{errors.email}</span> : null}
        </label>
        <label className="block text-sm font-medium text-navy">
          Project Type
          <select className={fieldClass} name="projectType" value={values.projectType} onChange={update('projectType')}>
            <option value="">Select a type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? <span className="mt-1 block text-xs text-red-600">{errors.projectType}</span> : null}
        </label>
        <label className="block text-sm font-medium text-navy">
          Budget Range
          <select className={fieldClass} name="budget" value={values.budget} onChange={update('budget')}>
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget ? <span className="mt-1 block text-xs text-red-600">{errors.budget}</span> : null}
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium text-navy">
        Project Description
        <textarea
          className={`${fieldClass} min-h-[140px] resize-y`}
          name="description"
          value={values.description}
          onChange={update('description')}
        />
        {errors.description ? <span className="mt-1 block text-xs text-red-600">{errors.description}</span> : null}
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Start a Project'}
        </Button>
        {!site.formEndpoint ? (
          <p className="text-xs text-muted">
            Form is validated on this site. Connect an email service later via `VITE_FORM_ENDPOINT`.
          </p>
        ) : null}
      </div>
      {status === 'sent' ? (
        <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
          {site.formEndpoint
            ? 'Thanks. Your project details were sent.'
            : 'Thanks. Your details passed validation. Connect a form service to deliver inquiries to email.'}
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          Something went wrong sending the form. Please try again or use email directly.
        </p>
      ) : null}
    </form>
  );
}
