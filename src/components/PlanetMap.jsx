import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';

const markerIcons = {
  moon: L.divIcon({
    className: 'artifact-marker-shell',
    html: '<span class="artifact-marker artifact-marker-moon"><span></span></span>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  }),
  mars: L.divIcon({
    className: 'artifact-marker-shell',
    html: '<span class="artifact-marker artifact-marker-mars"><span></span></span>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  }),
};

function FlyToSelection({ artifact, coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (artifact && coordinates) {
      map.flyTo(coordinates, Math.max(map.getZoom(), 4), {
        animate: true,
        duration: 1.4,
        easeLinearity: 0.25,
      });
    }
  }, [artifact, coordinates, map]);

  return null;
}

function ArtifactDetails({ artifact, onClose }) {
  if (!artifact) return null;

  return (
    <AnimatePresence>
      <motion.aside
        key={artifact.id}
        initial={{ opacity: 0, y: 24, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 24, x: 12 }}
        transition={{ duration: 0.25 }}
        className="artifact-detail-panel"
        aria-label={`${artifact.name} details`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">Selected artifact</p>
            <h2 className="mt-1 text-lg font-bold text-white">{artifact.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-200 hover:bg-white/10"
            aria-label="Close artifact details"
          >
            Close
          </button>
        </div>
        <img
          src={artifact.image}
          alt={artifact.name}
          className="mt-3 h-32 w-full rounded-xl object-cover"
        />
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-400">{artifact.mission}</p>
        <p className="mt-2 text-sm leading-6 text-slate-200">{artifact.firstPersonStory}</p>
      </motion.aside>
    </AnimatePresence>
  );
}

/** A reusable planetary map. Supply its tile template, center, attribution and artifact list. */
function PlanetMap({ world, config, artifacts }) {
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [tilesLoading, setTilesLoading] = useState(true);
  const [tileError, setTileError] = useState(false);

  const items = useMemo(
    () => artifacts.map((artifact) => ({
      ...artifact,
      mapCoordinates: config.artifactCoordinates?.[artifact.id] ?? artifact.coordinates,
    })),
    [artifacts, config.artifactCoordinates],
  );

  const selectedCoordinates = selectedArtifact
    ? config.artifactCoordinates?.[selectedArtifact.id] ?? selectedArtifact.coordinates
    : null;

  return (
    <div className="planet-map relative isolate h-[70vh] min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 md:h-[80vh] md:min-h-[560px]">
      <MapContainer
        center={config.center}
        zoom={config.zoom}
        minZoom={config.minZoom}
        maxZoom={config.maxZoom}
        scrollWheelZoom
        zoomControl={false}
        className="h-full w-full"
      >
        <ZoomControl position="topright" />
        <TileLayer
          key={`${world}-${config.tileUrl}`}
          url={config.tileUrl}
          attribution={config.attribution}
          minZoom={config.minZoom}
          maxZoom={config.maxZoom}
          noWrap
          eventHandlers={{
            loading: () => { setTilesLoading(true); setTileError(false); },
            load: () => { setTilesLoading(false); setTileError(false); },
            tileerror: () => { setTilesLoading(false); setTileError(true); },
          }}
        />
        {items.map((artifact) => (
          <Marker
            key={artifact.id}
            position={artifact.mapCoordinates}
            icon={markerIcons[world]}
            eventHandlers={{ click: () => setSelectedArtifact(artifact) }}
            title={artifact.name}
            keyboard
          />
        ))}
        <FlyToSelection artifact={selectedArtifact} coordinates={selectedCoordinates} />
      </MapContainer>

      {tilesLoading && (
        <div className="map-loading" role="status" aria-live="polite">
          <span className="map-spinner" />
          <span>Loading {config.name} Trek tiles…</span>
        </div>
      )}
      {tileError && !tilesLoading && (
        <div className="map-tile-error" role="status">
          Some map tiles could not be loaded. Check your connection or the NASA Trek tile service.
        </div>
      )}
      <div className="map-attribution-note">{config.attribution}</div>
      <ArtifactDetails artifact={selectedArtifact} onClose={() => setSelectedArtifact(null)} />
    </div>
  );
}

export default PlanetMap;
