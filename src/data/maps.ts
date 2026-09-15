import type { Place } from './trip';

export const mapsSearch = (p: Place) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query ?? p.name)}`;

export const mapsDirections = (from: Place | { lat: number; lng: number; query?: string; name?: string }, to: Place, mode: 'driving' | 'walking' | 'transit' = 'driving') => {
  const o = 'query' in from && from.query ? from.query : `${from.lat},${from.lng}`;
  const d = to.query ?? to.name;
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(o)}&destination=${encodeURIComponent(d)}&travelmode=${mode}`;
};
