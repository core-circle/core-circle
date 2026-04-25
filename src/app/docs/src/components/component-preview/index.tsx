'use client';

import React, { useState } from 'react';
import { EyeIcon, CodeIcon, CopyIcon, CheckIcon } from '@org/icons';
import { highlightCode } from '../../utils/highlight';

interface ComponentPreviewProps {
  title: string;
  code: string;
  children: React.ReactNode;
}

const ComponentPreview = ({ title, code, children }: ComponentPreviewProps) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex flex-col rounded-core-circle-2xl border border-core-circle-border-main bg-white shadow-core-circle-subtle overflow-hidden transition-all hover:shadow-core-circle-elevated">
      <div className="flex items-center justify-between px-6 py-3 bg-core-circle-bg-page/50 backdrop-blur-sm border-b border-core-circle-border-main">
        <h3 className="text-core-circle-text-main font-core-circle-bold text-[13px] tracking-tight">{title}</h3>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowCode(!showCode)}
            className={`flex items-center gap-2 px-3 py-1.5 text-[11px] font-core-circle-medium rounded-core-circle-md border transition-all ${showCode
              ? 'bg-core-circle-primary text-white border-core-circle-primary'
              : 'text-core-circle-text-muted hover:text-core-circle-text-main hover:bg-white border-transparent hover:border-core-circle-border-main'
              }`}
          >
            {showCode ? <EyeIcon /> : <CodeIcon />}
            {showCode ? 'Preview' : 'Code'}
          </button>

          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-core-circle-medium text-core-circle-text-muted hover:text-core-circle-text-main hover:bg-white rounded-core-circle-md border border-transparent hover:border-core-circle-border-main transition-all"
          >
            {copied ? (
              <>
                <CheckIcon className="w-3.5 h-3.5 text-core-circle-secondary" />
                <span className="text-core-circle-secondary">Copied!</span>
              </>
            ) : (
              <>
                <CopyIcon />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      <div className="relative min-h-[160px] flex items-center justify-center p-12 bg-white transition-all duration-300">
        {!showCode ? (
          <div className="flex flex-wrap gap-4 items-center justify-center animate-core-circle-in">
            {children}
          </div>
        ) : (
          <div className="absolute inset-0 bg-core-circle-bg-inverse p-6 overflow-auto animate-core-circle-in">
            <pre className="text-core-circle-text-inverse font-mono text-[12px] leading-relaxed">
              <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPreview;
