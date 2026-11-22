'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  ResizableProps,
  ResizablePanelProps,
  ResizableHandleProps,
  ResizableDirection,
} from '../../../interface/atoms/resizable/resizable.types';
import {
  resizableContainerVariants,
  resizableHandleVariants,
} from './resizable.styles';

interface ResizableContextValue {
  direction: ResizableDirection;
  size: number;
  isDragging: boolean;
  disabled: boolean;
  startDragging: (e: React.MouseEvent | React.TouchEvent) => void;
  panelIndex: number;
}

const ResizableContext = React.createContext<ResizableContextValue | null>(null);

function useResizable() {
  const ctx = React.useContext(ResizableContext);
  if (!ctx) {
    throw new Error('Resizable subcomponents must be used within <Resizable>');
  }
  return ctx;
}

const ResizablePanel = React.forwardRef<HTMLDivElement, ResizablePanelProps>(
  ({ className, style, children, ...props }, ref) => {
    const { size } = useResizable();

    // Secondary panel or flex-1 style is determined by whether size applies
    // We let panels flex nicely: primary panel is sized, secondary panel fills remainder
    return (
      <div
        {...props}
        ref={ref}
        style={{
          ...style,
          flexBasis: `${size}%`,
        }}
        className={cn('relative overflow-auto min-w-0 min-h-0 flex-1', className)}
        data-resizable-panel=""
      >
        {children}
      </div>
    );
  }
);
ResizablePanel.displayName = 'ResizablePanel';

const ResizableHandle = React.forwardRef<HTMLDivElement, ResizableHandleProps>(
  ({ className, withHandle = true, disabled: handleDisabled, ...props }, ref) => {
    const { direction, disabled: rootDisabled, isDragging, startDragging } = useResizable();
    const isDisabled = rootDisabled || handleDisabled;

    return (
      <div
        {...props}
        ref={ref}
        role="separator"
        aria-orientation={direction}
        data-dragging={isDragging}
        tabIndex={isDisabled ? -1 : 0}
        onMouseDown={isDisabled ? undefined : startDragging}
        onTouchStart={isDisabled ? undefined : startDragging}
        className={cn(
          resizableHandleVariants({ direction, disabled: isDisabled }),
          isDragging && 'bg-core-circle-primary/50',
          className
        )}
      >
        {withHandle && (
          <div
            className={cn(
              'rounded-full bg-slate-400 group-hover:bg-core-circle-primary transition-colors',
              direction === 'horizontal' ? 'w-1 h-6' : 'h-1 w-6'
            )}
          />
        )}
      </div>
    );
  }
);
ResizableHandle.displayName = 'ResizableHandle';

const ResizableRoot = React.forwardRef<HTMLDivElement, ResizableProps>(
  (
    {
      className,
      direction = 'horizontal',
      defaultSize = 50,
      minSize = 15,
      maxSize = 85,
      onResize,
      disabled = false,
      variant = 'default',
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [size, setSize] = React.useState<number>(defaultSize);
    const [isDragging, setIsDragging] = React.useState<boolean>(false);

    const onResizeRef = React.useRef(onResize);
    React.useEffect(() => {
      onResizeRef.current = onResize;
    }, [onResize]);

    const startDragging = React.useCallback(
      (e: React.MouseEvent | React.TouchEvent) => {
        if (disabled) return;
        e.preventDefault();
        setIsDragging(true);
      },
      [disabled]
    );

    React.useEffect(() => {
      if (!isDragging) return;

      const handleMove = (clientX: number, clientY: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        let newPercent = 50;
        if (direction === 'horizontal') {
          const deltaX = clientX - rect.left;
          newPercent = (deltaX / rect.width) * 100;
        } else {
          const deltaY = clientY - rect.top;
          newPercent = (deltaY / rect.height) * 100;
        }

        const clamped = Math.min(Math.max(newPercent, minSize), maxSize);
        setSize(clamped);
        onResizeRef.current?.(clamped);
      };

      const handleMouseMove = (e: MouseEvent) => {
        handleMove(e.clientX, e.clientY);
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          handleMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      const handleEnd = () => {
        setIsDragging(false);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }, [isDragging, direction, minSize, maxSize]);

    // Forward ref merging
    const handleRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [ref]
    );

    const contextValue = React.useMemo(
      () => ({
        direction,
        size,
        isDragging,
        disabled,
        startDragging,
        panelIndex: 0,
      }),
      [direction, size, isDragging, disabled, startDragging]
    );

    return (
      <ResizableContext.Provider value={contextValue}>
        <div
          {...props}
          ref={handleRef}
          data-direction={direction}
          className={cn(
            resizableContainerVariants({ direction, variant }),
            isDragging && 'select-none cursor-grabbing',
            className
          )}
        >
          {children}
        </div>
      </ResizableContext.Provider>
    );
  }
);
ResizableRoot.displayName = 'Resizable';

export const Resizable = Object.assign(ResizableRoot, {
  Panel: ResizablePanel,
  Handle: ResizableHandle,
});

export default Resizable;
