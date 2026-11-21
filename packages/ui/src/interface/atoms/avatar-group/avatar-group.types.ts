import * as React from 'react';
import { AvatarProps, AvatarSize } from '../avatar/avatar.types';

export type AvatarGroupSize = AvatarSize;
export type AvatarGroupVariant = 
  | 'default'
  | 'bordered'
  | 'ring'
  | 'glow'
  | 'glassmorphic'
  | 'gradient'
  | 'compact'
  | 'relaxed'
  | 'dark'
  | 'pill';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: AvatarGroupSize;
  variant?: AvatarGroupVariant;
  spacing?: 'compact' | 'normal' | 'relaxed';
  items?: Array<{
    src?: string;
    alt?: string;
    fallback?: string;
    name?: string;
    shape?: AvatarProps['shape'];
    status?: AvatarProps['status'];
  }>;
  children?: React.ReactNode;
  renderOverflow?: (count: number) => React.ReactNode;
}
