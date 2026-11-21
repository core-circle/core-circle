'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Sparkles, 
  Shield, 
  ArrowRight, 
  Heart, 
  Star, 
  CheckIcon, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Palette, 
  ShoppingBag, 
  Lock, 
  Terminal, 
  CircleCheck 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { toastPageStyles as s } from './toast.styles';
import { TOAST_PROPS_DATA } from '../../../constants/atoms-page/toast/toastConstants';
import { ToastPlayground } from '../../../components/playground/toast/toastPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
export interface ToastContainerProps {
  sections?: any[];
  headerContent?: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
}

export default function ToastContainer({
  headerContent,
  breadcrumbItems
}: ToastContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. VIP Reward Toast */}
          <DocSection
            id="theming-vip-toast"
            title="1. Royal VIP Loyalty & Reward Toast Theme"
            description="Luminous floating toast with gold star badge and instant perk claim action."
          >
            <ComponentPreview
              title="VIP Achievement Notification"
              code={`<div className="p-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 rounded-2xl border border-purple-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 2. Cloud Sync Complete Toast */}
          <DocSection
            id="theming-cloud-sync-toast"
            title="2. Real-Time Cloud Synchronization Toast Theme"
            description="Floating status toast with live pulse indicator for asynchronous cloud synchronization."
          >
            <ComponentPreview
              title="Cloud Sync Complete Toast"
              code={`<div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
    <div>
      <h4 className="font-bold text-sm text-slate-900">Sync Complete (300+ Nodes)</h4>
      <p className="text-xs text-slate-500">Deployed v3.2.0 to 14 edge regions in 2.1s.</p>
    </div>
  </div>
  <Button size="sm" variant="ghost">View Details</Button>
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Cart Toast */}
          <DocSection
            id="theming-cart-toast"
            title="3. E-Commerce Item Added to Cart Toast Theme"
            description="Instant feedback toast when a customer adds a product to their cart."
          >
            <ComponentPreview
              title="Product Added to Cart"
              code={`<div className="p-4 bg-white rounded-2xl border border-emerald-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 4. Security MFA Code Sent Toast */}
          <DocSection
            id="theming-mfa-toast"
            title="4. Security & Two-Factor Verification Toast Theme"
            description="High-trust security toast with timed verification code alert."
          >
            <ComponentPreview
              title="Security Code Dispatched"
              code={`<div className="p-4 bg-white rounded-2xl border border-blue-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 5. Developer Build Succeeded Toast */}
          <DocSection
            id="theming-deploy-toast"
            title="5. Developer CI/CD Build Complete Toast Theme"
            description="Clean developer toast with commit hash metadata and instant live preview."
          >
            <ComponentPreview
              title="Production Build Online"
              code={`<div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-full flex items-center justify-center">
      <CircleCheck size={18} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-white">Deployed Build #1042</h4>
      <p className="text-xs text-slate-400">core-circle.design (sha: 8f92a1b)</p>
    </div>
  </div>
  <Button size="sm" variant="primary">Visit Site</Button>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-core-circle-floating flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-full flex items-center justify-center">
                    <CircleCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Deployed Build #1042</h4>
                    <p className="text-xs text-slate-400">core-circle.design (sha: 8f92a1b)</p>
                  </div>
                </div>
                <Button size="sm" variant="primary">Visit Site</Button>
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
          <DocSection id="toast-variants-semantic" title="1. Semantic Status Toasts" description="Standard notification toasts for success, error, warning, and info.">
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
          id="toast-playground-section"
          title="Interactive Playground"
          description="Test toast triggers, positions, duration timers, and action slots."
        >
          <ToastPlayground />
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
            id="toast-mock"
            title="Global Toast Provider Pattern"
            description="Trigger toast notifications from any deeply nested component via React Context."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="useToast Custom Hook Pattern"
                code={`import React from 'react';
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
          <DocSection id="toast-usage" title="Introduction" description="The Toast atom provides non-intrusive floating feedback messages for user actions and system events.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`// Trigger toasts using toast provider
toast({
  title: "Operation Succeeded",
  description: "Your dataset has been exported.",
  variant: "success"
});`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={TOAST_PROPS_DATA} />
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
