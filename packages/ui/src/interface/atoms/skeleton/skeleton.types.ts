import * as React from 'react';

export type SkeletonVariant = 
  | 'default' 
  | 'rectangular' 
  | 'circular' 
  | 'text' 
  | 'card' 
  | 'avatar' 
  | 'button' 
  | 'badge' 
  | 'image' 
  | 'glassmorphic' 
  | 'gradient' 
  | 'dark';

export type SkeletonAnimation = 'shimmer' | 'pulse' | 'wave' | 'glow' | 'none';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Shape and surface styling of the skeleton
   * @default 'default'
   */
  variant?: SkeletonVariant;

  /**
   * Animation style applied to the skeleton
   * @default 'shimmer'
   */
  animation?: SkeletonAnimation;

  /**
   * If true, shows the skeleton shimmer. If false, shows the children.
   * @default true
   */
  loading?: boolean;

  /**
   * Width of the skeleton.
   */
  width?: string | number;

  /**
   * Height of the skeleton.
   */
  height?: string | number;

  /**
   * Custom border radius.
   */
  borderRadius?: string | number;
}

