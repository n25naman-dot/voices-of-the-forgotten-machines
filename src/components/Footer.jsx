import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>Voices of the Forgotten Machines</p>
        <div className="flex gap-4">
          <Link to="/choose-world" className="hover:text-cyan-200">Choose World</Link>
          <Link to="/timeline" className="hover:text-cyan-200">Timeline</Link>
          <Link to="/about" className="hover:text-cyan-200">About</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
