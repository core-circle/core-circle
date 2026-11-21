'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollArea, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Terminal, 
  Banknotes, 
  Sparkles, 
  Shield, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ScrollAreaPlayground } from '../../../components/playground/scroll-area/scrollAreaPlayground';
import { scrollAreaPageStyles as s } from './scroll-area.styles';
import { SCROLL_AREA_PROPS_DATA } from '../../../constants/atoms-page/scroll-area/scrollAreaConstants';

export default function ScrollAreaContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Terminal Telemetry Stream */}
          <DocSection
            id="theming-terminal-telemetry"
            title="1. Cyber Terminal Telemetry Stream Theme"
            description="Deep slate-950 monospace log container with glowing emerald scrollbar track."
          >
            <ComponentPreview
              title="Telemetry Log Terminal"
              code={`<ScrollArea
  variant="glow"
  maxHeight="180px"
  className="p-4 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl font-mono text-xs w-full"
>
  <div className="space-y-2">
    <p className="text-emerald-400">[16:52:01Z] gRPC listener initialized on port 50051</p>
    <p className="text-slate-300">[16:52:02Z] SSL Handshake succeeded for 192.168.1.104</p>
    <p className="text-slate-300">[16:52:03Z] Redis cache hit ratio: 99.82%</p>
    <p className="text-slate-300">[16:52:04Z] Query execution completed in 1.4ms</p>
    <p className="text-slate-300">[16:52:05Z] Distributed lock acquired: lock_auth_cluster</p>
    <p className="text-emerald-400">[16:52:06Z] Healthcheck 200 OK across 48 pods</p>
  </div>
</ScrollArea>`}
            >
              <ScrollArea
                variant="glow"
                maxHeight="180px"
                className="p-4 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl font-mono text-xs w-full"
              >
                <div className="space-y-2">
                  <p className="text-emerald-400">[16:52:01Z] gRPC listener initialized on port 50051</p>
                  <p className="text-slate-300">[16:52:02Z] SSL Handshake succeeded for 192.168.1.104</p>
                  <p className="text-slate-300">[16:52:03Z] Redis cache hit ratio: 99.82%</p>
                  <p className="text-slate-300">[16:52:04Z] Query execution completed in 1.4ms</p>
                  <p className="text-slate-300">[16:52:05Z] Distributed lock acquired: lock_auth_cluster</p>
                  <p className="text-emerald-400">[16:52:06Z] Healthcheck 200 OK across 48 pods</p>
                </div>
              </ScrollArea>
            </ComponentPreview>
          </DocSection>

          {/* 2. Stock Market Horizontal Orderbook Ticker */}
          <DocSection
            id="theming-stock-ticker"
            title="2. Financial Market Horizontal Orderbook Ticker Theme"
            description="Horizontal scroll container with radiant gradient scrollbar for realtime equity asset tickers."
          >
            <ComponentPreview
              title="Stock Market Ticker"
              code={`<ScrollArea
  orientation="horizontal"
  variant="gradient"
  className="p-4 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full"
>
  <div className="flex gap-4 w-[850px] py-1">
    {/* Financial ticker cards */}
  </div>
</ScrollArea>`}
            >
              <ScrollArea
                orientation="horizontal"
                variant="gradient"
                className="p-4 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full"
              >
                <div className="flex gap-4 w-[850px] py-1">
                  <div className="p-3 bg-slate-50 border rounded-xl w-48 shrink-0">
                    <span className="font-bold text-xs text-slate-500">NASDAQ: NVDA</span>
                    <p className="font-bold text-sm text-emerald-600 mt-1">$128.40 (+4.2%)</p>
                  </div>
                  <div className="p-3 bg-slate-50 border rounded-xl w-48 shrink-0">
                    <span className="font-bold text-xs text-slate-500">NASDAQ: AAPL</span>
                    <p className="font-bold text-sm text-emerald-600 mt-1">$224.15 (+1.8%)</p>
                  </div>
                  <div className="p-3 bg-slate-50 border rounded-xl w-48 shrink-0">
                    <span className="font-bold text-xs text-slate-500">NYSE: BRK.A</span>
                    <p className="font-bold text-sm text-slate-800 mt-1">$684,200 (+0.4%)</p>
                  </div>
                  <div className="p-3 bg-slate-50 border rounded-xl w-48 shrink-0">
                    <span className="font-bold text-xs text-slate-500">CRYPTO: BTC</span>
                    <p className="font-bold text-sm text-emerald-600 mt-1">$64,800 (+3.1%)</p>
                  </div>
                </div>
              </ScrollArea>
            </ComponentPreview>
          </DocSection>

          {/* 3. Realtime Chat Messages Thread */}
          <DocSection
            id="theming-chat-thread"
            title="3. Realtime Collaborative Chat Stream Theme"
            description="Subtle scrollbar container formatted for modern messaging feeds."
          >
            <ComponentPreview
              title="Chat Feed Container"
              code={`<ScrollArea
  variant="subtle"
  maxHeight="200px"
  className="p-4 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full"
>
  {/* Chat bubbles */}
</ScrollArea>`}
            >
              <ScrollArea
                variant="subtle"
                maxHeight="200px"
                className="p-4 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full"
              >
                <div className="space-y-3 pr-2">
                  <div className="p-3 bg-blue-50 text-blue-950 rounded-2xl max-w-sm">
                    <p className="text-xs font-bold">Alex (Lead Architect)</p>
                    <p className="text-sm mt-0.5">Wave 1 components are published and fully typed!</p>
                  </div>
                  <div className="p-3 bg-slate-100 text-slate-900 rounded-2xl max-w-sm ml-auto text-right">
                    <p className="text-xs font-bold text-slate-500">Sarah (Design Systems)</p>
                    <p className="text-sm mt-0.5">Awesome! All 10 variants match design tokens perfectly.</p>
                  </div>
                  <div className="p-3 bg-blue-50 text-blue-950 rounded-2xl max-w-sm">
                    <p className="text-xs font-bold">Alex (Lead Architect)</p>
                    <p className="text-sm mt-0.5">Starting verification tests now.</p>
                  </div>
                </div>
              </ScrollArea>
            </ComponentPreview>
          </DocSection>

          {/* 4. Code Snippet Inspector */}
          <DocSection
            id="theming-code-inspector"
            title="4. Monospace Code Snippet Inspector Theme"
            description="Dark mode code container supporting simultaneous vertical and horizontal overflow."
          >
            <ComponentPreview
              title="Code Inspector Container"
              code={`<ScrollArea
  orientation="both"
  variant="dark"
  maxHeight="160px"
  className="p-4 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 font-mono text-xs w-full"
>
  <pre className="w-[600px] leading-relaxed">
    {\`export const fetchTelemetry = async (clusterId: string): Promise<ClusterMetrics> => {
  const endpoint = \`https://api.corecircle.io/v1/clusters/\${clusterId}/telemetry\`;
  const response = await fetch(endpoint, { headers: { 'X-Auth': 'Bearer Token' } });
  return await response.json();
};\`}
  </pre>
</ScrollArea>`}
            >
              <ScrollArea
                orientation="both"
                variant="dark"
                maxHeight="160px"
                className="p-4 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 font-mono text-xs w-full"
              >
                <pre className="w-[600px] leading-relaxed">
{`export const fetchTelemetry = async (clusterId: string): Promise<ClusterMetrics> => {
  const endpoint = \`https://api.corecircle.io/v1/clusters/\${clusterId}/telemetry\`;
  const response = await fetch(endpoint, { headers: { 'X-Auth': 'Bearer Token' } });
  return await response.json();
};`}
                </pre>
              </ScrollArea>
            </ComponentPreview>
          </DocSection>

          {/* 5. Dynamic File Explorer List */}
          <DocSection
            id="theming-file-explorer"
            title="5. Monorepo File Hierarchy Explorer Theme"
            description="Primary accent scrollbar embedded in multi-package workspace navigation."
          >
            <ComponentPreview
              title="File Explorer Container"
              code={`<ScrollArea
  variant="accent"
  maxHeight="180px"
  className="p-4 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full"
>
  <div className="space-y-2 text-xs font-mono text-slate-700">
    <p>📁 packages/ui/src/components/atoms/drawer/drawer.tsx</p>
    <p>📁 packages/ui/src/components/atoms/rating/rating.tsx</p>
    <p>📁 packages/ui/src/components/atoms/avatar-group/avatar-group.tsx</p>
    <p>📁 packages/ui/src/components/atoms/scroll-area/scroll-area.tsx</p>
  </div>
</ScrollArea>`}
            >
              <ScrollArea
                variant="accent"
                maxHeight="180px"
                className="p-4 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full"
              >
                <div className="space-y-2 text-xs font-mono text-slate-700">
                  <p>📁 packages/ui/src/components/atoms/drawer/drawer.tsx</p>
                  <p>📁 packages/ui/src/components/atoms/rating/rating.tsx</p>
                  <p>📁 packages/ui/src/components/atoms/avatar-group/avatar-group.tsx</p>
                  <p>📁 packages/ui/src/components/atoms/scroll-area/scroll-area.tsx</p>
                  <p>📁 packages/theme/src/tokens/colors.json</p>
                  <p>📁 src/app/docs/src/containers/atoms-page/scroll-area/</p>
                </div>
              </ScrollArea>
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
          {/* 1. Track Styles */}
          <DocSection
            id="scroll-area-variants-tracks"
            title="1. Scrollbar Track & Thumb Styles"
            description="Subtle, thin, and default slate scrollbar designs."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <ScrollArea variant="default" maxHeight="120px" className="p-4 bg-white border rounded-xl">
                <div className="space-y-2 text-xs text-slate-600">
                  {Array.from({ length: 8 }, (_, i) => <p key={i}>Default scrollbar item #{i + 1}</p>)}
                </div>
              </ScrollArea>
              <ScrollArea variant="subtle" maxHeight="120px" className="p-4 bg-slate-50 border rounded-xl">
                <div className="space-y-2 text-xs text-slate-600">
                  {Array.from({ length: 8 }, (_, i) => <p key={i}>Subtle scrollbar item #{i + 1}</p>)}
                </div>
              </ScrollArea>
              <ScrollArea variant="thin" maxHeight="120px" className="p-4 bg-white border rounded-xl">
                <div className="space-y-2 text-xs text-slate-600">
                  {Array.from({ length: 8 }, (_, i) => <p key={i}>Thin 4px scrollbar item #{i + 1}</p>)}
                </div>
              </ScrollArea>
            </div>
          </DocSection>

          {/* 2. Radiant Gradient & Neon Glow */}
          <DocSection
            id="scroll-area-variants-glow-gradient"
            title="2. Gradient & Neon Glow Tracks"
            description="Luminous emerald halos and purple-pink gradient scrollbars."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <ScrollArea variant="gradient" maxHeight="120px" className="p-4 bg-purple-50/30 border border-purple-100 rounded-xl">
                <div className="space-y-2 text-xs text-purple-950">
                  {Array.from({ length: 8 }, (_, i) => <p key={i}>Purple gradient scrollbar item #{i + 1}</p>)}
                </div>
              </ScrollArea>
              <ScrollArea variant="glow" maxHeight="120px" className="p-4 bg-slate-950 text-white border border-slate-800 rounded-xl">
                <div className="space-y-2 text-xs text-emerald-400 font-mono">
                  {Array.from({ length: 8 }, (_, i) => <p key={i}>Neon glow scrollbar item #{i + 1}</p>)}
                </div>
              </ScrollArea>
            </div>
          </DocSection>

          {/* 3. Orientation Modes */}
          <DocSection
            id="scroll-area-variants-orientations"
            title="3. Scroll Orientations (Vertical, Horizontal, Both)"
            description="Constrain overflow across single or dual axes."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <ScrollArea orientation="vertical" maxHeight="120px" className="p-4 bg-white border rounded-xl">
                <div className="space-y-2 text-xs text-slate-600">
                  <p className="font-bold text-slate-900">Vertical Scrolling Only</p>
                  {Array.from({ length: 8 }, (_, i) => <p key={i}>Line #{i + 1}</p>)}
                </div>
              </ScrollArea>
              <ScrollArea orientation="horizontal" variant="gradient" className="p-4 bg-white border rounded-xl">
                <div className="flex gap-4 w-[600px] text-xs">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="p-3 bg-slate-50 border rounded-lg shrink-0 w-36 text-center">
                      Card #{i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
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
          id="scroll-area-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, orientation axes, height limits, and live code generator."
        >
          <ScrollAreaPlayground />
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
            id="scroll-area-mock-section"
            title="Dynamic Telemetry Stream Integration"
            description="Pattern for streaming server logs inside an auto-scrolling container."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Telemetry Events Payload"
                code={JSON.stringify({
                  streamId: "stream_live_audit",
                  events: [
                    { id: 1, type: "AUTH_SUCCESS", user: "dev@corecircle.io", latency: "1.2ms" },
                    { id: 2, type: "CACHE_PURGE", key: "theme_tokens", latency: "0.4ms" },
                    { id: 3, type: "DEPLOY_FINISH", version: "v2.4.0", latency: "140ms" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Telemetry Stream Component"
                code={`import React, { useState, useEffect } from 'react';
import { ScrollArea } from '@core-circle/ui';

export const LiveTelemetryFeed = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://api.corecircle.io/v1/telemetry');
    ws.onmessage = (event) => setLogs((prev) => [...prev, JSON.parse(event.data)]);
    return () => ws.close();
  }, []);

  return (
    <ScrollArea variant="glow" maxHeight="240px" className="p-4 bg-slate-950 text-white rounded-xl font-mono text-xs">
      <div className="space-y-1">
        {logs.map((log, i) => (
          <p key={i} className="text-emerald-400">
            [{log.timestamp}] {log.type} - {log.message}
          </p>
        ))}
      </div>
    </ScrollArea>
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
            id="scroll-area-overview-intro"
            title="Introduction"
            description="The ScrollArea component standardizes scrolling across browsers with 10 custom track and thumb styles, smooth scrolling performance, horizontal/vertical/both orientations, and clean autohide triggers."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { ScrollArea } from '@core-circle/ui';

<ScrollArea variant="gradient" maxHeight="200px">
  <div className="space-y-4">
    <p>Scrollable content here...</p>
  </div>
</ScrollArea>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={SCROLL_AREA_PROPS_DATA} />
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
