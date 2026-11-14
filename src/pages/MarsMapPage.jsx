import { motion } from 'framer-motion';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { getArtifactsByWorld } from '../data/artifacts';

function MarsMapPage() {
  const artifacts = getArtifactsByWorld('mars');

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="page-shell"
    >
      <section className="mb-6 max-w-2xl">
        <p className="kicker">Mars archive</p>
        <h1 className="section-title">Machines under a rust-red sky</h1>
      </section>

      <div className="glass-panel h-[440px] overflow-hidden p-2">
        <MapContainer center={[10, 0]} zoom={2} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {artifacts.map((artifact) => (
            <CircleMarker key={artifact.id} center={artifact.coordinates} radius={7} pathOptions={{ color: '#fb7185', fillColor: '#fb7185', fillOpacity: 0.8 }}>
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

export default MarsMapPage;
