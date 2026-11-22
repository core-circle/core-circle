'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { SparklineProps } from '../../../interface/atoms/sparkline/sparkline.types';
import { sparklineColorMap } from './sparkline.styles';

export const Sparkline = React.forwardRef<SVGSVGElement, SparklineProps>(
  (
    {
      data = [],
      type = 'line',
      color = 'primary',
      width = 120,
      height = 36,
      strokeWidth = 2,
      curve = 'smooth',
      showLastPoint = true,
      showPoints = false,
      gradient = true,
      className,
    },
    ref
  ) => {
    const id = React.useId();
    const gradientId = `sparkline-grad-${id.replace(/:/g, '')}`;

    const numWidth = typeof width === 'number' ? width : 120;
    const numHeight = typeof height === 'number' ? height : 36;
    const padding = 4;

    const colors = sparklineColorMap[color] || sparklineColorMap.primary;

    // Normalize coordinates
    const points = React.useMemo(() => {
      if (!data || data.length === 0) return [];
      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min || 1;

      const innerWidth = numWidth - padding * 2;
      const innerHeight = numHeight - padding * 2;

      const step = data.length > 1 ? innerWidth / (data.length - 1) : innerWidth;

      return data.map((val, idx) => {
        const x = padding + idx * step;
        const normalizedY = (val - min) / range;
        const y = padding + innerHeight - normalizedY * innerHeight;
        return { x, y, value: val };
      });
    }, [data, numWidth, numHeight, padding]);

    // Path generators
    const pathD = React.useMemo(() => {
      if (points.length < 2) return '';

      if (curve === 'linear') {
        return points.reduce((acc, pt, idx) => {
          return `${acc} ${idx === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
        }, '');
      }

      // Smooth Bezier Curve
      return points.reduce((acc, pt, idx, arr) => {
        if (idx === 0) return `M ${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
        const prev = arr[idx - 1];
        const cpX1 = (prev.x + (pt.x - prev.x) / 2).toFixed(1);
        const cpY1 = prev.y.toFixed(1);
        const cpX2 = cpX1;
        const cpY2 = pt.y.toFixed(1);
        return `${acc} C ${cpX1},${cpY1} ${cpX2},${cpY2} ${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
      }, '');
    }, [points, curve]);

    const areaD = React.useMemo(() => {
      if (!pathD || points.length < 2) return '';
      const last = points[points.length - 1];
      const first = points[0];
      const bottom = numHeight - padding;
      return `${pathD} L ${last.x.toFixed(1)},${bottom} L ${first.x.toFixed(1)},${bottom} Z`;
    }, [pathD, points, numHeight, padding]);

    // Bar chart layout calculations
    const bars = React.useMemo(() => {
      if (type !== 'bar' || !data || data.length === 0) return [];
      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min || 1;

      const innerWidth = numWidth - padding * 2;
      const innerHeight = numHeight - padding * 2;
      const barWidth = Math.max(2, (innerWidth / data.length) * 0.7);
      const spacing = innerWidth / data.length;

      return data.map((val, idx) => {
        const normalizedHeight = ((val - min) / range) * innerHeight;
        const barHeight = Math.max(3, normalizedHeight);
        const x = padding + idx * spacing + (spacing - barWidth) / 2;
        const y = padding + innerHeight - barHeight;
        return { x, y, width: barWidth, height: barHeight, value: val };
      });
    }, [type, data, numWidth, numHeight, padding]);

    if (!data || data.length === 0) {
      return (
        <svg
          ref={ref}
          width={width}
          height={height}
          viewBox={`0 0 ${numWidth} ${numHeight}`}
          className={cn('inline-block overflow-visible', className)}
        />
      );
    }

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`0 0 ${numWidth} ${numHeight}`}
        role="img"
        aria-label="Sparkline Trend Chart"
        className={cn('inline-block overflow-visible select-none shrink-0', className)}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.stopColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colors.stopColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {type === 'bar' ? (
          bars.map((bar, i) => (
            <rect
              key={i}
              x={bar.x}
              y={bar.y}
              width={bar.width}
              height={bar.height}
              rx={1.5}
              fill={colors.stroke}
              className="transition-all duration-200 opacity-80 hover:opacity-100"
            />
          ))
        ) : (
          <>
            {/* Area Fill */}
            {type === 'area' && areaD && (
              <path
                d={areaD}
                fill={gradient ? `url(#${gradientId})` : colors.fill}
                stroke="none"
              />
            )}

            {/* Line Stroke */}
            <path
              d={pathD}
              fill="none"
              stroke={colors.stroke}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* All Points */}
            {showPoints &&
              points.map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r={strokeWidth * 1.2}
                  fill="#ffffff"
                  stroke={colors.stroke}
                  strokeWidth={strokeWidth}
                />
              ))}

            {/* Final Highlight Point */}
            {showLastPoint && !showPoints && points.length > 0 && (
              <circle
                cx={points[points.length - 1].x}
                cy={points[points.length - 1].y}
                r={strokeWidth * 1.5}
                fill={colors.stroke}
              />
            )}
          </>
        )}
      </svg>
    );
  }
);

Sparkline.displayName = 'Sparkline';

export default Sparkline;
