'use client';

import React from 'react';
import Link from 'next/link';
import { Divider, Breadcrumb, Tabs, Typography, Button, Badge } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon, Sparkles, Star, Palette, Shield, ArrowRight } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DividerPlayground } from '../../../components/playground/divider/dividerPlayground';
import { DIVIDER_PROPS_DATA } from '../../../constants/atoms-page/divider/dividerConstants';
import { atomsPageStyles as s } from '../atoms.styles';

export default function DividerContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="theming-vip-divider"
            title="VIP Auth & Authentication Theming"
            description="Luminous gradient divider with centered status pill badge for sign-in modals and paywalls."
          >
            <ComponentPreview
              title="Social OAuth Partition with VIP Badge"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Button variant="outline" fullWidth>Continue with Google</Button>
  <Button variant="outline" fullWidth>Continue with GitHub</Button>
  <Divider variant="gradient" align="center">
    <Badge variant="gradient" shape="pill" size="sm" startIcon={<Sparkles size={12} />}>
      OR ENTER EMAIL
    </Badge>
  </Divider>
  <Button variant="primary" fullWidth>Sign in with Magic Link</Button>
</div>`}
            >
              <div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4 mx-auto">
                <Button variant="outline" fullWidth>Continue with Google</Button>
                <Button variant="outline" fullWidth>Continue with GitHub</Button>
                <Divider variant="gradient" align="center">
                  <Badge variant="gradient" shape="pill" size="sm" startIcon={<Sparkles size={12} />}>
                    OR ENTER WORKSPACE EMAIL
                  </Badge>
                </Divider>
                <Button variant="primary" fullWidth>Sign in with SSO</Button>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="theming-settings-partition"
            title="Account & Security Settings Partition Theme"
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
              <div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="divider-styles" title="Visual Line Styles (10 Variants)" description="Solid, dashed, dotted, gradient, fade, and accent variants.">
            <div className="flex flex-col gap-8 w-full">
              <ComponentPreview 
                title="Geometric Line Styles"
                code={`<Divider variant="solid" />\n<Divider variant="dashed" />\n<Divider variant="dotted" />\n<Divider variant="double" thickness="lg" />`}
              >
                <div className="flex flex-col gap-6 w-full max-w-lg">
                  <div>
                    <span className="text-xs text-core-circle-text-muted mb-1 block">Solid Line:</span>
                    <Divider variant="solid" />
                  </div>
                  <div>
                    <span className="text-xs text-core-circle-text-muted mb-1 block">Dashed Line:</span>
                    <Divider variant="dashed" />
                  </div>
                  <div>
                    <span className="text-xs text-core-circle-text-muted mb-1 block">Dotted Line:</span>
                    <Divider variant="dotted" />
                  </div>
                  <div>
                    <span className="text-xs text-core-circle-text-muted mb-1 block">Double Line:</span>
                    <Divider variant="double" thickness="lg" />
                  </div>
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Luminous & Radiant Styles"
                code={`<Divider variant="gradient" />\n<Divider variant="fade" />\n<Divider variant="glow" />`}
              >
                <div className="flex flex-col gap-6 w-full max-w-lg p-4 bg-slate-900 rounded-2xl text-white">
                  <div>
                    <span className="text-xs text-slate-400 mb-1 block">Gradient Line:</span>
                    <Divider variant="gradient" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 mb-1 block">Fade Edges:</span>
                    <Divider variant="fade" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 mb-1 block">Glow Line:</span>
                    <Divider variant="glow" />
                  </div>
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
        <DocSection id="divider-playground" title="Interactive Playground" description="Configure all 10 visual variants, label alignments, thicknesses, and orientation.">
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
            title="Dynamic Form Section Partitioning"
            description="Dynamically render section breaks and OAuth dividers based on login configuration."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Auth Form Component"
                code={`const DynamicAuthCard = ({ providers, allowEmail }) => (
  <div className="flex flex-col gap-4">
    {providers.map(p => (
      <Button key={p.id} variant="outline" fullWidth>{p.name}</Button>
    ))}
    {allowEmail && (
      <>
        <Divider variant="gradient" align="center">OR SIGN IN WITH EMAIL</Divider>
        <Button variant="primary" fullWidth>Continue</Button>
      </>
    )}
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
          <DocSection id="divider-intro" title="Introduction" description="Dividers create structured visual boundaries between distinct sections, navigation bars, and embedded form actions.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Divider } from '@core-circle/ui';

// Simple horizontal line
<Divider variant="solid" />

// Divider with embedded label
<Divider variant="gradient" align="center">OR SIGN IN WITH</Divider>`}
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
