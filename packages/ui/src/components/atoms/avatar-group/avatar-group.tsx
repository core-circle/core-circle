'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { AvatarGroupProps } from '../../../interface/atoms/avatar-group/avatar-group.types';
import { 
  avatarGroupVariants, 
  avatarGroupItemVariants, 
  avatarGroupOverflowVariants 
} from './avatar-group.styles';
import { Avatar } from '../avatar/avatar';

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      max = 4,
      size = 'md',
      variant = 'default',
      spacing = 'normal',
      items,
      children,
      renderOverflow,
      className,
      ...props
    },
    ref
  ) => {
    // Collect child avatar elements or construct from items
    let avatarElements: React.ReactNode[] = [];

    if (items && items.length > 0) {
      avatarElements = items.map((item, index) => (
        <Avatar
          key={index}
          src={item.src}
          alt={item.alt || item.name}
          fallback={item.fallback || item.name?.charAt(0) || 'U'}
          size={size}
          shape={item.shape}
          status={item.status}
        />
      ));
    } else if (children) {
      avatarElements = React.Children.toArray(children).filter(React.isValidElement);
    }

    const totalCount = avatarElements.length;
    const visibleAvatars = avatarElements.slice(0, max);
    const overflowCount = totalCount - max;

    return (
      <div
        ref={ref}
        role="group"
        aria-label={`Group of ${totalCount} users`}
        className={cn(avatarGroupVariants({ spacing }), className)}
        {...props}
      >
        {visibleAvatars.map((avatar, idx) => (
          <div
            key={idx}
            className={cn(avatarGroupItemVariants({ variant, size }))}
            style={{ zIndex: totalCount - idx }}
          >
            {React.isValidElement(avatar)
              ? React.cloneElement(avatar as React.ReactElement<any>, {
                  size: (avatar.props as any)?.size || size,
                  className: cn('hover:scale-100', (avatar.props as any)?.className),
                })
              : avatar}
          </div>
        ))}

        {overflowCount > 0 && (
          renderOverflow ? (
            renderOverflow(overflowCount)
          ) : (
            <span
              aria-label={`+${overflowCount} more users`}
              className={cn(avatarGroupOverflowVariants({ variant, size }))}
              style={{ zIndex: 1 }}
            >
              +{overflowCount}
            </span>
          )
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
