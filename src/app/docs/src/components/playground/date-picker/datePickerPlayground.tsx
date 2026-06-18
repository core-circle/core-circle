'use client';

import React, { useState } from 'react';
import { DatePicker, DatePickerRange, Button, DateRange, cn } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { datePickerPlaygroundStyles as s } from './datePickerPlayground.styles';

export const DatePickerPlayground = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<DateRange>({ from: new Date(), to: new Date(Date.now() + 86400000 * 7) });
  const [mode, setMode] = useState<'single' | 'range'>('single');
  const [disabled, setDisabled] = useState(false);

  const generateCode = () => {
    if (mode === 'single') {
      return `<DatePicker \n  label="Selected Date"\n  value={date} \n  onChange={setDate} \n  disabled={${disabled}} \n/>`;
    }
    return `<DatePickerRange \n  label="Selected Period"\n  value={range} \n  onChange={setRange} \n  disabled={${disabled}} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-4">
             <div className="flex bg-core-circle-bg-muted p-1 rounded-lg mb-2">
                <button 
                  onClick={() => setMode('single')}
                  className={cn("flex-1 py-2 text-xs font-bold rounded-md transition-all", mode === 'single' ? "bg-white shadow-sm text-core-circle-primary" : "text-core-circle-text-muted hover:text-core-circle-text-main")}
                >
                  Single
                </button>
                <button 
                  onClick={() => setMode('range')}
                  className={cn("flex-1 py-2 text-xs font-bold rounded-md transition-all", mode === 'range' ? "bg-white shadow-sm text-core-circle-primary" : "text-core-circle-text-muted hover:text-core-circle-text-main")}
                >
                  Range
                </button>
             </div>

             <Button 
                variant={disabled ? "primary" : "outline"} 
                onClick={() => setDisabled(!disabled)}
                fullWidth
              >
                {disabled ? "Enable Picker" : "Disable Picker"}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => mode === 'single' ? setDate(undefined) : setRange({})}
                fullWidth
              >
                Clear Selection
              </Button>
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full h-[350px]">
              {mode === 'single' ? (
                <DatePicker 
                  label="Selected Date" 
                  value={date} 
                  onChange={setDate}
                  disabled={disabled}
                  fullWidth
                />
              ) : (
                <DatePickerRange 
                  label="Selected Period" 
                  value={range} 
                  onChange={setRange}
                  disabled={disabled}
                  fullWidth
                />
              )}
            </div>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Example Code
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon className="w-3.5 h-3.5" />}
              >
                Copy Snippet
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generateCode()) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
