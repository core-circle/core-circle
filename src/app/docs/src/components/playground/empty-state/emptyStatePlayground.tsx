'use client';

import React, { useState } from 'react';
import { EmptyState, Button, Select, TextInput } from '@core-circle/ui';
import { EmptyStateVariant, EmptyStateSize } from '@core-circle/ui';
import { Folder, Plus, CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { emptyStatePlaygroundStyles as s } from './emptyStatePlayground.styles';

export const EmptyStatePlayground: React.FC = () => {
  const [title, setTitle] = useState<string>('No documents uploaded yet');
  const [description, setDescription] = useState<string>('Upload your first document or invite collaborators to get started.');
  const [variant, setVariant] = useState<EmptyStateVariant>('dashed');
  const [size, setSize] = useState<EmptyStateSize>('md');

  const generatedCode = `<EmptyState
  variant="${variant}"
  size="${size}"
  icon={<Folder size={32} />}
  title="${title}"
  description="${description}"
  action={
    <Button variant="primary" size="sm" startIcon={<Plus size={14} />}>
      Upload Document
    </Button>
  }
  secondaryAction={
    <Button variant="outline" size="sm">
      Learn More
    </Button>
  }
/>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as EmptyStateVariant)}
                options={[
                  { value: 'dashed', label: 'Dashed' },
                  { value: 'card', label: 'Card' },
                  { value: 'default', label: 'Default' },
                  { value: 'minimal', label: 'Minimal' },
                  { value: 'glassmorphic', label: 'Glassmorphic' },
                  { value: 'dark', label: 'Dark' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as EmptyStateSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <EmptyState
              variant={variant}
              size={size}
              icon={<Folder size={32} />}
              title={title}
              description={description}
              action={
                <Button variant="primary" size="sm" startIcon={<Plus size={14} />}>
                  Upload Document
                </Button>
              }
              secondaryAction={
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              }
            />
          </div>

          {/* Live Code Output */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
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
