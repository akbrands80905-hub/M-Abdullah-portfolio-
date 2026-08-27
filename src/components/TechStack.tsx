import { skills } from '../data/site';

export function TechStack({ compact = false }: { compact?: boolean }) {
  const entries = Object.entries(skills);

  return (
    <div className={`grid gap-4 ${compact ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
      {entries.map(([group, items]) => (
        <div key={group} className="rounded-2xl border border-line bg-white p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">{group}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item} className="rounded-full bg-paper px-3 py-1 text-sm text-navy">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
