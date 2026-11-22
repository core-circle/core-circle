'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TrendBadgeProps, TrendDirection } from '../../../interface/atoms/trend-badge/trend-badge.types';
import { trendBadgeVariants } from './trend-badge.styles';
import { ArrowUpRight, ArrowDownRight, Minus } from '@core-circle/icons';

export const TrendBadge = React.forwardRef<HTMLSpanElement, TrendBadgeProps>(
  (
    {
      value,
      trend,
      variant = 'soft',
      size = 'sm',
      showIcon = true,
      icon,
      prefix,
      suffix,
      invertColors = false,
      className,
    },
    ref
  ) => {
    // Inferred trend if not provided
    const resolvedTrend: TrendDirection = React.useMemo(() => {
      if (trend) return trend;
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed.startsWith('+')) return 'up';
        if (trimmed.startsWith('-')) return 'down';
      }
      return 'neutral';
    }, [trend, value]);

    // Invert semantic color if desired (e.g. latency, error rates, churn)
    const effectiveTrend: TrendDirection = React.useMemo(() => {
      if (!invertColors) return resolvedTrend;
      if (resolvedTrend === 'up') return 'down';
      if (resolvedTrend === 'down') return 'up';
      return 'neutral';
    }, [resolvedTrend, invertColors]);

    const defaultIcon = React.useMemo(() => {
      const iconSize = size === 'xs' ? 10 : size === 'sm' ? 12 : size === 'md' ? 14 : 16;
      if (resolvedTrend === 'up') return <ArrowUpRight size={iconSize} />;
      if (resolvedTrend === 'down') return <ArrowDownRight size={iconSize} />;
      return <Minus size={iconSize} />;
    }, [resolvedTrend, size]);

    return (
      <span
        ref={ref}
        className={cn(
          trendBadgeVariants({ variant, trend: effectiveTrend, size }),
          className
        )}
      >
        {showIcon && (icon !== undefined ? icon : defaultIcon)}
        {prefix && <span className="opacity-90">{prefix}</span>}
        <span>{value}</span>
        {suffix && <span className="opacity-75 font-normal ml-0.5">{suffix}</span>}
      </span>
    );
  }
);

TrendBadge.displayName = 'TrendBadge';

export default TrendBadge;
