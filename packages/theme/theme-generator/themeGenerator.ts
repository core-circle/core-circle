/**
 * CoreCircle Product Theme Generator
 * Generates custom Tailwind CSS v4 theme stylesheets (`[product].theme.css`)
 * and structured design token objects for customer and multi-product brand lines.
 */

import {
  generateColorShades,
  generateBrandTintedNeutrals,
  generateHarmoniousPalette,
  generateChartPalette,
  type ColorScale,
  type ShadeLevel,
} from './colorScale';
import type {
  ProductThemeConfig,
  ProductThemeTokens,
  ThemeGeneratorResult,
  BorderRadiusTokens,
  FontTokens,
  ShadowTokens,
  SemanticThemeTokens,
  BorderRadiusPreset,
} from './themeGenerator.types';
import { colors as standardColors } from '../colors';

/**
 * Standard Border Radius Presets
 */
export const RADIUS_PRESETS: Record<Exclude<BorderRadiusPreset, 'custom'>, BorderRadiusTokens> = {
  none: {
    none: '0',
    xs: '0',
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
    '2xl': '0',
    full: '0',
  },
  subtle: {
    none: '0',
    xs: '0.0625rem',  // 1px
    sm: '0.125rem',   // 2px
    md: '0.25rem',    // 4px
    lg: '0.375rem',   // 6px
    xl: '0.5rem',     // 8px
    '2xl': '0.75rem', // 12px
    full: '9999px',
  },
  rounded: {
    none: '0',
    xs: '0.125rem',   // 2px
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },
  pill: {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.75rem',
    full: '9999px',
  },
};

/**
 * Standard Shadow Presets
 */
