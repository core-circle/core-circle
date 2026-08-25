import { HTMLAttributes, ReactNode } from 'react';

export type StepperVariant = 
  | 'numbers' 
  | 'dots' 
  | 'circles' 
  | 'pill' 
  | 'gradient' 
  | 'glow' 
  | 'glassmorphic' 
  | 'cards' 
  | 'timeline' 
  | 'dark';

export interface StepItem {
  /**
   * Title of the step
   */
  title: string;
  /**
   * Optional description for the step
   */
  description?: string;
  /**
   * Optional icon to display instead of a number
   */
  icon?: ReactNode;
  /**
   * Status of the step
   * @default 'pending'
   */
  status?: 'pending' | 'active' | 'completed' | 'error';
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Array of step objects
   */
  steps: StepItem[];
  /**
   * The index of the currently active step (0-indexed)
   */
  activeStep: number;
  /**
   * Orientation of the stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Visual variant
   * @default 'numbers'
   */
  variant?: StepperVariant;
  /**
   * Whether to show the step description
   * @default true
   */
  showDescription?: boolean;
}

