'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { DiffViewerProps, DiffLine } from '../../../interface/atoms/diff-viewer/diff-viewer.types';
import { diffViewerContainerVariants } from './diff-viewer.styles';
import { File, ArrowLeftRight } from '@core-circle/icons';

// Simple Myers / LCS line difference algorithm
function computeLineDiff(oldText: string, newText: string): DiffLine[] {
  const oldLines = oldText.replace(/\r\n/g, '\n').split('\n');
  const newLines = newText.replace(/\r\n/g, '\n').split('\n');
  const m = oldLines.length;
  const n = newLines.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldLines[i - 1] === newLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const diff: DiffLine[] = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      diff.unshift({
        type: 'normal',
        oldLineNumber: i,
        newLineNumber: j,
        content: oldLines[i - 1],
      });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      diff.unshift({
        type: 'add',
        newLineNumber: j,
        content: newLines[j - 1],
      });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      diff.unshift({
        type: 'delete',
        oldLineNumber: i,
        content: oldLines[i - 1],
      });
      i--;
    }
  }

  return diff;
}

export const DiffViewer = React.forwardRef<HTMLDivElement, DiffViewerProps>(
  (
    {
      className,
      oldCode = '',
      newCode = '',
      splitView: controlledSplit,
      onSplitViewChange,
      language = 'typescript',
      filename,
      showLineNumbers = true,
      maxHeight,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [internalSplit, setInternalSplit] = React.useState(true);
    const isSplit = controlledSplit !== undefined ? controlledSplit : internalSplit;

    const toggleSplit = (val: boolean) => {
      if (controlledSplit === undefined) setInternalSplit(val);
      onSplitViewChange?.(val);
    };

    const diffLines = React.useMemo(
      () => computeLineDiff(oldCode, newCode),
      [oldCode, newCode]
    );

    const additions = React.useMemo(
      () => diffLines.filter((l) => l.type === 'add').length,
      [diffLines]
    );
    const deletions = React.useMemo(
      () => diffLines.filter((l) => l.type === 'delete').length,
      [diffLines]
    );

    // Prepare side-by-side split rows
    const splitRows = React.useMemo(() => {
      const rows: { left?: DiffLine; right?: DiffLine }[] = [];
      let idx = 0;
      while (idx < diffLines.length) {
        const current = diffLines[idx];
        if (current.type === 'normal') {
          rows.push({ left: current, right: current });
          idx++;
        } else if (current.type === 'delete') {
          const next = diffLines[idx + 1];
          if (next && next.type === 'add') {
            rows.push({ left: current, right: next });
            idx += 2;
          } else {
            rows.push({ left: current, right: undefined });
            idx++;
          }
        } else if (current.type === 'add') {
          rows.push({ left: undefined, right: current });
          idx++;
        }
      }
      return rows;
    }, [diffLines]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(diffViewerContainerVariants({ variant }), className)}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950/90 border-b border-slate-800/80 select-none">
          <div className="flex items-center gap-3">
            {filename ? (
              <div className="flex items-center gap-2 text-slate-200">
                <File size={14} className="text-slate-400" />
                <span className="font-semibold text-xs">{filename}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-slate-400">
                <ArrowLeftRight size={14} />
                <span className="uppercase text-[10px] tracking-wider font-semibold">
                  {language} diff
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-emerald-400 font-semibold">+{additions}</span>
              <span className="text-slate-500">•</span>
              <span className="text-rose-400 font-semibold">-{deletions}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
            <button
              type="button"
              onClick={() => toggleSplit(true)}
              className={cn(
                'px-2 py-0.5 text-[11px] rounded transition-colors cursor-pointer',
                isSplit
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              Split
            </button>
            <button
              type="button"
              onClick={() => toggleSplit(false)}
              className={cn(
                'px-2 py-0.5 text-[11px] rounded transition-colors cursor-pointer',
                !isSplit
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              Unified
            </button>
          </div>
        </div>

        {/* Viewport Content */}
        <div
          style={{ maxHeight: maxHeight || undefined }}
          className="overflow-x-auto overflow-y-auto leading-relaxed"
        >
          {isSplit ? (
            /* Split View */
            <div className="grid grid-cols-2 divide-x divide-slate-800 min-w-[640px]">
              {/* Left: Original */}
              <div className="py-2">
                {splitRows.map((row, rIdx) => {
                  const left = row.left;
                  const isDel = left?.type === 'delete';
                  return (
                    <div
                      key={`l-${rIdx}`}
                      className={cn(
                        'flex items-center px-2 py-0.5 font-mono text-xs',
                        isDel && 'bg-rose-950/40 text-rose-300'
                      )}
                    >
                      {showLineNumbers && (
                        <span className="w-8 text-right pr-3 select-none text-slate-600 shrink-0">
                          {left?.oldLineNumber ?? ''}
                        </span>
                      )}
                      <span className="w-4 select-none text-slate-500 font-bold shrink-0">
                        {isDel ? '-' : ''}
                      </span>
                      <span className="whitespace-pre flex-1 truncate">
                        {left?.content ?? ''}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Right: Modified */}
              <div className="py-2">
                {splitRows.map((row, rIdx) => {
                  const right = row.right;
                  const isAdd = right?.type === 'add';
                  return (
                    <div
                      key={`r-${rIdx}`}
                      className={cn(
                        'flex items-center px-2 py-0.5 font-mono text-xs',
                        isAdd && 'bg-emerald-950/40 text-emerald-300'
                      )}
                    >
                      {showLineNumbers && (
                        <span className="w-8 text-right pr-3 select-none text-slate-600 shrink-0">
                          {right?.newLineNumber ?? ''}
                        </span>
                      )}
                      <span className="w-4 select-none text-slate-500 font-bold shrink-0">
                        {isAdd ? '+' : ''}
                      </span>
                      <span className="whitespace-pre flex-1 truncate">
                        {right?.content ?? ''}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Unified View */
            <div className="py-2 min-w-[500px]">
              {diffLines.map((line, idx) => {
                const isAdd = line.type === 'add';
                const isDel = line.type === 'delete';

                return (
                  <div
                    key={idx}
                    className={cn(
                      'flex items-center px-3 py-0.5 font-mono text-xs',
                      isAdd && 'bg-emerald-950/40 text-emerald-300',
                      isDel && 'bg-rose-950/40 text-rose-300'
                    )}
                  >
                    {showLineNumbers && (
                      <div className="flex gap-2 text-right pr-3 select-none text-slate-600 shrink-0">
                        <span className="w-6">{line.oldLineNumber ?? ''}</span>
                        <span className="w-6">{line.newLineNumber ?? ''}</span>
                      </div>
                    )}
                    <span className="w-4 select-none font-bold text-slate-500 shrink-0">
                      {isAdd ? '+' : isDel ? '-' : ' '}
                    </span>
                    <span className="whitespace-pre flex-1">{line.content}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
);

DiffViewer.displayName = 'DiffViewer';
export default DiffViewer;
