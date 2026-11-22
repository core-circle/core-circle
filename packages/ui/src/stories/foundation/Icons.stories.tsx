import React, { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@core-circle/icons';

type IconComponentType = React.ComponentType<{
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
}>;

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  'Arrows & Nav': ['arrow', 'chevron', 'caret', 'nav', 'compass', 'corner', 'external', 'move', 'undo', 'redo'],
  'Actions': ['check', 'x', 'plus', 'minus', 'edit', 'trash', 'copy', 'download', 'upload', 'save', 'refresh', 'search', 'filter'],
  'Interface': ['home', 'settings', 'user', 'menu', 'grid', 'list', 'sliders', 'bell', 'eye', 'info', 'alert', 'help'],
  'Communication': ['mail', 'message', 'phone', 'send', 'share', 'at', 'inbox', 'chat', 'rss'],
  'Media': ['play', 'pause', 'video', 'music', 'camera', 'mic', 'volume', 'image', 'film', 'speaker'],
  'Commerce & Files': ['shopping', 'cart', 'bag', 'credit', 'wallet', 'tag', 'file', 'folder', 'archive', 'box'],
  'System & Tech': ['database', 'cloud', 'server', 'cpu', 'terminal', 'code', 'wifi', 'battery', 'shield', 'lock', 'key'],
};

