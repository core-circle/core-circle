import {
  colors,
  theme,
  charts,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacing,
  breakpoints,
  spacing,
  radius,
  shadows,
  zIndex,
} from './index';

/**
 * Flatten color palettes into Tailwind-friendly color key-value pairs
 */
function buildPaletteColors() {
  const result: Record<string, string> = {};
  
  // Flatten raw color scales across all 22 hues: e.g. core-circle-slate-50, core-circle-emerald-600
  (Object.keys(colors) as Array<keyof typeof colors>).forEach((colorName) => {
    const scale = colors[colorName];
    Object.entries(scale).forEach(([shade, hex]) => {
      result[`core-circle-${colorName}-${shade}`] = hex;
    });
  });

  // Categorical Chart / Data-Viz Colors
  Object.entries(charts).forEach(([index, hex]) => {
    result[`core-circle-chart-${index}`] = hex;
  });

  // Semantic theme colors
  result['core-circle-primary'] = theme.primary;
  result['core-circle-primary-hover'] = theme.primaryHover;
  result['core-circle-primary-active'] = theme.primaryActive;
  result['core-circle-secondary'] = theme.secondary;
  result['core-circle-secondary-hover'] = theme.secondaryHover;
  result['core-circle-secondary-active'] = theme.secondaryActive;
  result['core-circle-destructive'] = theme.destructive;
  result['core-circle-destructive-hover'] = theme.destructiveHover;
  result['core-circle-warning'] = theme.warning;
  result['core-circle-warning-hover'] = theme.warningHover;
  result['core-circle-warning-active'] = theme.warningActive;
  result['core-circle-success'] = theme.success;
  result['core-circle-danger'] = theme.danger;

  // Backgrounds
  result['core-circle-bg-page'] = theme.bg.page;
  result['core-circle-bg-surface'] = theme.bg.surface;
  result['core-circle-bg-muted'] = theme.bg.muted;
  result['core-circle-bg-inverse'] = theme.bg.inverse;

  // Text
  result['core-circle-text-main'] = theme.text.main;
  result['core-circle-text-muted'] = theme.text.muted;
  result['core-circle-text-subtle'] = theme.text.subtle;
  result['core-circle-text-inverse'] = theme.text.inverse;
  result['core-circle-text-link'] = theme.text.link;

  // Borders
  result['core-circle-border-main'] = theme.border.main;
  result['core-circle-border-muted'] = theme.border.muted;
  result['core-circle-border-strong'] = theme.border.strong;
  result['core-circle-border-primary'] = theme.border.primary;

  // Ring & Focus
  result['core-circle-ring'] = theme.ring.focus;
  result['core-circle-ring-offset'] = theme.ring.offset;

  return result;
}

/**
 * Universal CoreCircle Tailwind Preset
 * Compatible with Tailwind CSS v3 and v4 configs.
 */
export const coreCirclePreset = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: breakpoints,
    extend: {
      colors: buildPaletteColors(),
      fontFamily: {
        'core-circle-primary': [fonts.primary],
        'core-circle-secondary': [fonts.secondary],
        'core-circle-sans': [fonts.sans],
        'core-circle-serif': [fonts.serif],
        'core-circle-mono': [fonts.mono],
        'core-circle-display': [fonts.display],
        'core-circle-heading': [fonts.heading],
        'core-circle-body': [fonts.body],
        'core-circle-code': [fonts.code],
      },
      fontWeight: {
        'core-circle-light': fontWeights.light,
        'core-circle-normal': fontWeights.normal,
        'core-circle-medium': fontWeights.medium,
        'core-circle-semibold': fontWeights.semibold,
        'core-circle-bold': fontWeights.bold,
        'core-circle-extrabold': fontWeights.extrabold,
      },
      fontSize: {
        'core-circle-xs': fontSizes.xs,
        'core-circle-sm': fontSizes.sm,
        'core-circle-base': fontSizes.base,
        'core-circle-lg': fontSizes.lg,
        'core-circle-xl': fontSizes.xl,
        'core-circle-2xl': fontSizes['2xl'],
        'core-circle-3xl': fontSizes['3xl'],
        'core-circle-4xl': fontSizes['4xl'],
        'core-circle-5xl': fontSizes['5xl'],
      },
      lineHeight: {
        'core-circle-none': lineHeights.none,
        'core-circle-tight': lineHeights.tight,
        'core-circle-snug': lineHeights.snug,
        'core-circle-normal': lineHeights.normal,
        'core-circle-relaxed': lineHeights.relaxed,
        'core-circle-loose': lineHeights.loose,
      },
      letterSpacing: {
        'core-circle-tighter': letterSpacing.tighter,
        'core-circle-tight': letterSpacing.tight,
        'core-circle-normal': letterSpacing.normal,
        'core-circle-wide': letterSpacing.wide,
        'core-circle-wider': letterSpacing.wider,
        'core-circle-widest': letterSpacing.widest,
      },
      spacing: {
        'core-circle-3xs': spacing['3xs'],
        'core-circle-2xs': spacing['2xs'],
        'core-circle-xs': spacing.xs,
        'core-circle-sm': spacing.sm,
        'core-circle-md': spacing.md,
        'core-circle-lg': spacing.lg,
        'core-circle-xl': spacing.xl,
        'core-circle-2xl': spacing['2xl'],
        'core-circle-3xl': spacing['3xl'],
        'core-circle-4xl': spacing['4xl'],
        'core-circle-5xl': spacing['5xl'],
      },
      borderRadius: {
        'core-circle-xs': radius.xs,
        'core-circle-sm': radius.sm,
        'core-circle-md': radius.md,
        'core-circle-lg': radius.lg,
        'core-circle-xl': radius.xl,
        'core-circle-2xl': radius['2xl'],
        'core-circle-full': radius.full,
      },
      boxShadow: {
        'core-circle-subtle': shadows.subtle,
        'core-circle-elevated': shadows.elevated,
        'core-circle-floating': shadows.floating,
      },
      zIndex: {
        'core-circle-hide': zIndex.hide,
        'core-circle-docked': zIndex.docked,
        'core-circle-dropdown': zIndex.dropdown,
        'core-circle-sticky': zIndex.sticky,
        'core-circle-banner': zIndex.banner,
        'core-circle-overlay': zIndex.overlay,
        'core-circle-modal': zIndex.modal,
        'core-circle-popover': zIndex.popover,
        'core-circle-toast': zIndex.toast,
        'core-circle-tooltip': zIndex.tooltip,
      },
    },
  },
};

export default coreCirclePreset;
