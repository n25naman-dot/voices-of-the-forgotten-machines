import { motion } from 'framer-motion';
import PlanetMap from '../components/PlanetMap';
import { mapConfig } from '../config/mapConfig';
import { getArtifactsByWorld } from '../data/artifacts';

function MarsMapPage() {
  const artifacts = getArtifactsByWorld('mars');

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="mb-5 max-w-2xl">
        <p className="kicker">Mars archive · NASA Mars Trek</p>
        <h1 className="section-title">Machines under a rust-red sky</h1>
        <p className="mt-3 reading-copy">Select a glowing marker to hear an artifact’s story, then fly to its place on the Martian surface.</p>
      </section>
      <PlanetMap world="mars" config={mapConfig.mars} artifacts={artifacts} />
    </motion.main>
  );
}

export default MarsMapPage;
