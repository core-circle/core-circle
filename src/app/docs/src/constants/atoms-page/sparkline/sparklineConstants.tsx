import React from 'react';
import { Sparkline } from '@core-circle/ui';
import { HomeIcon, Activity } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ThemeConfig {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantItem {
  title: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantGroup {
  id: string;
  title: string;
  description: string;
  items?: VariantItem[];
  customRender?: () => React.ReactNode;
}

export const SPARKLINE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Sparkline' },
];

export const SPARKLINE_HEADER_CONTENT = {
  title: 'Sparkline',
  description: 'A pure zero-dependency lightweight SVG micro-chart (line, area, or bar) for compact trend visuals in financial tables, KPI metric blocks, and activity feeds.',
};

export const SPARKLINE_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production sparkline configurations across stock tickers, server load metrics, revenue trajectories, and conversion funnels.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual chart types (smooth line, gradient area, bar column) across semantic color themes.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive SVG micro-chart sandbox with live type, color, curve, and dimension controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic table row trend integration payload example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const mockTrendData = [14, 22, 18, 35, 29, 44, 38, 55, 48, 62];
const mockVolatileData = [45, 20, 55, 30, 68, 25, 60, 42, 80, 50];
const mockDropData = [65, 58, 48, 40, 32, 28, 18, 14];

export const SPARKLINE_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-stock-ticker',
    title: '1. Financial Stock & Crypto Ticker Theme',
    description: 'Area sparkline with emerald gradient fill and endpoint beacon dot.',
    previewTitle: 'Positive Asset Appreciation',
    code: `<Sparkline data={[14, 22, 18, 35, 29, 44, 38, 55, 48, 62]} type="area" color="success" width={160} height={44} />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full max-w-md">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AAPL / USD</span>
          <div className="text-xl font-bold text-slate-900">$224.50</div>
        </div>
        <Sparkline data={mockTrendData} type="area" color="success" width={160} height={44} />
      </div>
    ),
  },
  {
    id: 'theming-server-cpu',
    title: '2. Server CPU & Workload Bar Columns',
    description: 'Bar sparkline visualizing discrete interval requests and server queue load.',
    previewTitle: 'Server Telemetry Load Bars',
    code: `<Sparkline data={[14, 22, 18, 35, 29, 44, 38, 55, 48, 62]} type="bar" color="primary" width={160} height={44} />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full max-w-md">
        <div className="flex items-center gap-2">
          <Activity size={20} className="text-indigo-600" />
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Node CPU</span>
            <div className="text-lg font-bold text-slate-900">72.4% avg</div>
          </div>
        </div>
        <Sparkline data={mockTrendData} type="bar" color="primary" width={160} height={44} />
      </div>
    ),
  },
  {
    id: 'theming-danger-drop',
    title: '3. Anomaly & Incident Outage Theme',
    description: 'Rose-tinted area drop indicating declining throughput or service degradation.',
    previewTitle: 'Throughput Drop Warning',
    code: `<Sparkline data={[65, 58, 48, 40, 32, 28, 18, 14]} type="area" color="danger" width={160} height={44} />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-rose-50/50 border border-rose-200 rounded-2xl w-full max-w-md">
        <div>
          <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Packet Rate</span>
          <div className="text-xl font-bold text-rose-700">-42.8% Drop</div>
        </div>
        <Sparkline data={mockDropData} type="area" color="danger" width={160} height={44} />
      </div>
    ),
  },
  {
    id: 'theming-minimal-linear',
    title: '4. Minimal Linear Polyline Theme',
    description: 'Straight linear segments with vertex dot indicators for crisp technical charts.',
    previewTitle: 'Linear Interpolated Polyline',
    code: `<Sparkline data={[45, 20, 55, 30, 68, 25, 60, 42, 80, 50]} type="line" curve="linear" showPoints color="warning" width={160} height={44} />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl w-full max-w-md">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Error Rate</span>
          <div className="text-lg font-bold text-amber-600">0.42%</div>
        </div>
        <Sparkline data={mockVolatileData} type="line" curve="linear" showPoints color="warning" width={160} height={44} />
      </div>
    ),
  },
  {
    id: 'theming-neutral-table',
    title: '5. Neutral Data Table Density Theme',
    description: 'Compact slate micro-line for embedding inside tight data grid rows.',
    previewTitle: 'Compact Table Micro-Trend',
    code: `<Sparkline data={[14, 22, 18, 35, 29, 44, 38]} type="line" color="neutral" width={100} height={24} />`,
    render: () => (
      <div className="flex items-center gap-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
        <span className="text-xs font-medium text-slate-700">Cluster Pods (us-west-2)</span>
        <span className="font-mono text-xs text-slate-900">42 replicas</span>
        <Sparkline data={[14, 22, 18, 35, 29, 44, 38]} type="line" color="neutral" width={100} height={24} />
      </div>
    ),
  },
];

