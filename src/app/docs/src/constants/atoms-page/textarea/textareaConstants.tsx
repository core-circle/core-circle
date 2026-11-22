'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Textarea, Badge } from '@core-circle/ui';
import {
  Sparkles,
  Shield,
  Terminal,
  ShoppingBag,
  SquareEdit,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';
import ComponentPreview from '../../../components/component-preview';

export interface TextareaThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface TextareaVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const TEXTAREA_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Textarea' },
];

export const TEXTAREA_HEADER_CONTENT = {
  title: 'Textarea',
  description:
    'A multi-line text input component supporting 12 visual styling variants, Material animated floating labels, custom resize behaviors, icon adornments, and error validation states.',
};

export const TEXTAREA_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade multi-line text areas for AI reasoning directives, IAM policy JSON editors, SLA incident dispatch, real-estate descriptions, and customer review consoles.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 12 distinct border, surface, and interaction styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive property playground with live variant selection, resize modes, and code snippet generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description:
      'Dynamic API ticket creation and prompt engineering integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const AiPromptEditorDemo = () => {
  const [aiPrompt, setAiPrompt] = useState(
    'You are a senior TypeScript architect. Optimize the following React hook for zero-allocation performance and strictly typed generics.'
  );
  return (
    <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-purple-600" />
          <span className="font-bold text-sm text-purple-950">
            AI System Reasoning Directive
          </span>
        </div>
        <Badge variant="gradient" size="sm" shape="pill">
          Claude 3.5 Sonnet
        </Badge>
      </div>

      <Textarea
        variant="gradient"
        label="System Prompt Context"
        rows={4}
        value={aiPrompt}
        onChange={(e) => setAiPrompt(e.target.value)}
        helperText="Directive guides the conversational guardrails and tone of the reasoning model."
        fullWidth
      />
    </div>
  );
};

const IamJsonPolicyDemo = () => {
  const [iamPolicy, setIamPolicy] = useState(
    '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::prod-vault/*"\n    }\n  ]\n}'
  );
  return (
    <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-emerald-500" />
          <span className="font-mono text-xs font-bold text-core-circle-text-main">
            AWS IAM POLICY DOCUMENT (JSON)
          </span>
        </div>
        <Badge variant="success" size="sm" shape="pill">
          Syntax Validated
        </Badge>
      </div>

      <Textarea
        variant="dark"
        label="Policy Statement"
        rows={7}
        value={iamPolicy}
        onChange={(e) => setIamPolicy(e.target.value)}
        helperText="Validated against AWS IAM 2012-10-17 policy schema specification"
        fullWidth
      />
    </div>
  );
};

const IncidentTicketDemo = () => {
  const [incidentReport, setIncidentReport] = useState(
    'High CPU utilization detected on EU-Central-1 worker pool. Autoscaler triggered 4 additional nodes.'
  );
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-core-circle-primary" />
          <span className="font-bold text-sm text-core-circle-text-main">
            SLA Severity 1 Incident Log
          </span>
        </div>
        <Badge variant="warning" size="sm" shape="pill">
          15m Response SLA
        </Badge>
      </div>

      <Textarea
        variant="floating"
        label="Incident Details & Symptoms"
        rows={4}
        value={incidentReport}
        onChange={(e) => setIncidentReport(e.target.value)}
        helperText="Auto-dispatched to On-Call Site Reliability Engineers"
        fullWidth
      />
    </div>
  );
};

const RealEstateDemo = () => {
  const [propertyDesc, setPropertyDesc] = useState(
    'Modern penthouse in downtown metropolis featuring panoramic skyline terraces, private elevator access, and marble floor heating.'
  );
  return (
    <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 border border-blue-100 rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SquareEdit size={18} className="text-blue-600" />
          <span className="font-bold text-sm text-blue-950">
            Property Description Generator
          </span>
        </div>
        <Badge variant="outline" size="sm" shape="pill">
          MLS Listing
        </Badge>
      </div>

      <Textarea
        variant="glassmorphic"
        label="Listing Overview"
        rows={4}
        value={propertyDesc}
        onChange={(e) => setPropertyDesc(e.target.value)}
        helperText="Synced across international real-estate syndication networks"
        fullWidth
      />
    </div>
  );
};

