'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CodeBlockProps } from '../../../interface/atoms/code-block/code-block.types';
import { codeBlockContainerVariants } from './code-block.styles';
import { CopyIcon, CheckIcon, File, Terminal } from '@core-circle/icons';

function formatCodeLine(line: string): string {
  if (!line) return '&nbsp;';

  // Basic HTML entity escaping
  let escaped = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Tokenize comments
  if (escaped.trim().startsWith('//') || escaped.trim().startsWith('#')) {
    return `<span class="text-slate-500 italic">${escaped}</span>`;
  }

  // Tokenize strings
  escaped = escaped.replace(/(["'`].*?["'`])/g, '<span class="text-emerald-400">$1</span>');

  // Tokenize keywords
  const keywords = ['import', 'from', 'export', 'default', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'async', 'await', 'type', 'interface'];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  escaped = escaped.replace(keywordRegex, '<span class="text-indigo-400 font-semibold">$1</span>');

  // Tokenize numbers
  escaped = escaped.replace(/\b(\d+)\b/g, '<span class="text-amber-300">$1</span>');

  return escaped;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      className,
      code = '',
      language = 'tsx',
      filename,
      showLineNumbers = true,
      highlightLines = [],
      copyable = true,
      maxHeight,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);

    const lines = React.useMemo(() => {
      const trimmed = code.replace(/\r\n/g, '\n');
      return trimmed.split('\n');
    }, [code]);

    const handleCopy = React.useCallback(() => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }, [code]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(codeBlockContainerVariants({ variant }), className)}
      >
        {/* Header Bar: File Tab, Language Badge, Copy Action */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-slate-800/80 select-none">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            {filename ? (
              <>
                <File size={14} className="text-slate-400" />
                <span className="font-semibold">{filename}</span>
              </>
            ) : (
              <>
                <Terminal size={14} className="text-slate-400" />
                <span className="uppercase text-[10px] tracking-wider font-semibold text-slate-400">
                  {language}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {filename && language && (
              <span className="uppercase text-[10px] tracking-wider text-slate-400 font-medium">
                {language}
              </span>
            )}
            {copyable && (
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <CopyIcon size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Code Viewport with Line Numbers and Highlights */}
        <div
          style={{ maxHeight: maxHeight || undefined }}
          className="overflow-x-auto overflow-y-auto p-4 leading-relaxed font-mono"
        >
          <pre className="m-0 p-0">
            <code>
              {lines.map((line, idx) => {
                const lineNum = idx + 1;
                const isHighlighted = highlightLines.includes(lineNum);

                return (
                  <div
                    key={lineNum}
                    className={cn(
                      'flex items-center -mx-4 px-4 transition-colors',
                      isHighlighted && 'bg-indigo-950/50 border-l-2 border-indigo-400'
                    )}
                  >
                    {showLineNumbers && (
                      <span className="shrink-0 w-8 select-none text-right pr-4 text-slate-600 text-xs font-mono">
                        {lineNum}
                      </span>
                    )}
                    <span
                      className="flex-1 whitespace-pre"
                      dangerouslySetInnerHTML={{ __html: formatCodeLine(line) }}
                    />
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
export default CodeBlock;
