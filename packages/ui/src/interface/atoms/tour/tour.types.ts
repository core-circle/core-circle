import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { tourCardVariants, hotspotVariants } from '../../../components/atoms/tour/tour.styles';

export interface TourStep {
  title: React.ReactNode;
  description: React.ReactNode;
  badge?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  target?: string;
}

export interface TourProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tourCardVariants> {
  steps: TourStep[];
  currentStep?: number;
  open?: boolean;
  onClose?: () => void;
  onStepChange?: (step: number) => void;
  onFinish?: () => void;
  showSkip?: boolean;
  prevLabel?: string;
  nextLabel?: string;
  finishLabel?: string;
  skipLabel?: string;
}

export interface HotspotProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof hotspotVariants> {
  pulse?: boolean;
}
