import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="kicker">About the project</p>
          <h1 className="section-title">Listening to the machines after the mission</h1>
          <p className="mt-4 reading-copy">
            Voices of the Forgotten Machines is a storytelling project that imagines abandoned exploration equipment as living archives — not simply relics, but witnesses to science, failure, ambition, and wonder.
          </p>
        </div>

        <div className="glass-panel p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-white">Mission values</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>• Humanize the tools left behind on distant worlds.</li>
            <li>• Emphasize the story of scientific persistence over spectacle.</li>
            <li>• Make the archive readable, mobile-first, and immersive.</li>
          </ul>
        </div>
      </section>
    </motion.main>
  );
}

export default AboutPage;
