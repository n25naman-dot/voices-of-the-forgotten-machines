import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Choose World', to: '/choose-world' },
    { label: 'Moon', to: '/moon-map' },
    { label: 'Mars', to: '/mars-map' },
    { label: 'Timeline', to: '/timeline' },
    { label: 'About', to: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-bold text-cyan-200">
            V
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">archive</p>
            <h1 className="text-sm font-semibold text-white">Forgotten Machines</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/choose-world"
          className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-500/20"
        >
          Begin
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
