'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Divider, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Info, 
  CodeIcon, 
  Sparkles, 
  Shield, 
  Star, 
  Palette, 
  Layers, 
  Play, 
  Lock, 
  Clock, 
  CheckIcon, 
  ShoppingBag, 
  CreditCard 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { DIVIDER_PROPS_DATA } from '../../../constants/atoms-page/divider/dividerConstants';
import { DividerPlayground } from '../../../components/playground/divider/dividerPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { DividerContainerProps } from '../../../interface/containers/atoms/divider.types';

export default function DividerContainer({
  headerContent,
  breadcrumbItems
}: DividerContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Social OAuth */}
          <DocSection
            id="theming-oauth-divider"
            title="1. Social OAuth Sign-In Partition Theme"
            description="Gradient divider with centered badge separator for authentication and login flows."
          >
            <ComponentPreview
              title="Authentication Divider"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Button variant="primary" size="md" fullWidth>Continue with Work Email</Button>
  <Divider variant="gradient" align="center">
    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">OR CONTINUE WITH</span>
  </Divider>
  <div className="grid grid-cols-2 gap-3">
    <Button variant="outline" size="md">Google</Button>
    <Button variant="outline" size="md">GitHub</Button>
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <Button variant="primary" size="md" fullWidth>Continue with Work Email</Button>
                <Divider variant="gradient" align="center">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">OR CONTINUE WITH</span>
                </Divider>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="md">Google</Button>
                  <Button variant="outline" size="md">GitHub</Button>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Security Settings Partition */}
          <DocSection
            id="theming-settings-partition"
            title="2. Account & Security Settings Partition Theme"
            description="Clean structured divider with left-aligned section labels for multi-category settings forms."
          >
            <ComponentPreview
              title="Form Category Divider"
              code={`<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <span className="font-bold text-sm text-slate-900">Email Notifications</span>
    <Badge variant="primary" size="sm" shape="pill">Enabled</Badge>
  </div>
  <Divider variant="gradient" align="start">
    <span className="text-xs font-bold text-core-circle-primary flex items-center gap-1">
      <Shield size={12} /> TWO-FACTOR AUTHENTICATION
    </span>
  </Divider>
  <p className="text-xs text-slate-500">Require an authenticator app (TOTP) or hardware key when signing in.</p>
  <Button variant="outline" size="sm" className="w-fit">Configure 2FA</Button>
</div>`}
            >
              <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-slate-900">Email Notifications</span>
                  <Badge variant="primary" size="sm" shape="pill">Enabled</Badge>
                </div>
                <Divider variant="gradient" align="start">
                  <span className="text-xs font-bold text-core-circle-primary flex items-center gap-1">
                    <Shield size={12} /> TWO-FACTOR AUTHENTICATION
                  </span>
                </Divider>
                <p className="text-xs text-slate-500">Require an authenticator app (TOTP) or hardware security key when signing in.</p>
                <Button variant="outline" size="sm" className="w-fit">Configure 2FA</Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Order Summary */}
          <DocSection
            id="theming-order-summary"
            title="3. E-Commerce Checkout & Price Summary Theme"
            description="Dashed and double line dividers separating items, subtotals, taxes, and final totals."
          >
            <ComponentPreview
              title="Cart Checkout Summary Divider"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
  <div className="flex justify-between text-sm text-slate-600">
    <span>Subtotal (3 items)</span>
    <span className="font-bold text-slate-900">$249.00</span>
  </div>
  <div className="flex justify-between text-sm text-slate-600">
    <span>Shipping & Handling</span>
    <span className="font-bold text-emerald-600">FREE</span>
  </div>
  <Divider variant="dashed" />
  <div className="flex justify-between text-base font-bold text-slate-900">
    <span>Total Due</span>
    <span className="text-lg text-core-circle-primary">$249.00</span>
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal (3 items)</span>
                  <span className="font-bold text-slate-900">$249.00</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Shipping & Handling</span>
                  <span className="font-bold text-emerald-600">FREE</span>
                </div>
                <Divider variant="dashed" />
                <div className="flex justify-between text-base font-bold text-slate-900">
                  <span>Total Due</span>
                  <span className="text-lg text-core-circle-primary">$249.00</span>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Timeline & Activity Log Partition */}
          <DocSection
            id="theming-activity-timeline"
            title="4. Activity Feed & Date Stamp Partition Theme"
            description="Badge-anchored timeline dividers grouping chronological event feeds."
          >
            <ComponentPreview
              title="Chronological Event Divider"
              code={`<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="text-xs text-slate-600">API Key rotated by admin@corecircle.design</div>
  <Divider variant="fade" align="center">
    <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1">
      <Clock size={12} /> TODAY — 14:32 UTC
    </span>
  </Divider>
  <div className="text-xs text-slate-600">New edge deployment completed across 14 clusters.</div>
</div>`}
            >
              <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="text-xs text-slate-600">API Key rotated by admin@corecircle.design</div>
                <Divider variant="fade" align="center">
                  <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1">
                    <Clock size={12} /> TODAY — 14:32 UTC
                  </span>
                </Divider>
                <div className="text-xs text-slate-600">New edge deployment completed across 14 clusters.</div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Onboarding Step Counter Partition */}
          <DocSection
            id="theming-step-counter"
            title="5. Multi-Step Form & Onboarding Partition Theme"
            description="Accent-pill dividers showing current step in registration and checkout wizards."
          >
            <ComponentPreview
              title="Wizard Step Partition"
              code={`<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Divider variant="gradient" align="center">
    <Badge variant="primary" shape="pill" size="sm">Step 2 of 4: Organization Profile</Badge>
  </Divider>
  <p className="text-xs text-center text-slate-500">Provide your registered business name and tax residency.</p>
</div>`}
            >
              <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <Divider variant="gradient" align="center">
                  <Badge variant="primary" shape="pill" size="sm">Step 2 of 4: Organization Profile</Badge>
                </Divider>
                <p className="text-xs text-center text-slate-500">Provide your registered business name and tax residency.</p>
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
          <DocSection id="divider-styles" title="1. Visual Line Styles" description="Solid, dashed, dotted, double, gradient, fade, and accent variants.">
            <div className="flex flex-col gap-8 w-full">
              <ComponentPreview 
                title="Geometric Line Styles"
                code={`<Divider variant="solid" />\n<Divider variant="dashed" />\n<Divider variant="dotted" />\n<Divider variant="double" thickness="lg" />`}
              >
                <div className="flex flex-col gap-6 w-full py-4">
                  <Divider variant="solid" />
                  <Divider variant="dashed" />
                  <Divider variant="dotted" />
                  <Divider variant="double" thickness="lg" />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="divider-with-content" title="2. Content & Label Alignment" description="Dividers with text, icons, or badges positioned at start, center, or end.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Aligned Labels"
                code={`<Divider align="start">Start Label</Divider>\n<Divider align="center">Centered</Divider>\n<Divider align="end">End Label</Divider>`}
              >
                <div className="flex flex-col gap-6 w-full">
                  <Divider align="start"><span className="text-xs font-bold text-slate-500">SECTION 1</span></Divider>
                  <Divider align="center"><span className="text-xs font-bold text-slate-500">OR</span></Divider>
                  <Divider align="end"><span className="text-xs font-bold text-slate-500">CONTINUE</span></Divider>
                </div>
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
          id="divider-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 line variants, thicknesses, label alignments, and orientations."
        >
          <DividerPlayground />
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
            id="divider-mock"
            title="Form Section Partition Pattern"
            description="Use dividers with badges to organize complex settings and multi-step forms."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Section Divider Component Pattern"
                code={`import React from 'react';
import { Divider, Badge, Button } from '@core-circle/ui';
import { Shield } from '@core-circle/icons';

export const FormSection = ({ title, children }) => (
  <div className="space-y-4">
    <Divider variant="gradient" align="start">
      <Badge variant="primary" shape="pill" size="sm" startIcon={<Shield size={12} />}>
        {title}
      </Badge>
    </Divider>
    <div className="pl-2">{children}</div>
  </div>
);`}
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
          <DocSection id="divider-usage" title="Introduction" description="The Divider atom visually segments content, groups form sections, and provides structural breathing room.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Divider } from '@core-circle/ui';

<Divider variant="gradient" align="center">
  OR
</Divider>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={DIVIDER_PROPS_DATA} />
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
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
