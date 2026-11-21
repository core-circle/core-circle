'use client';

import React, { useState, useMemo, forwardRef } from 'react';
import { generateProductTheme } from '@core-circle/theme';
import { Button } from '../../atoms/button/button';
import { Badge } from '../../atoms/badge/badge';
import { TextInput } from '../../atoms/text-input/text-input';
import { Typography } from '../../atoms/typography/typography';
import { Label } from '../../atoms/label/label';
import {
  CheckIcon,
  CopyIcon,
  Download,
  CodeIcon,
  Layers,
  Palette,
  Moon,
  Sun,
  BadgeCheck,
  BookOpen,
  Rocket,
  Sparkles,
} from '@core-circle/icons';
import { themeGeneratorStyles as s } from './theme-generator.styles';
import type { ThemeGeneratorProps } from '../../../interface/generators/theme-generator/theme-generator.types';
import { cn } from '../../../utils/cn';

const BRAND_PRESETS = [
  {
    name: 'CoreCircle',
    prefix: 'core-circle',
    primaryColor: '#2563eb',
    neutralUndertone: 'slate' as const,
    radius: 'rounded' as const,
    badge: 'Monorepo',
  },
  {
    name: 'NovaPay',
    prefix: 'nova',
    primaryColor: '#6366f1',
    neutralUndertone: 'slate' as const,
    radius: 'rounded' as const,
    badge: 'Fintech',
  },
  {
    name: 'Verdant',
    prefix: 'verdant',
    primaryColor: '#059669',
    neutralUndertone: 'neutral' as const,
    radius: 'pill' as const,
    badge: 'Health',
  },
  {
    name: 'Veloce',
    prefix: 'veloce',
    primaryColor: '#e11d48',
    neutralUndertone: 'zinc' as const,
    radius: 'subtle' as const,
    badge: 'Commerce',
  },
  {
    name: 'Cyber',
    prefix: 'cyber',
    primaryColor: '#06b6d4',
    neutralUndertone: 'zinc' as const,
    radius: 'none' as const,
    badge: 'AI / SaaS',
  },
] as const;

