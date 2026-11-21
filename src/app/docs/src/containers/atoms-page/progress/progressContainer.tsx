'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Progress, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Info, 
  CodeIcon, 
  Sparkles, 
  Shield, 
  Star, 
  Palette, 
  Layers, 
  Play, 
  CheckIcon, 
  Heart, 
  ShoppingBag, 
  Terminal, 
  Clock, 
  LightningBolt,
  Cloud,
  Fire,
  Water
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { progressPageStyles as s } from './progress.styles';
import {
  PROGRESS_PROPS_DATA,
} from '../../../constants/atoms-page/progress/progressConstants';
import { ProgressPlayground } from '../../../components/playground/progress/ProgressPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { ProgressContainerProps } from '../../../interface/containers/atoms/progress.types';

export default function ProgressContainer({
  headerContent,
  breadcrumbItems
}: ProgressContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Cloud Infrastructure & Storage Quota Theme */}
          <DocSection
            id="theming-cloud-storage"
            title="1. Cloud Infrastructure & Storage Quota Theme"
            description="Multi-tier resource capacity indicators with status chips, threshold warnings, and metric stats."
          >
            <ComponentPreview
              title="Cluster Resource Utilization"
              code={`<div className="flex flex-col gap-5 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="font-bold text-core-circle-text-main flex items-center gap-2">
        <Cloud size={16} className="text-core-circle-primary" /> NVMe SSD Storage
      </span>
      <Badge variant="primary" size="sm" shape="pill">74.2 GB / 100 GB</Badge>
    </div>
    <Progress value={74} variant="primary" size="md" />
  </div>

  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="font-bold text-core-circle-text-main flex items-center gap-2">
        <LightningBolt size={16} className="text-amber-500" /> RAM Memory Pool
      </span>
      <Badge variant="warning" size="sm" shape="pill">88% Allocated</Badge>
    </div>
    <Progress value={88} variant="warning" size="md" />
  </div>

  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="font-bold text-core-circle-text-main flex items-center gap-2">
        <Shield size={16} className="text-emerald-600" /> Database Backup Integrity
      </span>
      <Badge variant="success" size="sm" shape="pill">100% Synced</Badge>
    </div>
    <Progress value={100} variant="success" size="md" />
  </div>
</div>`}
            >
              <div className="flex flex-col gap-5 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-core-circle-text-main flex items-center gap-2">
                      <Cloud size={16} className="text-core-circle-primary" /> NVMe SSD Storage
                    </span>
                    <Badge variant="primary" size="sm" shape="pill">74.2 GB / 100 GB</Badge>
                  </div>
                  <Progress value={74} variant="primary" size="md" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-core-circle-text-main flex items-center gap-2">
                      <LightningBolt size={16} className="text-amber-500" /> RAM Memory Pool
                    </span>
                    <Badge variant="warning" size="sm" shape="pill">88% Allocated</Badge>
                  </div>
                  <Progress value={88} variant="warning" size="md" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-core-circle-text-main flex items-center gap-2">
                      <Shield size={16} className="text-emerald-600" /> Database Backup Integrity
                    </span>
                    <Badge variant="success" size="sm" shape="pill">100% Synced</Badge>
                  </div>
                  <Progress value={100} variant="success" size="md" />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Royal VIP Loyalty Progression Theme */}
          <DocSection
            id="theming-vip-loyalty"
            title="2. VIP Membership & Tier Progression Theme"
            description="Radiant purple-indigo gradient bar with star rewards, level badges, and milestone markers."
          >
            <ComponentPreview
              title="Diamond VIP Tier Milestone"
              code={`<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/40 border border-purple-200/60 rounded-2xl w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Star size={18} className="text-amber-500 fill-amber-500" />
      <span className="font-bold text-purple-950 text-base">Diamond Elite Member</span>
    </div>
    <Badge variant="gradient" size="sm" shape="pill">Tier 4 / 5</Badge>
  </div>
  
  <Progress value={82} variant="gradient" size="lg" shape="pill" showLabel labelPosition="inside" label="8,200 / 10,000 XP" />
  
  <div className="flex justify-between items-center text-xs text-purple-900 font-medium">
    <span>Platinum Level (5,000 XP)</span>
    <span className="font-bold text-core-circle-primary">1,800 XP to Obsidian Crown</span>
  </div>
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/40 border border-purple-200/60 rounded-2xl w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-amber-500 fill-amber-500" />
                    <span className="font-bold text-purple-950 text-base">Diamond Elite Member</span>
                  </div>
                  <Badge variant="gradient" size="sm" shape="pill">Tier 4 / 5</Badge>
                </div>
                
                <Progress value={82} variant="gradient" size="lg" shape="pill" showLabel labelPosition="inside" label="8,200 / 10,000 XP" />
                
                <div className="flex justify-between items-center text-xs text-purple-900 font-medium">
                  <span>Platinum Level (5,000 XP)</span>
                  <span className="font-bold text-core-circle-primary">1,800 XP to Obsidian Crown</span>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Order Fulfillment & Delivery Theme */}
          <DocSection
            id="theming-ecommerce-delivery"
            title="3. E-Commerce Order Fulfillment & Logistics Theme"
            description="Barber-pole animated stripes and stage chips illustrating real-time parcel transit."
          >
            <ComponentPreview
              title="Parcel Delivery In-Transit"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <span className="font-bold text-core-circle-text-main flex items-center gap-2">
      <ShoppingBag size={16} className="text-blue-600" /> Order #CC-98402
    </span>
    <Badge variant="info" size="sm" shape="pill">Out for Delivery</Badge>
  </div>
  
  <Progress value={70} variant="striped" striped size="md" />

  <div className="grid grid-cols-3 text-xs text-core-circle-text-muted font-medium pt-1">
    <div className="text-left font-bold text-core-circle-success flex items-center gap-1">
      <CheckIcon size={12} /> Packed
    </div>
    <div className="text-center font-bold text-core-circle-primary">
      In Transit (GPS Tracked)
    </div>
    <div className="text-right text-core-circle-text-muted">
      Arrival Today 3:00 PM
    </div>
  </div>
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-core-circle-text-main flex items-center gap-2">
                    <ShoppingBag size={16} className="text-blue-600" /> Order #CC-98402
                  </span>
                  <Badge variant="info" size="sm" shape="pill">Out for Delivery</Badge>
                </div>
                
                <Progress value={70} variant="striped" striped size="md" />

                <div className="grid grid-cols-3 text-xs text-core-circle-text-muted font-medium pt-1">
                  <div className="text-left font-bold text-core-circle-success flex items-center gap-1">
                    <CheckIcon size={12} /> Packed
                  </div>
                  <div className="text-center font-bold text-core-circle-primary">
                    In Transit (GPS Tracked)
                  </div>
                  <div className="text-right text-core-circle-text-muted">
                    Arrival Today 3:00 PM
                  </div>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. CI/CD Build & Deployment Pipeline Theme */}
          <DocSection
            id="theming-dev-cicd"
            title="4. Developer CI/CD Build & Test Pipeline Theme"
            description="Luminous neon green glowing bar with build runtime, container status, and test coverage metrics."
          >
            <ComponentPreview
              title="Kubernetes Rollout Progress"
              code={`<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Terminal size={16} className="text-emerald-400" />
      <span className="font-mono text-xs font-bold text-emerald-400">deploy: production-v4.2.0</span>
    </div>
    <span className="font-mono text-xs text-slate-400">Elapsed: 42s</span>
  </div>

  <Progress value={92} variant="glow" size="md" shape="rounded" />

  <div className="flex justify-between items-center text-xs font-mono text-slate-300">
    <span>46 / 50 Pods Healthy</span>
    <span className="text-emerald-400 font-bold">92% Traffic Switched</span>
  </div>
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-emerald-400">deploy: production-v4.2.0</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">Elapsed: 42s</span>
                </div>

                <Progress value={92} variant="glow" size="md" shape="rounded" />

                <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                  <span>46 / 50 Pods Healthy</span>
                  <span className="text-emerald-400 font-bold">92% Traffic Switched</span>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Fitness & Health Target Tracker Theme */}
          <DocSection
            id="theming-health-fitness"
            title="5. Daily Fitness & Health Goals Tracker Theme"
            description="Vibrant calorie, water intake, and active heart rate progress cards."
          >
            <ComponentPreview
              title="Daily Activity Rings"
              code={`<div className="flex flex-col gap-5 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="space-y-1.5">
    <div className="flex items-center justify-between text-xs font-bold">
      <span className="flex items-center gap-1.5 text-rose-600">
        <Fire size={14} /> Active Burn
      </span>
      <span>680 / 800 kcal (85%)</span>
    </div>
    <Progress value={85} variant="danger" size="sm" />
  </div>

  <div className="space-y-1.5">
    <div className="flex items-center justify-between text-xs font-bold">
      <span className="flex items-center gap-1.5 text-sky-600">
        <Water size={14} /> Hydration Intake
      </span>
      <span>2.4 / 3.0 L (80%)</span>
    </div>
    <Progress value={80} variant="info" size="sm" />
  </div>

  <div className="space-y-1.5">
    <div className="flex items-center justify-between text-xs font-bold">
      <span className="flex items-center gap-1.5 text-emerald-600">
        <Heart size={14} /> Daily Target
      </span>
      <span>11,400 / 10,000 (100%)</span>
    </div>
    <Progress value={100} variant="success" size="sm" />
  </div>
</div>`}
            >
              <div className="flex flex-col gap-5 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-rose-600">
                      <Fire size={14} /> Active Burn
                    </span>
                    <span>680 / 800 kcal (85%)</span>
                  </div>
                  <Progress value={85} variant="danger" size="sm" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-sky-600">
                      <Water size={14} /> Hydration Intake
                    </span>
                    <span>2.4 / 3.0 L (80%)</span>
                  </div>
                  <Progress value={80} variant="info" size="sm" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-emerald-600">
                      <Heart size={14} /> Daily Target
                    </span>
                    <span>11,400 / 10,000 (100%)</span>
                  </div>
                  <Progress value={100} variant="success" size="sm" />
                </div>
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
          {/* 1. Semantic Status Colors */}
          <DocSection
            id="progress-variants-colors"
            title="1. Brand & Semantic Colors"
            description="Standard solid brand and feedback status indicators."
          >
            <ComponentPreview
              title="Semantic Color Variants"
              code={`<Progress value={90} variant="primary" showLabel label="Primary (90%)" />
<Progress value={80} variant="secondary" showLabel label="Secondary (80%)" />
<Progress value={70} variant="success" showLabel label="Success (70%)" />
<Progress value={60} variant="warning" showLabel label="Warning (60%)" />
<Progress value={50} variant="danger" showLabel label="Danger (50%)" />
<Progress value={65} variant="info" showLabel label="Info (65%)" />`}
            >
              <div className="flex flex-col gap-5 w-full max-w-md">
                <Progress value={90} variant="primary" showLabel label="Primary (90%)" />
                <Progress value={80} variant="secondary" showLabel label="Secondary (80%)" />
                <Progress value={70} variant="success" showLabel label="Success (70%)" />
                <Progress value={60} variant="warning" showLabel label="Warning (60%)" />
                <Progress value={50} variant="danger" showLabel label="Danger (50%)" />
                <Progress value={65} variant="info" showLabel label="Info (65%)" />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Visual Effects & Premium Finishes */}
          <DocSection
            id="progress-variants-effects"
            title="2. Gradient, Glassmorphic, Glow & Floating Styles"
            description="Luminous gradient spectrum, frosted glassmorphism, glowing neon aura, and elevated card depths."
          >
            <ComponentPreview
              title="Visual Effect Variants"
              code={`<Progress value={85} variant="gradient" showLabel label="Gradient VIP (85%)" />
<Progress value={75} variant="glassmorphic" showLabel label="Glassmorphic Glow (75%)" />
<Progress value={90} variant="glow" showLabel label="Neon Glow (90%)" />
<Progress value={65} variant="floating" showLabel label="Floating Depth (65%)" />
<Progress value={45} variant="ghost" showLabel label="Ghost Wash (45%)" />`}
            >
              <div className="flex flex-col gap-5 w-full max-w-md">
                <Progress value={85} variant="gradient" showLabel label="Gradient VIP (85%)" />
                <div className="p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl">
                  <Progress value={75} variant="glassmorphic" showLabel label="Glassmorphic (75%)" />
                </div>
                <Progress value={90} variant="glow" showLabel label="Neon Glow (90%)" />
                <Progress value={65} variant="floating" showLabel label="Floating Depth (65%)" />
                <Progress value={45} variant="ghost" showLabel label="Ghost Wash (45%)" />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Striped & Indeterminate Animations */}
          <DocSection
            id="progress-variants-animations"
            title="3. Striped Patterns & Indeterminate Mode"
            description="Animated diagonal stripes for active uploads and continuous wave pulses for indeterminate processes."
          >
            <ComponentPreview
              title="Animated Loading States"
              code={`<Progress value={70} variant="striped" striped showLabel label="Striped Upload (70%)" />
<Progress indeterminate variant="primary" />
<Progress indeterminate variant="gradient" />`}
            >
              <div className="flex flex-col gap-6 w-full max-w-md">
                <Progress value={70} variant="striped" striped showLabel label="Striped Upload (70%)" />
                <Progress indeterminate variant="primary" />
                <Progress indeterminate variant="gradient" />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Shapes & Size Scale */}
          <DocSection
            id="progress-variants-shapes"
            title="4. Shapes & Sizing Scale"
            description="Pill, rounded, and square track contours configured across small, medium, and large heights."
          >
            <ComponentPreview
              title="Shape & Scale Matrix"
              code={`<Progress size="sm" shape="pill" value={40} showLabel label="Small Pill (h-1.5)" />
<Progress size="md" shape="rounded" value={60} showLabel label="Medium Rounded (h-2.5)" />
<Progress size="lg" shape="square" value={80} showLabel label="Large Square (h-4)" />`}
            >
              <div className="flex flex-col gap-6 w-full max-w-md">
                <Progress size="sm" shape="pill" value={40} showLabel label="Small Pill (h-1.5)" />
                <Progress size="md" shape="rounded" value={60} showLabel label="Medium Rounded (h-2.5)" />
                <Progress size="lg" shape="square" value={80} showLabel label="Large Square (h-4)" />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Label Positions */}
          <DocSection
            id="progress-variants-labels"
            title="5. Label Positioning"
            description="Inside text overlays, trailing side labels, and top header titles."
          >
            <ComponentPreview
              title="Label Placement Options"
              code={`<Progress value={75} showLabel labelPosition="outside-end" />
<Progress value={75} showLabel labelPosition="outside-top" label="Storage Quota" />
<Progress value={75} size="lg" showLabel labelPosition="inside" label="75% Uploaded" />`}
            >
              <div className="flex flex-col gap-6 w-full max-w-md">
                <Progress value={75} showLabel labelPosition="outside-end" />
                <Progress value={75} showLabel labelPosition="outside-top" label="Storage Quota" />
                <Progress value={75} size="lg" showLabel labelPosition="inside" label="75% Uploaded" />
              </div>
            </ComponentPreview>
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
          id="progress-playground-section"
          title="Interactive Playground"
          description="Experiment with 12 variants, shapes, sizes, striped patterns, and live animated transitions."
        >
          <ProgressPlayground />
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
            id="progress-mock"
            title="Dynamic Telemetry & Upload Tracking API Integration"
            description="Render multi-stage asynchronous processing updates dynamically from backend event payloads."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Task Payload"
                code={JSON.stringify({
                  taskId: "async_job_8429",
                  status: "in_progress",
                  overallProgress: 72,
                  subtasks: [
                    { id: "1", name: "Image Compression", status: "completed", progress: 100 },
                    { id: "2", name: "CDN Edge Replication", status: "processing", progress: 65 },
                    { id: "3", name: "Cache Invalidation", status: "pending", progress: 0 }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useEffect, useState } from 'react';
import { Progress, Badge } from '@core-circle/ui';

export const TaskProgressTracker = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/tasks/async_job_8429')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col gap-6 p-6 bg-white border rounded-2xl shadow-sm max-w-md">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold">
          <span>Overall Job Progress</span>
          <Badge variant="primary" size="sm" shape="pill">{data.overallProgress}%</Badge>
        </div>
        <Progress value={data.overallProgress} variant="gradient" size="md" />
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {data.subtasks.map((task) => (
          <div key={task.id} className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-core-circle-text-main">{task.name}</span>
              <span className="text-core-circle-text-muted capitalize">{task.status}</span>
            </div>
            <Progress
              value={task.progress}
              size="sm"
              variant={task.status === 'completed' ? 'success' : 'primary'}
              striped={task.status === 'processing'}
            />
          </div>
        ))}
      </div>
    </div>
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
            id="progress-usage"
            title="Introduction"
            description="The Progress primitive displays task completion, quotas, step progression, and indeterminate waiting states with customizable themes and accessible role attributes."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Progress } from '@core-circle/ui';

<Progress value={65} variant="gradient" shape="pill" showLabel />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={PROGRESS_PROPS_DATA} />
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
