import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { countdownContainerVariants } from '../../../components/atoms/countdown/countdown.styles';

export type CountdownVariant = 'boxes' | 'cards' | 'minimal';
export type CountdownSize = 'sm' | 'md' | 'lg';

export interface CountdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof countdownContainerVariants> {
  /** Target expiration deadline (ISO string, timestamp, or Date instance) */
  targetDate: Date | string | number;
  /** Callback fired once when countdown reaches zero */
  onFinish?: () => void;
  /** Whether to show the Days segment. Default: true */
  showDays?: boolean;
  /** Whether to display text labels under digits (e.g. Days, Hours). Default: true */
  showLabels?: boolean;
  /** Size scale of numbers and boxes */
  size?: CountdownSize;
}
