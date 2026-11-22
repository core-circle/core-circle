'use client';

import React, { useState } from 'react';
import { FloatingAction, Select, Checkbox, TextInput, Button } from '@core-circle/ui';
import {
  FabVariant,
  FabSize,
  FabPosition,
  FabDirection,
} from '@core-circle/ui';
import { CodeIcon, CopyIcon, Chat, Phone, Mail, Sparkles } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { floatingActionPlaygroundStyles as s } from './floatingActionPlayground.styles';

export const FloatingActionPlayground: React.FC = () => {
  const [variant, setVariant] = useState<FabVariant>('primary');
  const [size, setSize] = useState<FabSize>('md');
  const [position, setPosition] = useState<FabPosition>('bottom-right');
  const [direction, setDirection] = useState<FabDirection>('up');
  const [label, setLabel] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const demoActions = [
    { id: 'chat', label: 'Live Chat', icon: <Chat size={16} /> },
    { id: 'phone', label: 'Call Helpdesk', icon: <Phone size={16} /> },
    { id: 'email', label: 'Send Ticket', icon: <Mail size={16} /> },
    { id: 'ai', label: 'Ask AI Agent', icon: <Sparkles size={16} /> },
  ];

  const generateCode = () => {
    const labelProp = label ? `\n  label="${label}"` : '';
    return `<FloatingAction
  variant="${variant}"
  size="${size}"
  position="${position}"
  direction="${direction}"${labelProp}
  disabled={${disabled}}
  actions={[
    { id: 'chat', label: 'Live Chat', icon: <Chat size={16} /> },
    { id: 'phone', label: 'Call Helpdesk', icon: <Phone size={16} /> },
    { id: 'email', label: 'Send Ticket', icon: <Mail size={16} /> },
    { id: 'ai', label: 'Ask AI Agent', icon: <Sparkles size={16} /> },
  ]}
/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Color Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as FabVariant)}
                options={[
                  { value: 'primary', label: 'Primary Brand' },
                  { value: 'secondary', label: 'Secondary White' },
                  { value: 'dark', label: 'Cyber Dark' },
                  { value: 'gradient', label: 'Glowing Gradient' },
                ]}
                fullWidth
              />
              <Select
                label="Size Scale"
                value={size}
                onChange={(e) => setSize(e.target.value as FabSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />
              <Select
                label="Corner Position"
                value={position}
                onChange={(e) => setPosition(e.target.value as FabPosition)}
                options={[
                  { value: 'bottom-right', label: 'Bottom Right' },
                  { value: 'bottom-left', label: 'Bottom Left' },
                  { value: 'top-right', label: 'Top Right' },
                  { value: 'top-left', label: 'Top Left' },
                ]}
                fullWidth
              />
              <Select
                label="Expand Direction"
                value={direction}
                onChange={(e) => setDirection(e.target.value as FabDirection)}
                options={[
                  { value: 'up', label: 'Upward (Default)' },
                  { value: 'down', label: 'Downward' },
                  { value: 'left', label: 'Leftward' },
                  { value: 'right', label: 'Rightward' },
                ]}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput
                label="Optional Trigger Label (Extended FAB)"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="e.g. Quick Actions, New Ticket..."
              />
              <div className="flex items-center gap-6 pt-6">
                <Checkbox
                  label="Disabled Interaction"
                  checked={disabled}
                  onChange={(checked) => setDisabled(checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="relative w-full max-w-xl h-80 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 overflow-hidden shadow-core-circle-subtle flex flex-col items-center justify-center text-xs text-core-circle-text-muted">
              <span>Interactive Viewport Sandbox</span>
              <span className="text-[11px] text-slate-400 mt-1">Click the FAB below to expand the speed-dial menu</span>

              <FloatingAction
                key={`${variant}-${size}-${position}-${direction}-${label}-${disabled}`}
                variant={variant}
                size={size}
                position={position}
                direction={direction}
                label={label || undefined}
                disabled={disabled}
                fixed={false}
                actions={demoActions}
              />
            </div>
          </div>

          {/* Integrated Code Footer */}
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
