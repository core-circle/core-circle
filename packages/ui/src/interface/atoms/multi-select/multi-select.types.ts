import { ReactNode } from 'react';

export type MultiSelectVariant =
  | 'outline'
  | 'filled'
  | 'floating'
  | 'glassmorphic'
  | 'pill'
  | 'material'
  | 'gradient'
  | 'compact'
  | 'chips'
  | 'ghost';

export type MultiSelectSize = 'sm' | 'md' | 'lg';

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  icon?: ReactNode;
}

export interface MultiSelectProps {
  /**
   * Visual style variant of the multi-select input (10 options).
   * @default 'outline'
   */
  variant?: MultiSelectVariant;
  
  /**
   * Size scale of the multi-select.
   * @default 'md'
   */
  size?: MultiSelectSize;
  
  /**
   * Optional label text displayed above the select.
   */
  label?: ReactNode;

  /**
   * Error message to display below the select.
   */
  error?: string;
  
  /**
   * Helper text to display below the select.
   */
  helperText?: string;
  
  /**
   * Available options for selection.
   */
  options: MultiSelectOption[];

  /**
   * Controlled selected value array.
   */
  value?: string[];

  /**
   * Default selected values for uncontrolled usage.
   */
  defaultValue?: string[];

  /**
   * Callback fired when selection changes.
   */
  onChange?: (value: string[]) => void;

  /**
   * Leading icon element.
   */
  startIcon?: ReactNode;
  
  /**
   * Whether the select expands to fill container width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Placeholder text when no items are selected.
   * @default 'Select options...'
   */
  placeholder?: string;

  /**
   * Whether users can search/filter options by typing.
   * @default true
   */
  searchable?: boolean;

  /**
   * Search input placeholder.
   * @default 'Search options...'
   */
  searchPlaceholder?: string;

  /**
   * Whether to display 'Select All' action.
   * @default false
   */
  showSelectAll?: boolean;

  /**
   * Whether to display 'Clear All' action when items are selected.
   * @default true
   */
  showClearAll?: boolean;

  /**
   * Maximum number of selected chips visible before collapsing with '+N more'.
   * @default 3
   */
  maxTags?: number;

  /**
   * Whether the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Custom class name for the outer container.
   */
  className?: string;
}
