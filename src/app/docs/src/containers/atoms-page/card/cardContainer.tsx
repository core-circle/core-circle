'use client';

import React from 'react';
import Link from 'next/link';
import { Card, Tabs, Button, Badge, Typography, Breadcrumb } from '@core-circle/ui';
import { Sparkles, Shield, ArrowRight, Heart, Star, CheckIcon, Layers, Play, CodeIcon, Info, Map, Palette } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { CardPlayground } from '../../../components/playground/card/cardPlayground';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import {
  CARD_PROPS_DATA
} from '../../../constants/atoms-page/card/cardConstants';
import { CardContainerProps } from '../../../interface/containers/atoms/card.types';
import { atomsPageStyles as s } from '../atoms.styles';

export default function CardContainer({ headerContent, breadcrumbItems }: CardContainerProps) {
  const samplePhoto = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80';
  const coverPhoto = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80';
  const avatarPhoto = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="theming-vip-subscription"
            title="Royal VIP Subscription Pricing Theme"
            description="Custom purple gradient container with star corner anchor and tiered feature checks."
          >
            <ComponentPreview
              title="Branded Subscription Card with Corner Star"
              code={`<Card variant="gradient" hoverable className="border-purple-200 max-w-md">
  <Card.Corner position="top-right" shape="circle" size="md">
    <div className="bg-purple-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center">
      <Sparkles size={16} />
    </div>
  </Card.Corner>
  <Card.Header divider>
    <div>
      <Badge variant="gradient" shape="pill" size="sm">Enterprise Plan</Badge>
      <h4 className="text-xl font-extrabold text-purple-900 mt-2">$299 / mo</h4>
    </div>
  </Card.Header>
  <Card.Body>
    <ul className="space-y-2 text-sm text-slate-700">
      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600" size={16} /> Unlimited API requests</li>
      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600" size={16} /> 24/7 Dedicated Slack channel</li>
      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600" size={16} /> 99.99% Guaranteed SLA uptime</li>
    </ul>
  </Card.Body>
  <Card.Footer divider align="between">
    <span className="text-xs text-slate-500">Billed annually</span>
    <Button variant="primary" size="sm">Upgrade Workspace</Button>
  </Card.Footer>
</Card>`}
            >
              <div className="w-full max-w-md mx-auto">
                <Card variant="gradient" hoverable className="border-purple-200">
                  <Card.Corner position="top-right" shape="circle" size="md">
                    <div className="bg-purple-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                  </Card.Corner>
                  <Card.Header divider>
                    <div>
                      <Badge variant="gradient" shape="pill" size="sm">Enterprise Plan</Badge>
                      <h4 className="text-xl font-extrabold text-purple-900 mt-2">$299 / mo</h4>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600 shrink-0" size={16} /> Unlimited API requests</li>
                      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600 shrink-0" size={16} /> 24/7 Dedicated Slack channel</li>
                      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600 shrink-0" size={16} /> 99.99% Guaranteed SLA uptime</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer divider align="between">
                    <span className="text-xs text-slate-500">Billed annually</span>
                    <Button variant="primary" size="sm">Upgrade Workspace</Button>
                  </Card.Footer>
                </Card>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="theming-enterprise-cluster"
            title="Enterprise Cloud Cluster Monitor Card"
            description="Elevated status card with live telemetry metrics, health indicator badges, and direct management actions."
          >
            <ComponentPreview
              title="Production Node Cluster Monitor"
              code={`<Card variant="floating" hoverable className="max-w-md">
  <Card.Header divider>
    <div className="flex items-center gap-2">
      <Shield size={16} className="text-emerald-600" />
      <h4 className="font-bold text-core-circle-text-main">us-west-2 Kubernetes Node</h4>
    </div>
    <Badge variant="success" size="sm" shape="pill">99.99% Healthy</Badge>
  </Card.Header>
  <Card.Body>
    <p className="text-sm text-core-circle-text-muted">128 vCPUs / 512 GB RAM operating at 42% steady-state load with 0 dropped packets.</p>
  </Card.Body>
  <Card.Footer align="end">
    <Button size="sm" variant="outline">Open Telemetry</Button>
  </Card.Footer>
</Card>`}
            >
              <div className="w-full max-w-md mx-auto">
                <Card variant="floating" hoverable>
                  <Card.Header divider>
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-emerald-600" />
                      <h4 className="font-bold text-core-circle-text-main">us-west-2 Kubernetes Node</h4>
                    </div>
                    <Badge variant="success" size="sm" shape="pill">99.99% Healthy</Badge>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-sm text-core-circle-text-muted">128 vCPUs / 512 GB RAM operating at 42% steady-state load with 0 dropped packets.</p>
                  </Card.Body>
                  <Card.Footer align="end">
                    <Button size="sm" variant="outline">Open Telemetry</Button>
                  </Card.Footer>
                </Card>
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
          {/* Full Cover Image & Solid Color Cards */}
          <DocSection id="card-full-covers" title="1. Full Cover Image & Solid Color Hero Cards" description="Edge-to-edge background media and solid vibrant brand gradient cards with high-contrast text and CTAs.">
            <div className="flex flex-col gap-8 w-full">
              <ComponentPreview
                title="Full Background Image Cover Card"
                code={`<Card variant="cover" hoverable className="min-h-[360px] relative">\n  <Card.Media src={coverPhoto} position="cover" />\n  <Card.Corner position="top-right" shape="circle" size="md">\n    <Button size="icon" variant="glassmorphic" className="h-9 w-9 !p-0"><Star size={16} className="text-amber-400" /></Button>\n  </Card.Corner>\n  <Card.Header>\n    <Badge variant="glassmorphic" shape="pill" size="sm" startIcon={<Map size={12} />}>Featured Expedition</Badge>\n  </Card.Header>\n  <Card.Body className="mt-auto">\n    <h3 className="text-2xl font-bold text-white">Patagonia Fjords & Glaciers</h3>\n    <p className="text-sm text-slate-200 mt-2">Experience glacial navigation with certified polar leaders.</p>\n  </Card.Body>\n  <Card.Footer divider align="between" className="border-white/10">\n    <span className="text-sm text-white/90">From $1,890 / traveler</span>\n    <Button variant="gradient" size="sm">Reserve Cabin</Button>\n  </Card.Footer>\n</Card>`}
              >
                <div className="w-full">
                  <Card variant="cover" hoverable className="min-h-[360px] relative">
                    <Card.Media src={coverPhoto} position="cover" />
                    <Card.Corner position="top-right" shape="circle" size="md">
                      <Button size="icon" variant="glassmorphic" className="h-9 w-9 !p-0 text-white" aria-label="Favorite">
                        <Star size={16} className="text-amber-400" />
                      </Button>
                    </Card.Corner>
                    <Card.Header>
                      <Badge variant="glassmorphic" shape="pill" size="sm" startIcon={<Map size={12} />}>
                        Featured Expedition
                      </Badge>
                    </Card.Header>
                    <Card.Body className="mt-auto">
                      <h4 className="text-2xl font-bold text-white tracking-tight">Patagonia Fjords & Glaciers</h4>
                      <p className="text-sm text-slate-200 mt-2 max-w-xl leading-relaxed">
                        Experience glacial navigation, wildlife tracking, and secluded fjords with certified polar expedition leaders.
                      </p>
                    </Card.Body>
                    <Card.Footer divider align="between" className="border-white/10">
                      <span className="text-sm font-semibold text-white/90">From $1,890 / traveler</span>
                      <Button variant="gradient" size="sm" endIcon={<ArrowRight size={14} />}>Reserve Cabin</Button>
                    </Card.Footer>
                  </Card>
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Solid Brand Gradient & Solid Dark Color Cards"
                code={`<Card variant="solid-brand" hoverable>...</Card>\n<Card variant="solid-dark" hoverable>...</Card>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <Card variant="solid-brand" hoverable>
                    <Card.Header divider className="border-white/15">
                      <div className="flex items-center gap-2">
                        <Sparkles className="text-amber-300" size={18} />
                        <h4 className="font-bold text-white text-lg">Enterprise AI Acceleration</h4>
                      </div>
                      <Badge variant="glassmorphic" size="sm" shape="pill">Active</Badge>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Dedicated cluster instances with distributed model checkpointing and prioritized inference queues.
                      </p>
                    </Card.Body>
                    <Card.Footer align="end">
                      <Button size="sm" variant="glassmorphic" className="text-white">Configure Cluster</Button>
                    </Card.Footer>
                  </Card>

                  <Card variant="solid-dark" hoverable>
                    <Card.Header divider className="border-slate-800">
                      <h4 className="font-bold text-white text-lg">Database Replication Pool</h4>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Multi-region read replicas with sub-10ms replication lag across 4 geographical availability zones.
                      </p>
                    </Card.Body>
                    <Card.Footer align="end">
                      <Button size="sm" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">View Telemetry</Button>
                    </Card.Footer>
                  </Card>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* Media & Image Variants */}
          <DocSection id="card-media-variants" title="2. Top, Bottom & Side Media Layouts" description="Top banner images, bottom media previews, and responsive side media layouts.">
            <div className="flex flex-col gap-8 w-full">
              <ComponentPreview
                title="Top Image & Bottom Image Cards"
                code={`<Card variant="floating" hoverable>...</Card>\n<Card variant="shadow">...</Card>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <Card variant="floating" hoverable>
                    <Card.Media src={samplePhoto} aspect="video" overlay>
                      <div className="flex justify-between items-start">
                        <Badge variant="primary" size="sm" shape="pill">Featured Article</Badge>
                        <Button size="icon" variant="glassmorphic" className="h-8 w-8 !p-0" aria-label="Favorite"><Star size={14} /></Button>
                      </div>
                    </Card.Media>
                    <Card.Header>
                      <h4 className="font-bold text-base">Modern Web Architecture</h4>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-sm leading-relaxed">Comprehensive guide to building edge micro-frontends with high performance.</p>
                    </Card.Body>
                    <Card.Footer align="end">
                      <Button size="sm" variant="primary" endIcon={<ArrowRight size={14} />}>Read Article</Button>
                    </Card.Footer>
                  </Card>

                  <Card variant="shadow">
                    <Card.Header divider>
                      <h4 className="font-bold text-base">Quarterly Analytics Report</h4>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-sm leading-relaxed">Live telemetry of workspace cluster resource utilization and GPU efficiency.</p>
                    </Card.Body>
                    <Card.Media src={samplePhoto} aspect="video" position="bottom" />
                  </Card>
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Horizontal Cards with Left & Right Side Media"
                code={`<Card variant="outline" orientation="horizontal" hoverable>...</Card>`}
              >
                <div className="w-full">
                  <Card variant="outline" orientation="horizontal" hoverable>
                    <Card.Media src={samplePhoto} position="side" />
                    <div className="flex-1 flex flex-col justify-between p-6">
                      <div>
                        <Badge variant="gradient" size="sm" shape="pill" className="mb-2">New Release</Badge>
                        <h4 className="font-bold text-lg">CoreCircle Design System v3.0</h4>
                        <p className="text-sm leading-relaxed text-core-circle-text-muted mt-2">
                          Zero redundancy atomic components with unified design token styling and complete interactive state customization.
                        </p>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-3">
                        <Button size="sm" variant="ghost">Explore Docs</Button>
                        <Button size="sm" variant="primary" endIcon={<ArrowRight size={14} />}>Get Started</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* Floating Corner Badges & Avatars */}
          <DocSection id="card-corner-variants" title="3. Corner Slots (Circle, Rounded, Square)" description="Anchor profile avatars, verified badges, and action icons at any card corner.">
            <div className="flex flex-col gap-8 w-full">
              <ComponentPreview
                title="Corner Avatars & Status Badges (Circle, Rounded & Square)"
                code={`<Card variant="floating">\n  <Card.Corner position="top-right" shape="circle" size="lg"><img src="/avatar.jpg" className="w-full h-full object-cover rounded-full" /></Card.Corner>\n</Card>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  <Card variant="floating" hoverable>
                    <Card.Corner position="top-right" shape="circle" size="lg">
                      <img src={avatarPhoto} alt="User Avatar" className="w-full h-full object-cover rounded-full border-2 border-white shadow-md" />
                    </Card.Corner>
                    <Card.Header>
                      <h4 className="font-bold text-base">Sarah Jenkins</h4>
                    </Card.Header>
                    <Card.Body>
                      <span className="text-xs text-core-circle-primary font-bold block mb-1">Lead Cloud Architect</span>
                      <p className="text-sm leading-relaxed">Specializing in distributed systems, service mesh scalability, and zero-trust security.</p>
                    </Card.Body>
                    <Card.Footer divider align="end">
                      <Button size="sm" variant="primary">Connect</Button>
                    </Card.Footer>
                  </Card>

                  <Card variant="shadow" hoverable>
                    <Card.Corner position="top-left" shape="rounded" size="md">
                      <div className="bg-indigo-50 border border-indigo-200 p-2 rounded-core-circle-lg text-indigo-600">
                        <Shield size={20} />
                      </div>
                    </Card.Corner>
                    <Card.Header className="pl-16">
                      <h4 className="font-bold text-base">SOC2 Certified</h4>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-sm leading-relaxed">End-to-end encrypted datalake with 99.999% uptime compliance and automated auditing.</p>
                    </Card.Body>
                    <Card.Footer divider align="end">
                      <Button size="sm" variant="ghost">Audit Logs</Button>
                    </Card.Footer>
                  </Card>

                  <Card variant="gradient-border">
                    <Card.Corner position="bottom-right" shape="square" size="sm">
                      <Badge variant="gradient" shape="square" size="sm" startIcon={<Sparkles size={10} />}>PRO</Badge>
                    </Card.Corner>
                    <Card.Header divider>
                      <h4 className="font-bold text-base">Dedicated GPU</h4>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-sm leading-relaxed">8x NVIDIA H100 SXM5 instances with 3.2 Tbps InfiniBand interconnect for LLM inference.</p>
                    </Card.Body>
                    <Card.Footer align="start">
                      <span className="text-xs font-bold text-emerald-600">● 100% Available</span>
                    </Card.Footer>
                  </Card>
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
        <DocSection id="card-playground" title="Interactive Card Playground" description="Configure all card variants, full background covers, solid colors, media placements (top/bottom), floating corner slots, and alignments.">
          <CardPlayground />
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
            id="card-mock"
            title="Dynamic Workspace Cluster API Integration"
            description="Dynamically render cards from server cluster metadata payloads."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Cluster Payload"
                code={JSON.stringify({
                  clusterId: "cls_aws_us_east_1",
                  name: "US-East Production K8s",
                  status: "HEALTHY",
                  region: "us-east-1 (N. Virginia)",
                  nodes: 24,
                  image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
                  actions: [
                    { id: "scale", label: "Scale Nodes", variant: "ghost" },
                    { id: "view", label: "Open Grafana", variant: "primary" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`const DynamicClusterCard = ({ cluster }) => (
  <Card variant="floating" hoverable>
    <Card.Media src={cluster.image} aspect="video" overlay>
      <Badge variant={cluster.status === 'HEALTHY' ? 'success' : 'destructive'} size="sm" shape="pill">
        {cluster.status}
      </Badge>
    </Card.Media>
    <Card.Header divider>
      <h3 className="font-bold">{cluster.name}</h3>
      <span className="text-xs text-slate-500">{cluster.region}</span>
    </Card.Header>
    <Card.Body>
      <p className="text-sm">{cluster.nodes} active compute nodes running across 3 AZs.</p>
    </Card.Body>
    <Card.Footer divider align="end">
      {cluster.actions.map(action => (
        <Button key={action.id} size="sm" variant={action.variant}>
          {action.label}
        </Button>
      ))}
    </Card.Footer>
  </Card>
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
          <DocSection id="card-intro" title="Introduction" description="The Card primitive structures grouped information, full background image covers, solid brand colors, media banners, floating corner badges, and actionable workflows.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Card, Button, Badge } from '@core-circle/ui';

<Card variant="floating" hoverable>
  <Card.Media src="/banner.jpg" aspect="video" />
  <Card.Header divider>
    <h3 className="font-bold">NextGen Edge Compute</h3>
  </Card.Header>
  <Card.Body>
    Deploy microservices to 300+ edge points with single-digit millisecond latency.
  </Card.Body>
  <Card.Footer divider align="end">
    <Button size="sm" variant="primary">Launch Instance</Button>
  </Card.Footer>
</Card>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={CARD_PROPS_DATA} />
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
