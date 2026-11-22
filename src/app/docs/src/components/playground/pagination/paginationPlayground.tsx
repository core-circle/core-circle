'use client';

import React, { useState } from 'react';
import { Pagination, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { PaginationVariant, PaginationSize } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { paginationPlaygroundStyles as s } from './paginationPlayground.styles';

export const PaginationPlayground: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(4);
  const [totalPages, setTotalPages] = useState<number>(15);
  const [siblingCount, setSiblingCount] = useState<number>(1);
  const [variant, setVariant] = useState<PaginationVariant>('default');
  const [size, setSize] = useState<PaginationSize>('md');
  const [showControls, setShowControls] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);

  const generatedCode = `<Pagination
  currentPage={${currentPage}}
  totalPages={${totalPages}}
  siblingCount={${siblingCount}}
  variant="${variant}"
  size="${size}"
  showControls={${showControls}}
  disabled={${disabled}}
  onPageChange={(page) => setCurrentPage(page)}
/>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as PaginationVariant)}
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'pills', label: 'Pills' },
                  { value: 'bordered', label: 'Bordered' },
                  { value: 'minimal', label: 'Minimal' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as PaginationSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />

              <TextInput
                label="Current Page"
                type="number"
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                fullWidth
              />

              <TextInput
                label="Total Pages"
                type="number"
                min={1}
                max={50}
                value={totalPages}
                onChange={(e) => setTotalPages(Number(e.target.value))}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 py-1 border-t border-core-circle-border-main/60 pt-4">
              <div className="w-48">
                <TextInput
                  label="Sibling Count"
                  type="number"
                  min={0}
                  max={3}
                  value={siblingCount}
                  onChange={(e) => setSiblingCount(Number(e.target.value))}
                  fullWidth
                />
              </div>

              <div className="flex items-center gap-6 pt-5">
                <Checkbox
                  label="Prev/Next Arrows"
                  checked={showControls}
                  onChange={(e) => setShowControls(e.target.checked)}
                />

                <Checkbox
                  label="Disabled"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              siblingCount={siblingCount}
              variant={variant}
              size={size}
              showControls={showControls}
              disabled={disabled}
              onPageChange={(page) => setCurrentPage(page)}
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
