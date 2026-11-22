'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Switch, Badge } from '@core-circle/ui';
import {
  Sun,
  Cloud,
  Shield,
  SlidersHorizontalIcon,
  Banknotes,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';
import ComponentPreview from '../../../components/component-preview';

export interface SwitchThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface SwitchVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const SWITCH_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Switch' },
];

export const SWITCH_HEADER_CONTENT = {
  title: 'Switch',
  description:
    'An interactive two-state toggle switch supporting 12 visual variants, internal thumb icons, size scales, and accessible keyboard navigation.',
};

const DarkModeDemo = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full max-w-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-core-circle-bg-surface flex items-center justify-center text-core-circle-primary border border-core-circle-border-main">
          <Sun size={20} />
        </div>
        <div className="space-y-0.5">
          <h4 className="font-bold text-sm text-core-circle-text-main">
            High-Contrast Dark Theme
          </h4>
          <p className="text-xs text-core-circle-text-muted">
            Reduce eye strain with OLED optimized black palette
          </p>
        </div>
      </div>
      <Switch
        variant="dark"
        size="lg"
        checked={darkMode}
        onCheckedChange={setDarkMode}
      />
    </div>
  );
};

const AutoScaleDemo = () => {
  const [autoScale, setAutoScale] = useState(true);
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-core-circle-primary/10 flex items-center justify-center text-core-circle-primary">
          <Cloud size={20} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-core-circle-text-main">
              Kubernetes Pod Auto-Scaler
            </h4>
            <Badge variant="primary" size="sm" shape="pill">
              Dynamic
            </Badge>
          </div>
          <p className="text-xs text-core-circle-text-muted">
            Automatically scale replicas between 4 and 64 pods
          </p>
        </div>
      </div>
      <Switch
        variant="primary"
        size="lg"
        checked={autoScale}
        onCheckedChange={setAutoScale}
      />
    </div>
  );
};

const BiometricsDemo = () => {
  const [biometrics, setBiometrics] = useState(true);
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
          <Shield size={20} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-core-circle-text-main">
              Mandatory FIDO2 Hardware 2FA
            </h4>
            <Badge variant="success" size="sm" shape="pill">
              Enforced
            </Badge>
          </div>
          <p className="text-xs text-core-circle-text-muted">
            Require YubiKey or Touch ID biometric auth for all admins
          </p>
        </div>
      </div>
      <Switch
        variant="accent"
        size="lg"
        checked={biometrics}
        onCheckedChange={setBiometrics}
      />
    </div>
  );
};

const EcoHvacDemo = () => {
  const [ecoHvac, setEcoHvac] = useState(true);
  return (
    <div className="flex items-center justify-between p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full max-w-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
          <SlidersHorizontalIcon size={20} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-purple-950">
              AI Predictive Smart Climate ECO Mode
            </h4>
            <Badge variant="gradient" size="sm" shape="pill">
              Save 24%
            </Badge>
          </div>
          <p className="text-xs text-purple-700/80">
            Regulate compressor power based on room occupancy
          </p>
        </div>
      </div>
      <Switch
        variant="gradient"
        size="lg"
        checked={ecoHvac}
        onCheckedChange={setEcoHvac}
      />
    </div>
  );
};

const OverdraftDemo = () => {
  const [overdraft, setOverdraft] = useState(true);
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
          <Banknotes size={20} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-core-circle-text-main">
              Automated FX Overdraft Buffer
            </h4>
            <Badge variant="success" size="sm" shape="pill">
              Active
            </Badge>
          </div>
          <p className="text-xs text-core-circle-text-muted">
            Auto-transfer EUR liquidity to prevent failed USD charges
          </p>
        </div>
      </div>
      <Switch
        variant="success"
        size="lg"
        checked={overdraft}
        onCheckedChange={setOverdraft}
      />
    </div>
  );
};

