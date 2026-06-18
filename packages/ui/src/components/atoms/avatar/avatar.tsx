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
import { Image } from '../image/image';
import { Typography } from '../typography/typography';
import { AvatarIcon } from '@core-circle/icons';

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
    const renderFallback = () => {
      if (fallback) return fallback;
      const content = customInitials || (name ? getInitials(name) : null);
      
      if (content) {
        return (
          <Typography variant="p" className="font-core-circle-bold">
            {content}
          </Typography>
        );
      }

      return (
        <AvatarIcon className="h-1/2 w-1/2 opacity-40" />
      );
    };

    return (
      <div
        ref={ref}
        className={cn(avatarContainerVariants({ size, shape, bordered }), className)}
        {...props}
      >
        <Image
          src={src || ''}
          alt={alt || name || 'avatar'}
          className={cn(avatarImageVariants({ shape }), imageClassName)}
          rounded={shape === 'circle' ? 'full' : (shape === 'rounded' ? 'md' : 'none')}
          onError={onError}
          fallback={
            <div className={cn(avatarFallbackVariants({ shape }))}>
              {renderFallback()}
            </div>
          }
        />

        {status && (
          <Typography
            as="span"
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
