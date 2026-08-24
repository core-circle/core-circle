'use client';

import React, { useState } from 'react';
import { Button, Select, Checkbox, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Mail, ArrowRight, Star, SettingsIcon, Rotate, Sparkles, Shield, Bell } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from './buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

const ICONS: Record<string, { icon: React.ReactNode; pos: 'start' | 'end'; name: string } | null> = {
  none: null,
  sparkles_start: { icon: <Sparkles size={16} />, pos: 'start', name: 'Sparkles' },
  shield_start: { icon: <Shield size={16} />, pos: 'start', name: 'Shield' },
  email_start: { icon: <Mail size={16} />, pos: 'start', name: 'Mail' },
  arrow_end: { icon: <ArrowRight size={16} />, pos: 'end', name: 'ArrowRight' },
  star_end: { icon: <Star size={16} />, pos: 'end', name: 'Star' },
  bell_end: { icon: <Bell size={16} />, pos: 'end', name: 'Bell' },
};

export const ButtonPlayground = () => {
  const [state, setState] = useState({
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
    iconKey: 'sparkles_start',
    loading: false,
    disabled: false,
    fullWidth: false,
    text: 'Explore Platform',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const currentIconConfig = ICONS[state.iconKey];

  const generateCode = () => {
    const { variant, size, shape, loading, disabled, fullWidth, text } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (shape !== 'rounded') props += ` shape="${shape}"`;
    if (loading) props += ' loading';
    if (disabled) props += ' disabled';
    if (fullWidth) props += ' fullWidth';

    if (currentIconConfig) {
      if (currentIconConfig.pos === 'start') {
        props += `\n  startIcon={<${currentIconConfig.name} size={16} />}`;
      } else {
        props += `\n  endIcon={<${currentIconConfig.name} size={16} />}`;
      }
    }

    return `<Button ${props}>\n  ${text}\n</Button>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel (Max 4 Dropdowns per row) */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns (Strict 4 Columns Max) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'primary', label: 'Primary (Brand Blue)' },
                  { value: 'secondary', label: 'Secondary (Purple)' },
                  { value: 'success', label: 'Success (Emerald)' },
                  { value: 'warning', label: 'Warning (Amber)' },
                  { value: 'destructive', label: 'Destructive (Red)' },
                  { value: 'outline', label: 'Outline (Bordered)' },
                  { value: 'ghost', label: 'Ghost (Borderless)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted)' },
                  { value: 'gradient', label: 'Gradient (Radiant Glow)' },
                  { value: 'floating', label: 'Floating (Elevated Lift)' },
                  { value: 'pill', label: 'Pill (Capsule)' },
                  { value: 'soft', label: 'Soft (Tone-on-Tone)' },
                ]}
                fullWidth
              />
              <Select
                label="Size"
                value={state.size}
                onChange={(e) => updateState('size', e.target.value)}
                options={[
                  { value: 'sm', label: 'Small (32px)' },
                  { value: 'md', label: 'Medium (40px)' },
                  { value: 'lg', label: 'Large (48px)' },
                  { value: 'icon', label: 'Icon (Circle 40px)' },
                ]}
                fullWidth
              />
              <Select
                label="Shape"
                value={state.shape}
                onChange={(e) => updateState('shape', e.target.value)}
                options={[
                  { value: 'rounded', label: 'Rounded' },
                  { value: 'pill', label: 'Pill (Capsule)' },
                  { value: 'square', label: 'Square' },
                ]}
                fullWidth
              />
              <Select
                label="Icon Placement"
                value={state.iconKey}
                onChange={(e) => updateState('iconKey', e.target.value)}
                options={[
                  { value: 'none', label: 'None' },
                  { value: 'sparkles_start', label: 'Sparkles (Start)' },
                  { value: 'shield_start', label: 'Shield (Start)' },
                  { value: 'email_start', label: 'Email (Start)' },
                  { value: 'arrow_end', label: 'Arrow (End)' },
                  { value: 'star_end', label: 'Star (End)' },
                  { value: 'bell_end', label: 'Bell (End)' },
                ]}
                fullWidth
              />
            </div>

            {/* 2. Checkboxes & Switches Horizontally */}
            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Loading State"
                checked={state.loading}
                onChange={(checked) => updateState('loading', checked)}
              />
              <Checkbox
                label="Disabled State"
                checked={state.disabled}
                onChange={(checked) => updateState('disabled', checked)}
              />
              <Checkbox
                label="Full Width"
                checked={state.fullWidth}
                onChange={(checked) => updateState('fullWidth', checked)}
              />
            </div>

            {/* 3. Text Inputs Horizontally */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Button Text Label"
                value={state.text}
                onChange={(e) => updateState('text', e.target.value)}
                placeholder="Enter button label..."
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.fullWidth ? "w-full max-w-md" : "flex justify-center"}>
              <Button
                variant={state.variant as any}
                size={state.size as any}
                shape={state.shape as any}
                loading={state.loading}
                disabled={state.disabled}
                fullWidth={state.fullWidth}
                startIcon={currentIconConfig?.pos === 'start' ? currentIconConfig.icon : undefined}
                endIcon={currentIconConfig?.pos === 'end' ? currentIconConfig.icon : undefined}
              >
                {state.size === 'icon' ? (currentIconConfig?.icon || <Bell size={18} />) : state.text}
              </Button>
            </div>
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
                className={s.copyButton}
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
