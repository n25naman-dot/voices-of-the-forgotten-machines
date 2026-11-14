import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChooseWorldPage from './pages/ChooseWorldPage';
import MoonMapPage from './pages/MoonMapPage';
import MarsMapPage from './pages/MarsMapPage';
import ArtifactStoryPage from './pages/ArtifactStoryPage';
import TimelinePage from './pages/TimelinePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choose-world" element={<ChooseWorldPage />} />
          <Route path="/moon-map" element={<MoonMapPage />} />
          <Route path="/mars-map" element={<MarsMapPage />} />
          <Route path="/artifact/:artifactId" element={<ArtifactStoryPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
