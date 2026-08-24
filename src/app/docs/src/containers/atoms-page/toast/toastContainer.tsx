'use client';

import React from 'react';
import Link from 'next/link';
import { Toast, Breadcrumb, Tabs, Typography, Button, Badge } from '@core-circle/ui';
import { Info, CircleCheck, Alert as AlertIcon, CircleX, Layers, Play, CodeIcon, Sparkles, Shield, ArrowRight, Palette, Star } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ToastPlayground } from '../../../components/playground/toast/toastPlayground';
import { TOAST_PROPS_DATA } from '../../../constants/atoms-page/toast/toastConstants';
import { DOC_TEXT } from '../../../constants/common-constants';
import { atomsPageStyles as s } from '../atoms.styles';

export default function ToastContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="theming-vip-reward-toast"
            title="VIP Loyalty & Reward Notification"
            description="Luminous gradient toast with gold star badges and interactive claim actions."
          >
            <ComponentPreview
              title="VIP Achievement Notification"
              code={`<div className="p-4 bg-white rounded-2xl border border-purple-200 shadow-core-circle-floating flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <div className="bg-purple-600 text-white p-2 rounded-full shadow-md">
      <Star size={16} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-purple-950">Platinum VIP Reached!</h4>
      <p className="text-xs text-slate-500">Your tier perks have been activated.</p>
    </div>
  </div>
  <Button size="sm" variant="gradient">View Perks</Button>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-purple-200 shadow-core-circle-floating flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 text-white p-2 rounded-full shadow-md flex items-center justify-center">
                    <Star size={16} />
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

          <DocSection
            id="theming-cloud-sync-toast"
            title="Real-Time Cloud Synchronization Theme"
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
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="toast-variants" title="Status & Design Variants (12 Styles)" description="Status notifications, floating elevations, frosted glass, and gradients.">
            <div className="flex flex-col gap-8 w-full">
              <ComponentPreview
                title="Semantic Status Toasts"
                code={`toast({ variant: 'primary', title: 'Info', description: 'System update available.' });\ntoast({ variant: 'success', title: 'Success', description: 'File uploaded.' });`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-md flex items-center gap-3">
                    <CircleCheck className="text-emerald-600" />
                    <div>
                      <h5 className="font-bold text-sm">Deployment Active</h5>
                      <p className="text-xs text-slate-500">Zero downtime rollout complete.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-md flex items-center gap-3">
                    <CircleX className="text-red-600" />
                    <div>
                      <h5 className="font-bold text-sm">Cluster Unreachable</h5>
                      <p className="text-xs text-slate-500">Retrying connection in 5s...</p>
                    </div>
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
          id="toast-playground-section"
          title="Interactive Toast Playground"
          description="Trigger live toasts across all 12 variants, screen positions, and durations."
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
            title="Dynamic Event Notification Bus"
            description="Listen to global application events and trigger contextual toast feedback."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useEffect } from 'react';
import { useToast } from '@core-circle/ui';

export const GlobalNotificationSubscriber = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handleSyncEvent = (event) => {
      toast({
        variant: event.detail.success ? 'gradient' : 'destructive',
        title: event.detail.title,
        description: event.detail.message,
        duration: 4000
      });
    };

    window.addEventListener('app:sync', handleSyncEvent);
    return () => window.removeEventListener('app:sync', handleSyncEvent);
  }, [toast]);

  return null;
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
          <DocSection id="toast-intro" title="Introduction" description="Toasts provide non-blocking floating feedback about system events, background syncs, and user interactions.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { useToast, Toaster, Button } from '@core-circle/ui';
import { CircleCheck } from '@core-circle/icons';

// In your root layout:
<Toaster position="bottom-right" />

// In your action component:
const { toast } = useToast();

toast({
  variant: 'gradient',
  title: 'Backup Complete',
  description: '1.2 GB of workspace files synced to encrypted storage.',
  icon: <CircleCheck />
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
