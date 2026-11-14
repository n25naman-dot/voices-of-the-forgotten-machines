import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { worlds, artifacts } from '../data/artifacts';
import ArtifactCard from '../components/ArtifactCard';

function HomePage() {
  const featured = artifacts.slice(0, 2);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-glow sm:p-8 lg:p-12">
        <div className="absolute inset-0 bg-space-grid bg-[size:24px_24px] opacity-20" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="kicker">Mobile-first archival story</span>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Voices of the Forgotten Machines
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              A speculative field journal of abandoned NASA equipment, hearing the last transmissions from the Moon and Mars.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/choose-world"
                className="rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore the archive
              </Link>
              <Link
                to="/timeline"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View timeline
              </Link>
            </div>
          </div>

          <div className="glass-panel p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Signal log</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Last heard</p>
                <p className="mt-2 text-2xl font-bold text-white">08:47 UTC</p>
                <p className="mt-1 text-sm text-slate-300">No direct transmission registered from the lunar ridge.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Active sites</p>
                <p className="mt-2 text-2xl font-bold text-white">{featured.length + 2}</p>
                <p className="mt-1 text-sm text-slate-300">Equipment remains frozen in time across the two worlds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Worlds</p>
            <h2 className="section-title">Choose a frontier</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {worlds.map((world) => (
            <div key={world.id}>
              <Link to={world.id === 'moon' ? '/moon-map' : '/mars-map'}>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
                  <img src={world.image} alt={world.name} className="h-56 w-full object-cover" />
                  <div className="space-y-3 p-5">
                    <h3 className="text-2xl font-bold text-white">{world.name}</h3>
                    <p className="text-sm text-slate-300">{world.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Featured artifacts</p>
            <h2 className="section-title">Recent transmissions</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default HomePage;
