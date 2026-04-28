import { ReactNode } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'square' | 'rounded';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps {
  /**
   * The image source for the avatar
   */
  src?: string;
  /**
   * Alternative text for the image
   */
  alt?: string;
  /**
   * The name of the user, used to generate initials if image is missing
   */
  name?: string;
  /**
   * The size of the avatar
   * @default 'md'
   */
  size?: AvatarSize;
  /**
   * The shape of the avatar
   * @default 'circle'
   */
  shape?: AvatarShape;
  /**
   * Optional status indicator
   */
  status?: AvatarStatus;
  /**
   * Custom initials to display
   */
  initials?: string;
  /**
   * Whether to show a border around the avatar
   * @default false
   */
  bordered?: boolean;
  /**
   * Custom fallback icon or element
   */
  fallback?: ReactNode;
  /**
   * Additional class names for the container
   */
  className?: string;
  /**
   * Additional class names for the image
   */
  imageClassName?: string;
  /**
   * Callback when image fails to load
   */
  onError?: () => void;
}
