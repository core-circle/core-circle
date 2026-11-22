import type { HTMLAttributes } from 'react';
import type { ProductThemeConfig, ThemeGeneratorResult } from '@core-circle/theme';

export interface ThemeGeneratorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Initial theme configuration preset
   */
  initialConfig?: Partial<ProductThemeConfig>;
  /**
   * Callback fired whenever the generated theme changes
   */
  onThemeChange?: (result: ThemeGeneratorResult) => void;
  /**
   * Whether to display the live preview pane
   * @default true
   */
  showPreview?: boolean;
  /**
   * Whether to display the code viewer pane
   * @default true
   */
  showCode?: boolean;
}
