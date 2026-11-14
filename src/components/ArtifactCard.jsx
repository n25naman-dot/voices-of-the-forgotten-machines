import { Link } from 'react-router-dom';

function ArtifactCard({ artifact }) {
  return (
    <Link
      to={`/artifact/${artifact.id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-cyan-400/30"
    >
      <img src={artifact.image} alt={artifact.name} className="h-52 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
            {artifact.status}
          </span>
          <span className="text-xs text-slate-400">{artifact.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-white">{artifact.name}</h3>
        <p className="text-sm leading-6 text-slate-300">{artifact.summary}</p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{artifact.mission}</span>
          <span className="text-cyan-200">Read story →</span>
        </div>
      </div>
    </Link>
  );
}

export default ArtifactCard;
