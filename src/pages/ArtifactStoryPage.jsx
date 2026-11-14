import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { getArtifactById } from '../data/artifacts';
import StorySection from '../components/StorySection';
import RoverNarrator from '../components/RoverNarrator';

function ArtifactStoryPage() {
  const { artifactId } = useParams();
  const artifact = getArtifactById(artifactId);

  if (!artifact) {
    return (
      <main className="page-shell">
        <div className="glass-panel p-8 text-center">
          <h1 className="text-2xl font-bold text-white">Artifact not found</h1>
          <Link to="/choose-world" className="mt-4 inline-block text-cyan-200">Return to worlds</Link>
        </div>
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70">
        <img src={artifact.image} alt={artifact.name} className="h-64 w-full object-cover sm:h-80" />
        <div className="space-y-4 p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">{artifact.world}</span>
            <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">{artifact.mission}</span>
          </div>
          <h1 className="text-3xl font-black text-white sm:text-4xl">{artifact.name}</h1>
          <p className="reading-copy max-w-3xl text-slate-300">{artifact.summary}</p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <RoverNarrator text={artifact.firstPersonStory} accent={artifact.world === 'moon' ? 'cyan' : 'rose'} />
          <StorySection heading="Scientific legacy" body={artifact.scientificLegacy} theme={artifact.world === 'moon' ? 'violet' : 'rose'} />
        </div>

        <aside className="glass-panel space-y-4 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mission status</p>
            <p className="mt-2 text-xl font-semibold text-white">{artifact.status}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Date</p>
            <p className="mt-2 text-lg text-white">{artifact.date}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Coordinates</p>
            <p className="mt-2 text-lg text-white">{artifact.coordinates.join(', ')}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Sources</p>
            <ul className="mt-2 space-y-2">
              {artifact.sourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.url} target="_blank" rel="noreferrer" className="text-cyan-200 hover:text-cyan-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </motion.main>
  );
}

export default ArtifactStoryPage;
