'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { 
  CardProps, 
  CardHeaderProps, 
  CardBodyProps, 
  CardFooterProps,
  CardMediaProps,
  CardCornerProps
} from '../../../interface/atoms/card/card.types';
import { 
  cardVariants, 
  cardMediaVariants,
  cardCornerVariants,
  cardHeaderVariants, 
  cardBodyVariants, 
  cardFooterVariants 
} from './card.styles';

const CardHeader = ({ children, divider, onClose, className, ...props }: CardHeaderProps) => (
  <div className={cn(cardHeaderVariants({ divider }), className)} {...props}>
    <div className="flex-1 min-w-0">{children}</div>
    {onClose && (
      <button
        onClick={onClose}
        className="p-1 rounded-full hover:bg-black/10 transition-colors text-inherit opacity-70 hover:opacity-100 shrink-0 cursor-pointer"
        aria-label="Close card"
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

const CardMedia = ({ 
  src, 
  alt = 'Card media', 
  position = 'top', 
  aspect = 'video', 
  overlay = false, 
  children, 
  className, 
  ...props 
}: CardMediaProps) => (
  <div className={cn(cardMediaVariants({ position, aspect }), className)} {...props}>
    {src && (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-105"
      />
    )}
    {(overlay || position === 'cover') && (
      <div className={cn(
        "absolute inset-0 transition-opacity duration-300",
        position === 'cover' 
          ? "bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30" 
          : "bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      )} />
    )}
    {children && (
      <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between pointer-events-none">
        {children}
      </div>
    )}
  </div>
);

const CardCorner = ({ 
  children, 
  position = 'top-right', 
  shape = 'rounded', 
  size = 'md', 
  className, 
  ...props 
}: CardCornerProps) => (
  <div className={cn(cardCornerVariants({ position, shape, size }), className)} {...props}>
    {children}
  </div>
);

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, orientation, rounded, hoverable, fullWidth, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, orientation, rounded, hoverable, fullWidth }), className)}
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
  Media: CardMedia,
  Corner: CardCorner,
});

export default Card;
