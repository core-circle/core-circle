'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { PromptInputProps } from '../../../interface/atoms/prompt-input/prompt-input.types';
import { promptInputContainerVariants } from './prompt-input.styles';
import { PaperClip, Mic, ArrowUp, ChevronDown, Sparkles } from '@core-circle/icons';

export const PromptInput = React.forwardRef<HTMLDivElement, PromptInputProps>(
  (
    {
      className,
      value: controlledValue,
      onChange,
      onSend,
      onStop,
      models = ['Gemini 2.0 Flash', 'Claude 3.7 Sonnet', 'GPT-4o'],
      selectedModel: controlledModel,
      onModelChange,
      placeholder = 'Ask a question or enter a prompt...',
      loading = false,
      minRows = 2,
      maxRows = 8,
      disabled = false,
      showAttachments = true,
      showVoice = true,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState('');
    const [internalModel, setInternalModel] = React.useState(models[0] || 'Gemini 2.0 Flash');
    const [modelMenuOpen, setModelMenuOpen] = React.useState(false);
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const currentModel = controlledModel !== undefined ? controlledModel : internalModel;

    const handleTextChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;
        if (controlledValue === undefined) setInternalValue(val);
        onChange?.(val);

        // Auto-adjust height
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          const lineH = 22;
          const minH = minRows * lineH;
          const maxH = maxRows * lineH;
          const scrollH = textareaRef.current.scrollHeight;
          textareaRef.current.style.height = `${Math.min(Math.max(scrollH, minH), maxH)}px`;
        }
      },
      [controlledValue, onChange, minRows, maxRows]
    );

    const handleSend = React.useCallback(() => {
      if (loading) {
        onStop?.();
        return;
      }
      if (!value.trim() || disabled) return;
      onSend?.(value);
      if (controlledValue === undefined) setInternalValue('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }, [loading, onStop, value, disabled, onSend, controlledValue]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      },
      [handleSend]
    );

    return (
      <div
        {...props}
        ref={ref}
        className={cn(promptInputContainerVariants({ variant }), className)}
      >
        {/* Multiline Textarea Body */}
        <div className="p-3.5 pb-2">
          <textarea
            ref={textareaRef}
            rows={minRows}
            value={value}
            disabled={disabled}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full bg-transparent resize-none text-sm text-core-circle-text-main placeholder:text-core-circle-text-muted focus:outline-none leading-relaxed"
          />
        </div>

        {/* Action Controls Toolbar Footer */}
        <div className="flex items-center justify-between px-3 py-2 border-t border-core-circle-border-main/50 bg-slate-50/60 rounded-b-core-circle-2xl">
          {/* Left Actions: Model Selector & Media Buttons */}
          <div className="flex items-center gap-2">
            {models.length > 0 && (
              <div className="relative">
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => setModelMenuOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors cursor-pointer"
                >
                  <Sparkles size={12} className="text-amber-500" />
                  <span>{currentModel}</span>
                  <ChevronDown size={12} className="text-slate-400" />
                </button>

                {modelMenuOpen && (
                  <div className="absolute bottom-full mb-1 left-0 z-20 w-44 bg-white border border-slate-200 rounded-xl shadow-lg p-1 space-y-0.5">
                    {models.map((mod) => (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => {
                          if (controlledModel === undefined) setInternalModel(mod);
                          onModelChange?.(mod);
                          setModelMenuOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer',
                          mod === currentModel
                            ? 'bg-core-circle-primary/10 text-core-circle-primary font-semibold'
                            : 'hover:bg-slate-100 text-slate-700'
                        )}
                      >
                        {mod}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {showAttachments && (
              <button
                type="button"
                disabled={disabled}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                title="Attach file or screenshot"
              >
                <PaperClip size={16} />
              </button>
            )}

            {showVoice && (
              <button
                type="button"
                disabled={disabled}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                title="Dictate with voice"
              >
                <Mic size={16} />
              </button>
            )}
          </div>

          {/* Right Action: Send / Stop Button */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] text-core-circle-text-muted">
              ↵ to send
            </span>
            <button
              type="button"
              disabled={disabled || (!loading && !value.trim())}
              onClick={handleSend}
              className={cn(
                'w-8 h-8 flex items-center justify-center rounded-full transition-all cursor-pointer shadow-sm',
                loading
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : value.trim()
                  ? 'bg-core-circle-primary hover:bg-core-circle-primary-hover text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              )}
              title={loading ? 'Stop generation' : 'Send message'}
            >
              {loading ? (
                <div className="w-2.5 h-2.5 bg-white rounded-xs" />
              ) : (
                <ArrowUp size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

PromptInput.displayName = 'PromptInput';
export default PromptInput;
