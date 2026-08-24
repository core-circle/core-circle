'use client';

import React, { useState, forwardRef, useEffect } from 'react';
import { cn } from '../../../utils/cn';
import { ImageProps } from '../../../interface/atoms/image/image.types';
import { imageContainerVariants, imageElementVariants } from './image.styles';
import { ImageIcon, Alert } from '@core-circle/icons';

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      imageClassName,
      src,
      alt = 'Image asset',
      variant = 'card',
      aspectRatio = 'auto',
      fit = 'cover',
      rounded = 'xl',
      fallback,
      zoomOnHover = false,
      caption,
      overlay,
      width,
      height,
      style,
      onLoad,
      onError,
      ...props
    },
    ref
  ) => {
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
      onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setStatus('error');
      onError?.(e);
    };

    const isLoaded = status === 'loaded';
    const isError = status === 'error';
    const isLoading = status === 'loading';

    return (
      <div 
        className={cn(
          imageContainerVariants({ 
            variant, 
            aspectRatio: variant === 'circular' ? '1:1' : aspectRatio, 
            rounded: variant === 'circular' ? 'full' : rounded 
          }),
          className
        )}
        style={{ width, height, ...style }}
      >
        {/* Animated Skeleton Placeholder */}
        {(isLoading || !isLoaded) && !isError && (
          <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center z-10">
            <ImageIcon className="text-slate-300 animate-pulse" size={32} />
          </div>
        )}

        {/* Graceful Fallback on Error */}
        {isError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 z-10 text-center">
            {fallback || (
              <>
                <div className="p-2.5 rounded-full bg-slate-200/80 mb-2">
                  <Alert size={20} className="text-slate-400" />
                </div>
                <span className="text-xs font-core-circle-medium text-slate-500">Image unavailable</span>
              </>
            )}
          </div>
        )}

        {/* Main Image Asset */}
        {src && (
          <img
            ref={ref}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              imageElementVariants({ fit, zoomOnHover }),
              isLoaded ? 'opacity-100' : 'opacity-0',
              imageClassName
            )}
            loading="lazy"
            {...props}
          />
        )}

        {/* Top Overlay Badge / Controls */}
        {overlay && (
          <div className="absolute top-3 right-3 z-20 pointer-events-auto">
            {overlay}
          </div>
        )}

        {/* Bottom Caption Overlay */}
        {caption && (
          <div className={cn(
            variant === 'polaroid' 
              ? "absolute bottom-1 left-3 right-3 text-center text-xs font-core-circle-medium text-slate-700 truncate"
              : "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent text-white text-xs z-20 flex items-center justify-between backdrop-blur-[1px]"
          )}>
            {caption}
          </div>
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';

export default Image;
