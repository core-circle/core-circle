'use client';

import React, { useState } from 'react';
import { DiffViewer, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { diffViewerPlaygroundStyles as s } from './diffViewerPlayground.styles';

const initialOld = `export const UserProfile = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};`;

const initialNew = `export const UserProfile = ({ user, showAvatar = true }) => {
  return (
    <div className="flex items-center gap-3">
      {showAvatar && <Avatar src={user.avatarUrl} />}
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};`;

export const DiffViewerPlayground: React.FC = () => {
  const [oldCode] = useState<string>(initialOld);
  const [newCode] = useState<string>(initialNew);
  const [filename, setFilename] = useState<string>('UserProfile.tsx');
  const [variant, setVariant] = useState<'default' | 'card' | 'bordered'>('default');
  const [splitView, setSplitView] = useState<boolean>(true);
  const [showLineNumbers, setShowLineNumbers] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<DiffViewer
  oldCode={beforeCode}
  newCode={afterCode}
  filename="${filename}"
  variant="${variant}"${!splitView ? '\n  splitView={false}' : ''}${!showLineNumbers ? '\n  showLineNumbers={false}' : ''}
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
              <TextInput
                label="Filename Header"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                fullWidth
              />

              <Select
                label="Layout View"
                value={splitView ? 'split' : 'unified'}
                onChange={(e) => setSplitView(e.target.value === 'split')}
                options={[
                  { value: 'split', label: 'Side-by-Side (Split)' },
                  { value: 'unified', label: 'Single Column (Unified)' },
                ]}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'default', label: 'Default Slate Dark' },
                  { value: 'card', label: 'Deep Slate 950 Card' },
                  { value: 'bordered', label: 'High-Contrast Bordered' },
                ]}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Show Line Numbers"
                checked={showLineNumbers}
                onChange={(checked) => setShowLineNumbers(checked)}
              />
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-2xl">
              <DiffViewer
                oldCode={oldCode}
                newCode={newCode}
                filename={filename}
                variant={variant}
                splitView={splitView}
                onSplitViewChange={setSplitView}
                showLineNumbers={showLineNumbers}
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
