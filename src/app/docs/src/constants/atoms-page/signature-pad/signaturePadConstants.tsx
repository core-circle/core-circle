'use client';

import React from 'react';
import { SignaturePad, Badge } from '@core-circle/ui';
import { SquareEdit, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const SIGNATURE_PAD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'SignaturePad' },
];

export const SIGNATURE_PAD_HEADER_CONTENT = {
  title: 'SignaturePad',
  description:
    'A smooth HTML5 canvas digital signature capture component providing multi-level stroke undo, clear action, touch screen pressure smoothing, and PNG export.',
};

export const SIGNATURE_PAD_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore legal contracts, courier package receipts, bank wire sign-offs, and onboarding agreements.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore framing styles, stroke thickness, pen ink colors, and disabled states.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive canvas sandbox with stroke controls and export capabilities.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'DocuSign-style electronic signature payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const SIGNATURE_PAD_THEME_CONFIGS = [
  {
    id: 'theming-enterprise-nda',
    title: '1. Enterprise NDA & Legal Contract Sign-Off',
    description: 'Standard document authorization pad with stroke undo and PNG export.',
    previewTitle: 'Non-Disclosure Agreement',
    code: `<SignaturePad
  label="Signatory Signature"
  helperText="By signing you agree to the confidentiality stipulations"
  strokeColor="#0f172a"
  strokeWidth={2.5}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <SignaturePad
            label="Signatory Signature"
            helperText="By signing you agree to the confidentiality stipulations"
            strokeColor="#0f172a"
            strokeWidth={2.5}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-blue-ink',
    title: '2. Professional Blue Ballpoint Ink Theme',
    description: 'Traditional legal blue pen ink tone with fine 2px line width.',
    previewTitle: 'Bank Account Application',
    code: `<SignaturePad
  label="Applicant Signature"
  strokeColor="#1d4ed8"
  strokeWidth={2}
  height={160}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <SignaturePad
            label="Applicant Signature"
            strokeColor="#1d4ed8"
            strokeWidth={2}
            height={160}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-courier-delivery',
    title: '3. Courier Package Proof of Delivery',
    description: 'High-contrast bordered canvas for delivery driver tablets.',
    previewTitle: 'Recipient Confirmation',
    code: `<SignaturePad
  label="Package Recipient"
  variant="bordered"
  strokeWidth={3.5}
  height={140}
  helperText="Sign with finger or stylus to confirm package receipt"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <SignaturePad
            label="Package Recipient"
            variant="bordered"
            strokeWidth={3.5}
            height={140}
            helperText="Sign with finger or stylus to confirm package receipt"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-soft-canvas',
    title: '4. Soft Tinted Canvas Theme',
    description: 'Subtle blue tint background matching modern SaaS onboarding flows.',
    previewTitle: 'Terms of Service Consent',
    code: `<SignaturePad
  label="Digital Consent"
  variant="soft"
  height={160}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <SignaturePad
            label="Digital Consent"
            variant="soft"
            height={160}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-disabled-sealed',
    title: '5. Executed & Sealed Contract Theme',
    description: 'Locked canvas state preventing post-execution modifications.',
    previewTitle: 'Finalized Executed Signature',
    code: `<SignaturePad
  label="Executed Contract"
  disabled
  helperText="Document locked on November 22, 2026 at 14:32 UTC"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <SignaturePad
            label="Executed Contract"
            disabled
            helperText="Document locked on November 22, 2026 at 14:32 UTC"
          />
        </div>
      </div>
    ),
  },
];

export const SIGNATURE_PAD_VARIANT_GROUPS = [
  {
    id: 'variants-surfaces',
    title: '1. Surface Variants',
    description: 'Default, Bordered, and Soft tinted styling treatments.',
    items: [
      {
        title: 'Default Variant',
        code: '<SignaturePad variant="default" label="Default Canvas" />',
        render: () => <SignaturePad variant="default" label="Default Canvas" height={150} />,
      },
      {
        title: 'Bordered High-Contrast',
        code: '<SignaturePad variant="bordered" label="Bordered Canvas" />',
        render: () => <SignaturePad variant="bordered" label="Bordered Canvas" height={150} />,
      },
      {
        title: 'Soft Tinted Canvas',
        code: '<SignaturePad variant="soft" label="Soft Tint Canvas" />',
        render: () => <SignaturePad variant="soft" label="Soft Tint Canvas" height={150} />,
      },
    ],
  },
  {
    id: 'variants-strokes',
    title: '2. Stroke Weights & Ink Tones',
    description: 'Fine (1.5px), Medium (2.5px), and Bold (4px) stroke profiles.',
    items: [
      {
        title: 'Fine Ink Stroke (1.5px)',
        code: '<SignaturePad strokeWidth={1.5} label="Fine Line" />',
        render: () => <SignaturePad strokeWidth={1.5} label="Fine Line" height={140} />,
      },
      {
        title: 'Bold Ink Stroke (4.0px)',
        code: '<SignaturePad strokeWidth={4} label="Bold Line" />',
        render: () => <SignaturePad strokeWidth={4} label="Bold Line" height={140} />,
      },
      {
        title: 'Blue Ink (#2563eb)',
        code: '<SignaturePad strokeColor="#2563eb" label="Blue Ink" />',
        render: () => <SignaturePad strokeColor="#2563eb" label="Blue Ink" height={140} />,
      },
    ],
  },
  {
    id: 'variants-states',
    title: '3. Controls & Disabled States',
    description: 'Clean canvas without bottom toolbar, and read-only disabled state.',
    items: [
      {
        title: 'No Bottom Toolbar Controls',
        code: '<SignaturePad showControls={false} label="Clean Canvas" />',
        render: () => <SignaturePad showControls={false} label="Clean Canvas" height={140} />,
      },
      {
        title: 'Disabled Read-Only State',
        code: '<SignaturePad disabled label="Disabled Canvas" />',
        render: () => <SignaturePad disabled label="Disabled Canvas" height={140} />,
      },
    ],
  },
];

export const SIGNATURE_PAD_PLAYGROUND_SECTION = {
  id: 'signature-pad-playground-section',
  title: 'Interactive Playground',
  description: 'Draw signatures in real-time, test stroke weights, ink colors, undo history, and PNG downloads.',
};

export const SIGNATURE_PAD_MOCK_SECTION = {
  id: 'signature-pad-mock',
  title: 'DocuSign-Style Document Execution API',
  description: 'Capture signed base64 payload and transmit to e-signature backend.',
  snippets: [
    {
      label: 'Signature Capture Payload',
      code: JSON.stringify(
        {
          documentId: 'doc_contract_99214',
          signatory: {
            name: 'Jordan Bell',
            email: 'jordan@corecircle.io',
            ipAddress: '192.168.1.1',
            signedAt: '2026-11-22T14:35:00Z',
          },
          signatureArtifact: {
            format: 'image/png',
            dataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
            width: 400,
            height: 180,
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useRef, useState } from 'react';
import { SignaturePad, Button } from '@core-circle/ui';

export function ContractSigner() {
  const padRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (padRef.current && !padRef.current.isEmpty()) {
      const dataUrl = padRef.current.toDataURL();
      // Transmit to e-signature API
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <SignaturePad
        ref={padRef}
        label="Authorized Representative"
        helperText="Draw your official signature"
      />
      <Button variant="primary" onClick={handleSubmit}>
        Submit Executed Document
      </Button>
    </div>
  );
}`,
    },
  ],
};

