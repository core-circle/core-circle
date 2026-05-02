'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { 
  CardProps, 
  CardHeaderProps, 
  CardBodyProps, 
  CardFooterProps 
} from '../../../interface/molecules/card/card.types';
import { 
  cardVariants, 
  cardHeaderVariants, 
  cardBodyVariants, 
  cardFooterVariants 
} from './card.styles';

const CardHeader = ({ children, divider, onClose, className, ...props }: CardHeaderProps) => (
  <div className={cn(cardHeaderVariants({ divider }), className)} {...props}>
    <div className="flex-1">{children}</div>
    {onClose && (
      <button
        onClick={onClose}
        className="p-1 rounded-full hover:bg-core-circle-bg-page transition-colors text-core-circle-text-muted hover:text-core-circle-text-main"
        aria-label="Close"
      >
        <XIcon size={18} />
      </button>
    )}
  </div>
);

const CardBody = ({ children, noPadding, className, ...props }: CardBodyProps) => (
  <div className={cn(cardBodyVariants({ noPadding }), className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, divider, align, className, ...props }: CardFooterProps) => (
  <div className={cn(cardFooterVariants({ divider, align }), className)} {...props}>
    {children}
  </div>
);

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, rounded, hoverable, fullWidth, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, rounded, hoverable, fullWidth }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardRoot.displayName = 'Card';

// Compound Component Assignment
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
