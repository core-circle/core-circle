import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const COLOR_PICKER_BREADCRUMB_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: React.createElement(HomeIcon, { size: 14 }),
  },
  { label: 'Atoms', href: '/atoms' },
  { label: 'ColorPicker' },
];

export const COLOR_PICKER_HEADER_CONTENT = {
  title: 'ColorPicker',
  description:
    'A versatile color selection primitive supporting 10 visual variants, preset palettes, opacity sliders, eye dropper sampling, and multi-format conversions (Hex, RGB, HSL).',
};

export const COLOR_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    defaultValue: "'#3B82F6'",
    description: 'The current controlled color value (Hex format).',
  },
  {
    name: 'defaultValue',
    type: 'string',
    defaultValue: "'#3B82F6'",
    description: 'Default color value for uncontrolled usage.',
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional label displayed above the picker.',
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'compact' | 'studio' | 'ghost'",
    defaultValue: "'outline'",
    description: 'The visual style variant of the container (10 options).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the color swatch and text.',
  },
  {
    name: 'shape',
    type: "'rounded' | 'circle' | 'square' | 'pill'",
    defaultValue: "'rounded'",
    description: 'Contour shape of the color preview swatch.',
  },
  {
    name: 'format',
    type: "'hex' | 'rgb' | 'hsl'",
    defaultValue: "'hex'",
    description: 'Color string representation format.',
  },
  {
    name: 'showValue',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the formatted color code alongside the swatch.',
  },
  {
    name: 'allowFormatSwitch',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Allows clicking the format chip to cycle between Hex, RGB, and HSL.',
  },
  {
    name: 'showPresets',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders a quick-pick palette of preset color swatches.',
  },
  {
    name: 'presets',
    type: 'string[]',
    defaultValue: 'DEFAULT_PRESETS',
    description: 'Array of color hex codes to display in the quick-pick palette.',
  },
  {
    name: 'showAlpha',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays an opacity / alpha channel slider (0% to 100%).',
  },
  {
    name: 'showEyeDropper',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays a screen eye dropper tool button (supported in modern browsers).',
  },
  {
    name: 'copyable',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether clicking the formatted color string copies it to clipboard.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the color picker is interactive.',
  },
  {
    name: 'onChange',
    type: '(color: string) => void',
    defaultValue: '-',
    description: 'Callback fired when the color value changes.',
  },
];
