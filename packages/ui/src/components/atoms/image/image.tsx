import React, { useState, forwardRef, useEffect } from 'react';
import { cn } from '../../../utils/cn';
import { imageVariants, type ImageProps } from './image.styles';
import { ImageIcon } from '@core-circle/icons';

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, fit, rounded, fallback, width, height, style, ...props }, ref) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle');

    useEffect(() => {
      if (!src) {
        setStatus('error');
        return;
      }
      setStatus('loading');
    }, [src]);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setStatus('loaded');
      props.onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setStatus('error');
      props.onError?.(e);
    };

    const isLoaded = status === 'loaded';
    const isError = status === 'error';
    const isLoading = status === 'loading';

    return (
      <div 
        className={cn(
          'relative inline-block overflow-hidden bg-core-circle-bg-muted',
          rounded === 'full' ? 'rounded-full' : imageVariants({ rounded }),
          className
        )}
        style={{ width, height, ...style }}
      >
        {/* Placeholder/Skeleton */}
        {(isLoading || !isLoaded) && !isError && (
          <div className="absolute inset-0 bg-core-circle-bg-muted animate-pulse flex items-center justify-center">
             <ImageIcon className="text-core-circle-text-subtle/20" size={width ? (typeof width === 'number' ? width / 3 : 40) : 40} />
          </div>
        )}

        {/* Fallback */}
        {isError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-core-circle-bg-muted text-core-circle-text-muted p-4">
            {fallback || (
              <>
                <ImageIcon size={32} className="mb-2 opacity-50" />
                <span className="text-xs font-core-circle-medium text-center">Failed to load image</span>
              </>
            )}
          </div>
        )}

        {/* Main Image */}
        {src && (
          <img
            ref={ref}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'w-full h-full transition-opacity duration-500',
              imageVariants({ fit }),
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading="lazy"
            {...props}
          />
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';

export { Image };
