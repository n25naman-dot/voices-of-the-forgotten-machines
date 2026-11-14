import { motion } from 'framer-motion';
import PlanetMap from '../components/PlanetMap';
import { mapConfig } from '../config/mapConfig';
import { getArtifactsByWorld } from '../data/artifacts';

function MoonMapPage() {
  const artifacts = getArtifactsByWorld('moon');

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="mb-5 max-w-2xl">
        <p className="kicker">Moon archive · NASA Moon Trek</p>
        <h1 className="section-title">Evidence on the lunar frontier</h1>
        <p className="mt-3 reading-copy">Select a glowing marker to hear an artifact’s story, then follow its location across the lunar surface.</p>
      </section>
      <PlanetMap world="moon" config={mapConfig.moon} artifacts={artifacts} />
    </motion.main>
  );
}

export default MoonMapPage;