const CustomerReviewDemo = () => {
  const [customerReview, setCustomerReview] = useState(
    'The latency drop after upgrading to CoreCircle design system components was dramatic. Clean API architecture!'
  );
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={18} className="text-emerald-600" />
          <span className="font-bold text-sm text-core-circle-text-main">
            Developer Testimonial
          </span>
        </div>
        <Badge variant="success" size="sm" shape="pill">
          Verified Customer
        </Badge>
      </div>

      <Textarea
        variant="outline"
        label="Your Experience"
        rows={4}
        value={customerReview}
        onChange={(e) => setCustomerReview(e.target.value)}
        helperText="Thank you for providing valuable community feedback."
        fullWidth
      />
    </div>
  );
};

export const TEXTAREA_THEME_CONFIGS: TextareaThemeConfig[] = [
  {
    id: 'theming-ai-prompt-editor',
    sectionTitle:
      '1. AI System Prompt & Neural Reasoning Directive Editor Theme',
    description:
      'Radiant purple gradient textarea with dynamic character limit and model indicator badge.',
    previewTitle: 'LLM Prompt Directive Editor',
    render: () => <AiPromptEditorDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Sparkles size={18} className="text-purple-600" />
      <span className="font-bold text-sm text-purple-950">AI System Reasoning Directive</span>
    </div>
    <Badge variant="gradient" size="sm" shape="pill">Claude 3.5 Sonnet</Badge>
  </div>
  
  <Textarea
    variant="gradient"
    label="System Prompt Context"
    rows={4}
    value={aiPrompt}
    onChange={(e) => setAiPrompt(e.target.value)}
    helperText="Directive guides the conversational guardrails and tone of the reasoning model."
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-iam-json-policy',
    sectionTitle:
      '2. Zero-Trust IAM Policy & JSON Role Definition Sandbox Theme',
    description:
      'Deep slate-900 monospace dark textarea for security policy authoring.',
    previewTitle: 'AWS IAM JSON Policy Document',
    render: () => <IamJsonPolicyDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Shield size={18} className="text-emerald-500" />
      <span className="font-mono text-xs font-bold text-core-circle-text-main">AWS IAM POLICY DOCUMENT (JSON)</span>
    </div>
    <Badge variant="success" size="sm" shape="pill">Syntax Validated</Badge>
  </div>
  
  <Textarea
    variant="dark"
    label="Policy Statement"
    rows={7}
    value={iamPolicy}
    onChange={(e) => setIamPolicy(e.target.value)}
    helperText="Validated against AWS IAM 2012-10-17 policy schema specification"
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-incident-ticket',
    sectionTitle:
      '3. Enterprise Support SLA Incident Ticket Dispatch Theme',
    description:
      'Elevated floating textarea for mission-critical DevOps incident triage.',
    previewTitle: 'PagerDuty Incident Description',
    render: () => <IncidentTicketDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Terminal size={18} className="text-core-circle-primary" />
      <span className="font-bold text-sm text-core-circle-text-main">SLA Severity 1 Incident Log</span>
    </div>
    <Badge variant="warning" size="sm" shape="pill">15m Response SLA</Badge>
  </div>
  
  <Textarea
    variant="floating"
    label="Incident Details & Symptoms"
    rows={4}
    value={incidentReport}
    onChange={(e) => setIncidentReport(e.target.value)}
    helperText="Auto-dispatched to On-Call Site Reliability Engineers"
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-real-estate',
    sectionTitle:
      '4. Real-Estate Property Description & Amenities Generator Theme',
    description:
      'Frosted glass translucent textarea for premium luxury listings.',
    previewTitle: 'Luxury Listing Summary',
    render: () => <RealEstateDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 border border-blue-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <SquareEdit size={18} className="text-blue-600" />
      <span className="font-bold text-sm text-blue-950">Property Description Generator</span>
    </div>
    <Badge variant="outline" size="sm" shape="pill">MLS Listing</Badge>
  </div>
  
  <Textarea
    variant="glassmorphic"
    label="Listing Overview"
    rows={4}
    value={propertyDesc}
    onChange={(e) => setPropertyDesc(e.target.value)}
    helperText="Synced across international real-estate syndication networks"
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-customer-review',
    sectionTitle:
      '5. Customer Feedback & Product Review Evaluation Theme',
    description:
      'Clean outline textarea with character limit helper and verified buyer badge.',
    previewTitle: 'Verified Buyer Review',
    render: () => <CustomerReviewDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <ShoppingBag size={18} className="text-emerald-600" />
      <span className="font-bold text-sm text-core-circle-text-main">Developer Testimonial</span>
    </div>
    <Badge variant="success" size="sm" shape="pill">Verified Customer</Badge>
  </div>
  
  <Textarea
    variant="outline"
    label="Your Experience"
    rows={4}
    value={customerReview}
    onChange={(e) => setCustomerReview(e.target.value)}
    helperText="Thank you for providing valuable community feedback."
    fullWidth
  />
</div>`,
  },
];

export const TEXTAREA_VARIANT_GROUPS: TextareaVariantGroup[] = [
  {
    id: 'textarea-variants-material-outline',
    title: '1. Outline, Material & Material-Animated Styles',
    description:
      'Traditional bordered textarea or Google Material animated floating labels.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Outline Style (Default)"
          code={`<Textarea variant="outline" label="Project Overview" placeholder="Enter description..." rows={4} />`}
        >
          <Textarea
            variant="outline"
            label="Project Overview"
            placeholder="Enter description..."
            rows={4}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Material Animated"
          code={`<Textarea variant="material-animated" label="Executive Summary" placeholder="Click to float" rows={4} />`}
        >
          <Textarea
            variant="material-animated"
            label="Executive Summary"
            placeholder="Click to float"
            rows={4}
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'textarea-variants-gradient-floating',
    title: '2. Radiant Gradient & Floating Elevated Styles',
    description:
      'Multi-color radiant borders and elevated drop shadows.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Radiant Gradient"
          code={`<Textarea variant="gradient" label="AI Prompt" placeholder="Type prompt directive..." rows={4} />`}
        >
          <Textarea
            variant="gradient"
            label="AI Prompt"
            placeholder="Type prompt directive..."
            rows={4}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Floating Elevated"
          code={`<Textarea variant="floating" label="Feedback Note" placeholder="Enter suggestions..." rows={4} />`}
        >
          <Textarea
            variant="floating"
            label="Feedback Note"
            placeholder="Enter suggestions..."
            rows={4}
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'textarea-variants-glass-pill-accent',
    title: '3. Glassmorphic, Pill & Accent Styles',
    description:
      'Translucent frosted surfaces, rounded box capsules, and bold blue borders.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Glassmorphic Surface"
          code={`<Textarea variant="glassmorphic" label="Listing Details" placeholder="Describe property..." rows={4} />`}
        >
          <Textarea
            variant="glassmorphic"
            label="Listing Details"
            placeholder="Describe property..."
            rows={4}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Pill Rounded Capsule"
          code={`<Textarea variant="pill" placeholder="Type quick message..." rows={3} />`}
        >
          <Textarea
            variant="pill"
            placeholder="Type quick message..."
            rows={3}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Accent Blue"
          code={`<Textarea variant="accent" label="Security Incident" placeholder="Incident summary..." rows={4} />`}
        >
          <Textarea
            variant="accent"
            label="Security Incident"
            placeholder="Incident summary..."
            rows={4}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Filled Surface"
          code={`<Textarea variant="filled" label="Internal Notes" placeholder="Private notes..." rows={4} />`}
        >
          <Textarea
            variant="filled"
            label="Internal Notes"
            placeholder="Private notes..."
            rows={4}
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'textarea-variants-ghost-standard-dark',
    title: '4. Ghost, Standard & Dark Mode Styles',
    description:
      'Borderless minimal fields and high-contrast dark theme text areas.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Standard Bottom Border"
          code={`<Textarea variant="standard" label="Release Notes" placeholder="Version notes..." rows={4} />`}
        >
          <Textarea
            variant="standard"
            label="Release Notes"
            placeholder="Version notes..."
            rows={4}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Dark Mode Terminal"
          code={`<Textarea variant="dark" label="Stack Trace Log" placeholder="Paste crash dump..." rows={4} />`}
        >
          <div className="p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
            <Textarea
              variant="dark"
              label="Stack Trace Log"
              placeholder="Paste crash dump..."
              rows={4}
              fullWidth
            />
          </div>
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'textarea-variants-resize-validation',
    title: '5. Resizing Handles & Error Validation States',
    description:
      'Control horizontal/vertical resize capabilities and error feedback states.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Fixed Height (No Resize)"
          code={`<Textarea resize="none" label="Fixed Dimension" placeholder="Cannot be resized" rows={3} />`}
        >
          <Textarea
            resize="none"
            label="Fixed Dimension"
            placeholder="Cannot be resized"
            rows={3}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Validation Error State"
          code={`<Textarea label="Ticket Description" error="Description must be at least 20 characters" defaultValue="Server is down" rows={3} />`}
        >
          <Textarea
            label="Ticket Description"
            error="Description must be at least 20 characters"
            defaultValue="Server is down"
            rows={3}
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
];

export const TEXTAREA_PLAYGROUND_SECTION = {
  id: 'textarea-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 12 variants, 3 size scales, resize handles, row heights, and live snippet generation.',
};

export const TEXTAREA_MOCK_SECTION = {
  id: 'textarea-mock-section',
  title: 'Dynamic Ticket Submission Form Schema Integration',
  description:
    'Pattern for rendering multi-line textareas from dynamic backend form schemas.',
  snippets: [
    {
      label: 'Sample Backend Schema Payload',
      code: JSON.stringify(
        {
          ticketType: 'sla_incident',
          fields: [
            {
              name: 'summary',
              label: 'Executive Summary',
              variant: 'floating',
              rows: 3,
              required: true,
            },
            {
              name: 'reproduction',
              label: 'Reproduction Steps',
              variant: 'gradient',
              rows: 5,
              required: true,
            },
            {
              name: 'logs',
              label: 'Terminal Output Logs',
              variant: 'dark',
              rows: 6,
              required: false,
            },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Ticket Form Consumer',
      code: `import React, { useState } from 'react';
import { Textarea, Button, Card, Typography } from '@core-circle/ui';

export const DynamicTicketForm = ({ schema }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, val) => {
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  return (
    <Card variant="floating" className="p-6 flex flex-col gap-6 max-w-xl">
      <Typography variant="h3" className="text-base font-bold">Incident Ticket Submission</Typography>
      
      {schema.fields.map((f) => (
        <Textarea
          key={f.name}
          variant={f.variant}
          label={f.label}
          rows={f.rows}
          value={formData[f.name] || ''}
          onChange={(e) => handleChange(f.name, e.target.value)}
          fullWidth
        />
      ))}

      <Button variant="primary" size="lg" className="w-full">
        Dispatch Incident
      </Button>
    </Card>
  );
};`,
    },
  ],
};

export const TEXTAREA_OVERVIEW_SECTION = {
  id: 'textarea-overview-intro',
  title: 'Introduction',
  description:
    'The Textarea component handles extensive multi-line user inputs. It features 12 styling variants, Material animated floating labels, custom resize behaviors, and character helper text.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Textarea } from '@core-circle/ui';

<Textarea
  variant="outline"
  label="Project Description"
  placeholder="Enter a comprehensive description..."
  rows={5}
  fullWidth
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const TEXTAREA_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard' | 'filled' | 'glassmorphic' | 'floating' | 'gradient' | 'pill' | 'accent' | 'dark'",
    defaultValue: "'outline'",
    description: 'Visual styling and container surface treatment variant.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Padding and typography scale of the textarea.',
  },
  {
    name: 'resize',
    type: "'none' | 'vertical' | 'horizontal' | 'both'",
    defaultValue: "'vertical'",
    description: 'CSS resize handle behavior.',
  },
  {
    name: 'label',
    type: 'string',
    description:
      'Label text rendered above or inside the animated textarea container.',
  },
  {
    name: 'rows',
    type: 'number',
    defaultValue: '4',
    description: 'Initial number of visible text lines.',
  },
  {
    name: 'startIcon',
    type: 'React.ReactNode',
    description: 'Leading icon displayed in the top-left corner.',
  },
  {
    name: 'endIcon',
    type: 'React.ReactNode',
    description: 'Trailing icon displayed in the top-right corner.',
  },
  {
    name: 'error',
    type: 'string',
    description: 'Validation error message displaying beneath the field.',
  },
  {
    name: 'helperText',
    type: 'string',
    description:
      'Subtle guidance or character limit counter beneath the field.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the textarea stretches to fill container width.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the textarea is interactive.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.',
  },
];
