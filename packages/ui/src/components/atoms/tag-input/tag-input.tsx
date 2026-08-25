'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TagInputProps } from '../../../interface/atoms/tag-input/tag-input.types';
import { 
  tagInputWrapperVariants, 
  tagInputContainerVariants, 
  tagChipVariants, 
  tagInputLabelStyles, 
  tagInputHelperStyles, 
  tagInputErrorStyles 
} from './tag-input.styles';
import { XIcon } from '@core-circle/icons';

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      value: controlledTags,
      defaultValue = [],
      placeholder = 'Add a tag...',
      label,
      helperText,
      error,
      variant = 'outline',
      maxTags,
      allowDuplicates = false,
      disabled = false,
      fullWidth = false,
      delimiter = ',',
      onChange,
      onTagAdd,
      onTagRemove,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledTags, setUncontrolledTags] = React.useState<string[]>(defaultValue);
    const [inputValue, setInputValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const tags = controlledTags !== undefined ? controlledTags : uncontrolledTags;

    const addTag = (rawTag: string) => {
      const trimmed = rawTag.trim();
      if (!trimmed) return;
      if (!allowDuplicates && tags.includes(trimmed)) return;
      if (maxTags && tags.length >= maxTags) return;

      const nextTags = [...tags, trimmed];
      if (controlledTags === undefined) {
        setUncontrolledTags(nextTags);
      }
      setInputValue('');
      onChange?.(nextTags);
      onTagAdd?.(trimmed);
    };

    const removeTag = (index: number) => {
      const removedTag = tags[index];
      const nextTags = tags.filter((_, i) => i !== index);
      if (controlledTags === undefined) {
        setUncontrolledTags(nextTags);
      }
      onChange?.(nextTags);
      onTagRemove?.(removedTag, index);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        addTag(inputValue);
      } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
        removeTag(tags.length - 1);
      }
    };

    return (
      <div className={cn(tagInputWrapperVariants({ fullWidth, disabled }), className)}>
        {label && <label className={tagInputLabelStyles}>{label}</label>}

        <div
          onClick={() => inputRef.current?.focus()}
          className={cn(tagInputContainerVariants({ variant, hasError: Boolean(error) }))}
        >
          {/* Rendered Chips */}
          {tags.map((tag, idx) => (
            <span key={`${tag}-${idx}`} className={cn(tagChipVariants({ variant }))}>
              <span>{tag}</span>
              {!disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(idx);
                  }}
                  className="rounded-full p-0.5 hover:bg-black/10 transition-colors focus:outline-none"
                  aria-label={`Remove tag ${tag}`}
                >
                  <XIcon size={12} />
                </button>
              )}
            </span>
          ))}

          {/* Input field */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            disabled={disabled}
            placeholder={tags.length === 0 ? placeholder : ''}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              if (inputValue) addTag(inputValue);
            }}
            className="flex-1 bg-transparent text-sm focus:outline-none min-w-[120px] px-1 text-inherit placeholder:text-core-circle-text-muted"
            {...props}
          />
        </div>

        {error && typeof error === 'string' && <p className={tagInputErrorStyles}>{error}</p>}
        {helperText && !error && <p className={tagInputHelperStyles}>{helperText}</p>}
      </div>
    );
  }
);

TagInput.displayName = 'TagInput';
