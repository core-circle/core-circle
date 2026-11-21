'use client';

import { useState, useMemo, forwardRef } from 'react';
import { Button } from '../../atoms/button/button';
import { Badge } from '../../atoms/badge/badge';
import { TextInput } from '../../atoms/text-input/text-input';
import { Typography } from '../../atoms/typography/typography';
import { Label } from '../../atoms/label/label';
import {
  Download,
  Folder,
  File,
  DocumentText,
  Rocket,
  Sparkles,
  CheckIcon,
  Terminal,
} from '@core-circle/icons';
import { projectScaffolderStyles as s } from './project-scaffolder.styles';
import {
  generateProjectFiles,
  generateZipBlob,
  downloadBlob,
} from './scaffolder-engine';
import type {
  ProjectScaffolderProps,
  ProjectScaffolderConfig,
  ScaffolderFramework,
  PackageManager,
} from '../../../interface/generators/project-scaffolder/project-scaffolder.types';
import { cn } from '../../../utils/cn';

const COLOR_SWATCH_PRESETS = [
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Indigo', hex: '#6366f1' },
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
  { id: 'brand-tinted', name: 'Brand-Tinted', dot: '#2563eb' },
] as const;

const RADIUS_OPTIONS = [
  { id: 'none', label: 'Sharp', val: '0px' },
  { id: 'subtle', label: 'Subtle', val: '4px' },
  { id: 'rounded', label: 'Rounded', val: '8px' },
  { id: 'pill', label: 'Pill', val: 'Full' },
] as const;

const PACKAGE_MANAGERS: PackageManager[] = ['npm', 'pnpm', 'yarn', 'bun'];

