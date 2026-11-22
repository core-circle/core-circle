'use client';

import React from 'react';
import { NumberInput, Badge } from '@core-circle/ui';
import { BadgeDollarSign, CreditCard, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const NUMBER_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'NumberInput' },
];

export const NUMBER_INPUT_HEADER_CONTENT = {
  title: 'NumberInput',
  description:
    'A versatile numeric entry control providing thousands grouping separators, currency symbols, boundary clamping, and customizable stepper button arrangements.',
};

export const NUMBER_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore financial invoicing, inventory quantity counters, fee calculations, and percentage commission scales.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore stepper layouts (stacked, split, none), surface treatments, and precision scales.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive numeric sandbox with prefix, suffix, stepper buttons, and min/max limits.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'B2B billing calculation engine payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const NUMBER_INPUT_THEME_CONFIGS = [
  {
    id: 'theming-enterprise-invoice',
    title: '1. FinTech Invoice & Billing Theme',
    description: 'USD currency input with decimal precision, thousands separators, and stacked steppers.',
    previewTitle: 'Invoice Subtotal Amount',
    code: `<NumberInput
  label="Unit Price"
  prefix="$"
  defaultValue={12450.75}
  precision={2}
  formatThousands
  step={100}
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <NumberInput
            label="Unit Price"
            prefix="$"
            defaultValue={12450.75}
            precision={2}
            formatThousands
            step={100}
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-inventory-stepper',
    title: '2. E-Commerce Cart & Stock Counter',
    description: 'Split stepper buttons (+ and -) flanking the quantity display.',
    previewTitle: 'Item Order Quantity',
    code: `<NumberInput
  label="Order Units"
  stepper="split"
  defaultValue={3}
  min={1}
  max={50}
  fullWidth
  helperText="Available in warehouse: 50 units"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <NumberInput
            label="Order Units"
            stepper="split"
            defaultValue={3}
            min={1}
            max={50}
            fullWidth
            helperText="Available in warehouse: 50 units"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-commission-percentage',
    title: '3. SaaS Commission & Tax Rate',
    description: 'Percentage suffix input with decimal accuracy for fee calculations.',
    previewTitle: 'Platform Take Rate',
    code: `<NumberInput
  label="Platform Royalty"
  suffix="%"
  defaultValue={12.5}
  min={0}
  max={100}
  step={0.5}
  precision={1}
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <NumberInput
            label="Platform Royalty"
            suffix="%"
            defaultValue={12.5}
            min={0}
            max={100}
            step={0.5}
            precision={1}
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-euro-filled',
    title: '4. European Procurement (EUR)',
    description: 'Filled background styling with Euro currency prefix.',
    previewTitle: 'Procurement Allocation',
    code: `<NumberInput
  label="Budgetary Allocation"
  prefix="€"
  variant="filled"
  defaultValue={75000}
  formatThousands
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <NumberInput
            label="Budgetary Allocation"
            prefix="€"
            variant="filled"
            defaultValue={75000}
            formatThousands
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-minimal-material',
    title: '5. Minimal Material Underline Theme',
    description: 'Clean underlined number field without buttons for tabular financial grids.',
    previewTitle: 'Line Item Quantity',
    code: `<NumberInput
  label="Quantity"
  variant="material"
  stepper="none"
  defaultValue={100}
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <NumberInput
            label="Quantity"
            variant="material"
            stepper="none"
            defaultValue={100}
            fullWidth
          />
        </div>
      </div>
    ),
  },
];

export const NUMBER_INPUT_VARIANT_GROUPS = [
  {
    id: 'variants-stepper',
    title: '1. Stepper Layout Arrangements',
    description: 'Stacked buttons, split -/+ buttons, or clean input with no buttons.',
    items: [
      {
        title: 'Stacked Stepper (Default)',
        code: '<NumberInput stepper="stacked" label="Stacked" defaultValue={10} />',
        render: () => <NumberInput stepper="stacked" label="Stacked" defaultValue={10} fullWidth />,
      },
      {
        title: 'Split Stepper',
        code: '<NumberInput stepper="split" label="Split" defaultValue={10} />',
        render: () => <NumberInput stepper="split" label="Split" defaultValue={10} fullWidth />,
      },
      {
        title: 'No Stepper Buttons',
        code: '<NumberInput stepper="none" label="None" defaultValue={10} />',
        render: () => <NumberInput stepper="none" label="None" defaultValue={10} fullWidth />,
      },
    ],
  },
  {
    id: 'variants-surfaces',
    title: '2. Surface Framing Styles',
    description: 'Outline, Filled, and Material underline treatments.',
    items: [
      {
        title: 'Outline Variant',
        code: '<NumberInput variant="outline" label="Outline" defaultValue={250} />',
        render: () => <NumberInput variant="outline" label="Outline" defaultValue={250} fullWidth />,
      },
      {
        title: 'Filled Variant',
        code: '<NumberInput variant="filled" label="Filled" defaultValue={250} />',
        render: () => <NumberInput variant="filled" label="Filled" defaultValue={250} fullWidth />,
      },
      {
        title: 'Material Variant',
        code: '<NumberInput variant="material" label="Material" defaultValue={250} />',
        render: () => <NumberInput variant="material" label="Material" defaultValue={250} fullWidth />,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: '3. Sizing Scale',
    description: 'Compact (sm), Standard (md), and Prominent (lg) scales.',
    items: [
      {
        title: 'Small Scale (sm - 32px)',
        code: '<NumberInput size="sm" label="Small" defaultValue={5} />',
        render: () => <NumberInput size="sm" label="Small Scale" defaultValue={5} fullWidth />,
      },
      {
        title: 'Medium Scale (md - 40px)',
        code: '<NumberInput size="md" label="Medium" defaultValue={15} />',
        render: () => <NumberInput size="md" label="Medium Scale" defaultValue={15} fullWidth />,
      },
      {
        title: 'Large Scale (lg - 48px)',
        code: '<NumberInput size="lg" label="Large" defaultValue={25} />',
        render: () => <NumberInput size="lg" label="Large Scale" defaultValue={25} fullWidth />,
      },
    ],
  },
  {
    id: 'variants-formatting',
    title: '4. Affixes & Thousand Formatting',
    description: 'Currency prefixes, unit suffixes, and commas grouping.',
    items: [
      {
        title: 'Currency USD ($)',
        code: '<NumberInput prefix="$" defaultValue={199.99} precision={2} />',
        render: () => <NumberInput prefix="$" defaultValue={199.99} precision={2} fullWidth />,
      },
      {
        title: 'Percentage Rate (%)',
        code: '<NumberInput suffix="%" defaultValue={8.25} precision={2} />',
        render: () => <NumberInput suffix="%" defaultValue={8.25} precision={2} fullWidth />,
      },
      {
        title: 'Thousands Comma Grouping',
        code: '<NumberInput formatThousands defaultValue={1500000} />',
        render: () => <NumberInput formatThousands defaultValue={1500000} fullWidth />,
      },
      {
        title: 'Disabled State',
        code: '<NumberInput label="Locked" disabled defaultValue={42} />',
        render: () => <NumberInput label="Locked" disabled defaultValue={42} fullWidth />,
      },
    ],
  },
];

export const NUMBER_INPUT_PLAYGROUND_SECTION = {
  id: 'number-input-playground-section',
  title: 'Interactive Playground',
  description: 'Test step increments, stepper layouts, precision, and thousands formatting.',
};

export const NUMBER_INPUT_MOCK_SECTION = {
  id: 'number-input-mock',
  title: 'Enterprise Billing & Invoicing Engine',
  description: 'Connect NumberInput to real-time invoice calculations.',
  snippets: [
    {
      label: 'Financial Line Item Payload',
      code: JSON.stringify(
        {
          invoiceId: 'INV-2026-9912',
          currency: 'USD',
          lineItems: [
            { id: '1', sku: 'CC-SEATS', label: 'Enterprise User Seats', unitPrice: 45.0, quantity: 15 },
            { id: '2', sku: 'CC-API', label: 'API Quota (millions)', unitPrice: 200.0, quantity: 2 },
          ],
          taxRatePercent: 8.5,
          subtotal: 1075.0,
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { NumberInput, Typography } from '@core-circle/ui';

export function CartCalculator() {
  const [qty, setQty] = useState(2);
  const unitPrice = 45.0;
  const total = qty * unitPrice;

  return (
    <div className="flex flex-col gap-4 max-w-sm p-6 bg-white border border-slate-200 rounded-xl">
      <NumberInput
        label="Select Quantity"
        stepper="split"
        value={qty}
        min={1}
        max={100}
        onNumberChange={(val) => setQty(val || 1)}
        fullWidth
      />
      <div className="flex justify-between items-center pt-3 border-t">
        <Typography variant="body2" className="text-slate-500">Total Price:</Typography>
        <Typography variant="h4" className="font-bold text-slate-900">\${total.toFixed(2)}</Typography>
      </div>
    </div>
  );
}`,
    },
  ],
};

