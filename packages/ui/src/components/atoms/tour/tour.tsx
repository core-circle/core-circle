'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  TourProps,
  HotspotProps,
} from '../../../interface/atoms/tour/tour.types';
import { tourCardVariants, hotspotVariants } from './tour.styles';
import { ArrowRight, ArrowLeft, XIcon, CheckIcon, Sparkles } from '@core-circle/icons';
import { Button } from '../button/button';

export const Hotspot = React.forwardRef<HTMLButtonElement, HotspotProps>(
  ({ className, size = 'md', color = 'primary', pulse = true, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className={cn(hotspotVariants({ size, color }), 'relative', className)}
      >
        {pulse && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-75 animate-ping" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </button>
    );
  }
);
Hotspot.displayName = 'Hotspot';

export interface TourComponent
  extends React.ForwardRefExoticComponent<TourProps & React.RefAttributes<HTMLDivElement>> {
  Hotspot: typeof Hotspot;
}

export const Tour = React.forwardRef<HTMLDivElement, TourProps>(
  (
    {
      className,
      steps = [],
      currentStep: controlledStep,
      open = true,
      onClose,
      onStepChange,
      onFinish,
      showSkip = true,
      prevLabel = 'Back',
      nextLabel = 'Next',
      finishLabel = 'Get Started',
      skipLabel = 'Skip Tour',
      variant = 'card',
      ...props
    },
    ref
  ) => {
    const [stepIndex, setStepIndex] = React.useState<number>(controlledStep || 0);

    React.useEffect(() => {
      if (controlledStep !== undefined) {
        setStepIndex(controlledStep);
      }
    }, [controlledStep]);

    if (!open || steps.length === 0) return null;

    const current = steps[stepIndex] || steps[0];
    const isFirst = stepIndex === 0;
    const isLast = stepIndex === steps.length - 1;

    const handleNext = () => {
      if (isLast) {
        onFinish?.();
        onClose?.();
      } else {
        const next = stepIndex + 1;
        setStepIndex(next);
        onStepChange?.(next);
      }
    };

    const handlePrev = () => {
      if (!isFirst) {
        const prev = stepIndex - 1;
        setStepIndex(prev);
        onStepChange?.(prev);
      }
    };

    return (
      <div
        {...props}
        ref={ref}
        role="dialog"
        aria-label="Product Tour"
        className={cn(tourCardVariants({ variant }), className)}
      >
        {/* Header with Step Indicator & Dismiss */}
        <div className="flex items-center justify-between w-full mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-core-circle-primary uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
              <Sparkles size={12} /> Step {stepIndex + 1} of {steps.length}
            </span>
            {current.badge && (
              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                {current.badge}
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label="Close tour"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <XIcon size={14} />
          </button>
        </div>

        {/* Step Title & Body Content */}
        <div className="flex flex-col gap-1.5 mb-5">
          <h4 className="text-base font-bold text-slate-900 tracking-tight">
            {current.title}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Step Progress Dots */}
        <div className="flex items-center gap-1.5 mb-5">
          {steps.map((_, idx) => (
            <span
              key={idx}
              className={cn(
                'h-1.5 rounded-full transition-all duration-200',
                idx === stepIndex
                  ? 'w-6 bg-core-circle-primary'
                  : 'w-1.5 bg-slate-200'
              )}
            />
          ))}
        </div>

        {/* Action Controls Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          {showSkip ? (
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              {skipLabel}
            </button>
          ) : <div />}

          <div className="flex items-center gap-2">
            {!isFirst && (
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                className="text-xs px-2.5 h-7"
              >
                <ArrowLeft size={12} className="mr-1" />
                {prevLabel}
              </Button>
            )}

            <Button
              variant="primary"
              size="sm"
              onClick={handleNext}
              className="text-xs px-3 h-7 font-medium"
            >
              {isLast ? (
                <>
                  <CheckIcon size={12} className="mr-1" />
                  {finishLabel}
                </>
              ) : (
                <>
                  {nextLabel}
                  <ArrowRight size={12} className="ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }
) as TourComponent;

Tour.Hotspot = Hotspot;
Tour.displayName = 'Tour';
export default Tour;
