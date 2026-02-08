const locationGradients: Record<string, string> = {
  newgrange: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
  knowth: 'linear-gradient(145deg, #0d1b2a 0%, #1b2838 30%, #2d4a3e 60%, #3a5a40 100%)',
  dowth: 'linear-gradient(145deg, #1b1a2e 0%, #2d2b42 30%, #4a3f6b 60%, #6b5b8a 100%)',
  'slane-castle': 'linear-gradient(145deg, #1c1917 0%, #292524 30%, #44403c 60%, #57534e 100%)',
};

const eraGradients: Record<string, string> = {
  neolithic: 'linear-gradient(145deg, #1a1a2e 0%, #2d2460 100%)',
  'bronze-age': 'linear-gradient(145deg, #2d1b0e 0%, #78350f 100%)',
  'early-medieval': 'linear-gradient(145deg, #1a2e1a 0%, #2d5a2d 100%)',
  'norman-medieval': 'linear-gradient(145deg, #2d1b1b 0%, #7f1d1d 100%)',
  'early-modern': 'linear-gradient(145deg, #1c1917 0%, #57534e 100%)',
};

export function getLocationGradient(slug: string): string {
  return locationGradients[slug] || 'linear-gradient(145deg, #1c1917 0%, #292524 50%, #44403c 100%)';
}

export function getEraGradient(slug: string): string {
  return eraGradients[slug] || 'linear-gradient(145deg, #1c1917 0%, #44403c 100%)';
}
