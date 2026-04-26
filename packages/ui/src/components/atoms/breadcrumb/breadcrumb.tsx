'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { BreadcrumbProps } from '../../../interface/atoms/breadcrumb/breadcrumb.types';
import { breadcrumbVariants, breadcrumbItemVariants, backLinkStyles } from './breadcrumb.styles';
import { ChevronRight, ArrowLeft } from '@core-circle/icons';

export const Breadcrumb = ({
  items,
  variant = 'standard',
  separator = <ChevronRight size={12} className="text-core-circle-text-muted/50" />,
  showBack = false,
  backLabel = 'Back',
  renderLink,
  className,
}: BreadcrumbProps) => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  const defaultRenderLink = ({ href, children, className }: { href: string; children: React.ReactNode; className: string }) => (
    <a href={href} className={className}>{children}</a>
  );

  const Link = renderLink || defaultRenderLink;

  return (
    <nav 
      aria-label="Breadcrumb"
      className={cn(breadcrumbVariants({ variant }), className)}
    >
      {showBack && (
        <Link 
          href="#" 
          className={backLinkStyles}
        >
          <div onClick={handleBack} className="flex items-center gap-1.5">
            <ArrowLeft size={14} />
            {backLabel}
          </div>
        </Link>
      )}

      <ol className="flex items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const itemClassName = cn(breadcrumbItemVariants({ variant, isCurrent: isLast }));
          
          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <li className="flex items-center">
                <Link
                  href={item.href || '#'}
                  className={itemClassName}
                >
                  <span className="flex items-center gap-1.5">
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    {item.label}
                  </span>
                </Link>
              </li>
              
              {!isLast && (
                <li aria-hidden="true" className="flex items-center">
                  {separator}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
