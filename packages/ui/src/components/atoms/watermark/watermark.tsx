'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { WatermarkProps } from '../../../interface/atoms/watermark/watermark.types';
import { watermarkContainerVariants } from './watermark.styles';

export const Watermark = React.forwardRef<HTMLDivElement, WatermarkProps>(
  (
    {
      className,
      content = 'CONFIDENTIAL',
      image,
      rotate = -22,
      opacity = 0.14,
      fontSize = 15,
      fontColor = 'rgba(15, 23, 42, 0.4)',
      gap = [100, 100],
      zIndex = 9,
      variant = 'default',
      children,
      ...props
    },
    ref
  ) => {
    const [svgDataUrl, setSvgDataUrl] = React.useState<string>('');

    React.useEffect(() => {
      const [gapX, gapY] = gap;
      const width = gapX + 160;
      const height = gapY + 80;

      const contentElements = image
        ? `<image href="${image}" x="25%" y="25%" width="50%" height="50%" preserveAspectRatio="xMidYMid meet" opacity="${opacity}" />`
        : (Array.isArray(content) ? content : [content])
            .map(
              (line, index) =>
                `<text x="50%" y="${50 + index * (fontSize + 4)}" font-size="${fontSize}" font-family="monospace, sans-serif" font-weight="bold" fill="${fontColor}" text-anchor="middle" dominant-baseline="middle">${line}</text>`
            )
            .join('');

      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <g transform="rotate(${rotate} ${width / 2} ${height / 2})">
          ${contentElements}
        </g>
      </svg>`;

      const encoded = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
      setSvgDataUrl(encoded);
    }, [content, image, rotate, fontSize, fontColor, gap, opacity]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(watermarkContainerVariants({ variant }), className)}
      >
        {/* Child Interactive Content */}
        {children}

        {/* Overlay Watermark Background Pattern */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: `url("${svgDataUrl}")`,
            backgroundRepeat: 'repeat',
            opacity,
            zIndex,
          }}
          className="pointer-events-none absolute inset-0 select-none"
        />
      </div>
    );
  }
);

Watermark.displayName = 'Watermark';
export default Watermark;
