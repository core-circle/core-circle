/**
 * Theme Generator Interface & Types
 * Type definitions for generating custom product themes, token scales, and Tailwind CSS v4 stylesheets.
 */

import type { ColorScale } from './colorScale';

export type NeutralUndertonePreset =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'brand-tinted';

export type BorderRadiusPreset = 'none' | 'subtle' | 'rounded' | 'pill' | 'custom';

export interface BorderRadiusTokens {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface FontTokens {
  primary: string;
  secondary: string;
  heading: string;
  body: string;
  mono: string;
  display: string;
}

export type ShadowPreset = 'subtle' | 'elevated' | 'flat' | 'glow';

export interface ShadowTokens {
  subtle: string;
  elevated: string;
  floating: string;
}

export interface DarkModeConfig {
  /**
   * Whether to generate dark mode token overrides
   * @default true
   */
  enabled?: boolean;
  /**
   * CSS selector for dark mode activation (Tailwind v4 class-based)
   * @default '.dark, [data-theme="dark"]'
   */
  selector?: string;
  /**
   * Underlying base surface tone for dark mode
   * @default 'slate'
   */
  surfaceTone?: 'slate' | 'zinc' | 'pitch-black' | 'brand';
}

export interface ProductThemeConfig {
  /**
   * Product or brand name (e.g. "Acme", "Fintech Pro", "CoreCircle")
   */
  productName: string;
  /**
   * CSS variable namespace prefix (e.g. "acme" -> --color-acme-primary).
   * Defaults to kebab-cased productName.
   */
  prefix?: string;
  /**
   * Primary brand color (Hex string, e.g. "#6366f1" or "#2563eb")
   */
  primaryColor: string;
  /**
   * Secondary brand color (Hex string). If omitted, an analogous hue is derived.
   */
  secondaryColor?: string;
  /**
   * Accent / highlight color (Hex string). If omitted, a complementary hue is derived.
   */
  accentColor?: string;
  /**
   * Warning status color (Hex string). Defaults to #f59e0b (Amber-500).
   */
  warningColor?: string;
  /**
   * Success status color (Hex string). Defaults to #10b981 (Emerald-500).
   */
  successColor?: string;
  /**
   * Destructive / danger status color (Hex string). Defaults to #ef4444 (Red-500).
   */
  destructiveColor?: string;
  /**
   * Neutral undertone for surfaces, borders, and text
   * @default 'slate'
   */
  neutralUndertone?: NeutralUndertonePreset;
  /**
   * Border radius curvature preset or custom token map
   * @default 'rounded'
   */
  radius?: BorderRadiusPreset | Partial<BorderRadiusTokens>;
  /**
   * Typography font families
   */
  fonts?: Partial<FontTokens>;
  /**
   * Box shadow elevation preset
   * @default 'subtle'
   */
  shadows?: ShadowPreset;
  /**
   * Dark mode configuration
   */
  darkMode?: DarkModeConfig;
  /**
   * Optional custom array of 10 data visualization / chart colors
   */
  chartColors?: Record<number, string> | string[];
  /**
   * Whether to emit backward-compatible `--*-core-circle-*` aliases.
   * When true, any @core-circle/ui component drops directly into the product with zero refactoring.
   * @default false
   */
  includeCoreCircleAliases?: boolean;
  /**
   * Whether to include utility classes (.${prefix}-card, .${prefix}-heading, etc.)
   * @default true
   */
  includeUtilityClasses?: boolean;
  /**
   * Optional human-readable description for the generated CSS header
   */
  description?: string;
  /**
   * Theme semver string
   * @default '1.0.0'
   */
  version?: string;
}

export interface SemanticThemeTokens {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  secondary: string;
  secondaryHover: string;
  secondaryActive: string;
  destructive: string;
  destructiveHover: string;
  warning: string;
  warningHover: string;
  warningActive: string;
  success: string;
  danger: string;
  bg: {
    page: string;
    surface: string;
    muted: string;
    inverse: string;
  };
  text: {
    main: string;
    muted: string;
    subtle: string;
    inverse: string;
    link: string;
  };
  border: {
    main: string;
    muted: string;
    strong: string;
    primary: string;
  };
  ring: {
    focus: string;
    offset: string;
  };
  charts: Record<number, string>;
}

export interface ProductThemeTokens {
  prefix: string;
  productName: string;
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    accent: ColorScale;
    neutral: ColorScale;
    warning: ColorScale;
    success: ColorScale;
    destructive: ColorScale;
  };
  theme: SemanticThemeTokens;
  darkTheme?: SemanticThemeTokens;
  fonts: FontTokens;
  radius: BorderRadiusTokens;
  shadows: ShadowTokens;
  charts: Record<number, string>;
  darkCharts?: Record<number, string>;
}

export interface ThemeGeneratorResult {
  /**
   * The generated production CSS stylesheet string (`[product].theme.css`)
   */
  css: string;
  /**
   * Structured JS token object for runtime / design system integration
   */
  tokens: ProductThemeTokens;
  /**
   * Recommended filename (e.g. "acme.theme.css")
   */
  fileName: string;
  /**
   * Resolved CSS prefix
   */
  prefix: string;
  /**
   * Generation metadata
   */
  metadata: {
    productName: string;
    version: string;
    generatedAt: string;
    primaryColor: string;
    neutralUndertone: string;
    radiusPreset: string;
  };
}
