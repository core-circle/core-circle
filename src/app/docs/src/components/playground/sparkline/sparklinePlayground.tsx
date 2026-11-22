'use client';

import React, { useState } from 'react';
import { Sparkline, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import {
  SparklineType,
  SparklineColor,
  SparklineCurve,
} from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { sparklinePlaygroundStyles as s } from './sparklinePlayground.styles';

export const SparklinePlayground: React.FC = () => {
  const [type, setType] = useState<SparklineType>('area');
  const [color, setColor] = useState<SparklineColor>('success');
  const [curve, setCurve] = useState<SparklineCurve>('smooth');
  const [width, setWidth] = useState<number>(180);
  const [height, setHeight] = useState<number>(50);
  const [showPoints, setShowPoints] = useState<boolean>(false);
  const [showLastPoint, setShowLastPoint] = useState<boolean>(true);

  const demoData = [15, 24, 18, 38, 28, 45, 36, 58, 48, 65];

  const generatedCode = `<Sparkline
  data={[${demoData.join(', ')}]}
  type="${type}"
  color="${color}"
  curve="${curve}"
  width={${width}}
  height={${height}}
  showPoints={${showPoints}}
  showLastPoint={${showLastPoint}}
/>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Select
                label="Chart Type"
                value={type}
                onChange={(e) => setType(e.target.value as SparklineType)}
                options={[
                  { value: 'line', label: 'Line' },
                  { value: 'area', label: 'Area (Filled)' },
                  { value: 'bar', label: 'Bar (Columns)' },
                ]}
                fullWidth
              />

              <Select
                label="Color Palette"
                value={color}
                onChange={(e) => setColor(e.target.value as SparklineColor)}
                options={[
                  { value: 'primary', label: 'Primary (Indigo)' },
                  { value: 'success', label: 'Success (Emerald)' },
                  { value: 'warning', label: 'Warning (Amber)' },
                  { value: 'danger', label: 'Danger (Rose)' },
                  { value: 'neutral', label: 'Neutral (Slate)' },
                ]}
                fullWidth
              />

              <Select
                label="Curve Interpolation"
                value={curve}
                onChange={(e) => setCurve(e.target.value as SparklineCurve)}
                options={[
                  { value: 'smooth', label: 'Smooth (Bezier)' },
                  { value: 'linear', label: 'Linear (Polyline)' },
                ]}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-t border-core-circle-border-main/60 pt-4 items-end">
              <TextInput
                label="Width (px)"
                type="number"
                min={80}
                max={400}
                step={10}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                fullWidth
              />

              <TextInput
                label="Height (px)"
                type="number"
                min={24}
                max={120}
                step={4}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                fullWidth
              />

              <div className="flex items-center gap-6 py-2">
                <Checkbox
                  label="Last Dot"
                  checked={showLastPoint}
                  onChange={(e) => setShowLastPoint(e.target.checked)}
                />
                <Checkbox
                  label="All Dots"
                  checked={showPoints}
                  onChange={(e) => setShowPoints(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Sparkline
              data={demoData}
              type={type}
              color={color}
              curve={curve}
              width={width}
              height={height}
              showPoints={showPoints}
              showLastPoint={showLastPoint}
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
