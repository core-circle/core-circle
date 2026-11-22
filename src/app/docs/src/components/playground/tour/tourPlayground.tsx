'use client';

import React, { useState } from 'react';
import { Tour, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { tourPlaygroundStyles as s } from './tourPlayground.styles';

export const TourPlayground: React.FC = () => {
  const [variant, setVariant] = useState<'card' | 'elevated' | 'glassmorphic'>('card');
  const [showSkip, setShowSkip] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const demoSteps = [
    {
      title: 'Welcome to CoreCircle',
      description: 'Explore our design system monorepo featuring 54+ atomic primitives and token studios.',
      badge: 'Step 1/3',
    },
    {
      title: 'Real-Time Theming',
      description: 'Switch hues across 22 palette spectrums and export white-labeled CSS stylesheets.',
      badge: 'Step 2/3',
    },
    {
      title: 'Ready for Production',
      description: 'Copy and paste accessible, high-performance React 19 JSX code snippets.',
      badge: 'Step 3/3',
    },
  ];

  const generatedCode = `<Tour
  variant="${variant}"${!showSkip ? '\n  showSkip={false}' : ''}
  steps={steps}
  open={${isOpen}}
  onClose={() => setOpen(false)}
  onFinish={() => alert('Tour Finished')}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Toolbar */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'card', label: 'Card (Default)' },
                  { value: 'elevated', label: 'Elevated (Floating Shadow)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted Glass)' },
                ]}
                fullWidth
              />

              <div className="flex items-center pt-5">
                <Checkbox
                  label="Show Skip Action"
                  checked={showSkip}
                  onCheckedChange={(checked) => setShowSkip(checked)}
                />
              </div>

              <div className="flex items-center pt-5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsOpen(true);
                    setStepIndex(0);
                  }}
                >
                  Restart Tour
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex justify-center w-full max-w-sm">
              {isOpen ? (
                <Tour
                  variant={variant}
                  steps={demoSteps}
                  currentStep={stepIndex}
                  showSkip={showSkip}
                  open={isOpen}
                  onStepChange={setStepIndex}
                  onClose={() => setIsOpen(false)}
                  onFinish={() => setIsOpen(false)}
                />
              ) : (
                <div className="text-center p-8 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-sm text-slate-500 mb-3">Tour dismissed or completed.</p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setIsOpen(true);
                      setStepIndex(0);
                    }}
                  >
                    Open Tour Again
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Syntax-Highlighted Code Footer */}
        <div className={s.codeSection}>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <CodeIcon size={14} /> React JSX Snippet
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="text-xs border-slate-700 hover:bg-slate-800 text-slate-300"
            >
              <CopyIcon size={14} className="mr-1.5" />
              {copied ? DOC_TEXT.COPIED : DOC_TEXT.COPY_CODE}
            </Button>
          </div>
          <pre
            className="text-xs text-slate-200 overflow-x-auto font-mono p-3 bg-slate-900 rounded-lg border border-slate-800"
            dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }}
          />
        </div>
      </div>
    </div>
  );
};
