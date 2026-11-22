'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { ChipProps } from '../../../interface/atoms/chip/chip.types';
import { chipVariants } from './chip.styles';
import { XIcon, CheckIcon } from '@core-circle/icons';

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      className,
      label,
      selected: controlledSelected,
      defaultChecked,
      removable = false,
      onRemove,
      onSelect,
      icon,
      count,
      variant = 'default',
      size = 'md',
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isSelected, setIsSelected] = React.useState<boolean>(
      controlledSelected ?? !!defaultChecked
    );

    React.useEffect(() => {
      if (controlledSelected !== undefined) {
        setIsSelected(controlledSelected);
      }
    }, [controlledSelected]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      const next = !isSelected;
      if (controlledSelected === undefined) {
        setIsSelected(next);
      }
      onSelect?.(next);
      onClick?.(e);
    };

    const handleRemoveClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (disabled) return;
      onRemove?.(e);
    };

    const effectiveSelected = controlledSelected !== undefined ? controlledSelected : isSelected;

    return (
      <button
        {...props}
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={handleClick}
        aria-pressed={effectiveSelected}
        className={cn(
          chipVariants({
            variant: effectiveSelected ? 'default' : variant,
            selected: effectiveSelected,
            size,
          }),
          className
        )}
      >
        {/* Leading Selected Check or Custom Icon */}
        {effectiveSelected && !icon ? (
          <CheckIcon size={size === 'sm' ? 10 : 12} className="shrink-0 stroke-[2.5]" />
        ) : icon ? (
          <span className="shrink-0 leading-none">{icon}</span>
        ) : null}

        {/* Chip Label */}
        <span>{label}</span>

        {/* Count Badge */}
        {count !== undefined && (
          <span
            className={cn(
              'px-1.5 py-0.2 text-[10px] font-bold rounded-full select-none leading-tight',
              effectiveSelected
                ? 'bg-white/20 text-white'
                : 'bg-slate-200/80 text-slate-700'
            )}
          >
            {count}
          </span>
        )}

        {/* Remove Button */}
        {removable && (
          <span
            role="button"
            tabIndex={0}
            aria-label="Remove filter"
            onClick={handleRemoveClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleRemoveClick(e as any);
              }
            }}
            className={cn(
              'p-0.5 rounded-full hover:bg-black/15 transition-colors shrink-0 ml-0.5 cursor-pointer',
              effectiveSelected && 'hover:bg-white/25'
            )}
          >
            <XIcon size={size === 'sm' ? 10 : 12} />
          </span>
        )}
      </button>
    );
  }
);

Chip.displayName = 'Chip';
export default Chip;
