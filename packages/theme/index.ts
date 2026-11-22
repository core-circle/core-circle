/**
 * Core Circle Design Tokens
 * Single source of truth for all design tokens across CoreCircle Design System.
 * 22 Full-Spectrum Hues (242 Shades) + Semantic Tokens + Chart/Data-Viz Palette.
 */

import { colors } from './colors';
export { colors };


/**
 * Categorical Chart / Data-Visualization Palettes (10 Distinct Tones)
 */
export const charts = {
  1: colors.blue[600],     // Primary data line
  2: colors.emerald[600],  // Secondary positive
  3: colors.orange[500],   // Warm comparative
  4: colors.violet[500],   // Electric accent
  5: colors.cyan[500],     // High-tech flow
  6: colors.pink[500],     // Expressive metric
  7: colors.amber[500],    // Attention metric
  8: colors.teal[600],     // Grounded metric
  9: colors.red[600],      // Negative variance
  10: colors.indigo[500],  // Ancillary series
};

export const darkCharts = {
  1: colors.blue[400],
  2: colors.emerald[400],
  3: colors.orange[400],
  4: colors.violet[400],
  5: colors.cyan[400],
  6: colors.pink[400],
  7: colors.amber[400],
  8: colors.teal[400],
  9: colors.red[400],
  10: colors.indigo[400],
};

/**
 * Light Theme (Default)
 */
export const theme = {
  primary: colors.blue[600],
  primaryHover: colors.blue[700],
  primaryActive: colors.blue[800],
  
  secondary: colors.green[600],
  secondaryHover: colors.green[700],
  secondaryActive: colors.green[800],
  
  destructive: colors.red[600],
  destructiveHover: colors.red[700],
  
  warning: colors.orange[500],
  warningHover: colors.orange[600],
  warningActive: colors.orange[700],
  
  success: colors.green[600],
  danger: colors.red[600],
  
  bg: {
    page: colors.slate[50],
    surface: '#ffffff',
    muted: colors.slate[100],
    inverse: colors.slate[900],
  },
  
  text: {
    main: colors.slate[900],
    muted: colors.slate[500],
    subtle: colors.slate[400],
    inverse: '#ffffff',
    link: colors.blue[600],
  },
  
  border: {
    main: colors.slate[200],
    muted: colors.slate[100],
    strong: colors.slate[300],
    primary: colors.blue[200],
  },

  ring: {
    focus: colors.blue[600],
    offset: '#ffffff',
  },

  charts,
};

/**
 * Dark Theme Semantic Overrides
 */
export const darkTheme = {
  primary: colors.blue[500],
  primaryHover: colors.blue[400],
  primaryActive: colors.blue[300],
  
  secondary: colors.green[500],
  secondaryHover: colors.green[400],
  secondaryActive: colors.green[300],
  
  destructive: colors.red[500],
  destructiveHover: colors.red[400],
  
  warning: colors.orange[400],
  warningHover: colors.orange[300],
  warningActive: colors.orange[200],
  
  success: colors.green[500],
  danger: colors.red[500],
  
  bg: {
    page: colors.slate[950],
    surface: colors.slate[900],
    muted: colors.slate[800],
    inverse: colors.slate[50],
  },
  
  text: {
    main: colors.slate[100],
    muted: colors.slate[400],
    subtle: colors.slate[500],
    inverse: colors.slate[900],
    link: colors.blue[400],
  },
  
  border: {
    main: colors.slate[800],
    muted: '#162032',
    strong: colors.slate[700],
    primary: colors.blue[800],
  },

  ring: {
    focus: colors.blue[400],
    offset: colors.slate[900],
  },

  charts: darkCharts,
};

/**
 * Multiple font options for versatile brand and UI styling
 */
export const fonts = {
  primary: '"Montserrat", sans-serif',
  secondary: '"Ubuntu", sans-serif',
  sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  serif: '"Playfair Display", "Merriweather", Georgia, Cambria, serif',
  mono: '"JetBrains Mono", "Fira Code", Menlo, Monaco, Consolas, monospace',
  display: '"Outfit", "Plus Jakarta Sans", "Montserrat", sans-serif',
  
  heading: '"Montserrat", sans-serif',
  body: '"Inter", "Ubuntu", sans-serif',
  code: '"JetBrains Mono", "Fira Code", monospace',
};

export const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem',// 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
};

export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const spacing = {
  '3xs': '0.125rem', // 2px
  '2xs': '0.25rem',  // 4px
  xs: '0.5rem',      // 8px
  sm: '0.75rem',     // 12px
  md: '1rem',        // 16px
  lg: '1.5rem',      // 24px
  xl: '2rem',        // 32px
  '2xl': '2.5rem',   // 40px
  '3xl': '3rem',     // 48px
  '4xl': '4rem',     // 64px
  '5xl': '5rem',     // 80px
};

export const radius = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
};

export const shadows = {
  subtle: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  elevated: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  floating: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
};

export const zIndex = {
  hide: '-1',
  auto: 'auto',
  base: '0',
  docked: '10',
  dropdown: '1000',
  sticky: '1100',
  banner: '1200',
  overlay: '1300',
  modal: '1400',
  popover: '1500',
  skipLink: '1600',
  toast: '1700',
  tooltip: '1800',
};

export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Re-export Tailwind preset
export { coreCirclePreset, coreCirclePreset as default } from './preset';

// Re-export Theme Generator & Color Math Algorithms
export * from './theme-generator';