export const NUMBER_INPUT_OVERVIEW_SECTION = {
  id: 'number-input-overview',
  title: 'Introduction',
  description:
    'NumberInput is a numeric atom providing stepper buttons, precision clamping, min/max guards, currency prefixes, and thousands delimiters.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { NumberInput } from '@core-circle/ui';

<NumberInput
  label="Amount"
  prefix="$"
  defaultValue={100}
  formatThousands
  fullWidth
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const NUMBER_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'stepper',
    type: "'stacked' | 'split' | 'none'",
    defaultValue: "'stacked'",
    description: 'Layout positioning of the +/- increment and decrement buttons.',
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'material'",
    defaultValue: "'outline'",
    description: 'Surface frame styling.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Height and typography scale.',
  },
  {
    name: 'step',
    type: 'number',
    defaultValue: '1',
    description: 'Incremental value delta on button click or arrow keypress.',
  },
  {
    name: 'min',
    type: 'number',
    defaultValue: 'undefined',
    description: 'Minimum permitted numeric threshold.',
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: 'undefined',
    description: 'Maximum permitted numeric threshold.',
  },
  {
    name: 'precision',
    type: 'number',
    defaultValue: 'undefined',
    description: 'Decimal places to lock and display.',
  },
  {
    name: 'formatThousands',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Formats numbers with comma thousand grouping delimiters.',
  },
  {
    name: 'prefix',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Leading symbol or label placed inside the input (e.g. $).',
  },
  {
    name: 'suffix',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Trailing symbol or label placed inside the input (e.g. %).',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Stretches the input across 100% of container width.',
  },
];
