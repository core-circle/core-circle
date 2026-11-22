'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CountdownProps } from '../../../interface/atoms/countdown/countdown.types';
import { countdownContainerVariants } from './countdown.styles';

function padTwo(num: number): string {
  return String(num).padStart(2, '0');
}

export const Countdown = React.forwardRef<HTMLDivElement, CountdownProps>(
  (
    {
      className,
      targetDate,
      onFinish,
      showDays = true,
      showLabels = true,
      size = 'md',
      variant = 'boxes',
      ...props
    },
    ref
  ) => {
    const targetTimestamp = React.useMemo(() => {
      return new Date(targetDate).getTime();
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = React.useState<number>(() => {
      return Math.max(0, targetTimestamp - Date.now());
    });

    const finishedRef = React.useRef(false);

    React.useEffect(() => {
      const interval = setInterval(() => {
        const remaining = Math.max(0, targetTimestamp - Date.now());
        setTimeLeft(remaining);

        if (remaining === 0 && !finishedRef.current) {
          finishedRef.current = true;
          onFinish?.();
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [targetTimestamp, onFinish]);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    const segments = React.useMemo(() => {
      const list = [
        { label: 'Hours', value: padTwo(hours) },
        { label: 'Minutes', value: padTwo(minutes) },
        { label: 'Seconds', value: padTwo(seconds) },
      ];
      if (showDays) {
        list.unshift({ label: 'Days', value: padTwo(days) });
      }
      return list;
    }, [days, hours, minutes, seconds, showDays]);

    if (variant === 'minimal') {
      return (
        <div
          {...props}
          ref={ref}
          className={cn(countdownContainerVariants({ variant, size }), className)}
        >
          {segments.map((seg, idx) => (
            <React.Fragment key={seg.label}>
              <span>{seg.value}</span>
              {idx < segments.length - 1 && <span className="opacity-40">:</span>}
            </React.Fragment>
          ))}
        </div>
      );
    }

    return (
      <div
        {...props}
        ref={ref}
        className={cn(countdownContainerVariants({ variant, size }), className)}
      >
        {segments.map((seg, idx) => (
          <React.Fragment key={seg.label}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex items-center justify-center font-bold font-mono tracking-tight text-slate-900',
                  variant === 'boxes' &&
                    'bg-slate-100/90 border border-slate-200/80 rounded-xl shadow-xs',
                  variant === 'cards' &&
                    'bg-slate-50 border border-slate-200 rounded-xl shadow-sm',
                  size === 'sm' && 'w-9 h-9 text-sm',
                  size === 'md' && 'w-14 h-14 text-xl',
                  size === 'lg' && 'w-20 h-20 text-3xl'
                )}
              >
                {seg.value}
              </div>
              {showLabels && (
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-1.5">
                  {seg.label}
                </span>
              )}
            </div>
            {idx < segments.length - 1 && (
              <span
                className={cn(
                  'font-bold text-slate-400 select-none pb-4',
                  size === 'sm' && 'text-sm pb-3',
                  size === 'md' && 'text-xl pb-4',
                  size === 'lg' && 'text-3xl pb-5'
                )}
              >
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);

Countdown.displayName = 'Countdown';
export default Countdown;