export const SPARKLINE_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-chart-types',
    title: 'Visualization Types',
    description: 'Smooth line, gradient area, and discrete bar layouts.',
    items: [
      {
        title: 'Smooth Line Chart',
        code: `<Sparkline data={data} type="line" color="primary" />`,
        render: () => <Sparkline data={mockTrendData} type="line" color="primary" width={160} height={44} />,
      },
      {
        title: 'Gradient Area Chart',
        code: `<Sparkline data={data} type="area" color="success" />`,
        render: () => <Sparkline data={mockTrendData} type="area" color="success" width={160} height={44} />,
      },
      {
        title: 'Discrete Bar Chart',
        code: `<Sparkline data={data} type="bar" color="primary" />`,
        render: () => <Sparkline data={mockTrendData} type="bar" color="primary" width={160} height={44} />,
      },
    ],
  },
  {
    id: 'variants-colors',
    title: 'Color Themes',
    description: 'Semantic palettes (primary, success, warning, danger, neutral).',
    items: [
      {
        title: 'Success Green',
        code: `<Sparkline data={data} color="success" />`,
        render: () => <Sparkline data={mockTrendData} type="area" color="success" width={140} height={36} />,
      },
      {
        title: 'Warning Amber',
        code: `<Sparkline data={data} color="warning" />`,
        render: () => <Sparkline data={mockTrendData} type="area" color="warning" width={140} height={36} />,
      },
      {
        title: 'Danger Rose',
        code: `<Sparkline data={data} color="danger" />`,
        render: () => <Sparkline data={mockTrendData} type="area" color="danger" width={140} height={36} />,
      },
      {
        title: 'Neutral Slate',
        code: `<Sparkline data={data} color="neutral" />`,
        render: () => <Sparkline data={mockTrendData} type="area" color="neutral" width={140} height={36} />,
      },
    ],
  },
];

export const SPARKLINE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test sparkline visualization formats, semantic colors, curve interpolation, and dimension scales.',
};

export const SPARKLINE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Data Grid Sparkline Integration',
  description: 'Pattern for embedding micro sparklines in table row components.',
  snippets: [
    {
      label: 'CryptoTableRecord.tsx',
      code: `import React from 'react';
import { Sparkline, TrendBadge } from '@core-circle/ui';

export interface CryptoAsset {
  symbol: string;
  name: string;
  price: string;
  change24h: string;
  sparkline: number[];
}

export function CryptoTableRow({ asset }: { asset: CryptoAsset }) {
  const isPositive = asset.change24h.startsWith('+');

  return (
    <div className="flex items-center justify-between p-4 border-b hover:bg-slate-50">
      <div className="w-40 font-bold">{asset.symbol}</div>
      <div className="w-32 font-mono">{asset.price}</div>
      <div className="w-28">
        <TrendBadge value={asset.change24h} variant="soft" size="xs" />
      </div>
      <div className="w-40">
        <Sparkline
          data={asset.sparkline}
          type="area"
          color={isPositive ? 'success' : 'danger'}
          width={120}
          height={32}
        />
      </div>
    </div>
  );
}`,
    },
  ],
};

export const SPARKLINE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Sparkline } from '@core-circle/ui';

export default function MyTrend() {
  return (
    <Sparkline
      data={[12, 18, 15, 24, 28, 42, 38, 55]}
      type="area"
      color="success"
      width={140}
      height={36}
    />
  );
}`,
  },
  propsTableTitle: 'Sparkline Props',
};

export const SPARKLINE_PROPS_DATA: PropItem[] = [
  {
    name: 'data',
    type: 'number[]',
    required: true,
    description: 'Array of numeric values to plot.',
  },
  {
    name: 'type',
    type: "'line' | 'area' | 'bar'",
    required: false,
    defaultValue: "'line'",
    description: 'Visualization format of the micro chart.',
  },
  {
    name: 'color',
    type: "'primary' | 'success' | 'warning' | 'danger' | 'neutral'",
    required: false,
    defaultValue: "'primary'",
    description: 'Semantic theme palette applied to strokes and gradient fills.',
  },
  {
    name: 'width',
    type: 'number | string',
    required: false,
    defaultValue: '120',
    description: 'Rendered SVG width.',
  },
  {
    name: 'height',
    type: 'number | string',
    required: false,
    defaultValue: '36',
    description: 'Rendered SVG height.',
  },
  {
    name: 'strokeWidth',
    type: 'number',
    required: false,
    defaultValue: '2',
    description: 'Thickness of the stroke line in pixels.',
  },
  {
    name: 'curve',
    type: "'linear' | 'smooth'",
    required: false,
    defaultValue: "'smooth'",
    description: 'Line interpolation smoothing algorithm.',
  },
  {
    name: 'showLastPoint',
    type: 'boolean',
    required: false,
    defaultValue: 'true',
    description: 'Whether to highlight the final data point with a circular marker.',
  },
  {
    name: 'showPoints',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description: 'Whether to show circle markers on every individual vertex.',
  },
  {
    name: 'gradient',
    type: 'boolean',
    required: false,
    defaultValue: 'true',
    description: 'Whether to render a vertical opacity gradient under the area path.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the SVG container.',
  },
];
