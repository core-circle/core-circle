import { ImgHTMLAttributes, ReactNode } from 'react';

export type ImageVariant =
  | 'card'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'circular'
  | 'pill'
  | 'polaroid'
  | 'minimal'
  | 'bordered'
  | 'thumbnail';

export type ImageAspectRatio = '1:1' | '16:9' | '4:3' | '21:9' | '3:2' | 'auto';

export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The image source URL.
   */
  src?: string;

  /**
   * Accessible alternative text description.
   */
  alt?: string;

  /**
   * Visual style variant of the image frame.
   * @default 'card'
   */
  variant?: ImageVariant;

  /**
   * Constrained aspect ratio box.
   * @default 'auto'
   */
  aspectRatio?: ImageAspectRatio;

  /**
   * CSS object-fit sizing behavior.
   * @default 'cover'
   */
  fit?: ImageFit;

  /**
   * Border radius curvature scale.
   * @default 'xl'
   */
  rounded?: ImageRadius;

  /**
   * Custom fallback content rendered when the image fails to load.
   */
  fallback?: ReactNode;

  /**
   * Whether to animate a smooth scale zoom on hover.
   * @default false
   */
  zoomOnHover?: boolean;

  /**
   * Optional caption text or elements overlaying the bottom of the image.
   */
  caption?: ReactNode;

  /**
   * Optional badge or action element overlaid on top of the image.
   */
  overlay?: ReactNode;

  /**
   * Custom width constraint.
   */
  width?: string | number;

  /**
   * Custom height constraint.
   */
  height?: string | number;

  /**
   * Additional container class names.
   */
  className?: string;

  /**
   * Class name applied directly to the internal <img> tag.
   */
  imageClassName?: string;
}
