function Timeline({ items }) {
  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div key={item.year} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300 bg-cyan-500/20" />
            {index !== items.length - 1 && <div className="mt-2 h-full w-px bg-white/10" />}
          </div>
          <div className="glass-panel w-full p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.year}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
