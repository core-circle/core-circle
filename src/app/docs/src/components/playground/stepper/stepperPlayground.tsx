'use client';

import React, { useState } from 'react';
import { Stepper, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon, ChevronLeft, ChevronRight } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { stepperPlaygroundStyles as s } from './stepperPlayground.styles';

const steps = [
  { title: 'Information', description: 'Step description one' },
  { title: 'Payment', description: 'Step description two' },
  { title: 'Review', description: 'Step description three' },
  { title: 'Confirmation', description: 'Step description four' },
];

const SelectField = ({ label, value, options, onChange }: any) => {
  const formattedOptions = Object.entries(options).map(([val, lbl]) => ({
    value: val,
    label: lbl as string,
  }));
  return (
    <Select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={formattedOptions}
      fullWidth
    />
  );
};

export const StepperPlayground = () => {
  const [state, setState] = useState({
    orientation: 'horizontal',
    variant: 'numbers',
    activeStep: 0,
    showDescription: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setState(prev => ({ ...prev, activeStep: Math.min(prev.activeStep + 1, steps.length - 1) }));
  const prevStep = () => setState(prev => ({ ...prev, activeStep: Math.max(prev.activeStep - 1, 0) }));

  const generateCode = () => {
    const { orientation, variant, activeStep, showDescription } = state;
    let code = `<Stepper \n  orientation="${orientation}" \n  variant="${variant}" \n  activeStep={${activeStep}}`;
    if (!showDescription) code += ' \n  showDescription={false}';
    code += ' \n  steps={steps} \n/>';
    return code;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField label="Orientation" value={state.orientation} onChange={(v: string) => updateState('orientation', v)} options={{ horizontal: 'Horizontal', vertical: 'Vertical' }} />
            <SelectField 
              label="Variant" 
              value={state.variant} 
              onChange={(v: string) => updateState('variant', v)} 
              options={{ 
                numbers: 'Numbers', 
                dots: 'Dots', 
                circles: 'Circles',
                pill: 'Pill Badges',
                gradient: 'Radiant Gradient',
                glow: 'Neon Glow',
                glassmorphic: 'Glassmorphic',
                cards: 'Card Boxes',
                timeline: 'Timeline Pins',
                dark: 'Dark Mode'
              }} 
            />
            
            <div className="flex gap-4 items-end pb-2">
              <Checkbox
                label="Show Descriptions"
                checked={state.showDescription}
                onChange={(c) => updateState('showDescription', c)}
              />
            </div>
          </div>

          <div className="flex gap-4 border-t border-core-circle-border-main pt-6">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={state.activeStep === 0}
              startIcon={<ChevronLeft size={16} />}
            >
              Previous
            </Button>
            <Button 
              variant="primary" 
              onClick={nextStep} 
              disabled={state.activeStep === steps.length - 1}
              endIcon={<ChevronRight size={16} />}
            >
              Next Step
            </Button>
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full">
              <Stepper
                orientation={state.orientation as any}
                variant={state.variant as any}
                activeStep={state.activeStep}
                showDescription={state.showDescription}
                steps={steps}
              />
            </div>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
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
