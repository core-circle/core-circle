import { SparklineColor } from '../../../interface/atoms/sparkline/sparkline.types';

export const sparklineColorMap: Record<
  SparklineColor,
  { stroke: string; fill: string; stopColor: string }
> = {
  primary: {
    stroke: '#4f46e5', // core-circle primary indigo
    fill: 'rgba(79, 70, 229, 0.15)',
    stopColor: '#4f46e5',
  },
  success: {
    stroke: '#10b981', // emerald
    fill: 'rgba(16, 185, 129, 0.15)',
    stopColor: '#10b981',
  },
  warning: {
    stroke: '#f59e0b', // amber
    fill: 'rgba(245, 158, 11, 0.15)',
    stopColor: '#f59e0b',
  },
  danger: {
    stroke: '#f43f5e', // rose
    fill: 'rgba(244, 63, 94, 0.15)',
    stopColor: '#f43f5e',
  },
  neutral: {
    stroke: '#64748b', // slate
    fill: 'rgba(100, 116, 139, 0.15)',
    stopColor: '#64748b',
  },
};
