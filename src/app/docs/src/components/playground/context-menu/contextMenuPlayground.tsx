'use client';

import React, { useState } from 'react';
import { ContextMenu, Badge, Select, Button } from '@core-circle/ui';
import {
  ContextMenuVariant,
  ContextMenuSize,
} from '@core-circle/ui';
import {
  Folder,
  SquareEdit,
  DocumentText,
  Share,
  Download,
  XIcon,
  CodeIcon,
  CopyIcon,
} from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { contextMenuPlaygroundStyles as s } from './contextMenuPlayground.styles';

export const ContextMenuPlayground: React.FC = () => {
  const [variant, setVariant] = useState<ContextMenuVariant>('card');
  const [size, setSize] = useState<ContextMenuSize>('md');

  const demoItems = [
    { id: 'open', label: 'Open File', icon: <Folder size={16} />, shortcut: '↵' },
    { id: 'edit', label: 'Quick Edit', icon: <SquareEdit size={16} />, shortcut: '⌘E' },
    { id: 'copy', label: 'Copy Path', icon: <CopyIcon size={16} />, shortcut: '⌥⌘C' },
    { id: 'duplicate', label: 'Duplicate File', icon: <DocumentText size={16} />, badge: <Badge size="sm" variant="gradient">COPY</Badge> },
    { id: 'share', label: 'Share with Team', icon: <Share size={16} />, divider: true },
    { id: 'download', label: 'Download Asset', icon: <Download size={16} />, shortcut: '⌘D' },
    { id: 'delete', label: 'Delete Item', icon: <XIcon size={16} />, destructive: true, divider: true },
  ];

  const generatedCode = `<ContextMenu
  variant="${variant}"
  size="${size}"
  items={[
    { id: 'open', label: 'Open File', icon: <Folder size={16} />, shortcut: '↵' },
    { id: 'edit', label: 'Quick Edit', icon: <SquareEdit size={16} />, shortcut: '⌘E' },
    { id: 'copy', label: 'Copy Path', icon: <CopyIcon size={16} />, shortcut: '⌥⌘C' },
    { id: 'duplicate', label: 'Duplicate File', icon: <DocumentText size={16} />, badge: <Badge size="sm" variant="gradient">COPY</Badge> },
    { id: 'share', label: 'Share with Team', icon: <Share size={16} />, divider: true },
    { id: 'download', label: 'Download Asset', icon: <Download size={16} />, shortcut: '⌘D' },
    { id: 'delete', label: 'Delete Item', icon: <XIcon size={16} />, destructive: true, divider: true },
  ]}
>
  <div className="p-12 text-center border-2 border-dashed rounded-2xl">
    Right-click here
  </div>
</ContextMenu>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as ContextMenuVariant)}
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'card', label: 'Card' },
                  { value: 'minimal', label: 'Minimal' },
                  { value: 'glassmorphic', label: 'Glassmorphic' },
                  { value: 'gradient', label: 'Gradient' },
                  { value: 'bordered', label: 'Bordered' },
                  { value: 'dark', label: 'Dark' },
                  { value: 'compact', label: 'Compact' },
                  { value: 'pill', label: 'Pill' },
                  { value: 'accent', label: 'Accent' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as ContextMenuSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <ContextMenu variant={variant} size={size} items={demoItems}>
              <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl w-full max-w-md text-center select-none cursor-context-menu hover:border-core-circle-primary transition-colors">
                <span className="text-base font-bold text-slate-800">Right-Click Inside This Box</span>
                <span className="text-xs text-slate-400 mt-1">Context menu opens precisely at your cursor position</span>
              </div>
            </ContextMenu>
          </div>

          {/* Live Code Output */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
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
