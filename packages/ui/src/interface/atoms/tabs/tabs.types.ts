import { ReactNode } from 'react';

export type TabsVariant = 
  | 'underline' 
  | 'pills' 
  | 'enclosed' 
  | 'cards' 
  | 'glassmorphic' 
  | 'gradient' 
  | 'glow' 
  | 'segmented' 
  | 'bordered' 
  | 'dark';

export type TabsSize = 'sm' | 'md' | 'lg';

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
  variant?: TabsVariant;
  
  /**
   * The size of the tabs.
   * @default 'md'
   */
  size?: TabsSize;
  
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

