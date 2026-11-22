'use client';

import React, { useState } from 'react';
import { Watermark, Select, TextInput, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { watermarkPlaygroundStyles as s } from './watermarkPlayground.styles';

export const WatermarkPlayground: React.FC = () => {
  const [content, setContent] = useState<string>('CONFIDENTIAL');
  const [rotate, setRotate] = useState<number>(-22);
  const [opacity, setOpacity] = useState<number>(0.15);
  const [fontSize, setFontSize] = useState<number>(14);
  const [variant, setVariant] = useState<'default' | 'card'>('card');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<Watermark
  content="${content}"
  rotate={${rotate}}
  opacity={${opacity}}
  fontSize={${fontSize}}
  variant="${variant}"
  className="p-8 min-h-[220px]"
>
  <div className="flex flex-col gap-2 relative z-0">
    <h3 className="text-base font-semibold text-slate-900">Protected Legal Document</h3>
    <p className="text-sm text-slate-600">
      This canvas demonstrates live reactive overlay watermarking preventing unauthorized dissemination.
    </p>
  </div>
</Watermark>`;

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <TextInput
                label="Watermark Text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'card', label: 'Card Container' },
                  { value: 'default', label: 'Borderless Canvas' },
                ]}
                fullWidth
              />

              <Select
                label="Angle (°)"
                value={String(rotate)}
                onChange={(e) => setRotate(Number(e.target.value))}
                options={[
                  { value: '-45', label: '-45° Diagonal' },
                  { value: '-22', label: '-22° Standard' },
                  { value: '0', label: '0° Horizontal' },
                  { value: '45', label: '+45° Positive Diagonal' },
                ]}
                fullWidth
              />

              <Select
                label="Opacity Level"
                value={String(opacity)}
                onChange={(e) => setOpacity(Number(e.target.value))}
                options={[
                  { value: '0.08', label: 'Subtle (0.08)' },
                  { value: '0.15', label: 'Medium (0.15)' },
                  { value: '0.25', label: 'Prominent (0.25)' },
                  { value: '0.4', label: 'Heavy Security (0.40)' },
                ]}
                fullWidth
              />

              <Select
                label="Font Size"
                value={String(fontSize)}
                onChange={(e) => setFontSize(Number(e.target.value))}
                options={[
                  { value: '12', label: '12px Fine' },
                  { value: '14', label: '14px Regular' },
                  { value: '18', label: '18px Heavy' },
                ]}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Live Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-xl">
              <Watermark
                content={content}
                rotate={rotate}
                opacity={opacity}
                fontSize={fontSize}
                variant={variant}
                className="p-8 min-h-[200px]"
              >
                <div className="flex flex-col gap-3 relative z-0">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      SEC-ID #99482-B
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">
                      Restricted Access
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Q4 Enterprise Security Audit Report
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This document contains confidential vulnerability assessments and penetration
                    test findings. Redistribution or reproduction without prior written
                    authorization is strictly prohibited.
                  </p>
                </div>
              </Watermark>
            </div>
          </div>

          {/* Interactive Code Section */}
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
