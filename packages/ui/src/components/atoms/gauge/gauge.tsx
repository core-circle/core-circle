'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { GaugeProps } from '../../../interface/atoms/gauge/gauge.types';
import { gaugeContainerVariants } from './gauge.styles';

export const Gauge = React.forwardRef<HTMLDivElement, GaugeProps>(
  (
    {
      className,
      value,
      min = 0,
      max = 100,
      unit = '%',
      label,
      helperText,
      size = 180,
      strokeWidth = 14,
      color,
      thresholds,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(Math.max(value, min), max);
    const percentage = max > min ? (clampedValue - min) / (max - min) : 0;

    const center = size / 2;
    const radius = Math.max((size - strokeWidth) / 2 - 4, 10);
    const circumference = 2 * Math.PI * radius;
    const arcLength = circumference * 0.75; // 270 degrees arc
    const strokeDashoffset = arcLength * (1 - percentage);

    // Compute active arc stroke color
    const activeColor = React.useMemo(() => {
      if (color) return color;
      if (thresholds && thresholds.length > 0) {
        // Find matching threshold tier
        const sorted = [...thresholds].sort((a, b) => a.value - b.value);
        for (const t of sorted) {
          if (clampedValue <= t.value) return t.color;
        }
        return sorted[sorted.length - 1].color;
      }
      if (percentage < 0.6) return '#10b981'; // emerald
      if (percentage < 0.85) return '#f59e0b'; // amber
      return '#ef4444'; // red
    }, [color, thresholds, clampedValue, percentage]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(gaugeContainerVariants({ variant }), className)}
      >
        <div className="relative inline-flex items-center justify-center">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="transform"
          >
            {/* Background Track Arc */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={strokeWidth}
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeLinecap="round"
              style={{
                transformOrigin: `${center}px ${center}px`,
                transform: 'rotate(135deg)',
              }}
            />

            {/* Foreground Value Progression Arc */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={activeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
              style={{
                transformOrigin: `${center}px ${center}px`,
                transform: 'rotate(135deg)',
              }}
            />
          </svg>

          {/* Center Metric Readout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-2">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 leading-none">
              {clampedValue}
              <span className="text-base font-semibold text-slate-400 ml-0.5">{unit}</span>
            </span>
            {label && (
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                {label}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Helper Subtitle & Range Scale */}
        <div className="w-full flex items-center justify-between px-4 -mt-2 text-[11px] text-slate-400 font-mono">
          <span>{min}{unit}</span>
          <span>{max}{unit}</span>
        </div>

        {helperText && (
          <span className="text-xs text-core-circle-text-muted text-center mt-2 max-w-[200px]">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Gauge.displayName = 'Gauge';
export default Gauge;
