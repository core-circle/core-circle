import * as React from 'react';

export type TagInputVariant = 
  | 'outline'
  | 'pills'
  | 'gradient'
  | 'glow'
  | 'glassmorphic'
  | 'subtle'
  | 'dark'
  | 'bordered'
  | 'accent'
  | 'minimal';

export interface TagInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string[];
  defaultValue?: string[];
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: boolean | string;
  variant?: TagInputVariant;
  maxTags?: number;
  allowDuplicates?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  delimiter?: string | RegExp;
  onChange?: (tags: string[]) => void;
  onTagAdd?: (tag: string) => void;
  onTagRemove?: (tag: string, index: number) => void;
}
