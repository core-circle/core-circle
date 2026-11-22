import { cva } from 'class-variance-authority';

export const statContainerVariants = cva(
  'relative flex flex-col justify-between rounded-core-circle-xl transition-all duration-150',
  {
    variants: {
      variant: {
        card: 'bg-white border border-core-circle-border-main text-slate-900 shadow-sm hover:shadow-md',
        bordered: 'bg-white border-2 border-core-circle-border-strong text-slate-900',
        minimal: 'bg-transparent text-slate-900 p-0',
        glassmorphic: 'backdrop-blur-xl bg-white/80 border border-white/60 text-slate-900 shadow-lg',
        gradient: 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 border border-blue-100 text-slate-900 shadow-sm',
        dark: 'bg-slate-900 border border-slate-800 text-white shadow-xl',
        accent: 'bg-white border-core-circle-primary/30 ring-1 ring-core-circle-primary/10 text-slate-900 shadow-md',
      },
      size: {
        sm: 'p-4 gap-2',
        md: 'p-5 gap-3',
        lg: 'p-6 gap-4',
      },
      orientation: {
        vertical: 'flex-col',
        horizontal: 'flex-row items-center justify-between',
      },
    },
    defaultVariants: {
      variant: 'card',
      size: 'md',
      orientation: 'vertical',
    },
  }
);

export const statValueVariants = cva('font-bold tracking-tight leading-none', {
  variants: {
    variant: {
      card: 'text-slate-900',
      bordered: 'text-slate-900',
      minimal: 'text-slate-900',
      glassmorphic: 'text-slate-900',
      gradient: 'text-slate-900',
      dark: 'text-white',
      accent: 'text-slate-900',
    },
    size: {
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-4xl',
    },
  },
  defaultVariants: {
    variant: 'card',
    size: 'md',
  },
});

export const statLabelVariants = cva('font-semibold uppercase tracking-wider', {
  variants: {
    variant: {
      card: 'text-slate-500',
      bordered: 'text-slate-500',
      minimal: 'text-slate-500',
      glassmorphic: 'text-slate-500',
      gradient: 'text-slate-600',
      dark: 'text-slate-300',
      accent: 'text-core-circle-primary font-bold',
    },
    size: {
      sm: 'text-[11px]',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'card',
    size: 'md',
  },
});

export const statDescriptionVariants = cva('font-normal leading-normal', {
  variants: {
    variant: {
      card: 'text-slate-500',
      bordered: 'text-slate-500',
      minimal: 'text-slate-500',
      glassmorphic: 'text-slate-500',
      gradient: 'text-slate-600',
      dark: 'text-slate-400',
      accent: 'text-slate-600',
    },
    size: {
      sm: 'text-[11px]',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'card',
    size: 'md',
  },
});

export const statIconWrapperVariants = cva('p-2 rounded-lg shrink-0', {
  variants: {
    variant: {
      card: 'bg-slate-100 text-slate-700',
      bordered: 'bg-slate-100 text-slate-700',
      minimal: 'bg-transparent text-slate-700',
      glassmorphic: 'bg-white/80 text-slate-700 shadow-sm',
      gradient: 'bg-white/80 text-blue-600 shadow-sm',
      dark: 'bg-slate-800 text-slate-200 border border-slate-700',
      accent: 'bg-core-circle-primary/10 text-core-circle-primary',
    },
  },
  defaultVariants: {
    variant: 'card',
  },
});
