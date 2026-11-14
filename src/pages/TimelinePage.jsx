import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import { timelineEntries } from '../data/artifacts';

function TimelinePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="mb-8 max-w-2xl">
        <p className="kicker">Chronicle</p>
        <h1 className="section-title">A timeline of silent progress</h1>
        <p className="mt-4 reading-copy">
          These archival moments trace how our machines, once active and optimistic, became quiet witnesses of distant exploration.
        </p>
      </section>

      <div className="glass-panel p-5 sm:p-6">
        <Timeline items={timelineEntries} />
      </div>
    </motion.main>
  );
}

export default TimelinePage;
