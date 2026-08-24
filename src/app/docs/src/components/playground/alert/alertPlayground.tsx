'use client';

import React, { useState } from 'react';
import { Alert, TextInput, Select, Button, Checkbox } from '@core-circle/ui';
import { Info, CircleCheck, Alert as AlertIcon, CircleX, Sparkles, Star, Shield, CodeIcon, CopyIcon, ArrowRight } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { textInputPlaygroundStyles as s } from '../text-input/textInputPlayground.styles';

export const AlertPlayground = () => {
  const [state, setState] = useState({
    variant: 'info',
    title: 'Security Update Required',
    description: 'A new security patch is available for your workspace. Review the release notes.',
    iconType: 'info',
    showAction: true,
    isDismissible: true,
    fullWidth: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const getIcon = () => {
    switch (state.iconType) {
      case 'none': return null;
      case 'success': return <CircleCheck size={18} className="text-emerald-600" />;
      case 'warning': return <AlertIcon size={18} className="text-amber-600" />;
      case 'destructive': return <CircleX size={18} className="text-red-600" />;
      case 'sparkles': return <Sparkles size={18} className="text-purple-600" />;
      case 'shield': return <Shield size={18} className="text-indigo-600" />;
      case 'star': return <Star size={18} className="text-amber-500" />;
      default: return <Info size={18} className="text-blue-600" />;
    }
  };

  const generateCode = () => {
    const { variant, title, description, iconType, showAction, isDismissible, fullWidth } = state;
    let iconStr = '';
    if (iconType === 'success') iconStr = '\n  icon={<CircleCheck />}';
    else if (iconType === 'warning') iconStr = '\n  icon={<AlertIcon />}';
    else if (iconType === 'destructive') iconStr = '\n  icon={<CircleX />}';
    else if (iconType === 'sparkles') iconStr = '\n  icon={<Sparkles className="text-purple-600" />}';
    else if (iconType === 'shield') iconStr = '\n  icon={<Shield />}';
    else if (iconType === 'info') iconStr = '\n  icon={<Info />}';

    let actionStr = showAction ? `\n  action={<Button size="sm" variant="primary" endIcon={<ArrowRight size={14} />}>Upgrade Now</Button>}` : '';
    let closeStr = isDismissible ? '\n  onClose={() => {}}' : '';
    let fullWidthStr = !fullWidth ? '\n  fullWidth={false}' : '';

    return `<Alert\n  variant="${variant}"\n  title="${title}"${iconStr}${actionStr}${closeStr}${fullWidthStr}\n>\n  ${description}\n</Alert>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns Horizontally */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'info', label: 'Info (Soft Blue)' },
                  { value: 'success', label: 'Success (Soft Emerald)' },
                  { value: 'warning', label: 'Warning (Soft Amber)' },
                  { value: 'destructive', label: 'Destructive (Soft Red)' },
                  { value: 'card', label: 'Card (Elevated Box)' },
                  { value: 'floating', label: 'Floating (Drop Shadow)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted)' },
                  { value: 'gradient', label: 'Gradient (Radiant Tint)' },
                  { value: 'pill', label: 'Pill (Curved Capsule)' },
                  { value: 'minimal', label: 'Minimal (Left Accent Line)' },
                  { value: 'outline', label: 'Outline (Strong Border)' },
                  { value: 'soft', label: 'Soft (Tone-on-Tone)' },
                ]}
                fullWidth
              />
              <Select
                label="Icon"
                value={state.iconType}
                onChange={(e) => updateState('iconType', e.target.value)}
                options={[
                  { value: 'info', label: 'Info (Default)' },
                  { value: 'success', label: 'Check Circle' },
                  { value: 'warning', label: 'Alert Warning' },
                  { value: 'destructive', label: 'Error Cross' },
                  { value: 'sparkles', label: 'Sparkles' },
                  { value: 'shield', label: 'Shield' },
                  { value: 'star', label: 'Star' },
                  { value: 'none', label: 'No Icon' },
                ]}
                fullWidth
              />
            </div>

            {/* 2. Checkboxes & Switches Horizontally */}
            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Action Button"
                checked={state.showAction}
                onChange={(checked) => updateState('showAction', checked)}
              />
              <Checkbox
                label="Dismissible"
                checked={state.isDismissible}
                onChange={(checked) => updateState('isDismissible', checked)}
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
                label="Title"
                value={state.title}
                onChange={(e) => updateState('title', e.target.value)}
                fullWidth
              />
              <TextInput
                label="Description"
                value={state.description}
                onChange={(e) => updateState('description', e.target.value)}
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Alert
              variant={state.variant as any}
              title={state.title}
              icon={getIcon()}
              action={
                state.showAction ? (
                  <Button size="sm" variant="primary" endIcon={<ArrowRight size={14} />}>
                    Upgrade Now
                  </Button>
                ) : undefined
              }
              onClose={state.isDismissible ? () => {} : undefined}
              fullWidth={state.fullWidth}
              className="max-w-xl"
            >
              {state.description}
            </Alert>
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
                startIcon={<CopyIcon size={14} />}
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