export const SWITCH_THEME_CONFIGS: SwitchThemeConfig[] = [
  {
    id: 'theming-dark-mode',
    sectionTitle: '1. System Appearance & Dark Mode Toggle Theme',
    description: 'Clean surface card with dark variant high-contrast toggle.',
    previewTitle: 'System Appearance Mode',
    render: () => <DarkModeDemo />,
    code: `<div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
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
</div>`,
  },
  {
    id: 'theming-auto-scale',
    sectionTitle:
      '2. Cloud Infrastructure Auto-Scaling & Spot Instance Toggle Theme',
    description:
      'Branded primary switch with real-time capacity auto-allocation.',
    previewTitle: 'Cluster Auto-Scaling Switch',
    render: () => <AutoScaleDemo />,
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`,
  },
  {
    id: 'theming-biometric-2fa',
    sectionTitle:
      '3. Enterprise Zero-Trust Biometric & 2FA Enforcement Theme',
    description:
      'Accent blue switch enforcing mandatory hardware WebAuthn tokens.',
    previewTitle: 'Zero-Trust Authentication Switch',
    render: () => <BiometricsDemo />,
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`,
  },
  {
    id: 'theming-smart-home',
    sectionTitle:
      '4. Smart Home Automation & HVAC ECO Energy Saver Theme',
    description:
      'Radiant purple-indigo gradient switch with automated ambient regulation.',
    previewTitle: 'Smart HVAC Eco Toggle',
    render: () => <EcoHvacDemo />,
    code: `<div className="flex items-center justify-between p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
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
</div>`,
  },
  {
    id: 'theming-overdraft-protection',
    sectionTitle:
      '5. Financial Account Multi-Currency Overdraft Protection Theme',
    description:
      'Success emerald switch with real-time liquidity transfer protection.',
    previewTitle: 'Overdraft Protection Switch',
    render: () => <OverdraftDemo />,
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`,
  },
];

export const SWITCH_VARIANT_GROUPS: SwitchVariantGroup[] = [
  {
    id: 'switch-variants-brand',
    title: '1. Primary, Secondary & Accent Switches',
    description: 'Core brand and neutral dark toggles.',
    render: () => (
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
    ),
  },
  {
    id: 'switch-variants-gradient-glow',
    title: '2. Radiant Gradient & Neon Glow Switches',
    description: 'Luminous tracks and multi-stop gradient fills.',
    render: () => (
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
    ),
  },
  {
    id: 'switch-variants-feedback',
    title: '3. Status Feedback Switches (Success, Warning, Danger, Info)',
    description:
      'Semantic feedback switches for dangerous or alert-associated toggles.',
    render: () => (
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
    ),
  },
  {
    id: 'switch-variants-surfaces',
    title: '4. Glassmorphic, Floating & Dark Surface Styles',
    description: 'Translucent frosted glass or elevated shadow tracks.',
    render: () => (
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
    ),
  },
  {
    id: 'switch-variants-sizes',
    title: '5. Predefined Size Scales (SM, MD, LG)',
    description:
      'Three proportional scales for dense compact tables or spacious touch interfaces.',
    render: () => (
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
    ),
  },
];

export const SWITCH_PLAYGROUND_SECTION = {
  id: 'switch-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 12 variants, 3 sizes, disabled states, and live generated snippets.',
};

export const SWITCH_MOCK_SECTION = {
  id: 'switch-mock-section',
  title: 'Dynamic User Preferences API Integration',
  description:
    'Pattern for loading remote settings and syncing switch state with async API endpoints.',
  snippets: [
    {
      label: 'Sample Backend User Settings Payload',
      code: JSON.stringify(
        {
          userId: 'usr_994821',
          preferences: [
            {
              id: 'pref_marketing',
              label: 'Product Announcements',
              enabled: true,
              variant: 'primary',
            },
            {
              id: 'pref_security_alerts',
              label: 'Critical Security Alerts',
              enabled: true,
              variant: 'danger',
            },
            {
              id: 'pref_ai_beta',
              label: 'Early Access AI Copilot',
              enabled: false,
              variant: 'gradient',
            },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Settings Manager Component',
      code: `import React, { useState, useEffect } from 'react';
import { Switch, Card, Typography } from '@core-circle/ui';

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
};`,
    },
  ],
};

export const SWITCH_OVERVIEW_SECTION = {
  id: 'switch-overview-intro',
  title: 'Introduction',
  description:
    'The Switch component provides an intuitive on/off toggle for preferences, features, and binary settings. It includes 12 rich styling variants, custom thumb icons, and full accessibility support.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Switch } from '@core-circle/ui';

// 1. Uncontrolled default checked
<Switch variant="primary" defaultChecked />

// 2. Controlled with state handler
<Switch
  variant="gradient"
  size="lg"
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const SWITCH_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glassmorphic' | 'glow' | 'floating' | 'accent' | 'dark'",
    defaultValue: "'primary'",
    description: 'Color theme variant applied to the active switch track.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Track dimensions and thumb diameter scale.',
  },
  {
    name: 'checked',
    type: 'boolean',
    description: 'Controlled on/off state of the switch.',
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial state for uncontrolled usage.',
  },
  {
    name: 'thumbIcon',
    type: 'React.ReactNode',
    description:
      'Optional icon rendered inside the moving thumb circle (e.g. Moon or Sun).',
  },
  {
    name: 'onCheckedChange',
    type: '(checked: boolean) => void',
    description: 'Callback fired when the switch toggle state changes.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the switch is interactive or disabled.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.',
  },
];
