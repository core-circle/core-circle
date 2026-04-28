'use client';

import React, { useState } from 'react';
import { EyeIcon, CodeIcon, CopyIcon, CheckIcon } from '@core-circle/icons';
import { Button } from '@core-circle/ui';
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
        {title && <h3 className={s.toolbarTitle}>{title}</h3>}
        <div className={s.toolbarActions}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            startIcon={showCode ? <EyeIcon size={16} /> : <CodeIcon size={16} />}
            className={`${s.toggleButton.base} ${showCode ? s.toggleButton.active : s.toggleButton.inactive}`}
          >
            {showCode ? 'Preview' : 'Code'}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            startIcon={copied ? <CheckIcon size={16} className={s.copySuccess} /> : <CopyIcon size={16} />}
            className={s.copyButton}
          >
            {copied ? (
              <span className={s.copySuccessText}>Copied!</span>
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
