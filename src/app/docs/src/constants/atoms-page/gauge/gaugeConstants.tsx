'use client';

import React from 'react';
import { Gauge } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const GAUGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Gauge' },
];

export const GAUGE_HEADER_CONTENT = {
  title: 'Gauge',
  description:
    'A circular radial gauge and speedometer visualizing numeric progress, system capacity, network throughput, and threshold status with smooth SVG arcs.',
};

export const GAUGE_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore datacenter CPU telemetry, broadband speedometers, EV battery gauges, and risk indexes.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore framing containers, sizing scales, custom units, and color thresholds.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test arc progression, metric units, and slider values.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Kubernetes cluster resource utilization monitor integration pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const GAUGE_THEME_CONFIGS = [
  {
    id: 'theming-cpu-utilization',
    title: '1. Datacenter Server CPU Utilization Theme',
    description: 'Real-time telemetry gauge monitoring cluster core load.',
    previewTitle: 'Core Utilization',
    code: `<Gauge
  value={78}
  label="CPU USAGE"
  unit="%"
  variant="card"
  helperText="Operating normally across 32 cores"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Gauge
          value={78}
          label="CPU USAGE"
          unit="%"
          variant="card"
          helperText="Operating normally across 32 cores"
        />
      </div>
    ),
  },
  {
    id: 'theming-broadband-speed',
    title: '2. Gigabit Broadband Speedometer Theme',
    description: 'Network download speed with custom unit and indigo brand arc.',
    previewTitle: 'Download Throughput',
    code: `<Gauge
  value={940}
  min={0}
  max={1000}
  label="THROUGHPUT"
  unit="Mbps"
  color="#2563eb"
  variant="card"
  helperText="Ultra-low latency fiber connection"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Gauge
          value={940}
          min={0}
          max={1000}
          label="THROUGHPUT"
          unit="Mbps"
          color="#2563eb"
          variant="card"
          helperText="Ultra-low latency fiber connection"
        />
      </div>
    ),
  },
  {
    id: 'theming-battery-charge',
    title: '3. Electric Vehicle Battery Charge Theme',
    description: 'Clean emerald green gauge indicating remaining battery percentage.',
    previewTitle: 'Battery Level',
    code: `<Gauge
  value={85}
  label="BATTERY"
  unit="%"
  color="#059669"
  variant="bordered"
  helperText="Estimated range: 310 miles"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Gauge
          value={85}
          label="BATTERY"
          unit="%"
          color="#059669"
          variant="bordered"
          helperText="Estimated range: 310 miles"
        />
      </div>
    ),
  },
  {
    id: 'theming-storage-capacity',
    title: '4. Cloud Storage Quota Alert Theme',
    description: 'High warning state with red threshold highlight for full volume.',
    previewTitle: 'Storage Volume',
    code: `<Gauge
  value={94}
  label="SSD DISK"
  unit="%"
  color="#ef4444"
  variant="card"
  helperText="Critical: 6% remaining space"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Gauge
          value={94}
          label="SSD DISK"
          unit="%"
          color="#ef4444"
          variant="card"
          helperText="Critical: 6% remaining space"
        />
      </div>
    ),
  },
  {
    id: 'theming-security-risk',
    title: '5. Security Threat Risk Index Theme',
    description: 'Low-risk rating indicated on an amber/yellow scale.',
    previewTitle: 'Vulnerability Score',
    code: `<Gauge
  value={22}
  label="RISK SCORE"
  unit="pts"
  color="#10b981"
  variant="card"
  helperText="All security audits passing"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Gauge
          value={22}
          label="RISK SCORE"
          unit="pts"
          color="#10b981"
          variant="card"
          helperText="All security audits passing"
        />
      </div>
    ),
  },
];

export const GAUGE_VARIANT_GROUPS = [
  {
    id: 'group-framing',
    title: 'Container Surface Variants',
    description: 'Elevated card surface, bordered frame, and inline transparent.',
    items: [
      {
        title: 'Elevated Card Surface',
        code: `<Gauge value={65} label="METRIC" variant="card" />`,
        render: () => (
          <Gauge value={65} label="METRIC" variant="card" />
        ),
      },
      {
        title: 'High-Contrast Bordered Frame',
        code: `<Gauge value={65} label="METRIC" variant="bordered" />`,
        render: () => (
          <Gauge value={65} label="METRIC" variant="bordered" />
        ),
      },
      {
        title: 'Transparent Inline Layout',
        code: `<Gauge value={65} label="METRIC" variant="default" />`,
        render: () => (
          <Gauge value={65} label="METRIC" variant="default" />
        ),
      },
    ],
  },
  {
    id: 'group-sizing',
    title: 'Dimensions & Color Scales',
    description: 'Compact 140px scale, large 220px scale, and customized colors.',
    items: [
      {
        title: 'Compact Sizing (140px)',
        code: `<Gauge value={42} label="LOAD" size={140} strokeWidth={10} variant="card" />`,
        render: () => (
          <Gauge value={42} label="LOAD" size={140} strokeWidth={10} variant="card" />
        ),
      },
      {
        title: 'Large Sizing (220px)',
        code: `<Gauge value={88} label="PEAK" size={220} strokeWidth={18} variant="card" />`,
        render: () => (
          <Gauge value={88} label="PEAK" size={220} strokeWidth={18} variant="card" />
        ),
      },
    ],
  },
];

export const GAUGE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test interactive gauge progress values, diameter scales, units, and labels.',
};

export const GAUGE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Server infrastructure observability dashboard integration pattern.',
  snippets: [
    {
      label: 'ServerMetricDashboard.tsx',
      code: `import React, { useState, useEffect } from 'react';
import { Gauge } from '@core-circle/ui';

export const ServerMetricDashboard: React.FC = () => {
  const [cpuUsage, setCpuUsage] = useState(64);

  useEffect(() => {
    const timer = setInterval(() => {
      setCpuUsage(Math.floor(50 + Math.random() * 35));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <Gauge
        value={cpuUsage}
        label="CPU UTILIZATION"
        unit="%"
        variant="card"
        helperText="16 vCPUs assigned"
      />
    </div>
  );
};`,
    },
  ],
};

export const GAUGE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Gauge } from '@core-circle/ui';

export default function MyDashboard() {
  return <Gauge value={75} label="CPU LOAD" unit="%" variant="card" />;
}`,
  },
};

export const GAUGE_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'number',
    defaultValue: '0',
    description: 'Current numeric metric value to display.',
  },
  {
    name: 'min',
    type: 'number',
    defaultValue: '0',
    description: 'Minimum gauge value boundary.',
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '100',
    description: 'Maximum gauge value boundary.',
  },
  {
    name: 'unit',
    type: 'string',
    defaultValue: "'%'",
    description: 'Unit string suffix displayed next to the value.',
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Uppercase title label rendered under the center number.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Contextual description subtitle rendered below the gauge.',
  },
  {
    name: 'size',
    type: 'number',
    defaultValue: '180',
    description: 'Pixel diameter width and height of the gauge.',
  },
  {
    name: 'strokeWidth',
    type: 'number',
    defaultValue: '14',
    description: 'Thickness of the background and foreground SVG arc tracks.',
  },
  {
    name: 'color',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Custom override color for the value progress arc.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered'",
    defaultValue: "'default'",
    description: 'Container background surface style.',
  },
];