const COLOR_SWATCH_PRESETS = [
  { name: 'Indigo', hex: '#6366f1' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Cyan', hex: '#06b6d4' },
  { name: 'Emerald', hex: '#059669' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Rose', hex: '#e11d48' },
  { name: 'Violet', hex: '#7c3aed' },
  { name: 'Fuchsia', hex: '#c026d3' },
];

const NEUTRAL_PRESETS = [
  { id: 'slate', name: 'Slate', dot: '#64748b' },
  { id: 'gray', name: 'Gray', dot: '#6b7280' },
  { id: 'zinc', name: 'Zinc', dot: '#71717a' },
  { id: 'neutral', name: 'Neutral', dot: '#737373' },
  { id: 'stone', name: 'Stone', dot: '#78716c' },
  { id: 'brand-tinted', name: 'Brand-Tinted', dot: '#6366f1' },
] as const;

const RADIUS_OPTIONS = [
  { id: 'none', label: 'Sharp', val: '0px' },
  { id: 'subtle', label: 'Subtle', val: '4px' },
  { id: 'rounded', label: 'Rounded', val: '8px' },
  { id: 'pill', label: 'Pill', val: 'Full' },
] as const;

export const ThemeGenerator = forwardRef<HTMLDivElement, ThemeGeneratorProps>(
  (
    {
      initialConfig,
      onThemeChange,
      showPreview = true,
      showCode = true,
      className,
      ...props
    },
    ref
  ) => {
    const [productName, setProductName] = useState(initialConfig?.productName || 'NovaPay');
    const [prefix, setPrefix] = useState(initialConfig?.prefix || 'nova');
    const [primaryColor, setPrimaryColor] = useState(initialConfig?.primaryColor || '#6366f1');
    const [neutralUndertone, setNeutralUndertone] = useState<
      'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'brand-tinted'
    >((initialConfig?.neutralUndertone as any) || 'slate');
    const [radius, setRadius] = useState<'none' | 'subtle' | 'rounded' | 'pill'>(
      (initialConfig?.radius as any) || 'rounded'
    );
    const [isDarkPreview, setIsDarkPreview] = useState(false);
    const [activeTab, setActiveTab] = useState<'preview' | 'css' | 'tokens' | 'guide'>('preview');
    const [copied, setCopied] = useState(false);
    const [copiedShade, setCopiedShade] = useState<string | null>(null);
    const [prefixCustomized, setPrefixCustomized] = useState(false);
    const [sampleHandle, setSampleHandle] = useState('@novapay');
    const [sampleEmail, setSampleEmail] = useState('alex@novapay.com');

    const handleProductNameChange = (val: string) => {
      const limited = val.slice(0, 20);
      setProductName(limited);
      if (!prefixCustomized) {
        const clean = limited.toLowerCase().replace(/[^\w-]/g, '').slice(0, 20);
        setPrefix(clean);
        setSampleHandle(`@${clean || 'brand'}`);
        setSampleEmail(`alex@${clean || 'brand'}.com`);
      }
    };

    const handlePrefixChange = (val: string) => {
      const clean = val.toLowerCase().replace(/[^\w-]/g, '').slice(0, 20);
      setPrefix(clean);
      setPrefixCustomized(true);
      setSampleHandle(`@${clean || 'brand'}`);
      setSampleEmail(`alex@${clean || 'brand'}.com`);
    };

    // Compute theme whenever inputs change
    const result = useMemo(() => {
      const res = generateProductTheme({
        productName: productName.trim() || 'Custom',
        prefix: prefix.trim() || undefined,
        primaryColor,
        neutralUndertone,
        radius,
      });

      if (onThemeChange) {
        onThemeChange(res);
      }
      return res;
    }, [productName, prefix, primaryColor, neutralUndertone, radius, onThemeChange]);

    const handleCopyCSS = () => {
      navigator.clipboard.writeText(result.css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const handleDownloadCSS = () => {
      const blob = new Blob([result.css], { type: 'text/css;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = result.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const handleCopyShade = (hex: string, lvl: number) => {
      navigator.clipboard.writeText(hex);
      setCopiedShade(`${lvl}`);
      setTimeout(() => setCopiedShade(null), 1500);
    };

    // Scoped CSS variable block for the preview stage
    const activeThemeTokens = isDarkPreview && result.tokens.darkTheme
      ? result.tokens.darkTheme
      : result.tokens.theme;

    const previewScopedStyles = useMemo(() => {
      const t = activeThemeTokens;
      return {
        '--color-core-circle-primary': t.primary,
        '--color-core-circle-primary-hover': t.primaryHover,
        '--color-core-circle-primary-active': t.primaryActive,
        '--color-core-circle-bg-page': t.bg.page,
        '--color-core-circle-bg-surface': t.bg.surface,
        '--color-core-circle-bg-muted': t.bg.muted,
        '--color-core-circle-text-main': t.text.main,
        '--color-core-circle-text-muted': t.text.muted,
        '--color-core-circle-text-subtle': t.text.subtle,
        '--color-core-circle-border-main': t.border.main,
        '--color-core-circle-border-strong': isDarkPreview ? '#475569' : '#cbd5e1',
        '--radius-core-circle-md': result.tokens.radius.md,
        '--radius-core-circle-lg': result.tokens.radius.lg,
        '--radius-core-circle-xl': result.tokens.radius.xl,
      } as React.CSSProperties;
    }, [activeThemeTokens, result.tokens.radius, isDarkPreview]);

    const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

    return (
      <div ref={ref} className={cn(s.container(), className)} {...props}>
        {/* Studio Page Header */}
        <div className={s.header()}>
          <div className={s.headerText()}>
            <Typography variant="h1" className={s.title()}>
              <span className="p-2 rounded-core-circle-xl bg-core-circle-primary/10 text-core-circle-primary inline-flex items-center justify-center">
                <Palette className="w-6 h-6" />
              </span>
              Theme Studio
              <Badge variant="primary" size="sm" className="ml-2 font-mono text-[10px] uppercase">
                Tailwind v4
              </Badge>
            </Typography>
            <Typography variant="p" className={cn(s.subtitle(), 'w-full max-w-none')}>
              Configure brand colors, neutral undertones, and curvature to generate a tailored{' '}
              <span className="font-mono text-core-circle-primary font-semibold">{result.fileName}</span> stylesheet
              ready for production.
            </Typography>
          </div>
        </div>

        {/* 2-Column Responsive Workspace */}
        <div className={s.grid()}>
          {/* Left Column: Configuration Controls */}
          <div className={s.studioPanel()}>
            {/* Section 1: Brand & Namespace */}
            <div className={s.studioSection()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>Brand Identity</span>
                <span className="text-[11px] text-slate-400 font-mono">Namespace</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className={s.inputGroup()}>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="brand-name" className="text-xs font-medium text-slate-700">
                      Product Name
                    </Label>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {productName.length}/20
                    </span>
                  </div>
                  <TextInput
                    id="brand-name"
                    value={productName}
                    onChange={(e) => handleProductNameChange(e.target.value)}
                    placeholder="e.g. Acme"
                    maxLength={20}
                  />
                </div>
                <div className={s.inputGroup()}>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="brand-prefix" className="text-xs font-medium text-slate-700">
                      CSS Prefix
                    </Label>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {prefix.length}/20
                    </span>
                  </div>
                  <TextInput
                    id="brand-prefix"
                    value={prefix}
                    onChange={(e) => handlePrefixChange(e.target.value)}
                    placeholder="e.g. acme"
                    className="font-mono text-xs"
                    maxLength={20}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Primary Brand Color */}
            <div className={s.studioSection()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>Primary Color</span>
                <span className="text-[11px] text-slate-400 font-mono">600 Base</span>
              </div>
              <div className={s.inputGroup()}>
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="primary-color-native"
                    style={{ backgroundColor: primaryColor }}
                    className="w-10 h-10 rounded-core-circle-lg border border-slate-300/80 shadow-xs cursor-pointer flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                    title="Choose custom color"
                  >
                    <input
                      id="primary-color-native"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="opacity-0 w-0 h-0 absolute cursor-pointer"
                    />
                  </label>
                  <TextInput
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="font-mono text-xs uppercase"
                    placeholder="#6366f1"
                  />
                </div>

                {/* Harmonic starter chips */}
                <div className={s.swatchList()}>
                  {COLOR_SWATCH_PRESETS.map((swatch) => (
                    <button
                      key={swatch.name}
                      type="button"
                      style={{ backgroundColor: swatch.hex }}
                      onClick={() => setPrimaryColor(swatch.hex)}
                      className={s.swatchItem({
                        active: primaryColor.toLowerCase() === swatch.hex.toLowerCase(),
                      })}
                      title={swatch.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Neutral Undertone */}
            <div className={s.studioSection()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>Neutral Scale</span>
                <span className="text-[11px] text-slate-400 capitalize">{neutralUndertone}</span>
              </div>
              <div className={s.chipGrid()}>
                {NEUTRAL_PRESETS.map((tone) => (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => setNeutralUndertone(tone.id)}
                    className={s.chipBtn({ active: neutralUndertone === tone.id })}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: tone.id === 'brand-tinted' ? primaryColor : tone.dot }}
                    />
                    <span className="truncate">{tone.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Section 4: Corner Radius Curve */}
            <div className={s.studioSection()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>Border Radius</span>
                <span className="text-[11px] text-slate-400">
                  {RADIUS_OPTIONS.find((r) => r.id === radius)?.val}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {RADIUS_OPTIONS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRadius(r.id)}
                    className={s.chipBtn({ active: radius === r.id })}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: Copy CSS & Download */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="md"
                startIcon={<Download className="w-4 h-4 shrink-0" />}
                onClick={handleDownloadCSS}
                className="w-full justify-center"
              >
                Download {result.fileName}
              </Button>
              <Button
                variant="outline"
                size="md"
                startIcon={
                  copied ? (
                    <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <CopyIcon className="w-4 h-4 shrink-0" />
                  )
                }
                onClick={handleCopyCSS}
                className="w-full justify-center"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy CSS'}
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Studio & Code Inspector */}
          <div className={s.canvasPanel()}>
            {/* Top Toolbar */}
            <div className={s.toolbar()}>
              <div className={s.tabGroup()}>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={s.tabBtn({ active: activeTab === 'preview' })}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Live Preview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('css')}
                  className={s.tabBtn({ active: activeTab === 'css' })}
                >
                  <CodeIcon className="w-3.5 h-3.5" />
                  Tailwind v4 CSS
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tokens')}
                  className={s.tabBtn({ active: activeTab === 'tokens' })}
                >
                  <Palette className="w-3.5 h-3.5" />
                  Tokens Object
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('guide')}
                  className={s.tabBtn({ active: activeTab === 'guide' })}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Integration Guide
                </button>
              </div>

              {activeTab === 'preview' && (
                <button
                  type="button"
                  onClick={() => setIsDarkPreview(!isDarkPreview)}
                  className={s.modeBtn()}
                >
                  {isDarkPreview ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>Light Canvas</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-slate-700" />
                      <span>Dark Canvas</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* TAB 1: LIVE COMPONENT PREVIEW */}
            {activeTab === 'preview' && (
              <div
                style={previewScopedStyles}
                className={s.stageWrapper({ dark: isDarkPreview })}
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-4 border-b border-inherit opacity-90">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: activeThemeTokens.primary }}
                    />
                    <span className="text-xs font-mono font-medium">
                      {productName} / {isDarkPreview ? 'Dark Surface' : 'Light Surface'}
                    </span>
                  </div>
                  <Badge variant="primary" size="sm">
                    Live Preview
                  </Badge>
                </div>

                {/* Realistic Application Card */}
                <div
                  style={{
                    backgroundColor: activeThemeTokens.bg.surface,
                    borderColor: activeThemeTokens.border.main,
                    borderRadius: result.tokens.radius.xl,
                    color: activeThemeTokens.text.main,
                  }}
                  className="p-7 my-6 border shadow-sm transition-all flex flex-col gap-6"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundColor: activeThemeTokens.primary,
                          color: '#ffffff',
                          borderRadius: result.tokens.radius.lg,
                        }}
                        className="w-10 h-10 flex items-center justify-center font-bold text-base shadow-xs"
                      >
                        {productName.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-base font-bold flex items-center gap-1.5 leading-tight">
                          {productName} Workspace
                          <BadgeCheck className="w-4 h-4 text-emerald-600 inline" />
                        </div>
                        <div
                          style={{ color: activeThemeTokens.text.muted }}
                          className="text-xs mt-0.5"
                        >
                          Tailwind v4 tokens applied across components
                        </div>
                      </div>
                    </div>
                    <Badge variant="success" size="sm">
                      Active Brand
                    </Badge>
                  </div>

                  {/* Form Sample */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        style={{ color: isDarkPreview ? '#cbd5e1' : '#334155' }}
                        className="text-xs font-semibold"
                      >
                        Workspace Handle
                      </label>
                      <TextInput
                        value={sampleHandle}
                        onChange={(e) => setSampleHandle(e.target.value)}
                        wrapperClassName={cn(
                          isDarkPreview
                            ? '!bg-slate-800/90 !border-slate-700 text-slate-100'
                            : '!bg-slate-50/80 !border-slate-200 text-slate-900'
                        )}
                        className={cn(
                          'text-xs font-mono',
                          isDarkPreview
                            ? '[&_input]:!text-slate-100 [&_input]:!placeholder-slate-500'
                            : '[&_input]:!text-slate-900 [&_input]:!placeholder-slate-400'
                        )}
                        placeholder={`@${prefix || 'brand'}`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        style={{ color: isDarkPreview ? '#cbd5e1' : '#334155' }}
                        className="text-xs font-semibold"
                      >
                        Owner Email
                      </label>
                      <TextInput
                        value={sampleEmail}
                        onChange={(e) => setSampleEmail(e.target.value)}
                        wrapperClassName={cn(
                          isDarkPreview
                            ? '!bg-slate-800/90 !border-slate-700 text-slate-100'
                            : '!bg-slate-50/80 !border-slate-200 text-slate-900'
                        )}
                        className={cn(
                          'text-xs',
                          isDarkPreview
                            ? '[&_input]:!text-slate-100 [&_input]:!placeholder-slate-500'
                            : '[&_input]:!text-slate-900 [&_input]:!placeholder-slate-400'
                        )}
                        placeholder={`alex@${prefix || 'brand'}.com`}
                      />
                    </div>
                  </div>

                  {/* Actions & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-inherit">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Button variant="primary" size="sm">
                        Save Changes
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{
                          color: isDarkPreview ? '#f1f5f9' : '#0f172a',
                          borderColor: isDarkPreview ? '#475569' : '#cbd5e1',
                        }}
                      >
                        Cancel
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Badge variant="secondary" size="sm">
                        Secondary
                      </Badge>
                      <Badge variant="warning" size="sm">
                        Pending Review
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* 11-Shade Palette Ramp */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span
                      style={{ color: activeThemeTokens.text.muted }}
                      className="font-mono text-[11px] uppercase tracking-wider"
                    >
                      Primary 11-Shade Color Ramp
                    </span>
                    <span
                      style={{ color: activeThemeTokens.text.subtle }}
                      className="text-[11px]"
                    >
                      Click swatch to copy hex
                    </span>
                  </div>
                  <div
                    style={{ borderRadius: result.tokens.radius.lg }}
                    className="grid grid-cols-11 h-12 overflow-hidden border border-inherit shadow-xs"
                  >
                    {levels.map((lvl) => {
                      const hex = result.tokens.colors.primary[lvl];
                      const isDarkSwatch = lvl >= 500;
                      return (
                        <button
                          key={lvl}
                          type="button"
                          style={{ backgroundColor: hex }}
                          onClick={() => handleCopyShade(hex, lvl)}
                          className="h-full flex flex-col items-center justify-center text-[10px] font-mono font-medium transition-transform hover:scale-105 relative cursor-pointer"
                          title={`${lvl}: ${hex}`}
                        >
                          <span
                            className={cn(
                              'font-bold',
                              isDarkSwatch ? 'text-white' : 'text-slate-900'
                            )}
                          >
                            {copiedShade === `${lvl}` ? '✓' : lvl}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: GENERATED CSS */}
            {activeTab === 'css' && (
              <div className={s.codeBox()}>
                <div className={s.codeHeader()}>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CodeIcon className="w-4 h-4 text-core-circle-primary" />
                    <span className="font-semibold text-xs text-white">{result.fileName}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      Tailwind CSS v4
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCSS}
                    className="h-7 text-xs bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                  >
                    {copied ? 'Copied!' : 'Copy Code'}
                  </Button>
                </div>
                <pre>
                  <code>{result.css}</code>
                </pre>
              </div>
            )}

            {/* TAB 3: JS TOKENS JSON */}
            {activeTab === 'tokens' && (
              <div className={s.codeBox()}>
                <div className={s.codeHeader()}>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Palette className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-xs text-white">tokens.json</span>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      JSON
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(JSON.stringify(result.tokens, null, 2));
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="h-7 text-xs bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                  >
                    {copied ? 'Copied!' : 'Copy JSON'}
                  </Button>
                </div>
                <pre>
                  <code>{JSON.stringify(result.tokens, null, 2)}</code>
                </pre>
              </div>
            )}

            {/* TAB 4: INTEGRATION GUIDE */}
            {activeTab === 'guide' && (
              <div className="p-6 rounded-core-circle-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col gap-6">
                {/* 1-Click Starter Presets */}
                <div className="flex flex-col gap-3 pb-5 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      1-Click Brand Presets
                    </span>
                    <span className="text-[11px] text-slate-400">Select any brand to load sample tokens</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {BRAND_PRESETS.map((preset) => {
                      const isActive = productName === preset.name && prefix === preset.prefix;
                      return (
                        <button
                          key={preset.name}
                          type="button"
                          onClick={() => {
                            setProductName(preset.name);
                            setPrefix(preset.prefix);
                            setPrefixCustomized(true);
                            setPrimaryColor(preset.primaryColor);
                            setNeutralUndertone(preset.neutralUndertone);
                            setRadius(preset.radius);
                            setSampleHandle(`@${preset.prefix}`);
                            setSampleEmail(`alex@${preset.prefix}.com`);
                          }}
                          className={cn(
                            'flex flex-col items-start p-2.5 rounded-core-circle-lg border text-left transition-all cursor-pointer',
                            isActive
                              ? 'border-core-circle-primary bg-core-circle-primary/5 ring-1 ring-core-circle-primary/20'
                              : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                          )}
                        >
                          <div className="flex items-center gap-1.5 w-full">
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: preset.primaryColor }}
                            />
                            <span className="text-xs font-semibold text-slate-900 truncate">
                              {preset.name}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 mt-0.5 truncate">
                            {preset.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Typography variant="h3" className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-core-circle-primary" />
                    Getting Started with {productName} Design System
                  </Typography>
                  <Typography variant="p" className="text-xs text-slate-500 mt-1">
                    Follow these 3 simple steps to integrate your generated Tailwind CSS v4 theme into any application.
                  </Typography>
                </div>

                {/* Step 1 */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-core-circle-primary text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Save your stylesheet in your project
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pl-7">
                    Download or copy your custom stylesheet and save it inside your styles directory:
                  </p>
                  <div className="ml-7 p-3 bg-slate-900 text-slate-200 rounded-core-circle-lg font-mono text-xs overflow-x-auto">
                    <code>src/styles/{result.fileName}</code>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-core-circle-primary text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Import in your root CSS / Tailwind v4 entrypoint
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pl-7">
                    In your <code>globals.css</code> or <code>main.css</code>, import Tailwind v4 followed by your theme:
                  </p>
                  <div className="ml-7 p-3 bg-slate-900 text-slate-200 rounded-core-circle-lg font-mono text-xs overflow-x-auto">
                    <pre><code>{`@import "tailwindcss";\n@import "./${result.fileName}";`}</code></pre>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-core-circle-primary text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Build components using branded utility classes
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pl-7">
                    Tailwind v4 discovers your tokens and generates first-class utility classes with your prefix <code>{prefix}</code>:
                  </p>
                  <div className="ml-7 p-3 bg-slate-900 text-slate-200 rounded-core-circle-lg font-mono text-xs overflow-x-auto">
                    <pre><code>{`<div className="bg-${prefix}-bg-surface border border-${prefix}-border-main rounded-${prefix}-xl p-6 shadow-${prefix}-subtle">
  <h2 className="font-${prefix}-heading text-${prefix}-text-main text-lg font-bold">
    ${productName} Dashboard
  </h2>
  <p className="text-${prefix}-text-muted text-xs mt-1">
    Tailwind v4 tokens applied cleanly
  </p>
  <button className="bg-${prefix}-primary hover:bg-${prefix}-primary-hover text-white rounded-${prefix}-lg px-4 py-2 mt-4 text-xs font-medium transition-colors">
    Get Started
  </button>
</div>`}</code></pre>
                  </div>
                </div>

                {/* Optional CoreCircle UI Library mapping */}
                <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">
                      Using with @core-circle/ui React Library (Optional)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    If you use prebuilt React components from <code>@core-circle/ui</code> in your app, add these aliases in your CSS so they automatically inherit your brand:
                  </p>
                  <div className="p-3 bg-slate-900 text-slate-200 rounded-core-circle-lg font-mono text-xs overflow-x-auto">
                    <pre><code>{`@theme {
  --color-core-circle-primary: var(--color-${prefix}-primary);
  --color-core-circle-bg-surface: var(--color-${prefix}-bg-surface);
  --color-core-circle-text-main: var(--color-${prefix}-text-main);
}`}</code></pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ThemeGenerator.displayName = 'ThemeGenerator';