export const SHADOW_PRESETS: Record<string, ShadowTokens> = {
  subtle: {
    subtle: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    elevated: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    floating: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  elevated: {
    subtle: '0 2px 4px 0 rgb(0 0 0 / 0.08)',
    elevated: '0 8px 16px -2px rgb(0 0 0 / 0.12), 0 4px 8px -2px rgb(0 0 0 / 0.08)',
    floating: '0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  flat: {
    subtle: 'none',
    elevated: 'none',
    floating: 'none',
  },
  glow: {
    subtle: '0 0 10px 0 rgb(0 0 0 / 0.08)',
    elevated: '0 0 20px 2px rgb(0 0 0 / 0.12)',
    floating: '0 0 30px 4px rgb(0 0 0 / 0.18)',
  },
};

/**
 * Standard Font Tokens Default
 */
export const DEFAULT_FONTS: FontTokens = {
  primary: '"Montserrat", sans-serif',
  secondary: '"Ubuntu", sans-serif',
  heading: 'var(--font-primary, "Montserrat", sans-serif)',
  body: '"Inter", system-ui, -apple-system, sans-serif',
  mono: '"JetBrains Mono", monospace',
  display: '"Outfit", "Montserrat", sans-serif',
};

/**
 * Helper to slugify a product name into a clean CSS variable identifier
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Resolves neutral color scale based on customer choice
 */
function resolveNeutrals(undertone: string, primaryHex: string): ColorScale {
  switch (undertone) {
    case 'gray':
      return standardColors.gray as ColorScale;
    case 'zinc':
      return standardColors.zinc as ColorScale;
    case 'neutral':
      return standardColors.neutral as ColorScale;
    case 'stone':
      return standardColors.stone as ColorScale;
    case 'brand-tinted':
      return generateBrandTintedNeutrals(primaryHex);
    case 'slate':
    default:
      return standardColors.slate as ColorScale;
  }
}

/**
 * Generates custom product theme tokens and CSS
 */
export function generateProductTheme(config: ProductThemeConfig): ThemeGeneratorResult {
  const productName = config.productName || 'Custom Product';
  const prefix = config.prefix ? slugify(config.prefix) : slugify(productName) || 'custom';
  const version = config.version || '1.0.0';
  const generatedAt = new Date().toISOString();

  // 1. Resolve Color Scales
  const harmonies = generateHarmoniousPalette(config.primaryColor);
  const primaryShades = generateColorShades(config.primaryColor, 600);
  const secondaryHex = config.secondaryColor || harmonies.secondary;
  const secondaryShades = generateColorShades(secondaryHex, 600);
  const accentHex = config.accentColor || harmonies.accent;
  const accentShades = generateColorShades(accentHex, 500);

  const warningHex = config.warningColor || harmonies.warning;
  const warningShades = generateColorShades(warningHex, 500);
  const successHex = config.successColor || harmonies.success;
  const successShades = generateColorShades(successHex, 600);
  const destructiveHex = config.destructiveColor || harmonies.destructive;
  const destructiveShades = generateColorShades(destructiveHex, 600);

  const neutralScale = resolveNeutrals(config.neutralUndertone || 'slate', config.primaryColor);

  // 2. Resolve Radius Tokens
  let radiusTokens: BorderRadiusTokens;
  if (typeof config.radius === 'object' && config.radius !== null) {
    radiusTokens = { ...RADIUS_PRESETS.rounded, ...config.radius };
  } else {
    radiusTokens = RADIUS_PRESETS[(config.radius as Exclude<BorderRadiusPreset, 'custom'>) || 'rounded'] || RADIUS_PRESETS.rounded;
  }

  // 3. Resolve Font Tokens
  const fontTokens: FontTokens = {
    ...DEFAULT_FONTS,
    ...(config.fonts || {}),
  };

  // 4. Resolve Shadows
  const shadowTokens: ShadowTokens = SHADOW_PRESETS[config.shadows || 'subtle'] || SHADOW_PRESETS['subtle'];

  // 5. Resolve Chart Colors (10 Tones)
  let charts: Record<number, string>;
  if (Array.isArray(config.chartColors)) {
    charts = {};
    for (let i = 0; i < 10; i++) {
      charts[i + 1] = config.chartColors[i] || primaryShades[600];
    }
  } else if (config.chartColors && typeof config.chartColors === 'object') {
    charts = { ...config.chartColors };
  } else {
    charts = generateChartPalette(config.primaryColor);
  }

  // Dark chart colors (lighter, higher contrast versions)
  const darkCharts: Record<number, string> = {};
  for (let i = 1; i <= 10; i++) {
    darkCharts[i] = generateColorShades(charts[i], 600)[400];
  }

  // 6. Build Light Semantic Tokens
  const lightSemantic: SemanticThemeTokens = {
    primary: primaryShades[600],
    primaryHover: primaryShades[700],
    primaryActive: primaryShades[800],
    secondary: secondaryShades[600],
    secondaryHover: secondaryShades[700],
    secondaryActive: secondaryShades[800],
    destructive: destructiveShades[600],
    destructiveHover: destructiveShades[700],
    warning: warningShades[500],
    warningHover: warningShades[600],
    warningActive: warningShades[700],
    success: successShades[600],
    danger: destructiveShades[600],
    bg: {
      page: neutralScale[50],
      surface: '#ffffff',
      muted: neutralScale[100],
      inverse: neutralScale[900],
    },
    text: {
      main: neutralScale[900],
      muted: neutralScale[500],
      subtle: neutralScale[400],
      inverse: '#ffffff',
      link: primaryShades[600],
    },
    border: {
      main: neutralScale[200],
      muted: neutralScale[100],
      strong: neutralScale[300],
      primary: primaryShades[200],
    },
    ring: {
      focus: primaryShades[600],
      offset: '#ffffff',
    },
    charts,
  };

  // 7. Build Dark Semantic Tokens
  const darkSemantic: SemanticThemeTokens = {
    primary: primaryShades[500],
    primaryHover: primaryShades[400],
    primaryActive: primaryShades[300],
    secondary: secondaryShades[500],
    secondaryHover: secondaryShades[400],
    secondaryActive: secondaryShades[300],
    destructive: destructiveShades[500],
    destructiveHover: destructiveShades[400],
    warning: warningShades[400],
    warningHover: warningShades[300],
    warningActive: warningShades[200],
    success: successShades[500],
    danger: destructiveShades[500],
    bg: {
      page: neutralScale[950],
      surface: neutralScale[900],
      muted: neutralScale[800],
      inverse: neutralScale[50],
    },
    text: {
      main: neutralScale[100],
      muted: neutralScale[400],
      subtle: neutralScale[500],
      inverse: neutralScale[950],
      link: primaryShades[400],
    },
    border: {
      main: neutralScale[800],
      muted: neutralScale[900],
      strong: neutralScale[700],
      primary: primaryShades[900],
    },
    ring: {
      focus: primaryShades[400],
      offset: neutralScale[900],
    },
    charts: darkCharts,
  };

  // 8. Assemble Structured Token Object
  const tokens: ProductThemeTokens = {
    prefix,
    productName,
    colors: {
      primary: primaryShades,
      secondary: secondaryShades,
      accent: accentShades,
      neutral: neutralScale,
      warning: warningShades,
      success: successShades,
      destructive: destructiveShades,
    },
    theme: lightSemantic,
    darkTheme: config.darkMode?.enabled !== false ? darkSemantic : undefined,
    fonts: fontTokens,
    radius: radiusTokens,
    shadows: shadowTokens,
    charts,
    darkCharts,
  };

  // 9. Emit Tailwind CSS v4 Stylesheet String
  const css = emitThemeCSS({
    config,
    prefix,
    productName,
    version,
    generatedAt,
    primaryShades,
    secondaryShades,
    accentShades,
    neutralScale,
    fontTokens,
    radiusTokens,
    shadowTokens,
    lightSemantic,
    darkSemantic,
    charts,
    darkCharts,
  });

  return {
    css,
    tokens,
    fileName: `${prefix}.theme.css`,
    prefix,
    metadata: {
      productName,
      version,
      generatedAt,
      primaryColor: config.primaryColor,
      neutralUndertone: config.neutralUndertone || 'slate',
      radiusPreset: typeof config.radius === 'string' ? config.radius : 'custom',
    },
  };
}

/**
 * Internal helper to serialize the Tailwind v4 @theme block and CSS rules
 */
function emitThemeCSS(params: {
  config: ProductThemeConfig;
  prefix: string;
  productName: string;
  version: string;
  generatedAt: string;
  primaryShades: ColorScale;
  secondaryShades: ColorScale;
  accentShades: ColorScale;
  neutralScale: ColorScale;
  fontTokens: FontTokens;
  radiusTokens: BorderRadiusTokens;
  shadowTokens: ShadowTokens;
  lightSemantic: SemanticThemeTokens;
  darkSemantic: SemanticThemeTokens;
  charts: Record<number, string>;
  darkCharts: Record<number, string>;
}): string {
  const {
    config,
    prefix,
    productName,
    version,
    generatedAt,
    primaryShades,
    secondaryShades,
    accentShades,
    neutralScale,
    fontTokens,
    radiusTokens,
    shadowTokens,
    charts,
    darkCharts,
  } = params;

  const p = prefix;
  const includeUtilities = config.includeUtilityClasses !== false;
  const darkModeEnabled = config.darkMode?.enabled !== false;
  const darkSelector = config.darkMode?.selector || '.dark, [data-theme="dark"]';

  const shadeLevels: ShadeLevel[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const formatShades = (colorName: string, scale: ColorScale) =>
    shadeLevels
      .map((lvl) => `  --color-${p}-${colorName}-${lvl}: ${scale[lvl]};`)
      .join('\n');

  return `/**
 * ==============================================================================
 * ${productName.toUpperCase()} DESIGN SYSTEM THEME
 * Generated by @core-circle/theme Theme Generator
 * Product Line : ${productName} (Prefix: ${p})
 * Version      : ${version}
 * Generated At : ${generatedAt}
 *
 * Usage:
 *   1. Import this file in your root CSS / Tailwind v4 stylesheet:
 *      @import "./${p}.theme.css";
 *
 *   2. Use branded utility classes:
 *      <button className="bg-${p}-primary hover:bg-${p}-primary-hover rounded-${p}-lg">
 *        Submit
 *      </button>
 *
 *   3. Google Fonts (Optional):
 *      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Ubuntu:wght@400;500;700&display=swap');
 * ==============================================================================
 */

@theme {
  /* ----------------------------------------------------------------------------
   * Typography Font Families
   * ------------------------------------------------------------------------- */
  --font-${p}-primary: ${fontTokens.primary};
  --font-${p}-secondary: ${fontTokens.secondary};
  --font-${p}-heading: ${fontTokens.heading};
  --font-${p}-body: ${fontTokens.body};
  --font-${p}-mono: ${fontTokens.mono};
  --font-${p}-display: ${fontTokens.display};

  /* ----------------------------------------------------------------------------
   * Primary Brand Palette (11-Step Scale)
   * ------------------------------------------------------------------------- */
${formatShades('primary', primaryShades)}

  /* ----------------------------------------------------------------------------
   * Secondary Brand Palette (11-Step Scale)
   * ------------------------------------------------------------------------- */
${formatShades('secondary', secondaryShades)}

  /* ----------------------------------------------------------------------------
   * Accent Brand Palette (11-Step Scale)
   * ------------------------------------------------------------------------- */
${formatShades('accent', accentShades)}

  /* ----------------------------------------------------------------------------
   * Neutral Palette (${config.neutralUndertone || 'slate'})
   * ------------------------------------------------------------------------- */
${formatShades('neutral', neutralScale)}

  /* ----------------------------------------------------------------------------
   * Semantic Aliases (Light Mode)
   * ------------------------------------------------------------------------- */
  --color-${p}-primary: var(--color-${p}-primary-600);
  --color-${p}-primary-hover: var(--color-${p}-primary-700);
  --color-${p}-primary-active: var(--color-${p}-primary-800);

  --color-${p}-secondary: var(--color-${p}-secondary-600);
  --color-${p}-secondary-hover: var(--color-${p}-secondary-700);
  --color-${p}-secondary-active: var(--color-${p}-secondary-800);

  --color-${p}-destructive: #ef4444;
  --color-${p}-destructive-hover: #dc2626;

  --color-${p}-warning: #f59e0b;
  --color-${p}-warning-hover: #d97706;

  --color-${p}-success: #10b981;
  --color-${p}-danger: var(--color-${p}-destructive);

  /* Semantic Presets - Backgrounds */
  --color-${p}-bg-page: var(--color-${p}-neutral-50);
  --color-${p}-bg-surface: #ffffff;
  --color-${p}-bg-muted: var(--color-${p}-neutral-100);
  --color-${p}-bg-inverse: var(--color-${p}-neutral-900);

  /* Semantic Presets - Text */
  --color-${p}-text-main: var(--color-${p}-neutral-900);
  --color-${p}-text-muted: var(--color-${p}-neutral-500);
  --color-${p}-text-subtle: var(--color-${p}-neutral-400);
  --color-${p}-text-inverse: #ffffff;
  --color-${p}-text-link: var(--color-${p}-primary-600);

  /* Semantic Presets - Borders */
  --color-${p}-border-main: var(--color-${p}-neutral-200);
  --color-${p}-border-muted: var(--color-${p}-neutral-100);
  --color-${p}-border-strong: var(--color-${p}-neutral-300);
  --color-${p}-border-primary: var(--color-${p}-primary-200);

  /* Focus & Ring */
  --color-${p}-ring: var(--color-${p}-primary-600);
  --color-${p}-ring-offset: #ffffff;

  /* ----------------------------------------------------------------------------
   * Categorical Data Visualization / Chart Colors (10 Tones)
   * ------------------------------------------------------------------------- */
${Object.entries(charts)
  .map(([key, val]) => `  --color-${p}-chart-${key}: ${val};`)
  .join('\n')}

  /* ----------------------------------------------------------------------------
   * Border Radii Scale
   * ------------------------------------------------------------------------- */
  --radius-${p}-none: ${radiusTokens.none};
  --radius-${p}-xs: ${radiusTokens.xs};
  --radius-${p}-sm: ${radiusTokens.sm};
  --radius-${p}-md: ${radiusTokens.md};
  --radius-${p}-lg: ${radiusTokens.lg};
  --radius-${p}-xl: ${radiusTokens.xl};
  --radius-${p}-2xl: ${radiusTokens['2xl']};
  --radius-${p}-full: ${radiusTokens.full};

  /* ----------------------------------------------------------------------------
   * Elevation Shadows
   * ------------------------------------------------------------------------- */
  --shadow-${p}-subtle: ${shadowTokens.subtle};
  --shadow-${p}-elevated: ${shadowTokens.elevated};
  --shadow-${p}-floating: ${shadowTokens.floating};
}
${
  darkModeEnabled
    ? `
/* ==============================================================================
 * Dark Mode Semantic Overrides
 * Activated via: ${darkSelector}
 * ============================================================================== */
${darkSelector} {
  --color-${p}-primary: var(--color-${p}-primary-500);
  --color-${p}-primary-hover: var(--color-${p}-primary-400);
  --color-${p}-primary-active: var(--color-${p}-primary-300);

  --color-${p}-bg-page: var(--color-${p}-neutral-950);
  --color-${p}-bg-surface: var(--color-${p}-neutral-900);
  --color-${p}-bg-muted: var(--color-${p}-neutral-800);
  --color-${p}-bg-inverse: var(--color-${p}-neutral-50);

  --color-${p}-text-main: var(--color-${p}-neutral-100);
  --color-${p}-text-muted: var(--color-${p}-neutral-400);
  --color-${p}-text-subtle: var(--color-${p}-neutral-500);
  --color-${p}-text-inverse: var(--color-${p}-neutral-950);
  --color-${p}-text-link: var(--color-${p}-primary-400);

  --color-${p}-border-main: var(--color-${p}-neutral-800);
  --color-${p}-border-muted: var(--color-${p}-neutral-900);
  --color-${p}-border-strong: var(--color-${p}-neutral-700);
  --color-${p}-border-primary: var(--color-${p}-primary-900);

  --color-${p}-ring: var(--color-${p}-primary-400);
  --color-${p}-ring-offset: var(--color-${p}-neutral-900);

  /* Dark Mode High-Contrast Charts */
${Object.entries(darkCharts)
  .map(([key, val]) => `  --color-${p}-chart-${key}: ${val};`)
  .join('\n')}
}
`
    : ''
}
${
  includeUtilities
    ? `
/* ==============================================================================
 * Branded Shortcut Utilities
 * ============================================================================== */
@layer utilities {
  .${p}-card {
    background-color: var(--color-${p}-bg-surface);
    border: 1px solid var(--color-${p}-border-main);
    border-radius: var(--radius-${p}-xl);
    box-shadow: var(--shadow-${p}-subtle);
  }

  .${p}-surface {
    background-color: var(--color-${p}-bg-surface);
    color: var(--color-${p}-text-main);
  }

  .${p}-focus-ring {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-${p}-ring-offset), 0 0 0 4px var(--color-${p}-ring);
  }
}
`
    : ''
}`;
}
