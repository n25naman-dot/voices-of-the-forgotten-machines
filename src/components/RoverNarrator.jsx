import { motion } from 'framer-motion';

function RoverNarrator({ text, accent = 'cyan' }) {
  const accentColors = {
    cyan: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-100',
    rose: 'border-rose-400/30 bg-rose-500/10 text-rose-100',
    violet: 'border-violet-400/30 bg-violet-500/10 text-violet-100',
  };

  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl border p-5 sm:p-6 ${accentColors[accent]}`}
    >
      <p className="text-lg leading-8 text-white">“{text}”</p>
      <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-300">Rover narrator</footer>
    </motion.blockquote>
  );
}

export default RoverNarrator;
