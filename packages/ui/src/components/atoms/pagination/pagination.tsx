'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { PaginationProps } from '../../../interface/atoms/pagination/pagination.types';
import { paginationItemVariants } from './pagination.styles';
import { ChevronLeft, ChevronRight } from '@core-circle/icons';

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage = 1,
      totalPages = 1,
      onPageChange,
      siblingCount = 1,
      variant = 'default',
      size = 'md',
      showControls = true,
      prevLabel,
      nextLabel,
      disabled = false,
      className,
    },
    ref
  ) => {
    // Generate page numbers with ellipsis
    const paginationRange = React.useMemo<(number | 'ellipsis')[]>(() => {
      const totalPageNumbers = siblingCount * 2 + 5; // siblingCount + first + last + current + 2*ellipsis

      if (totalPageNumbers >= totalPages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

      const firstPageIndex = 1;
      const lastPageIndex = totalPages;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
        return [...leftRange, 'ellipsis', totalPages];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = Array.from(
          { length: rightItemCount },
          (_, i) => totalPages - rightItemCount + i + 1
        );
        return [firstPageIndex, 'ellipsis', ...rightRange];
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = Array.from(
          { length: rightSiblingIndex - leftSiblingIndex + 1 },
          (_, i) => leftSiblingIndex + i
        );
        return [firstPageIndex, 'ellipsis', ...middleRange, 'ellipsis', lastPageIndex];
      }

      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }, [totalPages, siblingCount, currentPage]);

    const handlePageClick = (page: number) => {
      if (disabled || page === currentPage || page < 1 || page > totalPages) return;
      onPageChange?.(page);
    };

    const iconSize = size === 'sm' ? 14 : size === 'md' ? 16 : 18;

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination Navigation"
        className={cn('inline-flex items-center gap-1 select-none', className)}
      >
        {/* Previous Button */}
        {showControls && (
          <button
            type="button"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={disabled || currentPage <= 1}
            aria-label="Go to previous page"
            className={cn(paginationItemVariants({ variant, size }), 'px-2')}
          >
            {prevLabel || <ChevronLeft size={iconSize} />}
          </button>
        )}

        {/* Page Buttons & Ellipsis */}
        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="inline-flex items-center justify-center px-2 text-slate-400 font-bold select-none"
              >
                &#8230;
              </span>
            );
          }

          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => handlePageClick(pageNumber)}
              disabled={disabled}
              aria-current={isActive ? 'page' : undefined}
              className={cn(paginationItemVariants({ variant, size, isActive }))}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Next Button */}
        {showControls && (
          <button
            type="button"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={disabled || currentPage >= totalPages}
            aria-label="Go to next page"
            className={cn(paginationItemVariants({ variant, size }), 'px-2')}
          >
            {nextLabel || <ChevronRight size={iconSize} />}
          </button>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

export default Pagination;
