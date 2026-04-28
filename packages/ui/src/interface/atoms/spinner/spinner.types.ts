import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { spinnerVariants } from '../../../components/atoms/spinner/spinner.styles';

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /**
   * Custom thickness for the spinner circle.
   */
  thickness?: number;
  /**
   * Animation speed in seconds.
   */
  speed?: number;
}
