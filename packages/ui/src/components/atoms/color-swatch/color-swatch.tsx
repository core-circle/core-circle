'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  ColorSwatchProps,
  SwatchItem,
} from '../../../interface/atoms/color-swatch/color-swatch.types';
import { colorSwatchTileVariants } from './color-swatch.styles';
import { CheckIcon } from '@core-circle/icons';
import { Label } from '../label/label';

export function isLightColor(color: string): boolean {
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 160;
    }
  }
  return false;
}

export const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(
  (
    {
      className,
      colors = [],
      value,
      defaultValue,
      onChange,
      shape = 'circle',
      size = 'md',
      columns,
      disabled = false,
      label,
      helperText,
      ...props
    },
    ref
  ) => {
    const parseColor = (item: SwatchItem) => {
      return typeof item === 'string' ? { label: item, value: item } : item;
    };

    const [selectedColor, setSelectedColor] = React.useState<string>(() => {
      if (value !== undefined) return value;
      if (defaultValue !== undefined) return defaultValue;
      return colors.length > 0 ? parseColor(colors[0]).value : '';
    });

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedColor(value);
      }
    }, [value]);

    const handleSelect = (colorValue: string) => {
      if (disabled) return;
      if (value === undefined) {
        setSelectedColor(colorValue);
      }
      onChange?.(colorValue);
    };

    return (
      <div className="flex flex-col gap-1.5 w-auto">
        {label && <Label>{label}</Label>}

        <div
          {...props}
          ref={ref}
          role="radiogroup"
          aria-label={label}
          style={
            columns
              ? { display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
              : undefined
          }
          className={cn(
            columns ? 'gap-2.5' : 'flex flex-wrap items-center gap-2.5',
            className
          )}
        >
          {colors.map((item) => {
            const { label: itemLabel, value: itemValue } = parseColor(item);
            const isActive = itemValue.toLowerCase() === selectedColor.toLowerCase();
            const light = isLightColor(itemValue);

            return (
              <button
                key={itemValue}
                type="button"
                role="radio"
                aria-checked={isActive}
                aria-label={itemLabel}
                title={itemLabel}
                disabled={disabled}
                onClick={() => handleSelect(itemValue)}
                style={{ backgroundColor: itemValue }}
                className={cn(
                  colorSwatchTileVariants({ shape, size, active: isActive })
                )}
              >
                {isActive && (
                  <CheckIcon
                    size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14}
                    className={cn(
                      'stroke-[3]',
                      light ? 'text-slate-900' : 'text-white'
                    )}
                  />
                )}
              </button>
            );
          })}
        </div>

        {helperText && (
          <span className="text-xs text-core-circle-text-muted">{helperText}</span>
        )}
      </div>
    );
  }
);

ColorSwatch.displayName = 'ColorSwatch';
export default ColorSwatch;
