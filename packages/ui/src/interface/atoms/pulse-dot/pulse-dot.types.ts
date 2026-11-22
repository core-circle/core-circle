import { ReactNode } from 'react';

export type PulseDotStatus =
  | 'online'
  | 'offline'
  | 'busy'
  | 'away'
  | 'deploying'
  | 'neutral';

export type PulseDotSize = 'xs' | 'sm' | 'md' | 'lg';

export interface PulseDotProps {
  /**
   * Semantic operational status.
   * @default 'online'
   */
  status?: PulseDotStatus;

  /**
   * Proportional sizing scale for the dot.
   * @default 'sm'
   */
  size?: PulseDotSize;

  /**
   * Whether to animate the radiating radar ping pulse ring.
   * @default true
   */
  ping?: boolean;

  /**
   * Optional text label accompanying the beacon.
   */
  label?: ReactNode;

  /**
   * Placement of the label relative to the dot.
   * @default 'right'
   */
  labelPlacement?: 'left' | 'right';

  /**
   * Custom CSS color class override for the dot and ping ring.
   */
  colorClass?: string;

  /**
   * Additional classes for the container wrapper.
   */
  className?: string;
}
