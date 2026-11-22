import type { ReactNode } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Lock, 
  CircleCheck 
} from '@core-circle/icons';
import { Button, Badge } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ToastThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface ToastVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const TOAST_HEADER_CONTENT = {
  title: 'Toast',
  description: 'A floating notification message displayed temporarily and non-interruptively to convey system feedback.',
};

export const TOAST_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Toast' },
];

export const TOAST_THEME_CONFIGS: ToastThemeConfig[] = [
  {
    id: 'theming-vip-toast',
    sectionTitle: '1. Royal VIP Loyalty & Reward Toast Theme',
    description: 'Luminous floating toast with gold star badge and instant perk claim action.',
    previewTitle: 'VIP Achievement Notification',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 rounded-2xl border border-purple-200 shadow-core-circle-floating flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 text-white p-2 rounded-full shadow flex items-center justify-center">
            <Star size={18} className="text-amber-300" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-purple-950">Platinum VIP Reached!</h4>
            <p className="text-xs text-slate-500">Your 25% compute discount is active.</p>
          </div>
        </div>
        <Button size="sm" variant="gradient">View Perks</Button>
      </div>
    ),
    code: `<div className="p-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 rounded-2xl border border-purple-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <div className="bg-purple-600 text-white p-2 rounded-full shadow flex items-center justify-center">
      <Star size={18} className="text-amber-300" />
    </div>
    <div>
      <h4 className="font-bold text-sm text-purple-950">Platinum VIP Reached!</h4>
      <p className="text-xs text-slate-500">Your 25% compute discount is active.</p>
    </div>
  </div>
  <Button size="sm" variant="gradient">View Perks</Button>
</div>`,
  },
  {
    id: 'theming-cloud-sync-toast',
    sectionTitle: '2. Real-Time Cloud Synchronization Toast Theme',
    description: 'Floating status toast with live pulse indicator for asynchronous cloud synchronization.',
    previewTitle: 'Cloud Sync Complete Toast',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-slate-200 shadow-core-circle-floating flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <div>
            <h4 className="font-bold text-sm text-slate-900">Sync Complete (300+ Nodes)</h4>
            <p className="text-xs text-slate-500">Deployed v3.2.0 to 14 edge regions in 2.1s.</p>
          </div>
        </div>
        <Button size="sm" variant="ghost">View Details</Button>
      </div>
    ),
    code: `<div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
    <div>
      <h4 className="font-bold text-sm text-slate-900">Sync Complete (300+ Nodes)</h4>
      <p className="text-xs text-slate-500">Deployed v3.2.0 to 14 edge regions in 2.1s.</p>
    </div>
  </div>
  <Button size="sm" variant="ghost">View Details</Button>
</div>`,
  },
  {
    id: 'theming-cart-toast',
    sectionTitle: '3. E-Commerce Item Added to Cart Toast Theme',
    description: 'Instant feedback toast when a customer adds a product to their cart.',
    previewTitle: 'Product Added to Cart',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-emerald-200 shadow-core-circle-floating flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-100 text-emerald-700 p-2 rounded-full flex items-center justify-center">
            <ShoppingBag size={18} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900">Added to Shopping Bag</h4>
            <p className="text-xs text-slate-500">Wireless Mechanical Keyboard (1x)</p>
          </div>
        </div>
        <Button size="sm" variant="primary">Checkout ($189)</Button>
      </div>
    ),
    code: `<div className="p-4 bg-white rounded-2xl border border-emerald-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <div className="bg-emerald-100 text-emerald-700 p-2 rounded-full flex items-center justify-center">
      <ShoppingBag size={18} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-slate-900">Added to Shopping Bag</h4>
      <p className="text-xs text-slate-500">Wireless Mechanical Keyboard (1x)</p>
    </div>
  </div>
  <Button size="sm" variant="primary">Checkout ($189)</Button>
</div>`,
  },
  {
    id: 'theming-mfa-toast',
    sectionTitle: '4. Security & Two-Factor Verification Toast Theme',
    description: 'High-trust security toast with timed verification code alert.',
    previewTitle: 'Security Code Dispatched',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-blue-200 shadow-core-circle-floating flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 text-blue-700 p-2 rounded-full flex items-center justify-center">
            <Lock size={18} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900">Verification Code Sent</h4>
            <p className="text-xs text-slate-500">SMS sent to +1 (***) ***-8942. Valid for 5m.</p>
          </div>
        </div>
        <Badge variant="primary" size="sm" shape="pill">Expiring 04:59</Badge>
      </div>
    ),
    code: `<div className="p-4 bg-white rounded-2xl border border-blue-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <div className="bg-blue-100 text-blue-700 p-2 rounded-full flex items-center justify-center">
      <Lock size={18} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-slate-900">Verification Code Sent</h4>
      <p className="text-xs text-slate-500">SMS sent to +1 (***) ***-8942. Valid for 5m.</p>
    </div>
  </div>
  <Badge variant="primary" size="sm" shape="pill">Expiring 04:59</Badge>
</div>`,
  },
  {
    id: 'theming-deploy-toast',
    sectionTitle: '5. Developer CI/CD Build Complete Toast Theme',
    description: 'Clean developer toast with commit hash metadata and instant live preview.',
    previewTitle: 'Production Build Online',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle shadow-core-circle-floating flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-full flex items-center justify-center">
            <CircleCheck size={18} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-core-circle-text-main">Deployed Build #1042</h4>
            <p className="text-xs text-slate-500">core-circle.design (sha: 8f92a1b)</p>
          </div>
        </div>
        <Button size="sm" variant="primary">Visit Site</Button>
      </div>
    ),
    code: `<div className="p-4 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-full flex items-center justify-center">
      <CircleCheck size={18} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">Deployed Build #1042</h4>
      <p className="text-xs text-slate-400">core-circle.design (sha: 8f92a1b)</p>
    </div>
  </div>
  <Button size="sm" variant="primary">Visit Site</Button>
</div>`,
  },
];

