import { useState, useEffect } from 'react';
import { TabsProps } from '../../../interface/atoms/tabs/tabs.types';
import { tabsContainerVariants, tabListVariants, tabItemVariants, tabContentVariants } from './tabs.styles';
import { twMerge } from 'tailwind-merge';

export const Tabs = ({
  items,
  variant = 'underline',
  size = 'md',
  fullWidth = false,
  value,
  defaultValue,
  onChange,
  className,
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue || (items.length > 0 ? items[0].id : undefined)
  );

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  useEffect(() => {
    if (!isControlled && !currentValue && items.length > 0) {
      setInternalValue(items[0].id);
    }
  }, [items, isControlled, currentValue]);

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return;
    
    if (!isControlled) {
      setInternalValue(id);
    }
    
    if (onChange) {
      onChange(id);
    }
  };

  const activeContent = items.find((item) => item.id === currentValue)?.content;

  return (
    <div className={twMerge(tabsContainerVariants({ fullWidth }), className)}>
      <div 
        className={tabListVariants({ variant, fullWidth })} 
        role="tablist"
        aria-orientation="horizontal"
      >
        {items.map((item) => {
          const isActive = item.id === currentValue;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              id={`tab-${item.id}`}
              disabled={item.disabled}
              onClick={() => handleTabClick(item.id, item.disabled)}
              className={tabItemVariants({ variant, size, active: isActive, disabled: item.disabled, fullWidth })}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div 
        role="tabpanel" 
        id={`tabpanel-${currentValue}`} 
        aria-labelledby={`tab-${currentValue}`}
        className={tabContentVariants()}
        tabIndex={0}
      >
        {activeContent}
      </div>
    </div>
  );
};
