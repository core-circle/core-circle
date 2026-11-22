'use client';

import React, { useState } from 'react';
import { QRCode, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { qrCodePlaygroundStyles as s } from './qrCodePlayground.styles';

export const QRCodePlayground: React.FC = () => {
  const [value, setValue] = useState<string>('https://corecircle.io/get-started');
  const [caption, setCaption] = useState<string>('Scan with Camera');
  const [helperText, setHelperText] = useState<string>('Instant onboarding link');
  const [size, setSize] = useState<number>(180);
  const [color, setColor] = useState<string>('#0f172a');
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [variant, setVariant] = useState<'default' | 'card' | 'bordered'>('card');
  const [downloadable, setDownloadable] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<QRCode
  value="${value}"
  size={${size}}
  color="${color}"
  bgColor="${bgColor}"
  level="${level}"
  variant="${variant}"${caption ? `\n  caption="${caption}"` : ''}${helperText ? `\n  helperText="${helperText}"` : ''}${downloadable ? '\n  downloadable' : ''}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <TextInput
                label="Target URL or Text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'card', label: 'Elevated Card' },
                  { value: 'bordered', label: 'High Contrast Border' },
                  { value: 'default', label: 'Default Transparent' },
                ]}
                fullWidth
              />

              <Select
                label="Error Correction Level"
                value={level}
                onChange={(e) => setLevel(e.target.value as any)}
                options={[
                  { value: 'L', label: 'Level L (7% Recovery)' },
                  { value: 'M', label: 'Level M (15% Recovery)' },
                  { value: 'Q', label: 'Level Q (25% Recovery)' },
                  { value: 'H', label: 'Level H (30% Recovery)' },
                ]}
                fullWidth
              />

              <Select
                label="Theme Palette"
                value={color}
                onChange={(e) => {
                  const val = e.target.value;
                  setColor(val);
                  if (val === '#2563eb') setBgColor('#eff6ff');
                  else if (val === '#059669') setBgColor('#ecfdf5');
                  else if (val === '#7c3aed') setBgColor('#f5f3ff');
                  else setBgColor('#ffffff');
                }}
                options={[
                  { value: '#0f172a', label: 'Slate Dark (#0f172a)' },
                  { value: '#2563eb', label: 'Brand Blue (#2563eb)' },
                  { value: '#059669', label: 'Emerald Green (#059669)' },
                  { value: '#7c3aed', label: 'Violet Indigo (#7c3aed)' },
                ]}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Caption Title"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Helper Subtitle"
                value={helperText}
                onChange={(e) => setHelperText(e.target.value)}
                fullWidth
              />

              <Select
                label="Dimensions (px)"
                value={String(size)}
                onChange={(e) => setSize(Number(e.target.value))}
                options={[
                  { value: '140', label: 'Compact (140px)' },
                  { value: '180', label: 'Standard (180px)' },
                  { value: '220', label: 'Large (220px)' },
                ]}
                fullWidth
              />
            </div>

            <div className="flex items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Include Interactive Download & Copy Buttons"
                checked={downloadable}
                onChange={(checked) => setDownloadable(checked)}
              />
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex justify-center w-full">
              <QRCode
                value={value}
                size={size}
                color={color}
                bgColor={bgColor}
                level={level}
                variant={variant}
                caption={caption}
                helperText={helperText}
                downloadable={downloadable}
              />
            </div>
          </div>

          {/* Code Output Footer */}
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
