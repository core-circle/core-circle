'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Skeleton, Breadcrumb, Tabs, Button, Typography, Badge } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Star, 
  Heart, 
  ShoppingBag, 
  Cloud, 
  Terminal, 
  Music, 
  Video, 
  Rotate, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SkeletonPlayground } from '../../../components/playground/skeleton/skeletonPlayground';
import { skeletonPageStyles as s } from './skeleton.styles';
import { SKELETON_PROPS_DATA } from '../../../constants/atoms-page/skeleton/skeletonConstants';

export interface SkeletonContainerProps {
  headerContent?: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
}

export default function SkeletonContainer({ headerContent, breadcrumbItems }: SkeletonContainerProps) {
  const [socialLoaded, setSocialLoaded] = useState(false);
  const [productLoaded, setProductLoaded] = useState(false);

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Social Media Video & Feed Card Theme */}
          <DocSection
            id="theming-social-feed"
            title="1. Social Video & Activity Feed Card Theme"
            description="Interactive user profile header, aspect-video media placeholder, and engagement action buttons."
          >
            <ComponentPreview
              title="Social Feed Post Skeleton"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <Skeleton variant="avatar" width={44} height={44} />
      <div className="space-y-1.5">
        <Skeleton variant="text" width={140} height={14} />
        <Skeleton variant="text" width={90} height={10} />
      </div>
    </div>
    <Skeleton variant="badge" width={64} height={24} />
  </div>

  <Skeleton variant="image" width="100%" height={220} borderRadius={16} />

  <div className="flex items-center justify-between pt-2">
    <div className="flex items-center gap-2">
      <Skeleton variant="button" width={70} height={32} />
      <Skeleton variant="button" width={70} height={32} />
    </div>
    <Skeleton variant="text" width={80} height={12} />
  </div>
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton variant="avatar" width={44} height={44} />
                    <div className="space-y-1.5">
                      <Skeleton variant="text" width={140} height={14} />
                      <Skeleton variant="text" width={90} height={10} />
                    </div>
                  </div>
                  <Skeleton variant="badge" width={64} height={24} />
                </div>

                <Skeleton variant="image" width="100%" height={220} borderRadius={16} />

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Skeleton variant="button" width={70} height={32} />
                    <Skeleton variant="button" width={70} height={32} />
                  </div>
                  <Skeleton variant="text" width={80} height={12} />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. E-Commerce Product Showcase & Rating Theme */}
          <DocSection
            id="theming-ecommerce-product"
            title="2. E-Commerce Product Card & Rating Theme"
            description="Crisp product thumbnail placeholder with pricing badges and checkout CTA button shimmer."
          >
            <ComponentPreview
              title="E-Commerce Product Card Skeleton"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <Skeleton variant="image" width="100%" height={180} borderRadius={12} />
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <Skeleton variant="badge" width={80} height={20} />
      <Skeleton variant="text" width={50} height={16} />
    </div>
    <Skeleton variant="text" width="90%" height={18} />
    <Skeleton variant="text" width="60%" height={14} />
  </div>
  <div className="pt-2 flex items-center gap-3">
    <Skeleton variant="button" width="100%" height={40} borderRadius={10} />
  </div>
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-md">
                <Skeleton variant="image" width="100%" height={180} borderRadius={12} />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Skeleton variant="badge" width={80} height={20} />
                    <Skeleton variant="text" width={50} height={16} />
                  </div>
                  <Skeleton variant="text" width="90%" height={18} />
                  <Skeleton variant="text" width="60%" height={14} />
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <Skeleton variant="button" width="100%" height={40} borderRadius={10} />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Analytics Metric Dashboard & Trend Graph Theme */}
          <DocSection
            id="theming-analytics-metric"
            title="3. Analytics Metric Dashboard & Trend Graph Theme"
            description="Frosted glassmorphic metric card with trend indicator and tabular row placeholders."
          >
            <ComponentPreview
              title="Analytics Glassmorphic Metric Skeleton"
              code={`<div className="flex flex-col gap-5 p-6 bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl shadow-md w-full">
  <div className="flex items-center justify-between">
    <div className="space-y-1.5">
      <Skeleton variant="text" width={110} height={12} />
      <Skeleton variant="text" width={160} height={28} />
    </div>
    <Skeleton variant="circular" width={48} height={48} />
  </div>
  <Skeleton variant="rectangular" width="100%" height={60} borderRadius={10} animation="wave" />
  <div className="flex items-center justify-between text-xs pt-1">
    <Skeleton variant="text" width={90} height={12} />
    <Skeleton variant="text" width={60} height={12} />
  </div>
</div>`}
            >
              <div className="flex flex-col gap-5 p-6 bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl shadow-md w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="space-y-1.5">
                    <Skeleton variant="text" width={110} height={12} />
                    <Skeleton variant="text" width={160} height={28} />
                  </div>
                  <Skeleton variant="circular" width={48} height={48} />
                </div>
                <Skeleton variant="rectangular" width="100%" height={60} borderRadius={10} animation="wave" />
                <div className="flex items-center justify-between text-xs pt-1">
                  <Skeleton variant="text" width={90} height={12} />
                  <Skeleton variant="text" width={60} height={12} />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. High-Performance DevOps Dark Terminal Theme */}
          <DocSection
            id="theming-devops-dark"
            title="4. High-Performance DevOps Dark Terminal Theme"
            description="Deep slate-900 high-contrast terminal lines and glowing server health placeholders."
          >
            <ComponentPreview
              title="Dark Terminal Shell Skeleton"
              code={`<div className="flex flex-col gap-4 p-6 bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-xl w-full">
  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
    <div className="flex items-center gap-2">
      <Skeleton variant="dark" width={12} height={12} borderRadius="50%" />
      <Skeleton variant="dark" width={12} height={12} borderRadius="50%" />
      <Skeleton variant="dark" width={12} height={12} borderRadius="50%" />
      <Skeleton variant="dark" width={140} height={14} className="ml-2" />
    </div>
    <Skeleton variant="dark" width={70} height={20} borderRadius={12} />
  </div>
  <div className="space-y-2 pt-2">
    <Skeleton variant="dark" width="95%" height={14} animation="glow" />
    <Skeleton variant="dark" width="80%" height={14} animation="glow" />
    <Skeleton variant="dark" width="60%" height={14} animation="glow" />
  </div>
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-xl w-full max-w-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Skeleton variant="dark" width={12} height={12} borderRadius="50%" />
                    <Skeleton variant="dark" width={12} height={12} borderRadius="50%" />
                    <Skeleton variant="dark" width={12} height={12} borderRadius="50%" />
                    <Skeleton variant="dark" width={140} height={14} className="ml-2" />
                  </div>
                  <Skeleton variant="dark" width={70} height={20} borderRadius={12} />
                </div>
                <div className="space-y-2 pt-2">
                  <Skeleton variant="dark" width="95%" height={14} animation="glow" />
                  <Skeleton variant="dark" width="80%" height={14} animation="glow" />
                  <Skeleton variant="dark" width="60%" height={14} animation="glow" />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Music Player & Audio Wave Streamer Theme */}
          <DocSection
            id="theming-audio-streamer"
            title="5. Music Player & Audio Track Streamer Theme"
            description="Radiant gradient album art thumbnail, audio wave track line, and playback controls."
          >
            <ComponentPreview
              title="Media Audio Player Skeleton"
              code={`<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-indigo-50/40 via-white to-pink-50/40 border border-purple-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <Skeleton variant="gradient" width={64} height={64} borderRadius={14} />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" width={180} height={16} />
      <Skeleton variant="text" width={120} height={12} />
    </div>
    <Skeleton variant="badge" width={50} height={24} />
  </div>
  <Skeleton variant="gradient" width="100%" height={8} borderRadius={4} animation="wave" />
  <div className="flex justify-center items-center gap-4 pt-1">
    <Skeleton variant="circular" width={32} height={32} />
    <Skeleton variant="circular" width={44} height={44} />
    <Skeleton variant="circular" width={32} height={32} />
  </div>
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-indigo-50/40 via-white to-pink-50/40 border border-purple-100 rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center gap-4">
                  <Skeleton variant="gradient" width={64} height={64} borderRadius={14} />
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width={180} height={16} />
                    <Skeleton variant="text" width={120} height={12} />
                  </div>
                  <Skeleton variant="badge" width={50} height={24} />
                </div>
                <Skeleton variant="gradient" width="100%" height={8} borderRadius={4} animation="wave" />
                <div className="flex justify-center items-center gap-4 pt-1">
                  <Skeleton variant="circular" width={32} height={32} />
                  <Skeleton variant="circular" width={44} height={44} />
                  <Skeleton variant="circular" width={32} height={32} />
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
          {/* 1. Rectangular & Circular Shapes */}
          <DocSection
            id="skeleton-variants-shapes"
            title="1. Rectangular & Circular Primitives"
            description="Foundational rectangular surfaces, rounded cards, and circular avatars."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Rectangular Block & Circular Avatar"
                code={`<Skeleton variant="rectangular" width="100%" height={120} borderRadius={12} />\n<Skeleton variant="circular" width={56} height={56} />`}
              >
                <div className="flex flex-col gap-4 w-full">
                  <Skeleton variant="rectangular" width="100%" height={100} borderRadius={12} />
                  <div className="flex items-center gap-3">
                    <Skeleton variant="circular" width={48} height={48} />
                    <div className="flex-1 space-y-1.5">
                      <Skeleton variant="text" width="60%" height={14} />
                      <Skeleton variant="text" width="40%" height={10} />
                    </div>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 2. Button & Badge Pill Skeletons */}
          <DocSection
            id="skeleton-variants-button-badge"
            title="2. Button & Badge Component Skeletons"
            description="Pre-sized shapes matching CoreCircle buttons, chips, and tag pills."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Button & Badge Pill States"
                code={`<Skeleton variant="button" width={120} height={40} />\n<Skeleton variant="badge" width={80} height={24} />`}
              >
                <div className="flex flex-wrap items-center gap-4 w-full">
                  <Skeleton variant="button" width={130} height={42} borderRadius={12} />
                  <Skeleton variant="button" width={100} height={36} borderRadius={10} />
                  <Skeleton variant="badge" width={75} height={24} />
                  <Skeleton variant="badge" width={90} height={24} />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 3. Glassmorphic & Radiant Gradient Surfaces */}
          <DocSection
            id="skeleton-variants-glass-gradient"
            title="3. Glassmorphic Frosted & Radiant Gradient Surfaces"
            description="Translucent frosted glass blur and luminous purple-indigo gradient shimmers."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Glassmorphic & Gradient Skeletons"
                code={`<Skeleton variant="glassmorphic" width="100%" height={100} />\n<Skeleton variant="gradient" width="100%" height={100} />`}
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="p-4 bg-gradient-to-br from-blue-50/70 to-purple-50/70 rounded-2xl">
                    <Skeleton variant="glassmorphic" width="100%" height={80} />
                  </div>
                  <Skeleton variant="gradient" width="100%" height={80} />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 4. High-Contrast Dark & Card Mode */}
          <DocSection
            id="skeleton-variants-dark-card"
            title="4. High-Contrast Dark Mode & Card Containers"
            description="Deep slate-900 surface for terminal windows and elevated card modules."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Dark Mode & Card Presets"
                code={`<Skeleton variant="dark" width="100%" height={90} />\n<Skeleton variant="card" width="100%" height={90} />`}
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="p-4 bg-slate-950 rounded-2xl">
                    <Skeleton variant="dark" width="100%" height={80} />
                  </div>
                  <Skeleton variant="card" width="100%" height={80} />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 5. Animation Effects: Shimmer, Pulse, Wave, Glow */}
          <DocSection
            id="skeleton-variants-animations"
            title="5. Animation Effects: Shimmer, Pulse, Wave & Glow"
            description="Dynamic wave animations, subtle opacity pulsing, and luminous glowing outlines."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Animation Styles Comparison"
                code={`<Skeleton animation="shimmer" width="100%" height={24} />\n<Skeleton animation="pulse" width="100%" height={24} />\n<Skeleton animation="wave" width="100%" height={24} />\n<Skeleton animation="glow" width="100%" height={24} />`}
              >
                <div className="flex flex-col gap-3 w-full">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Shimmer (Default)</span>
                    <Skeleton animation="shimmer" width="100%" height={24} borderRadius={6} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Pulse</span>
                    <Skeleton animation="pulse" width="100%" height={24} borderRadius={6} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Wave</span>
                    <Skeleton animation="wave" width="100%" height={24} borderRadius={6} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Glow</span>
                    <Skeleton animation="glow" width="100%" height={24} borderRadius={6} />
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
          id="skeleton-playground-section"
          title="Interactive Playground"
          description="Experiment with 11 variant shapes, 5 animation styles, and custom dimensions live."
        >
          <SkeletonPlayground />
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
            id="skeleton-mock-section"
            title="React Query / SWR Data Fetching Wrapper Pattern"
            description="Wrap UI components directly with Skeleton to automatically render matched loading layouts."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend User Profile Payload"
                code={JSON.stringify({
                  userId: "usr_99812",
                  fullName: "Sarah Jenkins",
                  role: "Lead Cloud Architect",
                  avatarUrl: "https://images.unsplash.com/photo-sarah",
                  tier: "Diamond VIP",
                  metrics: { deployments: 142, uptime: "99.99%" }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Skeleton Loading Wrapper Component"
                code={`import React, { useState, useEffect } from 'react';
import { Skeleton, Card, Typography, Badge, Button } from '@core-circle/ui';

export const UserProfileViewer = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/v1/users/\${userId}\`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      });
  }, [userId]);

  return (
    <Skeleton loading={loading}>
      <Card variant="floating" className="p-6 flex items-center gap-4 max-w-md">
        <div className="w-12 h-12 rounded-full bg-core-circle-primary/10 flex items-center justify-center font-bold text-core-circle-primary">
          {profile?.fullName?.charAt(0)}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <Typography variant="h3" className="text-base font-bold">{profile?.fullName}</Typography>
            <Badge variant="gradient" size="sm" shape="pill">{profile?.tier}</Badge>
          </div>
          <Typography variant="p" className="text-xs text-core-circle-text-muted">{profile?.role}</Typography>
        </div>
      </Card>
    </Skeleton>
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
            id="skeleton-overview-intro"
            title="Introduction"
            description="Skeleton provides visual feedback to users that content is actively loading. It supports standalone atomic placeholders or intelligent wrapping of child elements."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Skeleton } from '@core-circle/ui';

// 1. Standalone shape
<Skeleton variant="circular" width={48} height={48} />

// 2. Intelligent wrapper pattern
<Skeleton loading={isLoading}>
  <ProfileCard user={user} />
</Skeleton>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={SKELETON_PROPS_DATA} />
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
