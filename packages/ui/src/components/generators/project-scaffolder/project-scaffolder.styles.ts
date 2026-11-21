import { cva } from 'class-variance-authority';

export const projectScaffolderStyles = {
  container: cva('w-full flex flex-col gap-8 text-core-circle-text-main'),

  // Header
  header: cva('flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-core-circle-border-main w-full'),
  headerText: cva('flex flex-col gap-1.5 w-full'),
  title: cva('text-3xl font-bold tracking-tight text-core-circle-text-main flex items-center gap-3 font-core-circle-primary'),
  subtitle: cva('text-sm text-core-circle-text-muted leading-relaxed font-core-circle-body w-full max-w-none'),

  // Layout Grid
  grid: cva('grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'),

  // Left Panel - Configuration Studio
  panel: cva('lg:col-span-5 flex flex-col gap-6 bg-white p-7 rounded-core-circle-2xl border border-core-circle-border-main shadow-sm'),
  section: cva('flex flex-col gap-3.5'),
  sectionHeader: cva('flex items-center justify-between'),
  sectionTitle: cva('text-xs font-semibold uppercase tracking-wider text-core-circle-text-muted font-core-circle-mono'),
  inputGroup: cva('flex flex-col gap-1.5'),

  // Selector Cards (Framework, Template, etc.)
  optionGrid: cva('grid grid-cols-2 gap-3'),
  optionCard: cva(
    'flex items-center gap-3 p-3.5 rounded-core-circle-xl border text-left transition-all cursor-pointer',
    {
      variants: {
        active: {
          true: 'border-core-circle-primary bg-core-circle-primary/5 ring-1 ring-core-circle-primary/30 text-slate-900',
          false: 'border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700',
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  ),

  // Neutral & Radius Chips
  chipGrid: cva('grid grid-cols-3 gap-2'),
  chipBtn: cva(
    'px-3 py-2 text-xs font-medium rounded-core-circle-lg border text-center transition-all flex items-center justify-center gap-2 cursor-pointer',
    {
      variants: {
        active: {
          true: 'border-core-circle-primary bg-core-circle-primary/10 text-core-circle-primary font-semibold shadow-xs ring-1 ring-core-circle-primary/30',
          false: 'border-core-circle-border-main bg-white hover:bg-slate-50 text-core-circle-text-main hover:border-slate-300',
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  ),

  // Swatches
  swatchList: cva('flex items-center gap-2 flex-wrap pt-1'),
  swatchItem: cva(
    'w-7 h-7 rounded-full border-2 transition-transform hover:scale-115 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      variants: {
        active: {
          true: 'border-slate-900 scale-110 shadow-md ring-2 ring-slate-400',
          false: 'border-white',
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  ),

  // Right Panel - Live File Explorer & Code Inspector
  previewPanel: cva('lg:col-span-7 flex flex-col gap-4'),
  fileTreeWrapper: cva('bg-slate-950 text-slate-100 rounded-core-circle-2xl border border-slate-800 shadow-lg overflow-hidden flex flex-col'),
  fileTreeHeader: cva('flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/60'),
  fileList: cva('flex flex-col max-h-[220px] overflow-y-auto p-2 border-b border-slate-800/80 divide-y divide-slate-900'),
  fileItem: cva(
    'flex items-center justify-between px-3 py-1.5 rounded-core-circle-lg text-xs font-mono transition-colors cursor-pointer',
    {
      variants: {
        active: {
          true: 'bg-core-circle-primary/20 text-white font-semibold',
          false: 'text-slate-400 hover:text-slate-200 hover:bg-slate-900',
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  ),
  codeView: cva('p-5 font-mono text-xs overflow-x-auto max-h-[380px] text-slate-200 leading-relaxed'),
};
