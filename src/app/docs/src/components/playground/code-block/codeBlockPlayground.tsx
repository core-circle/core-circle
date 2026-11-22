'use client';

import React, { useState } from 'react';
import { CodeBlock, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { codeBlockPlaygroundStyles as s } from './codeBlockPlayground.styles';

const demoCodeSnippet = `import React from 'react';
import { Button, Badge } from '@core-circle/ui';

export const CheckoutView = () => {
  return (
    <div className="flex flex-col gap-4 p-6 border rounded-2xl">
      <Badge variant="pill">PRO PLAN</Badge>
      <h2 className="text-xl font-bold">Billing Summary</h2>
      <Button variant="primary">Confirm Payment</Button>
    </div>
  );
};`;

export const CodeBlockPlayground: React.FC = () => {
  const [filename, setFilename] = useState<string>('CheckoutView.tsx');
  const [language, setLanguage] = useState<string>('tsx');
  const [variant, setVariant] = useState<'default' | 'card' | 'bordered'>('default');
  const [showLineNumbers, setShowLineNumbers] = useState<boolean>(true);
  const [highlightFirstLine, setHighlightFirstLine] = useState<boolean>(true);
  const [copyable, setCopyable] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const highlightLines = highlightFirstLine ? [4, 9] : [];

  const generatedCode = `<CodeBlock
  code={codeSnippet}
  language="${language}"
  filename="${filename}"
  variant="${variant}"${!showLineNumbers ? '\n  showLineNumbers={false}' : ''}${highlightLines.length > 0 ? `\n  highlightLines={[${highlightLines.join(', ')}]}` : ''}${!copyable ? '\n  copyable={false}' : ''}
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
                label="File Name Tab"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                fullWidth
              />

              <Select
                label="Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                options={[
                  { value: 'tsx', label: 'TypeScript JSX (tsx)' },
                  { value: 'typescript', label: 'TypeScript (ts)' },
                  { value: 'javascript', label: 'JavaScript (js)' },
                  { value: 'bash', label: 'Bash Shell (sh)' },
                  { value: 'json', label: 'JSON Data (json)' },
                ]}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'default', label: 'Default Slate Dark' },
                  { value: 'card', label: 'Card Slate 950' },
                  { value: 'bordered', label: 'High-Contrast Bordered' },
                ]}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Show Line Numbers"
                checked={showLineNumbers}
                onCheckedChange={(checked) => setShowLineNumbers(checked)}
              />
              <Checkbox
                label="Highlight Critical Lines (L4 & L9)"
                checked={highlightFirstLine}
                onCheckedChange={(checked) => setHighlightFirstLine(checked)}
              />
              <Checkbox
                label="Show Copy to Clipboard Button"
                checked={copyable}
                onCheckedChange={(checked) => setCopyable(checked)}
              />
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-xl">
              <CodeBlock
                code={demoCodeSnippet}
                language={language}
                filename={filename}
                variant={variant}
                showLineNumbers={showLineNumbers}
                highlightLines={highlightLines}
                copyable={copyable}
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
