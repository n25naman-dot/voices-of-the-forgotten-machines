import { motion } from 'framer-motion';
import WorldCard from '../components/WorldCard';
import { worlds } from '../data/artifacts';

function ChooseWorldPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="mb-8 max-w-2xl">
        <p className="kicker">Choose your world</p>
        <h1 className="section-title">Where does the story begin?</h1>
        <p className="mt-4 reading-copy">
          The archive keeps two theaters of silence: one under the lunar dawn and one beneath the dusty horizon of Mars.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {worlds.map((world) => (
          <WorldCard key={world.id} world={world} />
        ))}
      </div>
    </motion.main>
  );
}

export default ChooseWorldPage;
