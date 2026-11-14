import { Link } from 'react-router-dom';

function WorldCard({ world }) {
  return (
    <Link
      to={world.id === 'moon' ? '/moon-map' : '/mars-map'}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-glow"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${world.accent}`} />
      <img src={world.image} alt={world.name} className="h-56 w-full object-cover opacity-75" />
      <div className="relative space-y-3 p-5">
        <span className="kicker">World</span>
        <div>
          <h3 className="text-2xl font-bold text-white">{world.name}</h3>
          <p className="mt-1 text-sm text-slate-200">{world.subtitle}</p>
        </div>
        <p className="text-sm leading-6 text-slate-200">{world.description}</p>
        <div className="inline-flex items-center text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100">
          Explore the archive →
        </div>
      </div>
    </Link>
  );
}

export default WorldCard;
