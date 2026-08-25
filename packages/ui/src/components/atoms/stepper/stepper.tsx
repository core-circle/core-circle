'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CheckIcon, CircleX } from '@core-circle/icons';
import { StepperProps } from '../../../interface/atoms/stepper/stepper.types';
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
        className={cn(stepperContainerVariants({ orientation, variant }), className)}
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
              className={cn(stepItemVariants({ orientation, variant }))}
            >
              {/* Connector Line */}
              {!isLast && (
                <div 
                  className={cn(connectorVariants({ 
                    orientation, 
                    status: isCompleted ? 'completed' : 'pending',
                    variant
                  }))} 
                />
              )}

              {/* Step Indicator */}
              <div className={cn(stepIndicatorVariants({ status: currentStatus, variant }))}>
                {currentStatus === 'completed' ? (
                  <CheckIcon size={14} />
                ) : currentStatus === 'error' ? (
                  <CircleX size={14} />
                ) : step.icon ? (
                  step.icon
                ) : variant === 'numbers' || variant === 'cards' || variant === 'timeline' || variant === 'dark' || variant === 'glassmorphic' || variant === 'gradient' ? (
                  index + 1
                ) : variant === 'pill' ? (
                  `Step ${index + 1}`
                ) : (
                  <div className="w-2 h-2 rounded-full bg-current" />
                )}
              </div>

              {/* Label & Description */}
              <div className={cn(stepContentVariants({ orientation }))}>
                <span className={cn(
                  "text-xs font-core-circle-bold transition-colors duration-300",
                  isActive ? "text-core-circle-primary" : variant === 'dark' ? "text-slate-200" : "text-core-circle-text-main",
                  isPending && (variant === 'dark' ? "text-slate-500" : "text-core-circle-text-muted")
                )}>
                  {step.title}
                </span>
                {showDescription && step.description && (
                  <span className={cn(
                    "text-[10px] mt-0.5 line-clamp-1 max-w-[140px]",
                    variant === 'dark' ? "text-slate-400" : "text-core-circle-text-muted"
                  )}>
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
