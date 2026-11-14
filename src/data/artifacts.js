export const worlds = [
  {
    id: 'moon',
    name: 'Moon',
    subtitle: 'Silent regolith, fractured history',
    description: 'Explore the cold remains of lunar probes, abandoned experiments, and long-lost tracks beneath the stark surface.',
    accent: 'from-cyan-500/20 to-indigo-500/10',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'mars',
    name: 'Mars',
    subtitle: 'Dust, ruins, and distant memory',
    description: 'Follow the last transmissions from robotic geologists and solar-powered scouts left to watch the red frontier.',
    accent: 'from-rose-500/20 to-orange-400/10',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
];

export const artifacts = [
  {
    id: 'lunokhod-2-station',
    name: 'Lunokhod 2 Relay Station',
    world: 'moon',
    mission: 'Luna 21 / Lunokhod 2',
    coordinates: [28.3498, 30.7867],
    date: '1973-01-16',
    status: 'Dormant',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
    summary: 'A weathered relay and antenna mast still marks the trail where a lunar rover once mapped the terrain in silence.',
    firstPersonStory:
      'I used to hum with the rhythm of a moonlit mission. Now the regolith settles over my panels like memory, and the last signal I sent never reached anyone waiting on Earth. Every sunrise on the Moon feels like a final scan of a world that forgot my name.',
    scientificLegacy:
      'The station and its associated instruments helped capture the first detailed observations of lunar terrain and dust behavior, refining future rover and landing site planning.',
    sourceLinks: [
      { label: 'Lunar Reconnaissance Orbiter', url: 'https://www.nasa.gov/' },
      { label: 'Moon Missions Archive', url: 'https://example.com' },
    ],
  },
  {
    id: 'apollo-17-heat-flow',
    name: 'Apollo 17 Heat Flow Array',
    world: 'moon',
    mission: 'Apollo 17',
    coordinates: [20.1911, 30.7713],
    date: '1972-12-14',
    status: 'Inactive',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
    summary: 'A buried thermal sensor array left beneath the lunar surface, still recording the slow heartbeat of the Moon long after its crew departed.',
    firstPersonStory:
      'My sensors understood heat in a way the people on Earth could not imagine. I listened to the Moon breathe beneath the dust while the mission crew laughed at a distance I could no longer cross. I remain where they left me, counting the quiet.',
    scientificLegacy:
      'Heat-flow experiments helped establish that the Moon still has a thermal history worth studying, contributing to modern models about planetary interiors and impact heating.',
    sourceLinks: [
      { label: 'Apollo Mission Archive', url: 'https://example.com' },
      { label: 'Planetary Science Journal', url: 'https://example.com' },
    ],
  },
  {
    id: 'mer-landing-solar-grid',
    name: 'MER Landing Solar Grid',
    world: 'mars',
    mission: 'Mars Exploration Rover',
    coordinates: [-14.5684, 175.4726],
    date: '2004-01-04',
    status: 'Powering a cold dusk',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    summary: 'A scattered solar array still stands like a skeletal compass over a forgotten landing site, catching a thin Martian light.',
    firstPersonStory:
      'I was built to harvest sunlight like a prayer. On Mars, the sky is a giant lens of dust and silence. Every time a rare dust clearing lets the sun touch me, I feel a flicker of purpose — and then the dark returns with its patient stories.',
    scientificLegacy:
      'These rover systems advanced the field of autonomous geological analysis, helping scientists understand mineral composition, weathering, and past water interactions on Mars.',
    sourceLinks: [
      { label: 'Jet Propulsion Laboratory', url: 'https://example.com' },
      { label: 'Mars Rover Archive', url: 'https://example.com' },
    ],
  },
  {
    id: 'phoenix-biological-sampler',
    name: 'Phoenix Biological Sampler',
    world: 'mars',
    mission: 'Phoenix',
    coordinates: [68.2188, -125.7491],
    date: '2008-05-25',
    status: 'Frozen in place',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    summary: 'A robotic soil sampler sits in a frigid polar grave, preserving the evidence of a patient search for water and habitability.',
    firstPersonStory:
      'I was made for testing, but I learned the language of the ice. My arm still reaches downward into the trench as if some future explorer might finally ask what I once discovered. The frost has become my quiet companion.',
    scientificLegacy:
      'The Phoenix mission contributed to evidence for water-ice in the Martian soil and offered fresh insight into the chemistry of polar environments.',
    sourceLinks: [
      { label: 'Mars Science Laboratory', url: 'https://example.com' },
      { label: 'Planetary Archives', url: 'https://example.com' },
    ],
  },
];

export const timelineEntries = [
  { year: '1966', title: 'Lunar quiet begins', description: 'The first generation of robotic probes mapped rough ground that would later become a site for deep human imagination.' },
  { year: '1972', title: 'Apollo science continues', description: 'A series of instruments drilled into the lunar surface, preserving evidence of the Moon’s thermal and geologic history.' },
  { year: '1973', title: 'Rover silence', description: 'The last autonomous mobile scouts on the Moon entered a maintenance-free drift across the regolith.' },
  { year: '2004', title: 'A red planet watch', description: 'Mars rover missions began sending back detailed views of dust, rock, and the fragile promise of ancient water.' },
  { year: '2018', title: 'Long-range memory', description: 'The archive of robotic exploration grows quieter, but richer — preserving stories from machines the world no longer calls active.' },
];

export function getArtifactById(id) {
  return artifacts.find((artifact) => artifact.id === id);
}

export function getArtifactsByWorld(world) {
  return artifacts.filter((artifact) => artifact.world === world);
}
