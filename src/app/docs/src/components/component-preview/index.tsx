'use client';

import React, { useState } from 'react';
import { EyeIcon, CodeIcon, CopyIcon, CheckIcon } from '@core-circle/icons';
import { Button, Typography } from '@core-circle/ui';
import { highlightCode } from '../../utils/highlight';
import { componentPreviewStyles as s } from './component-preview.styles';

interface ComponentPreviewProps {
  title?: string;
  code?: string;
  children: React.ReactNode;
}

const ComponentPreview = ({ title = '', code = '', children }: ComponentPreviewProps) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={s.container}>
      <div className={s.toolbar}>
        {title && <Typography variant="h3" className={s.toolbarTitle}>{title}</Typography>}
        <div className={s.toolbarActions}>
          <Button
            variant={showCode ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setShowCode(!showCode)}
            startIcon={showCode ? <EyeIcon size={16} /> : <CodeIcon size={16} />}
            className="h-8 text-xs font-core-circle-medium"
          >
            {showCode ? 'Preview' : 'Code'}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            startIcon={copied ? <CheckIcon size={16} className={s.copySuccess} /> : <CopyIcon size={16} />}
            className="h-8 text-xs font-core-circle-medium"
          >
            {copied ? (
              <Typography variant="p" as="span" className={s.copySuccessText}>Copied!</Typography>
            ) : (
              'Copy'
            )}
          </Button>
        </div>
      </div>

      <div className={s.contentArea}>
        {!showCode ? (
          <div className={s.previewWrapper}>
            {children}
          </div>
        ) : (
          <div className={s.codeWrapper}>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: code ? highlightCode(code) : '' }} />
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPreview;