export const SIGNATURE_PAD_OVERVIEW_SECTION = {
  id: 'signature-pad-overview',
  title: 'Introduction',
  description:
    'SignaturePad provides a canvas-based digital signature capture interface with touch support, stroke history, undo, and PNG base64 export.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { SignaturePad } from '@core-circle/ui';

<SignaturePad
  label="Sign Here"
  onEnd={() => console.log('Signature completed')}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const SIGNATURE_PAD_PROPS_DATA: PropItem[] = [
  {
    name: 'height',
    type: 'number',
    defaultValue: '180',
    description: 'Pixel height of the drawing canvas area.',
  },
  {
    name: 'strokeWidth',
    type: 'number',
    defaultValue: '2.5',
    description: 'Pen line thickness in pixels.',
  },
  {
    name: 'strokeColor',
    type: 'string',
    defaultValue: "'#0f172a'",
    description: 'CSS color string for pen stroke ink.',
  },
  {
    name: 'backgroundColor',
    type: 'string',
    defaultValue: "'#ffffff'",
    description: 'Canvas backdrop color.',
  },
  {
    name: 'showControls',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Displays the bottom toolbar with Undo, Clear, and Save PNG buttons.',
  },
  {
    name: 'variant',
    type: "'default' | 'bordered' | 'soft'",
    defaultValue: "'default'",
    description: 'Outer boundary framing style.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Locks canvas preventing drawing interaction.',
  },
  {
    name: 'onChange',
    type: '(dataUrl: string) => void',
    defaultValue: 'undefined',
    description: 'Fired on stroke completion with updated PNG base64 data URL.',
  },
];