export const ProjectScaffolder = forwardRef<HTMLDivElement, ProjectScaffolderProps>(
  ({ initialConfig, onDownload, className, ...props }, ref) => {
    const [projectName, setProjectName] = useState(initialConfig?.projectName || 'my-app');
    const [framework, setFramework] = useState<ScaffolderFramework>(initialConfig?.framework || 'nextjs');
    const [packageManager, setPackageManager] = useState<PackageManager>(initialConfig?.packageManager || 'npm');
    const [brandName, setBrandName] = useState(initialConfig?.brandName || 'Acme');
    const [cssPrefix, setCssPrefix] = useState(initialConfig?.cssPrefix || 'acme');
    const [primaryColor, setPrimaryColor] = useState(initialConfig?.primaryColor || '#2563eb');
    const [neutralUndertone, setNeutralUndertone] = useState(initialConfig?.neutralUndertone || 'slate');
    const [radius, setRadius] = useState(initialConfig?.radius || 'rounded');
    const [selectedFile, setSelectedFile] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'explorer' | 'terminal' | 'guide'>('explorer');
    const [isDownloading, setIsDownloading] = useState(false);
    const [copiedCode, setCopiedCode] = useState(false);
    const [prefixCustomized, setPrefixCustomized] = useState(false);

    const handleProjectNameChange = (val: string) => {
      const limited = val.slice(0, 20);
      setProjectName(limited);
      if (!prefixCustomized) {
        const clean = limited.toLowerCase().replace(/[^\w-]/g, '').slice(0, 20);
        setCssPrefix(clean || 'brand');
        setBrandName(clean ? clean.charAt(0).toUpperCase() + clean.slice(1) : 'My Product');
      }
    };

    const handleBrandNameChange = (val: string) => {
      const limited = val.slice(0, 20);
      setBrandName(limited);
      if (!prefixCustomized) {
        const clean = limited.toLowerCase().replace(/[^\w-]/g, '').slice(0, 20);
        setCssPrefix(clean || 'brand');
      }
    };

    const handlePrefixChange = (val: string) => {
      const clean = val.toLowerCase().replace(/[^\w-]/g, '').slice(0, 20);
      setCssPrefix(clean);
      setPrefixCustomized(true);
    };

    // Current full config
    const currentConfig: ProjectScaffolderConfig = useMemo(
      () => ({
        projectName: projectName.trim() || 'my-app',
        framework,
        template: 'dashboard',
        packageManager,
        brandName: brandName.trim() || 'My Product',
        cssPrefix: cssPrefix.trim() || 'brand',
        primaryColor,
        neutralUndertone,
        radius,
      }),
      [projectName, framework, packageManager, brandName, cssPrefix, primaryColor, neutralUndertone, radius]
    );

    // Compute generated file tree in memory
    const generatedFiles = useMemo(() => {
      return generateProjectFiles(currentConfig);
    }, [currentConfig]);

    const fileList = useMemo(() => Object.keys(generatedFiles), [generatedFiles]);

    // Ensure selectedFile points to a valid file
    const activeFileKey = selectedFile && generatedFiles[selectedFile] ? selectedFile : fileList[0] || '';
    const activeFileContent = generatedFiles[activeFileKey] || '';

    // Handle ZIP generation and download
    const handleDownload = () => {
      setIsDownloading(true);
      try {
        const zipBlob = generateZipBlob(generatedFiles);
        const fileName = `${currentConfig.projectName}.zip`;
        downloadBlob(zipBlob, fileName);
        if (onDownload) {
          onDownload(currentConfig);
        }
      } catch (err) {
        console.error('Failed to generate zip:', err);
      } finally {
        setTimeout(() => setIsDownloading(false), 800);
      }
    };

    const handleCopyActiveCode = () => {
      if (!activeFileContent) return;
      navigator.clipboard.writeText(activeFileContent);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    };

    return (
      <div ref={ref} className={cn(s.container(), className)} {...props}>
        {/* Scaffolder Page Header */}
        <div className={s.header()}>
          <div className={s.headerText()}>
            <Typography variant="h1" className={s.title()}>
              <span className="p-2 rounded-core-circle-xl bg-core-circle-primary/10 text-core-circle-primary inline-flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </span>
              Project Scaffolder
              <Badge variant="primary" size="sm" className="ml-2 font-mono text-[10px] uppercase">
                ZIP Boilerplate
              </Badge>
            </Typography>
            <Typography variant="p" className={s.subtitle()}>
              Configure your stack, select framework and theme tokens, and download a complete production-ready
              boilerplate archive with CoreCircle and Tailwind CSS v4 preconfigured.
            </Typography>
          </div>
        </div>

        {/* 2-Column Responsive Workspace */}
        <div className={s.grid()}>
          {/* Left Column: Configuration Controls */}
          <div className={s.panel()}>
            {/* Section 1: Framework Choice */}
            <div className={s.section()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>1. Framework Target</span>
                <span className="text-[11px] text-slate-400 font-mono">React 19 / Tailwind v4</span>
              </div>
              <div className={s.optionGrid()}>
                <button
                  type="button"
                  onClick={() => setFramework('nextjs')}
                  className={s.optionCard({ active: framework === 'nextjs' })}
                >
                  <div className="w-8 h-8 rounded-core-circle-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    N
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold leading-tight">Next.js 15</span>
                    <span className="text-[11px] text-slate-400 mt-0.5">App Router</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFramework('react-vite')}
                  className={s.optionCard({ active: framework === 'react-vite' })}
                >
                  <div className="w-8 h-8 rounded-core-circle-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold leading-tight">React + Vite</span>
                    <span className="text-[11px] text-slate-400 mt-0.5">Vite 6 SPA</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Section 2: Project Naming */}
            <div className={s.section()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>2. Project & Brand</span>
                <span className="text-[11px] text-slate-400 font-mono">Identifiers</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className={s.inputGroup()}>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="scaffold-project-name" className="text-xs font-medium text-slate-700">
                      Project Folder
                    </Label>
                    <span className="text-[10px] text-slate-400 font-mono">{projectName.length}/20</span>
                  </div>
                  <TextInput
                    id="scaffold-project-name"
                    value={projectName}
                    onChange={(e) => handleProjectNameChange(e.target.value)}
                    placeholder="my-app"
                    maxLength={20}
                  />
                </div>

                <div className={s.inputGroup()}>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="scaffold-css-prefix" className="text-xs font-medium text-slate-700">
                      CSS Prefix
                    </Label>
                    <span className="text-[10px] text-slate-400 font-mono">{cssPrefix.length}/20</span>
                  </div>
                  <TextInput
                    id="scaffold-css-prefix"
                    value={cssPrefix}
                    onChange={(e) => handlePrefixChange(e.target.value)}
                    placeholder="acme"
                    className="font-mono text-xs"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className={s.inputGroup()}>
                <div className="flex items-center justify-between">
                  <Label htmlFor="scaffold-brand-name" className="text-xs font-medium text-slate-700">
                    Brand Display Name
                  </Label>
                  <span className="text-[10px] text-slate-400 font-mono">{brandName.length}/20</span>
                </div>
                <TextInput
                  id="scaffold-brand-name"
                  value={brandName}
                  onChange={(e) => handleBrandNameChange(e.target.value)}
                  placeholder="e.g. Acme Studio"
                  maxLength={20}
                />
              </div>
            </div>

            {/* Section 3: Package Manager */}
            <div className={s.section()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>3. Package Manager</span>
                <span className="text-[11px] text-slate-400 font-mono">{packageManager}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {PACKAGE_MANAGERS.map((pm) => (
                  <button
                    key={pm}
                    type="button"
                    onClick={() => setPackageManager(pm)}
                    className={s.chipBtn({ active: packageManager === pm })}
                  >
                    {pm}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 4: Brand Theme & Styling */}
            <div className={s.section()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>4. Brand Color</span>
                <span className="text-[11px] text-slate-400 font-mono">{primaryColor}</span>
              </div>
              <div className={s.inputGroup()}>
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="scaffold-color-picker"
                    style={{ backgroundColor: primaryColor }}
                    className="w-10 h-10 rounded-core-circle-lg border border-slate-300 shadow-xs cursor-pointer shrink-0 hover:scale-105 transition-transform"
                    title="Choose custom color"
                  >
                    <input
                      id="scaffold-color-picker"
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
                    placeholder="#2563eb"
                  />
                </div>

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

            {/* Section 5: Neutral Scale & Radius */}
            <div className={s.section()}>
              <div className={s.sectionHeader()}>
                <span className={s.sectionTitle()}>5. Surfaces & Radius</span>
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

              <div className="grid grid-cols-4 gap-2 pt-2">
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

            {/* Action Download Button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                startIcon={<Download className="w-4 h-4 shrink-0" />}
                onClick={handleDownload}
                className="w-full justify-center"
              >
                {isDownloading ? 'Building ZIP Archive...' : `Download ${currentConfig.projectName}.zip`}
              </Button>
              <span className="text-[11px] text-center text-slate-400">
                100% In-Browser Generator • Includes {fileList.length} preconfigured files
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Live File Explorer & Code Inspector */}
          <div className={s.previewPanel()}>
            {/* Top Toolbar Tabs */}
            <div className="flex items-center justify-between pb-2 border-b border-core-circle-border-main">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-core-circle-xl border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setActiveTab('explorer')}
                  className={cn(
                    'px-3.5 py-1.5 text-xs font-medium rounded-core-circle-lg transition-all flex items-center gap-2 cursor-pointer',
                    activeTab === 'explorer'
                      ? 'bg-white text-slate-900 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  <Folder className="w-3.5 h-3.5 text-core-circle-primary" />
                  Generated Files ({fileList.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('terminal')}
                  className={cn(
                    'px-3.5 py-1.5 text-xs font-medium rounded-core-circle-lg transition-all flex items-center gap-2 cursor-pointer',
                    activeTab === 'terminal'
                      ? 'bg-white text-slate-900 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                  Terminal Setup
                </button>
              </div>

              <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                {framework === 'nextjs' ? 'Next.js 15' : 'Vite 6 SPA'}
              </Badge>
            </div>

            {/* TAB 1: FILE EXPLORER & CODE VIEWER */}
            {activeTab === 'explorer' && (
              <div className={s.fileTreeWrapper()}>
                {/* Header with Active File & Copy Button */}
                <div className={s.fileTreeHeader()}>
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                    <DocumentText className="w-4 h-4 text-core-circle-primary shrink-0" />
                    <span className="font-semibold text-white truncate max-w-[320px]">
                      {activeFileKey}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyActiveCode}
                    className="h-7 text-xs bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                  >
                    {copiedCode ? 'Copied!' : 'Copy File'}
                  </Button>
                </div>

                {/* File List Selector */}
                <div className={s.fileList()}>
                  {fileList.map((path) => {
                    const isSelected = path === activeFileKey;
                    return (
                      <button
                        key={path}
                        type="button"
                        onClick={() => setSelectedFile(path)}
                        className={s.fileItem({ active: isSelected })}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <File className="w-3.5 h-3.5 shrink-0 opacity-70" />
                          <span className="truncate">{path}</span>
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase font-mono shrink-0 ml-2">
                          {path.split('.').pop()}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Code Box */}
                <pre className={s.codeView()}>
                  <code>{activeFileContent}</code>
                </pre>
              </div>
            )}

            {/* TAB 2: TERMINAL QUICKSTART */}
            {activeTab === 'terminal' && (
              <div className="p-7 rounded-core-circle-2xl bg-slate-950 text-slate-100 border border-slate-800 shadow-lg flex flex-col gap-6">
                <div>
                  <Typography variant="h3" className="text-base font-bold text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                    Running your downloaded project
                  </Typography>
                  <Typography variant="p" className="text-xs text-slate-400 mt-1">
                    Extract your downloaded archive and run these commands to start development immediately:
                  </Typography>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-slate-300">1. Unzip the project folder</span>
                    <div className="p-3 rounded-core-circle-lg bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300">
                      <code>unzip {currentConfig.projectName}.zip && cd {currentConfig.projectName}</code>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-slate-300">2. Install dependencies</span>
                    <div className="p-3 rounded-core-circle-lg bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300">
                      <code>{packageManager === 'yarn' ? 'yarn' : `${packageManager} install`}</code>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-slate-300">3. Launch local dev server</span>
                    <div className="p-3 rounded-core-circle-lg bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300">
                      <code>{packageManager === 'yarn' ? 'yarn dev' : `${packageManager} run dev`}</code>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-500" />
                  Your custom Tailwind CSS v4 variables and CoreCircle components are linked and ready.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ProjectScaffolder.displayName = 'ProjectScaffolder';
