import { type Project } from '../data/projects';

export function ProjectVisual({ project, className = '' }: { project: Project; className?: string }) {
  if (project.thumbnailKind === 'hotel') {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-navy ${className}`}
        role="img"
        aria-label={project.thumbnailLabel}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),linear-gradient(160deg,#0B1F3A,#163A6B)]" />
        <div className="relative grid h-full min-h-[180px] place-items-center p-6">
          <div className="w-full max-w-[220px] border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
            <div className="h-16 border border-white/25 bg-white/10" />
            <div className="mt-3 flex gap-2">
              <div className="h-8 flex-1 border border-white/20" />
              <div className="h-8 flex-1 border border-white/20" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/70">Availability</p>
            <p className="mt-1 font-display text-lg text-white">Room hold</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white ${className}`}
      role="img"
      aria-label={project.thumbnailLabel}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#EEF3FF,#F6F4EF)]" />
      <div className="relative flex h-full min-h-[180px] items-center justify-center p-6">
        <div className="w-full max-w-[240px] rounded-xl border border-navy/10 bg-white p-4 shadow-card">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-muted">
            <span>Proposal</span>
            <span className="rounded-full bg-cobalt/10 px-2 py-0.5 text-cobalt">Draft</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-line">
            <div className="h-2 w-2/3 rounded-full bg-cobalt" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-5/6 rounded bg-line" />
            <div className="h-2 w-4/6 rounded bg-line" />
            <div className="h-2 w-3/6 rounded bg-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
