'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Switch, Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Sun, 
  Cloud, 
  Shield, 
  SlidersHorizontalIcon, 
  Banknotes, 
  Lock, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SwitchPlayground } from '../../../components/playground/switch/switchPlayground';
import { switchPageStyles as s } from './switch.styles';
import { SWITCH_PROPS_DATA } from '../../../constants/atoms-page/switch/switchConstants';

export interface SwitchContainerProps {
  sections?: any[];
  headerContent?: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
}

export default function SwitchContainer({ headerContent, breadcrumbItems }: SwitchContainerProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [autoScale, setAutoScale] = useState(true);
  const [biometrics, setBiometrics] = useState(true);
  const [ecoHvac, setEcoHvac] = useState(true);
  const [overdraft, setOverdraft] = useState(true);

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. System Appearance & Dark Mode Toggle */}
          <DocSection
            id="theming-dark-mode"
            title="1. System Appearance & Dark Mode Toggle Theme"
            description="Clean surface card with dark variant high-contrast toggle."
          >
            <ComponentPreview
              title="System Appearance Mode"
              code={`<div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-core-circle-bg-surface flex items-center justify-center text-core-circle-primary border border-core-circle-border-main">
      <Sun size={20} />
    </div>
    <div className="space-y-0.5">
      <h4 className="font-bold text-sm text-core-circle-text-main">High-Contrast Dark Theme</h4>
      <p className="text-xs text-core-circle-text-muted">Reduce eye strain with OLED optimized black palette</p>
    </div>
  </div>
  <Switch
    variant="dark"
    size="lg"
    checked={darkMode}
    onCheckedChange={setDarkMode}
  />
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full max-w-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-core-circle-bg-surface flex items-center justify-center text-core-circle-primary border border-core-circle-border-main">
                    <Sun size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-sm text-core-circle-text-main">High-Contrast Dark Theme</h4>
                    <p className="text-xs text-core-circle-text-muted">Reduce eye strain with OLED optimized black palette</p>
                  </div>
                </div>
                <Switch
                  variant="dark"
                  size="lg"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Cloud Infrastructure Auto-Scaling Toggle */}
          <DocSection
            id="theming-auto-scale"
            title="2. Cloud Infrastructure Auto-Scaling & Spot Instance Toggle Theme"
            description="Branded primary switch with real-time capacity auto-allocation."
          >
            <ComponentPreview
              title="Cluster Auto-Scaling Switch"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-core-circle-primary/10 flex items-center justify-center text-core-circle-primary">
      <Cloud size={20} />
    </div>
    <div className="space-y-0.5">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-sm text-core-circle-text-main">Kubernetes Pod Auto-Scaler</h4>
        <Badge variant="primary" size="sm" shape="pill">Dynamic</Badge>
      </div>
      <p className="text-xs text-core-circle-text-muted">Automatically scale replicas between 4 and 64 pods</p>
    </div>
  </div>
  <Switch
    variant="primary"
    size="lg"
    checked={autoScale}
    onCheckedChange={setAutoScale}
  />
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-core-circle-primary/10 flex items-center justify-center text-core-circle-primary">
                    <Cloud size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-core-circle-text-main">Kubernetes Pod Auto-Scaler</h4>
                      <Badge variant="primary" size="sm" shape="pill">Dynamic</Badge>
                    </div>
                    <p className="text-xs text-core-circle-text-muted">Automatically scale replicas between 4 and 64 pods</p>
                  </div>
                </div>
                <Switch
                  variant="primary"
                  size="lg"
                  checked={autoScale}
                  onCheckedChange={setAutoScale}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Enterprise Zero-Trust Biometric & 2FA Enforcement Switch */}
          <DocSection
            id="theming-biometric-2fa"
            title="3. Enterprise Zero-Trust Biometric & 2FA Enforcement Theme"
            description="Accent blue switch enforcing mandatory hardware WebAuthn tokens."
          >
            <ComponentPreview
              title="Zero-Trust Authentication Switch"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
      <Shield size={20} />
    </div>
    <div className="space-y-0.5">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-sm text-core-circle-text-main">Mandatory FIDO2 Hardware 2FA</h4>
        <Badge variant="success" size="sm" shape="pill">Enforced</Badge>
      </div>
      <p className="text-xs text-core-circle-text-muted">Require YubiKey or Touch ID biometric auth for all admins</p>
    </div>
  </div>
  <Switch
    variant="accent"
    size="lg"
    checked={biometrics}
    onCheckedChange={setBiometrics}
  />
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Shield size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-core-circle-text-main">Mandatory FIDO2 Hardware 2FA</h4>
                      <Badge variant="success" size="sm" shape="pill">Enforced</Badge>
                    </div>
                    <p className="text-xs text-core-circle-text-muted">Require YubiKey or Touch ID biometric auth for all admins</p>
                  </div>
                </div>
                <Switch
                  variant="accent"
                  size="lg"
                  checked={biometrics}
                  onCheckedChange={setBiometrics}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Smart Home Automation & HVAC ECO Energy Saver */}
          <DocSection
            id="theming-smart-home"
            title="4. Smart Home Automation & HVAC ECO Energy Saver Theme"
            description="Radiant purple-indigo gradient switch with automated ambient regulation."
          >
            <ComponentPreview
              title="Smart HVAC Eco Toggle"
              code={`<div className="flex items-center justify-between p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
      <SlidersHorizontalIcon size={20} />
    </div>
    <div className="space-y-0.5">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-sm text-purple-950">AI Predictive Smart Climate ECO Mode</h4>
        <Badge variant="gradient" size="sm" shape="pill">Save 24%</Badge>
      </div>
      <p className="text-xs text-purple-700/80">Regulate compressor power based on room occupancy</p>
    </div>
  </div>
  <Switch
    variant="gradient"
    size="lg"
    checked={ecoHvac}
    onCheckedChange={setEcoHvac}
  />
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <SlidersHorizontalIcon size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-purple-950">AI Predictive Smart Climate ECO Mode</h4>
                      <Badge variant="gradient" size="sm" shape="pill">Save 24%</Badge>
                    </div>
                    <p className="text-xs text-purple-700/80">Regulate compressor power based on room occupancy</p>
                  </div>
                </div>
                <Switch
                  variant="gradient"
                  size="lg"
                  checked={ecoHvac}
                  onCheckedChange={setEcoHvac}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Financial Account Multi-Currency Overdraft Protection */}
          <DocSection
            id="theming-overdraft-protection"
            title="5. Financial Account Multi-Currency Overdraft Protection Theme"
            description="Success emerald switch with real-time liquidity transfer protection."
          >
            <ComponentPreview
              title="Overdraft Protection Switch"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
      <Banknotes size={20} />
    </div>
    <div className="space-y-0.5">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-sm text-core-circle-text-main">Automated FX Overdraft Buffer</h4>
        <Badge variant="success" size="sm" shape="pill">Active</Badge>
      </div>
      <p className="text-xs text-core-circle-text-muted">Auto-transfer EUR liquidity to prevent failed USD charges</p>
    </div>
  </div>
  <Switch
    variant="success"
    size="lg"
    checked={overdraft}
    onCheckedChange={setOverdraft}
  />
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Banknotes size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-core-circle-text-main">Automated FX Overdraft Buffer</h4>
                      <Badge variant="success" size="sm" shape="pill">Active</Badge>
                    </div>
                    <p className="text-xs text-core-circle-text-muted">Auto-transfer EUR liquidity to prevent failed USD charges</p>
                  </div>
                </div>
                <Switch
                  variant="success"
                  size="lg"
                  checked={overdraft}
                  onCheckedChange={setOverdraft}
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
          {/* 1. Primary, Secondary & Accent */}
          <DocSection
            id="switch-variants-brand"
            title="1. Primary, Secondary & Accent Switches"
            description="Core brand and neutral dark toggles."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Primary, Secondary & Accent"
                code={`<Switch variant="primary" defaultChecked />\n<Switch variant="secondary" defaultChecked />\n<Switch variant="accent" defaultChecked />`}
              >
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="primary" defaultChecked />
                    <span className="text-xs text-core-circle-text-muted">Primary</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="secondary" defaultChecked />
                    <span className="text-xs text-core-circle-text-muted">Secondary</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="accent" defaultChecked />
                    <span className="text-xs text-core-circle-text-muted">Accent</span>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 2. Gradient & Neon Glow */}
          <DocSection
            id="switch-variants-gradient-glow"
            title="2. Radiant Gradient & Neon Glow Switches"
            description="Luminous tracks and multi-stop gradient fills."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Gradient & Glow"
                code={`<Switch variant="gradient" defaultChecked />\n<Switch variant="glow" defaultChecked />`}
              >
                <div className="flex items-center gap-12 p-6 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="gradient" defaultChecked />
                    <span className="text-xs text-purple-300">Gradient</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="glow" defaultChecked />
                    <span className="text-xs text-emerald-300">Neon Glow</span>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 3. Success, Warning, Danger & Info */}
          <DocSection
            id="switch-variants-feedback"
            title="3. Status Feedback Switches (Success, Warning, Danger, Info)"
            description="Semantic feedback switches for dangerous or alert-associated toggles."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Semantic Feedback Styles"
                code={`<Switch variant="success" defaultChecked />\n<Switch variant="warning" defaultChecked />\n<Switch variant="danger" defaultChecked />\n<Switch variant="info" defaultChecked />`}
              >
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="success" defaultChecked />
                    <span className="text-xs text-emerald-600">Success</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="warning" defaultChecked />
                    <span className="text-xs text-amber-600">Warning</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="danger" defaultChecked />
                    <span className="text-xs text-rose-600">Danger</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="info" defaultChecked />
                    <span className="text-xs text-sky-600">Info</span>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 4. Glassmorphic, Floating & Dark */}
          <DocSection
            id="switch-variants-surfaces"
            title="4. Glassmorphic, Floating & Dark Surface Styles"
            description="Translucent frosted glass or elevated shadow tracks."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Surface Variants"
                code={`<Switch variant="glassmorphic" defaultChecked />\n<Switch variant="floating" defaultChecked />\n<Switch variant="dark" defaultChecked />`}
              >
                <div className="flex items-center gap-12 p-6 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="glassmorphic" defaultChecked />
                    <span className="text-xs text-slate-300">Glassmorphic</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="floating" defaultChecked />
                    <span className="text-xs text-slate-300">Floating</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch variant="dark" defaultChecked />
                    <span className="text-xs text-slate-300">Dark Mode</span>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 5. Size Scales (sm, md, lg) */}
          <DocSection
            id="switch-variants-sizes"
            title="5. Predefined Size Scales (SM, MD, LG)"
            description="Three proportional scales for dense compact tables or spacious touch interfaces."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Size Comparison"
                code={`<Switch size="sm" defaultChecked />\n<Switch size="md" defaultChecked />\n<Switch size="lg" defaultChecked />`}
              >
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <Switch size="sm" defaultChecked />
                    <span className="text-xs text-core-circle-text-muted">Small (SM)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch size="md" defaultChecked />
                    <span className="text-xs text-core-circle-text-muted">Medium (MD)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Switch size="lg" defaultChecked />
                    <span className="text-xs text-core-circle-text-muted">Large (LG)</span>
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
        <DocSection
          id="switch-playground-section"
          title="Interactive Playground"
          description="Experiment with 12 variants, 3 sizes, disabled states, and live generated snippets."
        >
          <SwitchPlayground />
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
            id="switch-mock-section"
            title="Dynamic User Preferences API Integration"
            description="Pattern for loading remote settings and syncing switch state with async API endpoints."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend User Settings Payload"
                code={JSON.stringify({
                  userId: "usr_994821",
                  preferences: [
                    { id: "pref_marketing", label: "Product Announcements", enabled: true, variant: "primary" },
                    { id: "pref_security_alerts", label: "Critical Security Alerts", enabled: true, variant: "danger" },
                    { id: "pref_ai_beta", label: "Early Access AI Copilot", enabled: false, variant: "gradient" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Settings Manager Component"
                code={`import React, { useState, useEffect } from 'react';
import { Switch, Card, Typography, Badge } from '@core-circle/ui';

export const UserNotificationPreferences = ({ userId }) => {
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    fetch(\`/api/v1/users/\${userId}/preferences\`)
      .then((res) => res.json())
      .then((data) => setPreferences(data.preferences));
  }, [userId]);

  const handleToggle = async (prefId, nextVal) => {
    setPreferences((prev) =>
      prev.map((p) => (p.id === prefId ? { ...p, enabled: nextVal } : p))
    );
    await fetch(\`/api/v1/users/\${userId}/preferences/\${prefId}\`, {
      method: 'PATCH',
      body: JSON.stringify({ enabled: nextVal })
    });
  };

  return (
    <Card variant="floating" className="p-6 flex flex-col gap-4 max-w-xl">
      <Typography variant="h3" className="text-base font-bold">Notification Channels</Typography>
      
      <div className="flex flex-col divide-y divide-core-circle-border-main">
        {preferences.map((pref) => (
          <div key={pref.id} className="flex items-center justify-between py-3">
            <span className="text-sm font-medium text-core-circle-text-main">{pref.label}</span>
            <Switch
              variant={pref.variant}
              checked={pref.enabled}
              onCheckedChange={(c) => handleToggle(pref.id, c)}
            />
          </div>
        ))}
      </div>
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
            id="switch-overview-intro"
            title="Introduction"
            description="The Switch component provides an intuitive on/off toggle for preferences, features, and binary settings. It includes 12 rich styling variants, custom thumb icons, and full accessibility support."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Switch } from '@core-circle/ui';

// 1. Uncontrolled default checked
<Switch variant="primary" defaultChecked />

// 2. Controlled with state handler
<Switch
  variant="gradient"
  size="lg"
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={SWITCH_PROPS_DATA} />
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
