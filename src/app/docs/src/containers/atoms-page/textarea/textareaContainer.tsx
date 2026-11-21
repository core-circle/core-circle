'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Textarea, Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Sparkles, 
  Shield, 
  Terminal, 
  ShoppingBag, 
  CheckIcon, 
  SquareEdit 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TextareaPlayground } from '../../../components/playground/textarea/textareaPlayground';
import { textareaPageStyles as s } from './textarea.styles';
import { TEXTAREA_PROPS_DATA } from '../../../constants/atoms-page/textarea/textareaConstants';
import { TextareaContainerProps } from '../../../interface/containers/atoms/textarea.types';

export default function TextareaContainer({ headerContent, breadcrumbItems }: TextareaContainerProps) {
  const [aiPrompt, setAiPrompt] = useState(
    'You are a senior TypeScript architect. Optimize the following React hook for zero-allocation performance and strictly typed generics.'
  );
  const [iamPolicy, setIamPolicy] = useState(
    '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::prod-vault/*"\n    }\n  ]\n}'
  );
  const [incidentReport, setIncidentReport] = useState(
    'High CPU utilization detected on EU-Central-1 worker pool. Autoscaler triggered 4 additional nodes.'
  );
  const [propertyDesc, setPropertyDesc] = useState(
    'Modern penthouse in downtown metropolis featuring panoramic skyline terraces, private elevator access, and marble floor heating.'
  );
  const [customerReview, setCustomerReview] = useState(
    'The latency drop after upgrading to CoreCircle design system components was dramatic. Clean API architecture!'
  );

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. AI System Prompt & Neural Reasoning Directive Editor */}
          <DocSection
            id="theming-ai-prompt-editor"
            title="1. AI System Prompt & Neural Reasoning Directive Editor Theme"
            description="Radiant purple gradient textarea with dynamic character limit and model indicator badge."
          >
            <ComponentPreview
              title="LLM Prompt Directive Editor"
              code={`<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Zero-Trust IAM Policy & JSON Role Definition Sandbox */}
          <DocSection
            id="theming-iam-json-policy"
            title="2. Zero-Trust IAM Policy & JSON Role Definition Sandbox Theme"
            description="Deep slate-900 monospace dark textarea for security policy authoring."
          >
            <ComponentPreview
              title="AWS IAM JSON Policy Document"
              code={`<div className="flex flex-col gap-4 p-6 bg-slate-950 text-white border border-slate-800 rounded-2xl shadow-xl w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Shield size={18} className="text-emerald-400" />
      <span className="font-mono text-xs font-bold text-slate-200">AWS IAM POLICY DOCUMENT (JSON)</span>
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
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-slate-950 text-white border border-slate-800 rounded-2xl shadow-xl w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-slate-200">AWS IAM POLICY DOCUMENT (JSON)</span>
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Enterprise Support SLA Incident Ticket Dispatch */}
          <DocSection
            id="theming-incident-ticket"
            title="3. Enterprise Support SLA Incident Ticket Dispatch Theme"
            description="Elevated floating textarea for mission-critical DevOps incident triage."
          >
            <ComponentPreview
              title="PagerDuty Incident Description"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Real-Estate Property Description & Amenities Generator */}
          <DocSection
            id="theming-real-estate"
            title="4. Real-Estate Property Description & Amenities Generator Theme"
            description="Frosted glass translucent textarea for premium luxury listings."
          >
            <ComponentPreview
              title="Luxury Listing Summary"
              code={`<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 border border-blue-100 rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 border border-blue-100 rounded-2xl shadow-sm w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Customer Feedback & Product Review Evaluation Console */}
          <DocSection
            id="theming-customer-review"
            title="5. Customer Feedback & Product Review Evaluation Theme"
            description="Clean outline textarea with character limit helper and verified buyer badge."
          >
            <ComponentPreview
              title="Verified Buyer Review"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Outline, Material & Material-Animated */}
          <DocSection
            id="textarea-variants-material-outline"
            title="1. Outline, Material & Material-Animated Styles"
            description="Traditional bordered textarea or Google Material animated floating labels."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Outline Style (Default)"
                code={`<Textarea variant="outline" label="Project Overview" placeholder="Enter description..." rows={4} />`}
              >
                <Textarea variant="outline" label="Project Overview" placeholder="Enter description..." rows={4} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Material Animated"
                code={`<Textarea variant="material-animated" label="Executive Summary" placeholder="Click to float" rows={4} />`}
              >
                <Textarea variant="material-animated" label="Executive Summary" placeholder="Click to float" rows={4} fullWidth />
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 2. Radiant Gradient & Floating Elevated */}
          <DocSection
            id="textarea-variants-gradient-floating"
            title="2. Radiant Gradient & Floating Elevated Styles"
            description="Multi-color radiant borders and elevated drop shadows."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Radiant Gradient"
                code={`<Textarea variant="gradient" label="AI Prompt" placeholder="Type prompt directive..." rows={4} />`}
              >
                <Textarea variant="gradient" label="AI Prompt" placeholder="Type prompt directive..." rows={4} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Floating Elevated"
                code={`<Textarea variant="floating" label="Feedback Note" placeholder="Enter suggestions..." rows={4} />`}
              >
                <Textarea variant="floating" label="Feedback Note" placeholder="Enter suggestions..." rows={4} fullWidth />
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 3. Glassmorphic, Pill & Accent */}
          <DocSection
            id="textarea-variants-glass-pill-accent"
            title="3. Glassmorphic, Pill & Accent Styles"
            description="Translucent frosted surfaces, rounded box capsules, and bold blue borders."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Glassmorphic Surface"
                code={`<Textarea variant="glassmorphic" label="Listing Details" placeholder="Describe property..." rows={4} />`}
              >
                <Textarea variant="glassmorphic" label="Listing Details" placeholder="Describe property..." rows={4} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Pill Rounded Capsule"
                code={`<Textarea variant="pill" placeholder="Type quick message..." rows={3} />`}
              >
                <Textarea variant="pill" placeholder="Type quick message..." rows={3} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Accent Blue"
                code={`<Textarea variant="accent" label="Security Incident" placeholder="Incident summary..." rows={4} />`}
              >
                <Textarea variant="accent" label="Security Incident" placeholder="Incident summary..." rows={4} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Filled Surface"
                code={`<Textarea variant="filled" label="Internal Notes" placeholder="Private notes..." rows={4} />`}
              >
                <Textarea variant="filled" label="Internal Notes" placeholder="Private notes..." rows={4} fullWidth />
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 4. Ghost, Standard & Dark */}
          <DocSection
            id="textarea-variants-ghost-standard-dark"
            title="4. Ghost, Standard & Dark Mode Styles"
            description="Borderless minimal fields and high-contrast dark theme text areas."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Standard Bottom Border"
                code={`<Textarea variant="standard" label="Release Notes" placeholder="Version notes..." rows={4} />`}
              >
                <Textarea variant="standard" label="Release Notes" placeholder="Version notes..." rows={4} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Dark Mode Terminal"
                code={`<Textarea variant="dark" label="Stack Trace Log" placeholder="Paste crash dump..." rows={4} />`}
              >
                <div className="p-4 bg-slate-950 rounded-2xl w-full">
                  <Textarea variant="dark" label="Stack Trace Log" placeholder="Paste crash dump..." rows={4} fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 5. Resize Behaviors & Validation States */}
          <DocSection
            id="textarea-variants-resize-validation"
            title="5. Resizing Handles & Error Validation States"
            description="Control horizontal/vertical resize capabilities and error feedback states."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Fixed Height (No Resize)"
                code={`<Textarea resize="none" label="Fixed Dimension" placeholder="Cannot be resized" rows={3} />`}
              >
                <Textarea resize="none" label="Fixed Dimension" placeholder="Cannot be resized" rows={3} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Validation Error State"
                code={`<Textarea label="Ticket Description" error="Description must be at least 20 characters" defaultValue="Server is down" rows={3} />`}
              >
                <Textarea label="Ticket Description" error="Description must be at least 20 characters" defaultValue="Server is down" rows={3} fullWidth />
              </ComponentPreview>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection
          id="textarea-playground-section"
          title="Interactive Playground"
          description="Experiment with 12 variants, 3 size scales, resize handles, row heights, and live snippet generation."
        >
          <TextareaPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="textarea-mock-section"
            title="Dynamic Ticket Submission Form Schema Integration"
            description="Pattern for rendering multi-line textareas from dynamic backend form schemas."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Schema Payload"
                code={JSON.stringify({
                  ticketType: "sla_incident",
                  fields: [
                    { name: "summary", label: "Executive Summary", variant: "floating", rows: 3, required: true },
                    { name: "reproduction", label: "Reproduction Steps", variant: "gradient", rows: 5, required: true },
                    { name: "logs", label: "Terminal Output Logs", variant: "dark", rows: 6, required: false }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Ticket Form Consumer"
                code={`import React, { useState } from 'react';
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
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="textarea-overview-intro"
            title="Introduction"
            description="The Textarea component handles extensive multi-line user inputs. It features 12 styling variants, Material animated floating labels, custom resize behaviors, and character helper text."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Textarea } from '@core-circle/ui';

<Textarea
  variant="outline"
  label="Project Description"
  placeholder="Enter a comprehensive description..."
  rows={5}
  fullWidth
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={TEXTAREA_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
