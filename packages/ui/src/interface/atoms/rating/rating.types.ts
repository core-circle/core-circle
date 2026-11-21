import * as React from 'react';

export type RatingSize = 'sm' | 'md' | 'lg' | 'xl';
export type RatingVariant = 
  | 'default'
  | 'amber'
  | 'gold'
  | 'rose'
  | 'emerald'
  | 'indigo'
  | 'gradient'
  | 'glow'
  | 'glassmorphic'
  | 'dark';

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: number;
  defaultValue?: number;
  max?: number;
  allowHalf?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: RatingSize;
  variant?: RatingVariant;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  showScore?: boolean;
  scoreText?: (value: number, max: number) => string;
  onChange?: (value: number) => void;
}
