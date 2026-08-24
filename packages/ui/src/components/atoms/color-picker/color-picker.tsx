'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { 
  ColorPickerProps, 
  ColorPickerFormat 
} from '../../../interface/atoms/color-picker/color-picker.types';
import { 
  colorPickerContainerVariants, 
  colorPickerLabelVariants, 
  colorPickerWrapperVariants, 
  swatchVariants, 
  valueBadgeVariants 
} from './color-picker.styles';
import { CopyIcon, CheckIcon, Brush } from '@core-circle/icons';

// Default designer presets
const DEFAULT_PRESETS = [
  '#3B82F6', // Blue
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#06B6D4', // Cyan
  '#0F172A', // Slate Dark
];

// Helper: Hex to RGB
function hexToRgb(hex: string): string {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

// Helper: Hex to HSL
function hexToHsl(hex: string): string {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  let r = ((num >> 16) & 255) / 255;
  let g = ((num >> 8) & 255) / 255;
  let b = (num & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      value: controlledValue,
      defaultValue = '#3B82F6',
      label,
      variant = 'outline',
      size = 'md',
      shape = 'rounded',
      mode = 'input',
      format = 'hex',
      showValue = true,
      allowFormatSwitch = false,
      showPresets = false,
      presets = DEFAULT_PRESETS,
      showEyeDropper = false,
      showAlpha = false,
      alpha = 100,
      onAlphaChange,
      copyable = true,
      error,
      helperText,
      disabled = false,
      onChange,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [internalColor, setInternalColor] = React.useState<string>(
      controlledValue || defaultValue
    );
    const [internalAlpha, setInternalAlpha] = React.useState<number>(alpha);
    const [activeFormat, setActiveFormat] = React.useState<ColorPickerFormat>(format);
    const [copied, setCopied] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalColor(controlledValue);
      }
    }, [controlledValue]);

    React.useEffect(() => {
      if (alpha !== undefined) {
        setInternalAlpha(alpha);
      }
    }, [alpha]);

    const activeColor = controlledValue !== undefined ? controlledValue : internalColor;

    const handleColorChange = (newColor: string) => {
      setInternalColor(newColor);
      onChange?.(newColor);
    };

    const handleNativeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleColorChange(e.target.value);
    };

    const handleSwatchClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const handleAlphaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = Number(e.target.value);
      setInternalAlpha(val);
      onAlphaChange?.(val);
    };

    const handleCopy = async (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!copyable) return;
      try {
        const textToCopy = getFormattedValue();
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } catch {
        // clipboard access rejected or not available
      }
    };

    const cycleFormat = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!allowFormatSwitch) return;
      setActiveFormat((prev) => {
        if (prev === 'hex') return 'rgb';
        if (prev === 'rgb') return 'hsl';
        return 'hex';
      });
    };

    const handleEyeDropper = async (e: React.MouseEvent) => {
      e.stopPropagation();
      if (typeof window !== 'undefined' && 'EyeDropper' in window) {
        try {
          const eyeDropper = new (window as any).EyeDropper();
          const result = await eyeDropper.open();
          if (result?.sRGBHex) {
            handleColorChange(result.sRGBHex);
          }
        } catch {
          // eye dropper cancelled
        }
      }
    };

    const getFormattedValue = () => {
      if (activeFormat === 'rgb') return hexToRgb(activeColor);
      if (activeFormat === 'hsl') return hexToHsl(activeColor);
      return activeColor.toUpperCase();
    };

    const isStudio = variant === 'studio' || mode === 'inline';
    const displayPresets = showPresets || isStudio;
    const displayAlpha = showAlpha || isStudio;

    return (
      <div 
        className={cn(colorPickerContainerVariants({ disabled }), className)} 
        style={style}
      >
        {label && (
          <label className={cn(colorPickerLabelVariants({ hasError: !!error }))}>
            <span>{label}</span>
            {allowFormatSwitch && (
              <span 
                onClick={cycleFormat}
                className="text-[10px] uppercase font-mono text-core-circle-primary cursor-pointer hover:underline"
              >
                [{activeFormat}]
              </span>
            )}
          </label>
        )}

        <div className={cn(colorPickerWrapperVariants({ variant, hasError: !!error }))}>
          {/* Top Row: Swatch + Value display + Copy / EyeDropper */}
          <div className="flex items-center gap-3 w-full justify-between">
            <div className="flex items-center gap-3">
              {/* Swatch Preview Button */}
              <div 
                className={cn(swatchVariants({ shape, size }))}
                style={{ 
                  backgroundColor: activeColor,
                  opacity: displayAlpha ? internalAlpha / 100 : 1
                }}
                onClick={handleSwatchClick}
                aria-label="Select color"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Formatted Color String & Copy Action */}
              {showValue && (
                <div 
                  onClick={copyable ? handleCopy : cycleFormat}
                  className={cn(valueBadgeVariants({ size }))}
                  title={copyable ? "Click to copy" : undefined}
                >
                  <span>{getFormattedValue()}</span>
                  {copyable && (
                    <span className="text-core-circle-text-muted hover:text-core-circle-primary transition-colors">
                      {copied ? (
                        <CheckIcon size={14} className="text-emerald-600 animate-in zoom-in" />
                      ) : (
                        <CopyIcon size={14} />
                      )}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Optional Screen EyeDropper Tool */}
            {showEyeDropper && (
              <button
                type="button"
                onClick={handleEyeDropper}
                className="p-1.5 rounded-core-circle-md text-core-circle-text-muted hover:text-core-circle-primary hover:bg-core-circle-bg-page transition-colors cursor-pointer"
                title="Sample color from screen"
              >
                <Brush size={16} />
              </button>
            )}
          </div>

          {/* Hidden native color input trigger */}
          <input
            {...props}
            ref={(el) => {
              (inputRef as any).current = el;
              if (typeof ref === 'function') ref(el);
              else if (ref) (ref as any).current = el;
            }}
            type="color"
            value={activeColor.slice(0, 7)}
            onChange={handleNativeInputChange}
            disabled={disabled}
            className="sr-only"
          />

          {/* Opacity / Alpha Slider */}
          {displayAlpha && (
            <div className="w-full flex flex-col gap-1 pt-2 border-t border-core-circle-border-main/40">
              <div className="flex justify-between text-[11px] font-core-circle-bold text-core-circle-text-muted">
                <span>Opacity</span>
                <span className="font-mono">{internalAlpha}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={internalAlpha}
                onChange={handleAlphaChange}
                disabled={disabled}
                className="w-full h-1.5 bg-core-circle-border-main rounded-lg appearance-none cursor-pointer accent-core-circle-primary"
              />
            </div>
          )}

          {/* Preset Swatches Palette */}
          {displayPresets && presets && presets.length > 0 && (
            <div className="w-full pt-2 border-t border-core-circle-border-main/40">
              <div className="text-[10px] uppercase font-core-circle-bold tracking-wider text-core-circle-text-muted mb-1.5">
                Palette Presets
              </div>
              <div className="flex flex-wrap gap-1.5 items-center">
                {presets.map((presetHex) => {
                  const isSelected = activeColor.toLowerCase() === presetHex.toLowerCase();
                  return (
                    <button
                      key={presetHex}
                      type="button"
                      onClick={() => handleColorChange(presetHex)}
                      className={cn(
                        "w-6 h-6 rounded-core-circle-md border transition-all hover:scale-110 active:scale-95 cursor-pointer relative",
                        isSelected 
                          ? "border-core-circle-primary ring-2 ring-core-circle-primary/30 scale-105" 
                          : "border-black/10 hover:border-core-circle-border-strong"
                      )}
                      style={{ backgroundColor: presetHex }}
                      aria-label={`Preset ${presetHex}`}
                    >
                      {isSelected && (
                        <CheckIcon size={12} className="text-white mx-auto drop-shadow-md" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Error / Helper text */}
        {(error || helperText) && (
          <p className={cn(
            "mt-1 text-[11px] font-core-circle-medium transition-all duration-200",
            error ? "text-core-circle-warning" : "text-core-circle-text-muted"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
