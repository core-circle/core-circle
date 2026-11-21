'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { RatingProps } from '../../../interface/atoms/rating/rating.types';
import { 
  ratingContainerVariants, 
  ratingItemVariants, 
  ratingEmptyStyles, 
  ratingScoreStyles 
} from './rating.styles';
import { Star } from '@core-circle/icons';

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value: controlledValue,
      defaultValue = 0,
      max = 5,
      allowHalf = false,
      readOnly = false,
      disabled = false,
      size = 'md',
      variant = 'default',
      icon,
      emptyIcon,
      showScore = false,
      scoreText,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : uncontrolledValue;
    const displayValue = hoverValue !== null ? hoverValue : currentValue;

    const handleClick = (starIndex: number, isHalf: boolean) => {
      if (readOnly || disabled) return;
      const newValue = isHalf && allowHalf ? starIndex - 0.5 : starIndex;
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleMouseEnter = (starIndex: number, isHalf: boolean) => {
      if (readOnly || disabled) return;
      const newValue = isHalf && allowHalf ? starIndex - 0.5 : starIndex;
      setHoverValue(newValue);
    };

    const handleMouseLeave = () => {
      if (readOnly || disabled) return;
      setHoverValue(null);
    };

    const renderStar = (index: number) => {
      const starIndex = index + 1;
      const isFilled = displayValue >= starIndex;
      const isHalf = allowHalf && displayValue === starIndex - 0.5;

      const activeIcon = icon || <Star size={size === 'sm' ? 16 : size === 'lg' ? 24 : size === 'xl' ? 32 : 20} className="fill-current" />;
      const inactiveIcon = emptyIcon || <Star size={size === 'sm' ? 16 : size === 'lg' ? 24 : size === 'xl' ? 32 : 20} className={ratingEmptyStyles} />;

      return (
        <div
          key={index}
          className={cn(
            ratingItemVariants({ variant, size }),
            !readOnly && !disabled && 'cursor-pointer transform hover:scale-110'
          )}
          onMouseLeave={handleMouseLeave}
        >
          {allowHalf && !readOnly && !disabled ? (
            <div className="relative inline-flex items-center justify-center">
              {/* Left Half Hitbox */}
              <div
                className="absolute left-0 top-0 w-1/2 h-full z-10"
                onClick={() => handleClick(starIndex, true)}
                onMouseEnter={() => handleMouseEnter(starIndex, true)}
              />
              {/* Right Half Hitbox */}
              <div
                className="absolute right-0 top-0 w-1/2 h-full z-10"
                onClick={() => handleClick(starIndex, false)}
                onMouseEnter={() => handleMouseEnter(starIndex, false)}
              />
              {isFilled ? activeIcon : isHalf ? (
                <div className="relative">
                  {inactiveIcon}
                  <div className="absolute inset-0 overflow-hidden w-1/2 text-inherit">
                    {activeIcon}
                  </div>
                </div>
              ) : inactiveIcon}
            </div>
          ) : (
            <div
              onClick={() => handleClick(starIndex, false)}
              onMouseEnter={() => handleMouseEnter(starIndex, false)}
            >
              {isFilled ? activeIcon : isHalf ? (
                <div className="relative">
                  {inactiveIcon}
                  <div className="absolute inset-0 overflow-hidden w-1/2 text-inherit">
                    {activeIcon}
                  </div>
                </div>
              ) : inactiveIcon}
            </div>
          )}
        </div>
      );
    };

    const formattedScore = scoreText
      ? scoreText(currentValue, max)
      : `${currentValue.toFixed(allowHalf ? 1 : 0)} / ${max}`;

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={`Rating: ${currentValue} of ${max}`}
        className={cn(ratingContainerVariants({ disabled, readOnly }), className)}
        {...props}
      >
        <div className="inline-flex items-center gap-1">
          {Array.from({ length: max }, (_, i) => renderStar(i))}
        </div>
        {showScore && (
          <span className={cn(ratingScoreStyles, size === 'sm' ? 'text-xs' : 'text-sm')}>
            {formattedScore}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = 'Rating';
