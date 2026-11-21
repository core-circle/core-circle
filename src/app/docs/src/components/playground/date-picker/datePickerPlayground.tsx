'use client';

import React, { useState } from 'react';
import { 
  DatePicker, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Card,
  DatePickerVariant,
  DatePickerSize,
  DatePickerMode,
  DateRange
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

export const DatePickerPlayground: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<DateRange | undefined>({ 
    from: new Date(), 
    to: new Date(Date.now() + 86400000 * 7) 
  });
  const [mode, setMode] = useState<DatePickerMode>('single');
  const [variant, setVariant] = useState<DatePickerVariant>('outline');
  const [size, setSize] = useState<DatePickerSize>('md');

  const [label, setLabel] = useState('Reservation Date');
  const [placeholder, setPlaceholder] = useState('Select date');
  const [helperText, setHelperText] = useState('Choose your arrival date or schedule interval.');

  const [showPresets, setShowPresets] = useState(true);
  const [showTime, setShowTime] = useState(false);
  const [showToday, setShowToday] = useState(true);
  const [showClear, setShowClear] = useState(true);
  const [fullWidth, setFullWidth] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const modeOptions = [
    { label: 'Single Date', value: 'single' },
    { label: 'Date Range (From - To)', value: 'range' },
    { label: 'Inline Calendar', value: 'inline' },
  ];

  const variantOptions = [
    { label: 'Outline (Default)', value: 'outline' },
    { label: 'Filled Surface', value: 'filled' },
    { label: 'Floating Depth', value: 'floating' },
    { label: 'Glassmorphic Blur', value: 'glassmorphic' },
    { label: 'Pill Capsule', value: 'pill' },
    { label: 'Material Underline', value: 'material' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Compact Trigger', value: 'compact' },
    { label: 'Calendar Card', value: 'calendar-card' },
    { label: 'Ghost Minimal', value: 'ghost' },
  ];

  const sizeOptions = [
    { label: 'Small (sm)', value: 'sm' },
    { label: 'Medium (md)', value: 'md' },
    { label: 'Large (lg)', value: 'lg' },
  ];

  const generateCodeSnippet = () => {
    let props = `mode="${mode}"\n  variant="${variant}"\n  size="${size}"`;
    if (label) props += `\n  label="${label}"`;
    if (placeholder) props += `\n  placeholder="${placeholder}"`;
    if (showPresets) props += `\n  showPresets`;
    if (showTime) props += `\n  showTime`;
    if (!showToday) props += `\n  showToday={false}`;
    if (!showClear) props += `\n  showClear={false}`;
    if (fullWidth) props += `\n  fullWidth`;
    if (disabled) props += `\n  disabled`;

    if (mode === 'range') {
      props += `\n  rangeValue={range}\n  onRangeChange={setRange}`;
    } else {
      props += `\n  value={date}\n  onChange={setDate}`;
    }

    return `<DatePicker\n  ${props}\n/>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive DatePicker Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-8 w-full min-h-[380px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <DatePicker
            mode={mode}
            variant={variant}
            size={size}
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            value={date}
            onChange={(d) => setDate(d)}
            rangeValue={range}
            onRangeChange={(r) => setRange(r)}
            showPresets={showPresets}
            showTime={showTime}
            showToday={showToday}
            showClear={showClear}
            fullWidth={fullWidth}
            disabled={disabled}
          />
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          DatePicker Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 3 or 4 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Selection Mode"
              value={mode}
              options={modeOptions}
              onChange={(val) => setMode(val as DatePickerMode)}
            />
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as DatePickerVariant)}
            />
            <Select
              label="Size Scale"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as DatePickerSize)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="show-presets"
              label="Show Presets"
              checked={showPresets}
              onChange={(e) => setShowPresets(e.target.checked)}
            />
            <Checkbox
              id="show-time"
              label="Time Selector"
              checked={showTime}
              onChange={(e) => setShowTime(e.target.checked)}
            />
            <Checkbox
              id="show-today"
              label="Today Button"
              checked={showToday}
              onChange={(e) => setShowToday(e.target.checked)}
            />
            <Checkbox
              id="show-clear"
              label="Clear Button"
              checked={showClear}
              onChange={(e) => setShowClear(e.target.checked)}
            />
            <Checkbox
              id="full-width"
              label="Full Width"
              checked={fullWidth}
              onChange={(e) => setFullWidth(e.target.checked)}
            />
            <Checkbox
              id="picker-disabled"
              label="Disabled"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Input Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Booking Date"
            />
            <TextInput
              label="Helper Text"
              value={helperText}
              onChange={(e) => setHelperText(e.target.value)}
              placeholder="e.g. Additional instructions..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
