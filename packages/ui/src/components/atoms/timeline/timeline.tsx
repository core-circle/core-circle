'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TimelineProps } from '../../../interface/atoms/timeline/timeline.types';
import {
  timelineNodeVariants,
} from './timeline.styles';
import { CheckIcon, CircleDot, AlertTriangle } from '@core-circle/icons';

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      items = [],
      orientation = 'vertical',
      variant = 'solid',
      size = 'md',
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="list"
        aria-label="Timeline milestones"
        className={cn(
          'relative w-full',
          orientation === 'horizontal' ? 'flex flex-row items-start gap-8 overflow-x-auto pb-4' : 'flex flex-col',
          className
        )}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const status = item.status || 'upcoming';

          const defaultIcon = () => {
            const iconSize = size === 'sm' ? 12 : size === 'md' ? 14 : 16;
            if (status === 'completed') return <CheckIcon size={iconSize} />;
            if (status === 'current') return <CircleDot size={iconSize} />;
            if (status === 'error') return <AlertTriangle size={iconSize} />;
            return <span className="w-2 h-2 rounded-full bg-slate-300" />;
          };

          if (orientation === 'horizontal') {
            return (
              <div
                key={item.id}
                role="listitem"
                className={cn('relative flex flex-col items-start min-w-[200px]', item.className)}
              >
                {/* Connecting Track to Next Node */}
                {!isLast && (
                  <div
                    className={cn(
                      'absolute top-4 left-8 right-0 h-0.5',
                      variant === 'dashed' ? 'border-b-2 border-dashed border-slate-300' : 'bg-slate-200'
                    )}
                  />
                )}

                {/* Node Milestone */}
                <div className={cn(timelineNodeVariants({ status, size }))}>
                  {item.icon || defaultIcon()}
                </div>

                {/* Content */}
                <div className="mt-3 flex flex-col gap-1 pr-4">
                  {item.timestamp && (
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      {item.timestamp}
                    </span>
                  )}
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                  {item.description && (
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.description}</p>
                  )}
                  {item.badge && <div className="mt-1">{item.badge}</div>}
                </div>
              </div>
            );
          }

          // Vertical Orientation
          return (
            <div
              key={item.id}
              role="listitem"
              className={cn('relative flex items-start gap-4 pb-8 last:pb-0', item.className)}
            >
              {/* Connecting Track to Next Node */}
              {!isLast && (
                <div
                  className={cn(
                    'absolute left-4 top-8 bottom-0 w-0.5 -ml-[1px]',
                    variant === 'dashed' ? 'border-l-2 border-dashed border-slate-300' : 'bg-slate-200'
                  )}
                />
              )}

              {/* Node Milestone */}
              <div className={cn(timelineNodeVariants({ status, size }))}>
                {item.icon || defaultIcon()}
              </div>

              {/* Content Box */}
              <div className="flex flex-col flex-1 min-w-0 pt-0.5 gap-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                  {item.timestamp && (
                    <span className="text-[11px] font-medium text-slate-400">
                      {item.timestamp}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                )}

                {item.badge && <div className="mt-1">{item.badge}</div>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';

export default Timeline;
