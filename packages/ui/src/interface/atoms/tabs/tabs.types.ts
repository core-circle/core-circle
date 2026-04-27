import { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * The list of tabs to render dynamically.
   */
  items: TabItem[];
  
  /**
   * The design variant of the tabs.
   * @default 'underline'
   */
  variant?: 'underline' | 'pills' | 'enclosed';
  
  /**
   * The size of the tabs.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether the tabs list should take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * The currently active tab ID (controlled mode).
   */
  value?: string;
  
  /**
   * The default active tab ID (uncontrolled mode).
   */
  defaultValue?: string;
  
  /**
   * Callback fired when the active tab changes.
   */
  onChange?: (id: string) => void;
  
  /**
   * Additional class name for the wrapper container.
   */
  className?: string;
}
