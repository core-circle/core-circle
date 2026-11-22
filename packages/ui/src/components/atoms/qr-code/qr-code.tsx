'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { QRCodeProps } from '../../../interface/atoms/qr-code/qr-code.types';
import { qrCodeContainerVariants } from './qr-code.styles';
import { generateQRMatrix } from './qr-generator';

export const QRCode = React.forwardRef<HTMLDivElement, QRCodeProps>(
  (
    {
      className,
      value,
      size = 180,
      color = '#0f172a',
      bgColor = '#ffffff',
      level = 'M',
      includeMargin = true,
      logo,
      caption,
      helperText,
      downloadable = false,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const svgRef = React.useRef<SVGSVGElement | null>(null);
    const [copied, setCopied] = React.useState(false);

    const matrix = React.useMemo(() => {
      try {
        return generateQRMatrix(value || 'https://corecircle.io', level);
      } catch {
        return generateQRMatrix('https://corecircle.io', 'L');
      }
    }, [value, level]);

    const moduleCount = matrix.length;
    const margin = includeMargin ? 3 : 0;
    const totalGridSize = moduleCount + margin * 2;

    const handleDownload = React.useCallback(() => {
      if (!svgRef.current) return;
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const DOMURL = window.URL || window.webkitURL || window;
      const url = DOMURL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size * 2;
        canvas.height = size * 2;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const pngUrl = canvas.toDataURL('image/png');
          const downloadLink = document.createElement('a');
          downloadLink.download = `qrcode-${Date.now()}.png`;
          downloadLink.href = pngUrl;
          downloadLink.click();
        }
        DOMURL.revokeObjectURL(url);
      };
      img.src = url;
    }, [size, bgColor]);

    const handleCopy = React.useCallback(() => {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }, [value]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(qrCodeContainerVariants({ variant }), className)}
      >
        <div className="relative inline-flex items-center justify-center">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${totalGridSize} ${totalGridSize}`}
            width={size}
            height={size}
            style={{ shapeRendering: 'crispEdges' }}
            className="rounded-lg shadow-sm"
          >
            {/* Background Canvas */}
            <rect width={totalGridSize} height={totalGridSize} fill={bgColor} />

            {/* QR Modules */}
            {matrix.map((row, r) =>
              row.map((isDark, c) => {
                if (!isDark) return null;
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={c + margin}
                    y={r + margin}
                    width={1}
                    height={1}
                    fill={color}
                  />
                );
              })
            )}
          </svg>

          {/* Center Logo Overlay Slot */}
          {logo && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div
                style={{
                  width: `${size * 0.24}px`,
                  height: `${size * 0.24}px`,
                  backgroundColor: bgColor,
                }}
                className="rounded-xl flex items-center justify-center shadow-md p-1 border-2 border-white pointer-events-auto"
              >
                {logo}
              </div>
            </div>
          )}
        </div>

        {/* Optional Caption & Helper Subtitle */}
        {(caption || helperText) && (
          <div className="mt-3 text-center flex flex-col items-center">
            {caption && (
              <span className="text-sm font-semibold text-core-circle-text-main">
                {caption}
              </span>
            )}
            {helperText && (
              <span className="text-xs text-core-circle-text-muted mt-0.5 max-w-[200px]">
                {helperText}
              </span>
            )}
          </div>
        )}

        {/* Interactive Download & Copy Utility Controls */}
        {downloadable && (
          <div className="mt-3.5 flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? 'Copied' : 'Copy URL'}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="px-2.5 py-1 text-xs font-medium bg-core-circle-primary hover:bg-core-circle-primary-hover text-white rounded-lg transition-colors cursor-pointer"
            >
              Download PNG
            </button>
          </div>
        )}
      </div>
    );
  }
);

QRCode.displayName = 'QRCode';
export default QRCode;
