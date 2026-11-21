import { cva } from 'class-variance-authority';

export const themeGeneratorStyles = {
  container: cva('w-full flex flex-col gap-8 text-core-circle-text-main'),
  
  // Header
  header: cva('flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-core-circle-border-main w-full'),
  headerText: cva('flex flex-col gap-1.5 w-full'),
  title: cva('text-3xl font-bold tracking-tight text-core-circle-text-main flex items-center gap-3 font-core-circle-primary'),
  subtitle: cva('text-sm text-core-circle-text-muted leading-relaxed font-core-circle-body w-full'),
  headerActions: cva('flex items-center gap-3 shrink-0'),

  // Layout Grid
  grid: cva('grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'),
  
  // Left Panel - Configuration Studio
  studioPanel: cva('lg:col-span-5 flex flex-col gap-6 bg-white p-7 rounded-core-circle-2xl border border-core-circle-border-main shadow-sm'),
  studioSection: cva('flex flex-col gap-3.5'),
  sectionHeader: cva('flex items-center justify-between'),
  sectionTitle: cva('text-xs font-semibold uppercase tracking-wider text-core-circle-text-muted font-core-circle-mono'),
  inputGroup: cva('flex flex-col gap-1.5'),
  
  // Neutral & Radius Chip Selectors
  chipGrid: cva('grid grid-cols-3 gap-2'),
  chipBtn: cva('px-3 py-2 text-xs font-medium rounded-core-circle-lg border text-center transition-all flex items-center justify-center gap-2 cursor-pointer', {
    variants: {
      active: {
        true: 'border-core-circle-primary bg-core-circle-primary/10 text-core-circle-primary font-semibold shadow-xs ring-1 ring-core-circle-primary/30',
        false: 'border-core-circle-border-main bg-white hover:bg-slate-50 text-core-circle-text-main hover:border-slate-300',
      },
    },
    defaultVariants: {
      active: false,
    },
  }),

  // Right Panel - Canvas & Code Studio
  canvasPanel: cva('lg:col-span-7 flex flex-col gap-4'),
  
  // Top Navigation Bar
  toolbar: cva('flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-core-circle-border-main'),
  tabGroup: cva('flex items-center gap-1.5 p-1 bg-slate-100 rounded-core-circle-xl border border-slate-200/80'),
  tabBtn: cva('px-3.5 py-1.5 text-xs font-medium rounded-core-circle-lg transition-all flex items-center gap-2 cursor-pointer', {
    variants: {
      active: {
        true: 'bg-white text-slate-900 shadow-sm font-semibold',
        false: 'text-slate-600 hover:text-slate-900 hover:bg-white/50',
      },
    },
    defaultVariants: {
      active: false,
    },
  }),
  modeBtn: cva('flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-core-circle-xl border border-core-circle-border-main bg-white hover:bg-slate-50 transition-colors shadow-xs cursor-pointer'),

  // Preview Stage
  stageWrapper: cva('relative rounded-core-circle-2xl border transition-all duration-300 p-8 min-h-[560px] flex flex-col justify-between overflow-hidden shadow-xs', {
    variants: {
      dark: {
        true: 'bg-slate-950 border-slate-800 text-slate-100',
        false: 'bg-slate-50/80 border-slate-200/90 text-slate-900',
      },
    },
    defaultVariants: {
      dark: false,
    },
  }),

  // Code Display
  codeBox: cva('relative bg-slate-950 text-slate-100 rounded-core-circle-2xl p-6 font-mono text-xs overflow-x-auto max-h-[600px] border border-slate-800 shadow-lg leading-relaxed'),
  codeHeader: cva('flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80'),

  // Color Swatches
  swatchList: cva('flex items-center gap-2 flex-wrap pt-1'),
  swatchItem: cva('w-7 h-7 rounded-full border-2 transition-transform hover:scale-115 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-offset-2', {
    variants: {
      active: {
        true: 'border-slate-900 scale-110 shadow-md ring-2 ring-slate-400',
        false: 'border-white',
      },
    },
  }),
};
