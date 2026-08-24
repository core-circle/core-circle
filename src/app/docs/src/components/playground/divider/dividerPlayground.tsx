'use client';

import React, { useState } from 'react';
import { Divider, Select, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from '../button/buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const DividerPlayground = () => {
  const [state, setState] = useState({
    orientation: 'horizontal',
    variant: 'gradient',
    thickness: 'md',
    align: 'center',
    label: 'OR CONTINUE WITH',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { orientation, variant, thickness, align, label } = state;
    let props = `variant="${variant}"\n  orientation="${orientation}"\n  thickness="${thickness}"`;
    if (label && orientation === 'horizontal') {
      props += `\n  align="${align}"`;
      return `<Divider \n  ${props} \n>\n  ${label}\n</Divider>`;
    }
    return `<Divider \n  ${props} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns Horizontally */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'solid', label: 'Solid Line' },
                  { value: 'dashed', label: 'Dashed Line' },
                  { value: 'dotted', label: 'Dotted Line' },
                  { value: 'gradient', label: 'Gradient (Blue/Purple)' },
                  { value: 'fade', label: 'Fade (Center Glow)' },
                  { value: 'accent', label: 'Accent (Primary Blue)' },
                  { value: 'subtle', label: 'Subtle (Faint Muted)' },
                  { value: 'thick', label: 'Thick Bar' },
                  { value: 'double', label: 'Double Line' },
                  { value: 'glow', label: 'Glow (Luminous)' },
                ]}
                fullWidth
              />
              <Select
                label="Orientation"
                value={state.orientation}
                onChange={(e) => updateState('orientation', e.target.value)}
                options={[
                  { value: 'horizontal', label: 'Horizontal' },
                  { value: 'vertical', label: 'Vertical' },
                ]}
                fullWidth
              />
              <Select
                label="Thickness"
                value={state.thickness}
                onChange={(e) => updateState('thickness', e.target.value)}
                options={[
                  { value: 'sm', label: 'Small (1px)' },
                  { value: 'md', label: 'Medium (2px)' },
                  { value: 'lg', label: 'Large (4px)' },
                ]}
                fullWidth
              />
              <Select
                label="Label Align"
                value={state.align}
                onChange={(e) => updateState('align', e.target.value)}
                options={[
                  { value: 'center', label: 'Center' },
                  { value: 'start', label: 'Start (Left)' },
                  { value: 'end', label: 'End (Right)' },
                ]}
                disabled={state.orientation === 'vertical'}
                fullWidth
              />
            </div>

            {/* 2. Text Inputs Horizontally */}
            <div className="border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Label (Horizontal only)"
                value={state.label}
                onChange={(e) => updateState('label', e.target.value)}
                disabled={state.orientation === 'vertical'}
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            {state.orientation === 'vertical' ? (
              <div className="flex h-28 items-center gap-6 text-sm text-core-circle-text-muted">
                <span className="font-semibold text-core-circle-text-main">Navigation Bar</span>
                <Divider 
                  orientation="vertical" 
                  variant={state.variant as any} 
                  thickness={state.thickness as any} 
                />
                <span className="font-semibold text-core-circle-text-main">Workspace Profile</span>
              </div>
            ) : (
              <div className="w-full max-w-lg text-sm text-core-circle-text-muted">
                <div className="p-4 bg-core-circle-bg-page/70 rounded-core-circle-xl border border-core-circle-border-main mb-2">
                  <p className="font-semibold text-core-circle-text-main">Account Authorization</p>
                  <p className="text-xs text-core-circle-text-muted mt-1">Sign in with email address.</p>
                </div>
                <Divider 
                  orientation="horizontal" 
                  variant={state.variant as any} 
                  thickness={state.thickness as any}
                  align={state.align as any}
                >
                  {state.label}
                </Divider>
                <div className="p-4 bg-core-circle-bg-page/70 rounded-core-circle-xl border border-core-circle-border-main mt-2">
                  <p className="font-semibold text-core-circle-text-main">Third-Party SSO</p>
                  <p className="text-xs text-core-circle-text-muted mt-1">Sign in with Google or GitHub.</p>
                </div>
              </div>
            )}
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className="text-xs text-core-circle-text-muted hover:text-core-circle-primary transition-colors h-7"
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
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
