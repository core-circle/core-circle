import * as React from 'react';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The aspect ratio of the container (width / height).
   * Defaults to 16/9.
   */
  ratio?: number;
  /**
   * Children to be rendered inside the container.
   */
  children: React.ReactNode;
}
