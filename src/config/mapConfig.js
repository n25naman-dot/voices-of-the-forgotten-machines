// NASA Trek tile URLs and display coordinates are centralized here for easy replacement.
// Coordinates use [latitude, longitude] in degrees.
export const mapConfig = {
  moon: {
    name: 'Moon',
    tileUrl:
      'https://trek.nasa.gov/tiles/Moon/EQ/Moon_LRO_WAC_Mosaic_Global_303ppd/1.0.0/default/default028mm/{z}/{y}/{x}.jpg',
    attribution: 'Map tiles: NASA Moon Trek',
    center: [20, 10],
    zoom: 2,
    minZoom: 1,
    maxZoom: 8,
    artifactCoordinates: {
      'lunokhod-2-station': [25.85, 30.92],
      'apollo-17-heat-flow': [20.19, 30.77],
    },
  },
  mars: {
    name: 'Mars',
    tileUrl:
      'https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg',
    attribution: 'Map tiles: NASA Mars Trek',
    center: [10, 0],
    zoom: 2,
    minZoom: 1,
    maxZoom: 8,
    artifactCoordinates: {
      'mer-landing-solar-grid': [-14.5684, 175.4726],
      'phoenix-biological-sampler': [68.2188, -125.7491],
    },
  },
};
