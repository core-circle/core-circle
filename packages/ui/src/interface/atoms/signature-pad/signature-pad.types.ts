import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { signaturePadVariants } from '../../../components/atoms/signature-pad/signature-pad.styles';

export interface SignaturePadRef {
  clear: () => void;
  undo: () => void;
  toDataURL: (type?: string) => string;
  isEmpty: () => boolean;
}

export interface SignaturePadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof signaturePadVariants> {
  width?: number | string;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  backgroundColor?: string;
  showControls?: boolean;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: string | boolean;
  onBegin?: () => void;
  onEnd?: () => void;
  onChange?: (dataUrl: string) => void;
}
