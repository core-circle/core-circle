import * as React from 'react';

export type SwitchVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info' 
  | 'gradient' 
  | 'glassmorphic' 
  | 'glow' 
  | 'floating' 
  | 'accent' 
  | 'dark';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Color theme variant of the switch track.
   * @default 'primary'
   */
  variant?: SwitchVariant;

  /**
   * Size scale of the switch.
   * @default 'md'
   */
  size?: SwitchSize;

  /**
   * Optional icon inside the thumb circle (e.g. Moon or Sun).
   */
  thumbIcon?: React.ReactNode;

  /**
   * Controlled checked state.
   */
  checked?: boolean;

  /**
   * Uncontrolled default checked state.
   */
  defaultChecked?: boolean;

  /**
   * Callback fired when checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
}

