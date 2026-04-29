'use client';

import React, { useState } from 'react';
import { Button, Typography } from '@core-circle/ui';
import { CheckIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../utils/highlight';

interface CodeSnippetProps {
  code: string;
  label?: string;
  className?: string;
}

const CodeSnippet = ({ code, label, className = '' }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
          {label}
        </Typography>
      )}
      <div className="relative group">
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white border border-white/10"
          >
            {copied ? (
              <CheckIcon size={14} className="text-core-circle-primary" />
            ) : (
              <CopyIcon size={14} />
            )}
          </Button>
        </div>
        <div className="bg-core-circle-bg-inverse rounded-core-circle-xl border border-core-circle-border-main overflow-hidden">
          <pre className="p-5 text-[13px] font-mono leading-relaxed overflow-x-auto text-slate-300">
            <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
