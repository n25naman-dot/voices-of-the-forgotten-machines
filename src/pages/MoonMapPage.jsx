import { motion } from 'framer-motion';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { getArtifactsByWorld } from '../data/artifacts';

function MoonMapPage() {
  const artifacts = getArtifactsByWorld('moon');

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="mb-6 max-w-2xl">
        <p className="kicker">Moon archive</p>
        <h1 className="section-title">Evidence on the lunar frontier</h1>
      </section>

      <div className="glass-panel h-[440px] overflow-hidden p-2">
        <MapContainer center={[20, 30]} zoom={3} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {artifacts.map((artifact) => (
            <CircleMarker key={artifact.id} center={artifact.coordinates} radius={7} pathOptions={{ color: '#67e8f9', fillColor: '#67e8f9', fillOpacity: 0.8 }}>
              <Popup>
                <div className="space-y-1 text-sm text-slate-800">
                  <p className="font-semibold">{artifact.name}</p>
                  <p>{artifact.mission}</p>
                  <p>{artifact.status}</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </motion.main>
  );
}

export default MoonMapPage;
