'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  Popover, 
  Avatar, 
  Button, 
  Badge, 
  Checkbox, 
  TextInput, 
  Typography 
} from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Shield, 
  Sparkles, 
  Filter, 
  CheckIcon, 
  Lock, 
  Mail, 
  UserIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { 
  POPOVER_PROPS_DATA, 
  POPOVER_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/popover/popoverConstants';
import { PopoverPlayground } from '../../../components/playground/popover/popoverPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { PopoverContainerProps } from '../../../interface/containers/atoms/popover.types';

export default function PopoverContainer({
  headerContent,
  breadcrumbItems
}: PopoverContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. User Profile Mini-Card */}
          <DocSection
            id="theming-user-card"
            title="1. User Profile Mini-Card & Quick Switcher Theme"
            description="Floating elevation popover card displaying avatar, status badge, email, and sign-out controls."
          >
            <ComponentPreview
              title="User Account Quick Switcher"
              code={`<Popover
  trigger={
    <div className="flex items-center gap-2 p-1.5 bg-white rounded-full border border-slate-200 shadow-sm cursor-pointer hover:border-slate-300">
      <Avatar name="Elena Rostova" size="sm" />
      <span className="text-xs font-bold text-slate-800 pr-2">Elena Rostova</span>
    </div>
  }
  variant="floating"
  size="md"
  position="bottom"
  align="start"
  showClose
  title="Account Profile"
  description="Signed in as Team Lead"
>
  <div className="flex flex-col gap-3 pt-1">
    <div className="flex items-center justify-between">
      <span className="text-xs text-slate-500">Security Status</span>
      <Badge variant="success" shape="pill" size="sm">2FA Active</Badge>
    </div>
    <div className="p-2.5 bg-slate-50 rounded-xl flex items-center gap-2 text-xs text-slate-700">
      <Mail size={14} className="text-slate-400" />
      <span>elena.rostova@corecircle.design</span>
    </div>
    <div className="flex items-center gap-2 pt-1">
      <Button variant="outline" size="sm" fullWidth>Manage Account</Button>
      <Button variant="destructive" size="sm">Sign Out</Button>
    </div>
  </div>
</Popover>`}
            >
              <div className="w-full flex justify-center py-6">
                <Popover
                  trigger={
                    <div className="flex items-center gap-2 p-1.5 bg-white rounded-full border border-slate-200 shadow-sm cursor-pointer hover:border-slate-300">
                      <Avatar name="Elena Rostova" size="sm" />
                      <span className="text-xs font-bold text-slate-800 pr-2">Elena Rostova</span>
                    </div>
                  }
                  variant="floating"
                  size="md"
                  position="bottom"
                  align="start"
                  showClose
                  title="Account Profile"
                  description="Signed in as Team Lead"
                >
                  <div className="flex flex-col gap-3 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Security Status</span>
                      <Badge variant="success" shape="pill" size="sm">2FA Active</Badge>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl flex items-center gap-2 text-xs text-slate-700">
                      <Mail size={14} className="text-slate-400" />
                      <span>elena.rostova@corecircle.design</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Button variant="outline" size="sm" fullWidth>Manage Account</Button>
                      <Button variant="destructive" size="sm">Sign Out</Button>
                    </div>
                  </div>
                </Popover>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Fast Data Table Filter Popover */}
          <DocSection
            id="theming-table-filter"
            title="2. Fast Data Table Filter & Column View Theme"
            description="Card popover providing multi-checkbox filtering with apply and clear actions."
          >
            <ComponentPreview
              title="Filter Controls Popover"
              code={`<Popover
  trigger={
    <Button variant="outline" size="md" startIcon={<Filter size={16} />}>
      Filter Records (3 Active)
    </Button>
  }
  variant="card"
  size="lg"
  position="bottom"
  align="center"
  title="Filter Conditions"
  description="Apply status and visibility constraints"
  showClose
>
  <div className="flex flex-col gap-3 pt-1">
    <Checkbox label="Only Show Verified Organizations" defaultChecked size="sm" />
    <Checkbox label="Include Deprecated API Endpoints" size="sm" />
    <Checkbox label="Highlight Critical Security Alerts" defaultChecked size="sm" />
    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
      <Button variant="primary" size="sm" fullWidth>Apply Filters</Button>
      <Button variant="outline" size="sm">Reset</Button>
    </div>
  </div>
</Popover>`}
            >
              <div className="w-full flex justify-center py-6">
                <Popover
                  trigger={
                    <Button variant="outline" size="md" startIcon={<Filter size={16} />}>
                      Filter Records (3 Active)
                    </Button>
                  }
                  variant="card"
                  size="lg"
                  position="bottom"
                  align="center"
                  title="Filter Conditions"
                  description="Apply status and visibility constraints"
                  showClose
                >
                  <div className="flex flex-col gap-3 pt-1">
                    <Checkbox label="Only Show Verified Organizations" defaultChecked size="sm" />
                    <Checkbox label="Include Deprecated API Endpoints" size="sm" />
                    <Checkbox label="Highlight Critical Security Alerts" defaultChecked size="sm" />
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <Button variant="primary" size="sm" fullWidth>Apply Filters</Button>
                      <Button variant="outline" size="sm">Reset</Button>
                    </div>
                  </div>
                </Popover>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. 2FA Security Authenticator Helper */}
          <DocSection
            id="theming-security-helper"
            title="3. 2FA Security Key Authenticator Helper Theme"
            description="Primary brand tint popover explaining authentication requirements."
          >
            <ComponentPreview
              title="Security Helper Popover"
              code={`<Popover
  trigger={
    <Button variant="outline" size="sm" startIcon={<Shield size={16} className="text-emerald-600" />}>
      Security Guidance
    </Button>
  }
  variant="primary"
  size="md"
  position="top"
  align="center"
  title="Hardware Key 2FA"
  description="FIDO2 WebAuthn standard"
  showClose
  showArrow
>
  <div className="flex flex-col gap-2 pt-1 text-xs text-slate-600">
    <p>Insert your YubiKey or use Touch ID / Windows Hello to authorize high-risk administrative operations.</p>
    <Button variant="primary" size="sm">Register New Key</Button>
  </div>
</Popover>`}
            >
              <div className="w-full flex justify-center py-6">
                <Popover
                  trigger={
                    <Button variant="outline" size="sm" startIcon={<Shield size={16} className="text-emerald-600" />}>
                      Security Guidance
                    </Button>
                  }
                  variant="primary"
                  size="md"
                  position="top"
                  align="center"
                  title="Hardware Key 2FA"
                  description="FIDO2 WebAuthn standard"
                  showClose
                  showArrow
                >
                  <div className="flex flex-col gap-2 pt-1 text-xs text-slate-600">
                    <p>Insert your YubiKey or use Touch ID / Windows Hello to authorize high-risk administrative operations.</p>
                    <Button variant="primary" size="sm">Register New Key</Button>
                  </div>
                </Popover>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Glassmorphic Preset Palette */}
          <DocSection
            id="theming-glassmorphic-palette"
            title="4. Glassmorphic Color Palette Theme"
            description="Frosted translucent popover on radiant background."
          >
            <ComponentPreview
              title="Color Theme Switcher"
              code={`<Popover
  trigger={
    <Button variant="primary" size="md" startIcon={<Sparkles size={16} />}>
      Pick Brand Accent
    </Button>
  }
  variant="glassmorphic"
  size="sm"
  position="bottom"
  align="center"
  title="Brand Swatches"
  showClose
>
  <div className="grid grid-cols-4 gap-2 pt-1">
    <div className="h-8 rounded-lg bg-blue-600 cursor-pointer shadow-sm" />
    <div className="h-8 rounded-lg bg-indigo-600 cursor-pointer shadow-sm" />
    <div className="h-8 rounded-lg bg-purple-600 cursor-pointer shadow-sm" />
    <div className="h-8 rounded-lg bg-emerald-600 cursor-pointer shadow-sm" />
  </div>
</Popover>`}
            >
              <div className="w-full p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex justify-center">
                <Popover
                  trigger={
                    <Button variant="primary" size="md" startIcon={<Sparkles size={16} />}>
                      Pick Brand Accent
                    </Button>
                  }
                  variant="glassmorphic"
                  size="sm"
                  position="bottom"
                  align="center"
                  title="Brand Swatches"
                  showClose
                >
                  <div className="grid grid-cols-4 gap-2 pt-1">
                    <div className="h-8 rounded-lg bg-blue-600 cursor-pointer shadow-sm" />
                    <div className="h-8 rounded-lg bg-indigo-600 cursor-pointer shadow-sm" />
                    <div className="h-8 rounded-lg bg-purple-600 cursor-pointer shadow-sm" />
                    <div className="h-8 rounded-lg bg-emerald-600 cursor-pointer shadow-sm" />
                  </div>
                </Popover>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Contextual Quick Actions Menu */}
          <DocSection
            id="theming-compact-actions"
            title="5. Contextual Quick Actions Popover Menu Theme"
            description="Minimalist compact menu surface for table row actions."
          >
            <ComponentPreview
              title="Row Context Menu"
              code={`<Popover
  trigger={<Button variant="ghost" size="sm">••• More Options</Button>}
  variant="compact"
  size="sm"
  position="right"
  align="start"
>
  <div className="flex flex-col gap-1">
    <button className="text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 font-medium text-slate-800 text-xs">Duplicate Item</button>
    <button className="text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 font-medium text-slate-800 text-xs">Export to CSV</button>
    <button className="text-left px-2 py-1.5 rounded-lg hover:bg-red-50 font-medium text-red-600 text-xs">Archive Item</button>
  </div>
</Popover>`}
            >
              <div className="w-full flex justify-center py-6">
                <Popover
                  trigger={<Button variant="ghost" size="sm">••• More Options</Button>}
                  variant="compact"
                  size="sm"
                  position="right"
                  align="start"
                >
                  <div className="flex flex-col gap-1">
                    <button className="text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 font-medium text-slate-800 text-xs">Duplicate Item</button>
                    <button className="text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 font-medium text-slate-800 text-xs">Export to CSV</button>
                    <button className="text-left px-2 py-1.5 rounded-lg hover:bg-red-50 font-medium text-red-600 text-xs">Archive Item</button>
                  </div>
                </Popover>
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
          <DocSection id="popover-variants-styles" title="1. Visual Variants (10 Variants)" description="Card, floating, glassmorphic, gradient, bordered, pill, primary, success, warning, and compact.">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full items-center justify-items-center py-4">
              <Popover trigger={<Button variant="outline" size="sm">Card Variant</Button>} variant="card" title="Card Surface"><p className="text-xs text-slate-500">Standard card surface.</p></Popover>
              <Popover trigger={<Button variant="outline" size="sm">Floating Depth</Button>} variant="floating" title="Floating Depth"><p className="text-xs text-slate-500">Elevated surface.</p></Popover>
              <Popover trigger={<Button variant="outline" size="sm">Glassmorphic</Button>} variant="glassmorphic" title="Glassmorphic"><p className="text-xs text-slate-500">Frosted translucent.</p></Popover>
              <Popover trigger={<Button variant="outline" size="sm">Gradient Glow</Button>} variant="gradient" title="Gradient Glow"><p className="text-xs text-slate-500">Ambient glow.</p></Popover>
              <Popover trigger={<Button variant="outline" size="sm">Bordered Strong</Button>} variant="bordered" title="Bordered Strong"><p className="text-xs text-slate-500">Strong 2px border.</p></Popover>
              <Popover trigger={<Button variant="outline" size="sm">Success Emerald</Button>} variant="success" title="Success State"><p className="text-xs text-slate-500">Emerald border.</p></Popover>
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
          id="popover-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, light mode surfaces, close buttons, and alignments."
        >
          <PopoverPlayground />
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
            id="popover-mock"
            title="Dynamic User Session Popover Pattern"
            description="Render user metadata and auth actions in an accessible floating popover."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample User Session Payload"
                code={JSON.stringify({
                  user_id: "usr_4892",
                  name: "Elena Rostova",
                  role: "Team Lead",
                  email: "elena.rostova@corecircle.design",
                  two_factor_enabled: true
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Session Popover Component"
                code={`import React from 'react';
import { Popover, Avatar, Button, Badge } from '@core-circle/ui';

export const UserMenuPopover = ({ user, onSignOut }) => {
  return (
    <Popover
      trigger={
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar name={user.name} size="sm" />
          <span className="text-xs font-bold text-slate-800">{user.name}</span>
        </div>
      }
      variant="floating"
      size="md"
      title={user.name}
      description={user.email}
      showClose
    >
      <div className="space-y-3 pt-1">
        <Badge variant={user.two_factor_enabled ? 'success' : 'warning'}>
          {user.two_factor_enabled ? '2FA Enabled' : '2FA Recommended'}
        </Badge>
        <Button variant="destructive" size="sm" onClick={onSignOut} fullWidth>
          Sign Out
        </Button>
      </div>
    </Popover>
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
          <DocSection id="popover-usage" title="Introduction" description="The Popover atom displays contextual content anchored to an interactive trigger with pure light mode aesthetics and accessible dismiss mechanisms.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Popover, Button } from '@core-circle/ui';

<Popover
  trigger={<Button>Open Popover</Button>}
  title="Account Settings"
  showClose
>
  <p className="text-xs">Contextual popover body.</p>
</Popover>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={POPOVER_PROPS_DATA} />
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
        <Typography variant="h1" className={s.title}>{headerContent.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
