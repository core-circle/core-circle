'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  SignaturePadProps,
  SignaturePadRef,
} from '../../../interface/atoms/signature-pad/signature-pad.types';
import { signaturePadVariants } from './signature-pad.styles';
import { SquareEdit, XIcon, Download, Rotate } from '@core-circle/icons';
import { Label } from '../label/label';

export const SignaturePad = React.forwardRef<SignaturePadRef, SignaturePadProps>(
  (
    {
      className,
      width = '100%',
      height = 180,
      strokeWidth = 2.5,
      strokeColor = '#0f172a',
      backgroundColor = '#ffffff',
      showControls = true,
      disabled = false,
      label,
      helperText,
      error,
      variant = 'default',
      onBegin,
      onEnd,
      onChange,
      ...props
    },
    ref
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = React.useState(false);
    const [history, setHistory] = React.useState<ImageData[]>([]);
    const [isEmptyState, setIsEmptyState] = React.useState(true);

    const getContext = (): CanvasRenderingContext2D | null => {
      return canvasRef.current?.getContext('2d') || null;
    };

    // Save initial blank state
    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Handle high DPI
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const actualWidth = rect.width || (typeof width === 'number' ? width : 400);
      canvas.width = actualWidth * ratio;
      canvas.height = height * ratio;
      ctx.scale(ratio, ratio);

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, actualWidth, height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }, [height, width, backgroundColor]);

    const saveState = () => {
      const canvas = canvasRef.current;
      const ctx = getContext();
      if (!canvas || !ctx) return;
      const current = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setHistory((prev) => [...prev, current]);
      setIsEmptyState(false);
      onChange?.(canvas.toDataURL());
    };

    const clear = React.useCallback(() => {
      const canvas = canvasRef.current;
      const ctx = getContext();
      if (!canvas || !ctx) return;
      const ratio = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width / ratio, canvas.height / ratio);
      setHistory([]);
      setIsEmptyState(true);
      onChange?.('');
    }, [backgroundColor, onChange]);

    const undo = React.useCallback(() => {
      const canvas = canvasRef.current;
      const ctx = getContext();
      if (!canvas || !ctx || history.length === 0) return;

      const newHistory = [...history];
      newHistory.pop(); // Remove current
      setHistory(newHistory);

      if (newHistory.length > 0) {
        ctx.putImageData(newHistory[newHistory.length - 1], 0, 0);
        setIsEmptyState(false);
        onChange?.(canvas.toDataURL());
      } else {
        clear();
      }
    }, [history, clear, onChange]);

    const toDataURL = React.useCallback(
      (type = 'image/png') => {
        return canvasRef.current?.toDataURL(type) || '';
      },
      []
    );

    const isEmpty = React.useCallback(() => isEmptyState, [isEmptyState]);

    React.useImperativeHandle(
      ref,
      () => ({
        clear,
        undo,
        toDataURL,
        isEmpty,
      }),
      [clear, undo, toDataURL, isEmpty]
    );

    const getCoordinates = (
      e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
    ) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      if ('touches' in e) {
        const touch = e.touches[0];
        return {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
      }
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const startDrawing = (
      e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
    ) => {
      if (disabled) return;
      const ctx = getContext();
      if (!ctx) return;
      const { x, y } = getCoordinates(e);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;

      setIsDrawing(true);
      onBegin?.();
    };

    const draw = (
      e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
    ) => {
      if (!isDrawing || disabled) return;
      const ctx = getContext();
      if (!ctx) return;
      const { x, y } = getCoordinates(e);

      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const stopDrawing = () => {
      if (!isDrawing) return;
      const ctx = getContext();
      if (ctx) ctx.closePath();
      setIsDrawing(false);
      saveState();
      onEnd?.();
    };

    const handleDownload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = `signature-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    const hasError = !!error;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <div className="flex items-center justify-between">
            <Label>{label}</Label>
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              <SquareEdit size={12} /> Sign with mouse or touch
            </span>
          </div>
        )}

        <div
          {...props}
          className={cn(signaturePadVariants({ variant, hasError }), className)}
          style={{ width }}
        >
          {/* Canvas Signature Area */}
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            style={{ width: '100%', height }}
            className={cn(
              'touch-none cursor-crosshair block',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          />

          {/* Auxiliary Action Controls Toolbar */}
          {showControls && (
            <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-t border-core-circle-border-main/70 text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={disabled || history.length === 0}
                  onClick={undo}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-core-circle-md bg-white border border-core-circle-border-main text-slate-700 hover:bg-slate-100 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Rotate size={12} /> Undo
                </button>
                <button
                  type="button"
                  disabled={disabled || isEmptyState}
                  onClick={clear}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-core-circle-md bg-white border border-core-circle-border-main text-slate-700 hover:bg-slate-100 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <XIcon size={12} /> Clear
                </button>
              </div>

              <button
                type="button"
                disabled={disabled || isEmptyState}
                onClick={handleDownload}
                className="flex items-center gap-1 px-3 py-1 rounded-core-circle-md bg-core-circle-primary text-white hover:bg-core-circle-primary/90 disabled:opacity-40 transition-colors font-medium cursor-pointer"
              >
                <Download size={12} /> Save PNG
              </button>
            </div>
          )}
        </div>

        {typeof error === 'string' && error ? (
          <span className="text-xs text-core-circle-destructive">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-core-circle-text-muted">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

SignaturePad.displayName = 'SignaturePad';
export default SignaturePad;
