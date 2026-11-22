import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { promptInputContainerVariants } from '../../../components/atoms/prompt-input/prompt-input.styles';

export interface PromptInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof promptInputContainerVariants> {
  /** Input text value */
  value?: string;
  /** Callback when text changes */
  onChange?: (value: string) => void;
  /** Callback fired when prompt is sent via Enter or Send button */
  onSend?: (value: string) => void;
  /** Callback fired when user aborts generation */
  onStop?: () => void;
  /** List of selectable LLM model names */
  models?: string[];
  /** Currently selected model name */
  selectedModel?: string;
  /** Callback when user changes the selected model */
  onModelChange?: (model: string) => void;
  /** Input placeholder string */
  placeholder?: string;
  /** Whether the model is currently streaming or generating */
  loading?: boolean;
  /** Minimum textarea visible rows */
  minRows?: number;
  /** Maximum textarea rows before scroll */
  maxRows?: number;
  /** Whether prompt input is disabled */
  disabled?: boolean;
  /** Whether to show the file attachment clip button */
  showAttachments?: boolean;
  /** Whether to show the microphone voice button */
  showVoice?: boolean;
}
