'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CheckIcon, CircleX } from '@core-circle/icons';
import { StepperProps } from '../../../interface/molecules/stepper/stepper.types';
import { 
  stepperContainerVariants, 
  stepItemVariants, 
  stepIndicatorVariants, 
  connectorVariants,
  stepContentVariants
} from './stepper.styles';

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      activeStep,
      orientation = 'horizontal',
      variant = 'numbers',
      showDescription = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(stepperContainerVariants({ orientation }), className)}
        {...props}
      >
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          const isPending = index > activeStep;
          const hasError = step.status === 'error';

          let currentStatus: 'pending' | 'active' | 'completed' | 'error' = 'pending';
          if (hasError) currentStatus = 'error';
          else if (isCompleted) currentStatus = 'completed';
          else if (isActive) currentStatus = 'active';

          return (
            <div
              key={index}
              className={cn(stepItemVariants({ orientation }))}
            >
              {/* Connector Line */}
              {!isLast && (
                <div 
                  className={cn(connectorVariants({ 
                    orientation, 
                    status: isCompleted ? 'completed' : 'pending' 
                  }))} 
                />
              )}

              {/* Step Indicator */}
              <div className={cn(stepIndicatorVariants({ status: currentStatus }))}>
                {currentStatus === 'completed' ? (
                  <CheckIcon size={14} />
                ) : currentStatus === 'error' ? (
                  <CircleX size={14} />
                ) : variant === 'numbers' ? (
                  index + 1
                ) : (
                  <div className="w-2 h-2 rounded-full bg-current" />
                )}
              </div>

              {/* Label & Description */}
              <div className={cn(stepContentVariants({ orientation }))}>
                <span className={cn(
                  "text-xs font-core-circle-bold transition-colors duration-300",
                  isActive ? "text-core-circle-primary" : "text-core-circle-text-main",
                  isPending && "text-core-circle-text-muted"
                )}>
                  {step.title}
                </span>
                {showDescription && step.description && (
                  <span className="text-[10px] text-core-circle-text-muted mt-0.5 line-clamp-1 max-w-[120px]">
                    {step.description}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';