export const IconGalleryShowcase = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [size, setSize] = useState<number>(24);
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const [colorMode, setColorMode] = useState<string>('default');
  const [copyFormat, setCopyFormat] = useState<'jsx' | 'import'>('jsx');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Extract all valid React icon components
  const allIcons = useMemo(() => {
    return Object.entries(Icons).filter(([name, comp]) => {
      return typeof comp === 'function' || (typeof comp === 'object' && comp !== null);
    }) as [string, IconComponentType][];
  }, []);

  // Filter icons based on search and selected category
  const filteredIcons = useMemo(() => {
    return allIcons.filter(([name]) => {
      // Category filter
      if (selectedCategory !== 'All') {
        const keywords = CATEGORY_KEYWORDS[selectedCategory] || [];
        const matchesCategory = keywords.some((kw) => name.toLowerCase().includes(kw));
        if (!matchesCategory) return false;
      }

      // Search query filter
      if (!search.trim()) return true;
      return name.toLowerCase().includes(search.toLowerCase().trim());
    });
  }, [allIcons, selectedCategory, search]);

  const copyToClipboard = (iconName: string) => {
    const textToCopy =
      copyFormat === 'jsx'
        ? `<${iconName} size={${size}} />`
        : `import { ${iconName} } from '@core-circle/icons';`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 1800);
  };

  const getResolvedColor = () => {
    switch (colorMode) {
      case 'primary':
        return '#2563eb'; // blue-600
      case 'emerald':
        return '#059669'; // emerald-600
      case 'rose':
        return '#e11d48'; // rose-600
      case 'amber':
        return '#d97706'; // amber-600
      case 'purple':
        return '#7c3aed'; // purple-600
      default:
        return 'currentColor';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Core Circle Icon System
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-700">
                {allIcons.length} SVG Icons Available
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Clean, tree-shakeable SVG icon primitives from `@core-circle/icons`. Click any card to copy code to clipboard.
            </p>
          </div>

          {copiedIcon && (
            <div className="self-start md:self-auto px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg shadow-md flex items-center gap-2">
              <span>✓</span> Copied <code className="bg-emerald-700 px-1 py-0.5 rounded font-mono">{copiedIcon}</code>
            </div>
          )}
        </div>

        {/* Toolbar & Controls */}
        <div className="mt-6 flex flex-col gap-4">
          {/* Row 1: Search & Copy Format Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder={`Search across all ${allIcons.length} icons...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Copy Format Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500">Copy as:</span>
              <div className="flex bg-slate-200/80 p-0.5 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setCopyFormat('jsx')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    copyFormat === 'jsx' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  &lt;JSX /&gt;
                </button>
                <button
                  onClick={() => setCopyFormat('import')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    copyFormat === 'import' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  import &#123;&#125;
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Live Property Controls (Size, Stroke, Color) */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-white border border-slate-200/80 rounded-xl shadow-sm text-xs">
            {/* Size Controls */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600">Size:</span>
              {[16, 20, 24, 32, 40].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-2.5 py-1 rounded-md font-mono ${
                    size === s ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {s}px
                </button>
              ))}
            </div>

            {/* Stroke Width Controls */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600">Stroke:</span>
              {[1.5, 2, 2.5].map((sw) => (
                <button
                  key={sw}
                  onClick={() => setStrokeWidth(sw)}
                  className={`px-2.5 py-1 rounded-md font-mono ${
                    strokeWidth === sw ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {sw}
                </button>
              ))}
            </div>

            {/* Color Preset Swatches */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600">Color:</span>
              {[
                { key: 'default', label: 'Default', bg: 'bg-slate-800' },
                { key: 'primary', label: 'Blue', bg: 'bg-blue-600' },
                { key: 'emerald', label: 'Green', bg: 'bg-emerald-600' },
                { key: 'rose', label: 'Red', bg: 'bg-rose-600' },
                { key: 'amber', label: 'Amber', bg: 'bg-amber-600' },
                { key: 'purple', label: 'Purple', bg: 'bg-purple-600' },
              ].map(({ key, label, bg }) => (
                <button
                  key={key}
                  onClick={() => setColorMode(key)}
                  className={`w-6 h-6 rounded-full ${bg} transition-all ${
                    colorMode === key ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : 'opacity-80 hover:opacity-100'
                  }`}
                  title={label}
                />
              ))}
            </div>
          </div>

          {/* Row 3: Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['All', ...Object.keys(CATEGORY_KEYWORDS)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-200/60 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat} {cat === 'All' && `(${allIcons.length})`}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Icon Count Counter */}
      <div className="mb-4 text-xs font-medium text-slate-500 flex items-center justify-between">
        <span>
          Showing <strong className="text-slate-800">{filteredIcons.length}</strong> of {allIcons.length} icons
        </span>
        {search && <span>Filtered by "{search}"</span>}
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredIcons.map(([name, IconComponent]) => {
          const isCopied = copiedIcon === name;
          return (
            <button
              key={name}
              onClick={() => copyToClipboard(name)}
              className={`group flex flex-col items-center justify-center p-5 bg-white border rounded-2xl transition-all text-center relative focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isCopied
                  ? 'border-emerald-500 shadow-md bg-emerald-50/20'
                  : 'border-slate-200/80 hover:border-blue-500 hover:shadow-lg'
              }`}
            >
              {/* Copied Badge Overlay */}
              {isCopied && (
                <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-emerald-600 text-white text-[9px] font-bold rounded">
                  Copied
                </span>
              )}

              {/* Icon Container */}
              <div
                className="mb-3 flex items-center justify-center transition-transform group-hover:scale-115 text-slate-800"
                style={{ color: getResolvedColor() }}
              >
                <IconComponent size={size} strokeWidth={strokeWidth} />
              </div>

              {/* Icon Name */}
              <span className="text-[11px] font-medium text-slate-600 group-hover:text-blue-600 transition-colors break-all leading-tight">
                {name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredIcons.length === 0 && (
        <div className="py-16 text-center bg-white rounded-2xl border border-slate-200/80 mt-4">
          <div className="text-4xl mb-3"><span role="img" aria-label="Search">🔍</span></div>
          <h3 className="text-base font-bold text-slate-800">No icons found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            No icons matched "{search}". Try searching for terms like "arrow", "check", "user", "file", or "mail".
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('All');
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

const meta: Meta = {
  title: 'Foundation/Icons',
  component: IconGalleryShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof IconGalleryShowcase>;

export const Default: Story = {};