export const TOAST_VARIANT_GROUPS: ToastVariantGroup[] = [
  {
    id: 'toast-variants-semantic',
    title: '1. Semantic Status Toasts',
    description: 'Standard notification toasts for success, error, warning, and info.',
    render: () => (
      <div className="flex flex-col gap-4 max-w-md w-full">
        <div className="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm flex items-center justify-between">
          <span className="text-sm font-bold text-blue-900">Information update available</span>
          <Badge variant="info" size="sm">Info</Badge>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-emerald-200 shadow-sm flex items-center justify-between">
          <span className="text-sm font-bold text-emerald-900">Profile saved successfully</span>
          <Badge variant="success" size="sm">Success</Badge>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-amber-200 shadow-sm flex items-center justify-between">
          <span className="text-sm font-bold text-amber-900">Session expiring in 2 minutes</span>
          <Badge variant="warning" size="sm">Warning</Badge>
        </div>
      </div>
    ),
  },
];

export const TOAST_PLAYGROUND_SECTION = {
  id: 'toast-playground-section',
  title: 'Interactive Playground',
  description: 'Test toast triggers, positions, duration timers, and action slots.',
};

export const TOAST_MOCK_CONSUMER_CODE = `import React from 'react';
import { Button } from '@core-circle/ui';
// import { useToast } from '@core-circle/ui';

export const SaveProfileButton = () => {
  // const { toast } = useToast();

  const handleSave = () => {
    // toast({
    //   title: "Settings Saved",
    //   description: "Your organization preferences have been updated.",
    //   variant: "success"
    // });
  };

  return (
    <Button variant="primary" onClick={handleSave}>
      Save Changes
    </Button>
  );
};`;

export const TOAST_MOCK_SECTION = {
  id: 'toast-mock',
  title: 'Global Toast Provider Pattern',
  description: 'Trigger toast notifications from any deeply nested component via React Context.',
  snippets: [
    { label: 'useToast Custom Hook Pattern', code: TOAST_MOCK_CONSUMER_CODE },
  ],
};

export const TOAST_QUICK_USAGE_CODE = `// Trigger toasts using toast provider
toast({
  title: "Operation Succeeded",
  description: "Your dataset has been exported.",
  variant: "success"
});`;

export const TOAST_OVERVIEW_SECTION = {
  id: 'toast-usage',
  title: 'Introduction',
  description: 'The Toast atom provides non-intrusive floating feedback messages for user actions and system events.',
  quickUsage: {
    label: 'Quick Usage',
    code: TOAST_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const TOAST_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'success' | 'warning' | 'destructive' | 'error' | 'info' | 'card' | 'glassmorphic' | 'gradient' | 'floating' | 'pill' | 'minimal'",
    defaultValue: "'default'",
    description: 'The visual styling variant of the toast notification (12 options).'
  },
  { name: 'title', type: 'ReactNode', defaultValue: '-', description: 'Primary headline text or JSX.' },
  { name: 'description', type: 'ReactNode', defaultValue: '-', description: 'Secondary descriptive detail text or JSX.' },
  { name: 'action', type: 'ReactNode', defaultValue: '-', description: 'Optional action button element (e.g. Undo, Retry).' },
  { name: 'icon', type: 'ReactNode', defaultValue: '-', description: 'Optional leading icon element.' },
  { name: 'duration', type: 'number', defaultValue: '5000', description: 'Display time in milliseconds before auto-dismissal.' },
  { name: 'onClose', type: '(id?: string) => void', defaultValue: '-', description: 'Callback triggered when the toast is dismissed.' },
];
