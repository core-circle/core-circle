'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { AvatarProps } from '../../../interface/atoms/avatar/avatar.types';
import {
  avatarContainerVariants,
  avatarImageVariants,
  avatarFallbackVariants,
  avatarStatusVariants,
} from './avatar.styles';

const getInitials = (name: string) => {
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      name,
      size = 'md',
      shape = 'circle',
      status,
      initials: customInitials,
      bordered = false,
      fallback,
      className,
      imageClassName,
      onError,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = React.useState(false);

    const handleImageError = () => {
      setHasError(true);
      onError?.();
    };

    const renderFallback = () => {
      if (fallback) return fallback;
      if (customInitials) return customInitials;
      if (name) return getInitials(name);
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-1/2 w-1/2 opacity-40"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(avatarContainerVariants({ size, shape, bordered }), className)}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt || name || 'avatar'}
            className={cn(avatarImageVariants({ shape }), imageClassName)}
            onError={handleImageError}
          />
        ) : (
          <div className={cn(avatarFallbackVariants({ shape }))}>
            {renderFallback()}
          </div>
        )}

        {status && (
          <span
            className={cn(avatarStatusVariants({ status, size }))}
            role="status"
            aria-label={status}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
