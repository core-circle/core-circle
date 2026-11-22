export type SparklineType = 'line' | 'area' | 'bar';

export type SparklineColor =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';

export type SparklineCurve = 'linear' | 'smooth';

export interface SparklineProps {
  /**
   * Array of numeric data points to plot.
   */
  data: number[];

  /**
   * Chart rendering visualization type.
   * @default 'line'
   */
  type?: SparklineType;

  /**
   * Semantic theme color palette.
   * @default 'primary'
   */
  color?: SparklineColor;

  /**
   * Total SVG rendered width in pixels or CSS string.
   * @default 120
   */
  width?: number | string;

  /**
   * Total SVG rendered height in pixels or CSS string.
   * @default 36
   */
  height?: number | string;

  /**
   * Stroke width in pixels for line & area charts.
   * @default 2
   */
  strokeWidth?: number;

  /**
   * Interpolation curve mode for lines.
   * @default 'smooth'
   */
  curve?: SparklineCurve;

  /**
   * Whether to render an endpoint circle dot on the last data value.
   * @default true
   */
  showLastPoint?: boolean;

  /**
   * Whether to render dots on all data points.
   * @default false
   */
  showPoints?: boolean;

  /**
   * Whether to render a vertical gradient fill underneath the area curve.
   * @default true
   */
  gradient?: boolean;

  /**
   * Additional classes for the SVG wrapper container.
   */
  className?: string;
}
