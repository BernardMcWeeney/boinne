const locationGradients: Record<string, string> = {
  newgrange: 'linear-gradient(145deg, #0a0a1a 0%, #1a1a2e 20%, #16213e 45%, #0f3460 70%, #533483 90%, #2d1b69 100%)',
  knowth: 'linear-gradient(145deg, #060d14 0%, #0d1b2a 20%, #1b2838 45%, #2d4a3e 70%, #3a5a40 90%, #1a3a20 100%)',
  dowth: 'linear-gradient(145deg, #0d0c1a 0%, #1b1a2e 20%, #2d2b42 45%, #4a3f6b 70%, #6b5b8a 90%, #3d2d5e 100%)',
  'slane-castle': 'linear-gradient(145deg, #0f0d0b 0%, #1c1917 20%, #292524 45%, #44403c 70%, #57534e 90%, #3a3530 100%)',
};

const eraGradients: Record<string, string> = {
  neolithic: 'linear-gradient(145deg, #0a0a1a 0%, #1a1a2e 30%, #2d2460 70%, #4a3d8f 100%)',
  'bronze-age': 'linear-gradient(145deg, #1a0f05 0%, #2d1b0e 30%, #78350f 70%, #a0522d 100%)',
  'early-medieval': 'linear-gradient(145deg, #0a1a0a 0%, #1a2e1a 30%, #2d5a2d 70%, #3d7a3d 100%)',
  'norman-medieval': 'linear-gradient(145deg, #1a0a0a 0%, #2d1b1b 30%, #7f1d1d 70%, #991b1b 100%)',
  'early-modern': 'linear-gradient(145deg, #0f0d0b 0%, #1c1917 30%, #44403c 70%, #57534e 100%)',
};

const eraAccentColors: Record<string, string> = {
  neolithic: '#6366f1',
  'bronze-age': '#d97706',
  'early-medieval': '#16a34a',
  'norman-medieval': '#dc2626',
  'early-modern': '#78716c',
};

export function getLocationGradient(slug: string): string {
  return locationGradients[slug] || 'linear-gradient(145deg, #0f0d0b 0%, #1c1917 30%, #292524 60%, #44403c 100%)';
}

export function getEraGradient(slug: string): string {
  return eraGradients[slug] || 'linear-gradient(145deg, #0f0d0b 0%, #1c1917 50%, #44403c 100%)';
}

export function getEraAccentColor(slug: string): string {
  return eraAccentColors[slug] || '#ffd54f';
}
