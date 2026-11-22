'use client';

import React, { useState } from 'react';
import { Command, Select, TextInput, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon, File, SearchIcon, SquareEdit, Rotate, Sparkles } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { commandPlaygroundStyles as s } from './commandPlayground.styles';

export const CommandPlayground: React.FC = () => {
  const [placeholder, setPlaceholder] = useState<string>('Type a command or search...');
  const [variant, setVariant] = useState<'default' | 'bordered' | 'minimal'>('default');
  const [shortcutHint, setShortcutHint] = useState<string>('⌘K');
  const [copied, setCopied] = useState<boolean>(false);

  const demoGroups = [
    {
      id: 'quick-actions',
      heading: 'Quick Actions',
      items: [
        { id: 'create-page', label: 'Create New Page', icon: <File size={16} />, shortcut: '⌘N' },
        { id: 'find-symbol', label: 'Find Symbol in Project', icon: <SearchIcon size={16} />, shortcut: '⌘P' },
        { id: 'run-ai', label: 'Ask AI Copilot', icon: <Sparkles size={16} className="text-amber-500" /> },
      ],
    },
    {
      id: 'navigation',
      heading: 'Navigation & Settings',
      items: [
        { id: 'theme-studio', label: 'Open Theme Studio', icon: <SquareEdit size={16} /> },
        { id: 'sync-git', label: 'Sync Git Branches', icon: <Rotate size={16} />, shortcut: '⌘R' },
      ],
    },
  ];

  const generatedCode = `<Command
  placeholder="${placeholder}"
  variant="${variant}"
  shortcutHint="${shortcutHint}"
  groups={[
    {
      id: 'quick-actions',
      heading: 'Quick Actions',
      items: [
        { id: 'create-page', label: 'Create New Page', shortcut: '⌘N' },
        { id: 'find-symbol', label: 'Find Symbol in Project', shortcut: '⌘P' },
      ],
    },
  ]}
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <TextInput
                label="Search Placeholder"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'default', label: 'Default Rounded (Elevated)' },
                  { value: 'bordered', label: 'High-Contrast Bordered' },
                  { value: 'minimal', label: 'Minimal Underline' },
                ]}
                fullWidth
              />

              <TextInput
                label="Shortcut Hint Tag"
                value={shortcutHint}
                onChange={(e) => setShortcutHint(e.target.value)}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-xl">
              <Command
                placeholder={placeholder}
                variant={variant}
                shortcutHint={shortcutHint}
                groups={demoGroups}
              />
            </div>
          </div>

          {/* Syntax-Highlighted Dark Code Footer */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {copied ? 'Copied!' : DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
