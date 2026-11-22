'use client';

import React, { useState } from 'react';
import { TreeView, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { treeViewPlaygroundStyles as s } from './treeViewPlayground.styles';

const demoTreeData = [
  {
    id: 'packages',
    label: 'packages',
    defaultExpanded: true,
    children: [
      {
        id: 'ui',
        label: 'ui',
        defaultExpanded: true,
        children: [
          { id: 'atoms', label: 'src/components/atoms' },
          { id: 'molecules', label: 'src/components/molecules' },
          { id: 'package.json', label: 'package.json' },
        ],
      },
      {
        id: 'theme',
        label: 'theme',
        children: [
          { id: 'tokens.ts', label: 'tokens.ts' },
          { id: 'tailwind.css', label: 'tailwind.css' },
        ],
      },
    ],
  },
  { id: 'nx.json', label: 'nx.json' },
  { id: 'readme.md', label: 'README.md' },
];

export const TreeViewPlayground: React.FC = () => {
  const [variant, setVariant] = useState<'default' | 'card' | 'bordered'>('card');
  const [showGuideLines, setShowGuideLines] = useState<boolean>(true);
  const [selectedId, setSelectedId] = useState<string>('atoms');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<TreeView
  data={treeData}
  variant="${variant}"
  selectedId="${selectedId}"
  onSelect={(node) => setSelectedId(node.id)}${!showGuideLines ? '\n  showGuideLines={false}' : ''}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'card', label: 'Elevated Card Surface' },
                  { value: 'bordered', label: 'High-Contrast Bordered' },
                  { value: 'default', label: 'Default Transparent' },
                ]}
                fullWidth
              />

              <div className="flex items-center pt-6">
                <Checkbox
                  label="Show Vertical Guide Indent Lines"
                  checked={showGuideLines}
                  onChange={(checked) => setShowGuideLines(checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-sm">
              <TreeView
                data={demoTreeData}
                variant={variant}
                selectedId={selectedId}
                onSelect={(node) => setSelectedId(node.id)}
                showGuideLines={showGuideLines}
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
