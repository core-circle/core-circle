import * as React from 'react';

export type SpinnerVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info' 
  | 'gradient' 
  | 'glow' 
  | 'glassmorphic' 
  | 'accent' 
  | 'dark' 
  | 'white';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color theme variant of the spinner.
   * @default 'primary'
   */
  variant?: SpinnerVariant;

  /**
   * Predefined diameter and border thickness size scale.
   * @default 'md'
   */
  size?: SpinnerSize;

  /**
   * Custom thickness for the spinner circle (in px).
   */
  thickness?: number;

  /**
   * Animation rotation speed in seconds.
   * @default 0.8
   */
  speed?: number;
}

