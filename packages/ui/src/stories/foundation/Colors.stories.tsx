import React, { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colors, charts, darkCharts, theme, darkTheme } from '@core-circle/theme';

const HUE_CATEGORIES: Record<string, string[]> = {
  Neutrals: ['slate', 'gray', 'zinc', 'neutral', 'stone'],
  Warm: ['red', 'orange', 'amber', 'yellow', 'rose'],
  Cool: ['green', 'emerald', 'lime', 'teal', 'cyan', 'sky', 'blue'],
  Vibrant: ['indigo', 'violet', 'purple', 'fuchsia', 'pink'],
};

const CHART_ROLES: Record<number, string> = {
  1: 'Primary Data Line / Main Series',
  2: 'Secondary Positive / Growth',
  3: 'Warm Comparative / Benchmark',
  4: 'Electric Accent / Highlight',
  5: 'High-Tech Flow / Volume',
  6: 'Expressive Metric / Engagement',
  7: 'Attention Metric / Threshold',
  8: 'Grounded Metric / Baseline',
  9: 'Negative Variance / Loss',
  10: 'Ancillary Series / Target',
};

const SHADE_KEYS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

export const ColorPaletteShowcase = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'neutrals' | 'warm' | 'cool' | 'vibrant' | 'semantic' | 'charts'>('all');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const filteredHues = useMemo(() => {
    const allHues = Object.entries(colors) as [string, Record<string, string>][];

    return allHues.filter(([hueName, shades]) => {
      // Category filter
      if (activeTab === 'neutrals' && !HUE_CATEGORIES['Neutrals'].includes(hueName)) return false;
      if (activeTab === 'warm' && !HUE_CATEGORIES['Warm'].includes(hueName)) return false;
      if (activeTab === 'cool' && !HUE_CATEGORIES['Cool'].includes(hueName)) return false;
      if (activeTab === 'vibrant' && !HUE_CATEGORIES['Vibrant'].includes(hueName)) return false;
      if (activeTab === 'semantic' || activeTab === 'charts') return false;

      // Search filter
      if (!search) return true;
      const q = search.toLowerCase();
      if (hueName.toLowerCase().includes(q)) return true;
      return Object.values(shades).some(hex => hex.toLowerCase().includes(q));
    });
  }, [activeTab, search]);

  const activeSemanticTheme = isDarkMode ? darkTheme : theme;

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Core Circle Color System
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-700">
                22 Hues · 242 Shades
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              The complete design token color palette powering `@core-circle/theme` across light and dark modes. Click any swatch to copy its HEX value.
            </p>
          </div>

          {copiedColor && (
            <div className="self-start md:self-auto px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg shadow-md animate-fade-in flex items-center gap-2">
              <span>✓</span> Copied <code className="bg-emerald-700 px-1 py-0.5 rounded font-mono">{copiedColor}</code>
            </div>
          )}
        </div>

        {/* Search & Tabs */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-1 bg-slate-200/70 p-1 rounded-xl">
            {(
              [
                ['all', 'All Hues (22)'],
                ['neutrals', 'Neutrals (5)'],
                ['warm', 'Warm (5)'],
                ['cool', 'Cool (7)'],
                ['vibrant', 'Vibrant (5)'],
                ['semantic', 'Semantic Tokens'],
                ['charts', 'Data-Viz Charts (10)'],
              ] as const
            ).map(([tabKey, label]) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === tabKey
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search hue or #hex..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 1. Full Spectrum Color Palettes */}
      {activeTab !== 'semantic' && activeTab !== 'charts' && (
        <section className="space-y-6">
          {filteredHues.map(([hueName, shades]) => (
            <div key={hueName} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="capitalize font-bold text-slate-800 text-sm tracking-wide">
                  {hueName}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  colors.{hueName}[50..950]
                </span>
              </div>

              {/* Responsive shade strip */}
              <div className="grid grid-cols-11 gap-2">
                {SHADE_KEYS.map((shade) => {
                  const hex = shades[shade] || '';
                  const numShade = parseInt(shade, 10);
                  const isDarkText = numShade < 500;
                  return (
                    <button
                      key={shade}
                      onClick={() => copyToClipboard(hex)}
                      className="group flex flex-col rounded-xl overflow-hidden border border-slate-100 hover:scale-105 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                      title={`Click to copy ${hueName}-${shade} (${hex})`}
                    >
                      <div
                        className="h-16 w-full flex items-end p-2 transition-transform"
                        style={{ backgroundColor: hex }}
                      >
                        <span
                          className={`text-[10px] font-bold ${
                            isDarkText ? 'text-slate-900/80' : 'text-white'
                          }`}
                        >
                          {shade}
                        </span>
                      </div>
                      <div className="p-1.5 bg-white">
                        <span className="text-[10px] font-mono text-slate-600 block truncate uppercase">
                          {hex}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredHues.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No colors found matching "{search}".
            </div>
          )}
        </section>
      )}

      {/* 2. Semantic Tokens Section */}
      {(activeTab === 'all' || activeTab === 'semantic') && (
        <section className="mt-12 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Semantic Theme Tokens</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Role-based design tokens mapped to light and dark theme context.
              </p>
            </div>

            {/* Light / Dark Mode Toggle */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setIsDarkMode(false)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  !isDarkMode ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                ☀ Light Mode
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  isDarkMode ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500'
                }`}
              >
                🌙 Dark Mode
              </button>
            </div>
          </div>

          {/* Primary Action Tokens */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Brand & Status Colors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { name: 'Primary', val: activeSemanticTheme.primary },
                { name: 'Secondary', val: activeSemanticTheme.secondary },
                { name: 'Success', val: activeSemanticTheme.success },
                { name: 'Warning', val: activeSemanticTheme.warning },
                { name: 'Destructive', val: activeSemanticTheme.destructive },
                { name: 'Danger', val: activeSemanticTheme.danger },
              ].map(({ name, val }) => (
                <button
                  key={name}
                  onClick={() => copyToClipboard(val)}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-blue-400 text-left transition-all"
                >
                  <div className="w-8 h-8 rounded-lg shadow-sm border border-black/5" style={{ backgroundColor: val }} />
                  <div>
                    <div className="text-xs font-bold text-slate-800">{name}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{val}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Surface & Background Tokens */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Background & Surface Tokens</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { name: 'bg.page', val: activeSemanticTheme.bg.page },
                { name: 'bg.surface', val: activeSemanticTheme.bg.surface },
                { name: 'bg.muted', val: activeSemanticTheme.bg.muted },
                { name: 'bg.inverse', val: activeSemanticTheme.bg.inverse },
              ].map(({ name, val }) => (
                <button
                  key={name}
                  onClick={() => copyToClipboard(val)}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-blue-400 text-left transition-all"
                >
                  <div className="w-8 h-8 rounded-lg shadow-sm border border-black/10" style={{ backgroundColor: val }} />
                  <div>
                    <div className="text-xs font-bold text-slate-800">{name}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{val}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Text & Border Tokens */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Text & Border Tokens</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {[
                { name: 'text.main', val: activeSemanticTheme.text.main },
                { name: 'text.muted', val: activeSemanticTheme.text.muted },
                { name: 'text.subtle', val: activeSemanticTheme.text.subtle },
                { name: 'text.inverse', val: activeSemanticTheme.text.inverse },
                { name: 'border.main', val: activeSemanticTheme.border.main },
                { name: 'border.primary', val: activeSemanticTheme.border.primary },
              ].map(({ name, val }) => (
                <button
                  key={name}
                  onClick={() => copyToClipboard(val)}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-blue-400 text-left transition-all"
                >
                  <div className="w-8 h-8 rounded-lg shadow-sm border border-black/10" style={{ backgroundColor: val }} />
                  <div>
                    <div className="text-xs font-bold text-slate-800">{name}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{val}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Categorical Charts Palette */}
      {(activeTab === 'all' || activeTab === 'charts') && (
        <section className="mt-12 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">Categorical Chart & Data-Viz Palette</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              10 distinct, contrast-tested hues optimized for multi-series graphs, bar charts, and data dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(charts).map(([key, hex]) => {
              const numKey = parseInt(key, 10);
              const darkHex = (darkCharts as Record<number, string>)[numKey] || hex;
              const role = CHART_ROLES[numKey] || `Series ${key}`;
              return (
                <div
                  key={key}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">Chart {key}</span>
                      <span className="text-[10px] font-mono text-slate-400">charts[{key}]</span>
                    </div>

                    {/* Light Swatch */}
                    <button
                      onClick={() => copyToClipboard(hex)}
                      className="w-full h-10 rounded-lg shadow-inner flex items-center justify-end px-2 mb-2 group text-left"
                      style={{ backgroundColor: hex }}
                      title={`Copy Light Hex: ${hex}`}
                    >
                      <span className="text-[10px] font-mono font-bold text-white uppercase drop-shadow-sm">
                        {hex} (Light)
                      </span>
                    </button>

                    {/* Dark Swatch */}
                    <button
                      onClick={() => copyToClipboard(darkHex)}
                      className="w-full h-8 rounded-lg shadow-inner flex items-center justify-end px-2 group text-left"
                      style={{ backgroundColor: darkHex }}
                      title={`Copy Dark Hex: ${darkHex}`}
                    >
                      <span className="text-[10px] font-mono font-bold text-white uppercase drop-shadow-sm">
                        {darkHex} (Dark)
                      </span>
                    </button>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-500 font-medium leading-tight">
                    {role}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

const meta: Meta = {
  title: 'Foundation/Colors',
  component: ColorPaletteShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ColorPaletteShowcase>;

export const Default: Story = {};
