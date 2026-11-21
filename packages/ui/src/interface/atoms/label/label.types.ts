import { HTMLAttributes, ReactNode } from 'react';

export type LabelVariant =
  | 'default'
  | 'primary'
  | 'muted'
  | 'success'
  | 'warning'
  | 'destructive'
  | 'gradient'
  | 'glassmorphic'
  | 'pill'
  | 'badge-label';

export type LabelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type LabelWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export interface LabelProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content inside the label.
   */
  children?: ReactNode;

  /**
   * Visual color and styling variant of the label text.
   * @default 'default'
   */
  variant?: LabelVariant;

  /**
   * Typography size scale.
   * @default 'sm'
   */
  size?: LabelSize;

  /**
   * Font weight scale.
   * @default 'medium'
   */
  weight?: LabelWeight;

  /**
   * Whether to transform the text to uppercase with wide tracking.
   * @default false
   */
  uppercase?: boolean;

  /**
   * Whether to display a red required asterisk indicator (*).
   * @default false
   */
  required?: boolean;

  /**
   * Whether to display an (Optional) tag next to the label.
   * @default false
   */
  optional?: boolean;

  /**
   * Optional helper icon or info tooltip slot.
   */
  helperIcon?: ReactNode;

  /**
   * Optional badge tag rendered next to the label.
   */
  badge?: ReactNode;

  /**
   * Semantic HTML wrapper tag.
   * @default 'label'
   */
  as?: 'label' | 'span' | 'div';

  /**
   * HTML form input association ID.
   */
  htmlFor?: string;

  /**
   * Additional class names.
   */
  className?: string;
}
