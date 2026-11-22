'use client';

import React, { useState } from 'react';
import { PromptInput, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { promptInputPlaygroundStyles as s } from './promptInputPlayground.styles';

export const PromptInputPlayground: React.FC = () => {
  const [value, setValue] = useState<string>('How do I build responsive design systems with Tailwind CSS?');
  const [placeholder, setPlaceholder] = useState<string>('Ask Gemini or Claude anything...');
  const [variant, setVariant] = useState<'default' | 'bordered' | 'card'>('default');
  const [selectedModel, setSelectedModel] = useState<string>('Gemini 2.0 Flash');
  const [loading, setLoading] = useState<boolean>(false);
  const [showAttachments, setShowAttachments] = useState<boolean>(true);
  const [showVoice, setShowVoice] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<PromptInput
  value="${value}"
  placeholder="${placeholder}"
  variant="${variant}"
  selectedModel="${selectedModel}"
  models={['Gemini 2.0 Flash', 'Claude 3.7 Sonnet', 'GPT-4o']}${loading ? '\n  loading' : ''}${!showAttachments ? '\n  showAttachments={false}' : ''}${!showVoice ? '\n  showVoice={false}' : ''}
  onSend={(prompt) => console.log('Sent prompt:', prompt)}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <TextInput
                label="Prompt Text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'default', label: 'Default (Elevated Focus)' },
                  { value: 'bordered', label: 'High-Contrast Bordered' },
                  { value: 'card', label: 'Card Surface Tint' },
                ]}
                fullWidth
              />

              <Select
                label="AI Model"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                options={[
                  { value: 'Gemini 2.0 Flash', label: 'Gemini 2.0 Flash' },
                  { value: 'Claude 3.7 Sonnet', label: 'Claude 3.7 Sonnet' },
                  { value: 'GPT-4o', label: 'GPT-4o' },
                  { value: 'DeepSeek-R1', label: 'DeepSeek-R1' },
                ]}
                fullWidth
              />

              <TextInput
                label="Placeholder"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Simulate Loading / Generating (Shows Stop Button)"
                checked={loading}
                onChange={(checked) => setLoading(checked)}
              />
              <Checkbox
                label="Show File Attachment Button"
                checked={showAttachments}
                onChange={(checked) => setShowAttachments(checked)}
              />
              <Checkbox
                label="Show Voice Dictation Mic Button"
                checked={showVoice}
                onChange={(checked) => setShowVoice(checked)}
              />
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-xl">
              <PromptInput
                value={value}
                onChange={setValue}
                placeholder={placeholder}
                variant={variant}
                selectedModel={selectedModel}
                onModelChange={setSelectedModel}
                loading={loading}
                onStop={() => setLoading(false)}
                onSend={() => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 2000);
                }}
                showAttachments={showAttachments}
                showVoice={showVoice}
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
