import { motion } from 'framer-motion';

function StorySection({ heading, body, theme = 'cyan' }) {
  const accentStyles = {
    cyan: 'border-cyan-400/30 bg-cyan-500/5 text-cyan-100',
    rose: 'border-rose-400/30 bg-rose-500/5 text-rose-100',
    violet: 'border-violet-400/30 bg-violet-500/5 text-violet-100',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl border p-5 sm:p-6 ${accentStyles[theme]}`}
    >
      <h3 className="mb-3 text-xl font-semibold text-white">{heading}</h3>
      <p className="reading-copy text-slate-200">{body}</p>
    </motion.section>
  );
}

export default StorySection;
