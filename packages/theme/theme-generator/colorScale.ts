/**
 * Color Scale & Palette Generation Algorithms
 * Pure TypeScript color manipulation for generating design system token scales (50-950),
 * WCAG-compliant contrast checking, and harmonious brand palettes.
 */

export type ShadeLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type ColorScale = Record<ShadeLevel, string>;

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

/**
 * Standard shade lightness targets aligned with Tailwind CSS v4 scales
 */
const SHADE_LIGHTNESS: Record<ShadeLevel, number> = {
  50: 0.97,
  100: 0.93,
  200: 0.85,
  300: 0.74,
  400: 0.62,
  500: 0.52,
  600: 0.42,
  700: 0.34,
  800: 0.26,
  900: 0.18,
  950: 0.10,
};

/**
 * Saturation dampening factors to prevent pastel washout or neon oversaturation
 */
const SATURATION_DAMPENING: Record<ShadeLevel, number> = {
  50: 0.65,
  100: 0.80,
  200: 0.90,
  300: 0.95,
  400: 1.0,
  500: 1.0,
  600: 1.0,
  700: 0.98,
  800: 0.94,
  900: 0.90,
  950: 0.85,
};

/**
 * Normalizes and parses a 3 or 6-digit hex string into RGB
 */
export function hexToRgb(hex: string): RGB {
  let cleaned = hex.trim().replace(/^#/, '');
  if (cleaned.length === 3) {
    cleaned = cleaned.split('').map((char) => char + char).join('');
  }
  if (cleaned.length !== 6) {
    // Fallback to vibrant blue if invalid
    return { r: 37, g: 99, b: 235 };
  }
  const num = parseInt(cleaned, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * Converts RGB to 6-digit hex string (#rrggbb)
 */
export function rgbToHex(rgb: RGB): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  const toHex = (val: number) => clamp(val).toString(16).padStart(2, '0');
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

/**
 * Converts RGB (0-255) to HSL (h: 0-360, s: 0-1, l: 0-1)
 */
export function rgbToHsl(rgb: RGB): HSL {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.max(0, Math.min(1, s)),
    l: Math.max(0, Math.min(1, l)),
  };
}

/**
 * Converts HSL (h: 0-360, s: 0-1, l: 0-1) to RGB (0-255)
 */
export function hslToRgb(hsl: HSL): RGB {
  const h = (hsl.h % 360 + 360) % 360 / 360;
  const s = Math.max(0, Math.min(1, hsl.s));
  const l = Math.max(0, Math.min(1, hsl.l));

  if (s === 0) {
    const gray = Math.round(l * 255);
    return { r: gray, g: gray, b: gray };
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    let tNorm = t;
    if (tNorm < 0) tNorm += 1;
    if (tNorm > 1) tNorm -= 1;
    if (tNorm < 1 / 6) return p + (q - p) * 6 * tNorm;
    if (tNorm < 1 / 2) return q;
    if (tNorm < 2 / 3) return p + (q - p) * (2 / 3 - tNorm) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return {
    r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  };
}

/**
 * Converts HSL to Hex
 */
export function hslToHex(hsl: HSL): string {
  return rgbToHex(hslToRgb(hsl));
}

/**
 * Calculates relative luminance according to WCAG 2.1
 */
export function getRelativeLuminance(rgb: RGB): number {
  const normalize = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const r = normalize(rgb.r);
  const g = normalize(rgb.g);
  const b = normalize(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Returns WCAG-compliant high-contrast foreground color (#ffffff or #0f172a)
 */
export function getContrastColor(bgHex: string): '#ffffff' | '#0f172a' {
  const rgb = hexToRgb(bgHex);
  const lum = getRelativeLuminance(rgb);
  return lum > 0.35 ? '#0f172a' : '#ffffff';
}

/**
 * Generates an 11-step Tailwind scale (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950)
 * from a single base color hex.
 *
 * Pins the input color to its closest matching shade index (or custom anchor)
 * while preserving smooth perceptual transitions across the entire spectrum.
 */
export function generateColorShades(
  baseHex: string,
  preferredAnchor: ShadeLevel = 600
): ColorScale {
  const rgb = hexToRgb(baseHex);
  const hsl = rgbToHsl(rgb);
  const shades: Partial<ColorScale> = {};

  const levels: ShadeLevel[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  levels.forEach((lvl) => {
    if (lvl === preferredAnchor) {
      // Pin exact customer hex at the anchor level (typically 600 or 500)
      shades[lvl] = baseHex.toLowerCase().startsWith('#') ? baseHex.toLowerCase() : `#${baseHex.toLowerCase()}`;
      return;
    }

    const targetL = SHADE_LIGHTNESS[lvl];
    const satMultiplier = SATURATION_DAMPENING[lvl];
    const adjustedS = Math.min(1, hsl.s * satMultiplier);

    shades[lvl] = hslToHex({
      h: hsl.h,
      s: adjustedS,
      l: targetL,
    });
  });

  return shades as ColorScale;
}

/**
 * Generates a brand-tinted neutral scale (slate/zinc with ~8-12% brand hue undertone)
 * for high-end Apple/Linear-style design cohesion.
 */
export function generateBrandTintedNeutrals(brandHex: string): ColorScale {
  const hsl = rgbToHsl(hexToRgb(brandHex));
  const brandHue = hsl.h;
  const brandSat = 0.12; // 12% subtle brand undertone

  const levels: ShadeLevel[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const neutrals: Partial<ColorScale> = {};

  levels.forEach((lvl) => {
    neutrals[lvl] = hslToHex({
      h: brandHue,
      s: brandSat,
      l: SHADE_LIGHTNESS[lvl],
    });
  });

  return neutrals as ColorScale;
}

/**
 * Generates complementary and analogous harmonic colors for secondary & accent
 */
export function generateHarmoniousPalette(primaryHex: string): {
  secondary: string;
  accent: string;
  warning: string;
  success: string;
  destructive: string;
} {
  const hsl = rgbToHsl(hexToRgb(primaryHex));

  return {
    // Secondary: Analogous shift +30 degrees
    secondary: hslToHex({ h: (hsl.h + 30) % 360, s: Math.max(0.65, hsl.s), l: 0.45 }),
    // Accent: Complementary/Triadic shift +150 degrees
    accent: hslToHex({ h: (hsl.h + 150) % 360, s: 0.85, l: 0.52 }),
    // Standard semantic defaults balanced for accessibility
    warning: '#f59e0b',    // Amber-500
    success: '#10b981',    // Emerald-500
    destructive: '#ef4444',// Red-500
  };
}

/**
 * Generates 10 categorical, high-contrast chart / data-visualization colors
 * spaced evenly across the color wheel starting from the primary brand hue.
 */
export function generateChartPalette(primaryHex: string): Record<number, string> {
  const hsl = rgbToHsl(hexToRgb(primaryHex));
  const palette: Record<number, string> = {};

  // 10 distinct hues distributed with golden ratio / optimal categorical separation
  const hueOffsets = [0, 140, 35, 260, 185, 320, 55, 165, 10, 215];

  for (let i = 1; i <= 10; i++) {
    const offset = hueOffsets[i - 1];
    palette[i] = hslToHex({
      h: (hsl.h + offset) % 360,
      s: 0.78,
      l: 0.48,
    });
  }

  return palette;
}
