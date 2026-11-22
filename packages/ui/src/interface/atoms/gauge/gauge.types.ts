import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { gaugeContainerVariants } from '../../../components/atoms/gauge/gauge.styles';

export interface GaugeThreshold {
  value: number;
  color: string;
}

export interface GaugeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gaugeContainerVariants> {
  /** Current metric value */
  value: number;
  /** Minimum gauge value boundary. Default: 0 */
  min?: number;
  /** Maximum gauge value boundary. Default: 100 */
  max?: number;
  /** Unit indicator label, e.g. '%', 'GB', 'Mbps' */
  unit?: string;
  /** Primary label displayed below center readout */
  label?: string;
  /** Subtitle or contextual description text */
  helperText?: string;
  /** Overall pixel diameter size. Default: 180 */
  size?: number;
  /** Arc track stroke thickness. Default: 14 */
  strokeWidth?: number;
  /** Progress arc fill color or custom thresholds */
  color?: string;
  /** Custom color threshold tiers based on value */
  thresholds?: GaugeThreshold[];
}
