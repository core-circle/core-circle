import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { watermarkContainerVariants } from '../../../components/atoms/watermark/watermark.styles';

export interface WatermarkProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof watermarkContainerVariants> {
  content?: string | string[];
  image?: string;
  rotate?: number;
  opacity?: number;
  fontSize?: number;
  fontColor?: string;
  gap?: [number, number];
  zIndex?: number;
  children?: React.ReactNode;
}
