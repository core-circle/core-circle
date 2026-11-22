'use client';

import React, { useState } from 'react';
import { Markdown, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { markdownPlaygroundStyles as s } from './markdownPlayground.styles';

const defaultMarkdownText = `# Product Feature Specification

Welcome to the **CoreCircle 2.0** engineering documentation!

## Key Primitives
- 33 foundational **Atoms**
- Zero-dependency SVG graphics
- Tailwind CSS design tokens

> "Good design is as little design as possible." - Dieter Rams

### Quick Installation
\`\`\`bash
npm install @core-circle/ui @core-circle/theme
\`\`\`

Learn more on the [CoreCircle Website](https://corecircle.io).`;

export const MarkdownPlayground: React.FC = () => {
  const [content] = useState<string>(defaultMarkdownText);
  const [variant, setVariant] = useState<'default' | 'card' | 'prose'>('card');
  const [sanitize, setSanitize] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<Markdown
  content={markdownContent}
  variant="${variant}"${!sanitize ? '\n  sanitize={false}' : ''}
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
                  { value: 'prose', label: 'Prose Typography Layout' },
                  { value: 'default', label: 'Default Raw View' },
                ]}
                fullWidth
              />

              <div className="flex items-center pt-6">
                <Checkbox
                  label="Sanitize Dangerous HTML / Scripts"
                  checked={sanitize}
                  onChange={(checked) => setSanitize(checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-2xl">
              <Markdown content={content} variant={variant} sanitize={sanitize} />
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
