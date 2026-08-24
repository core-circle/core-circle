import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'relative flex overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white text-core-circle-text-main shadow-core-circle-subtle',
        shadow: 'border border-core-circle-border-main/50 bg-white text-core-circle-text-main shadow-core-circle-elevated',
        floating: 'border border-core-circle-border-main/40 bg-white text-core-circle-text-main shadow-core-circle-floating hover:-translate-y-1',
        glassmorphic: 'backdrop-blur-md bg-white/75 border border-white/80 text-core-circle-text-main shadow-core-circle-subtle',
        gradient: 'border border-core-circle-blue-100 bg-gradient-to-br from-white via-core-circle-blue-50/30 to-core-circle-indigo-50/40 text-core-circle-text-main shadow-core-circle-subtle',
        'gradient-border': 'border-2 border-core-circle-primary/40 bg-white text-core-circle-text-main shadow-core-circle-subtle',
        'solid-brand': 'border-0 bg-gradient-to-r from-core-circle-blue-600 via-indigo-600 to-purple-700 text-white shadow-core-circle-elevated',
        'solid-dark': 'border border-slate-800 bg-slate-950 text-white shadow-core-circle-floating',
        cover: 'border-0 bg-slate-950 text-white shadow-core-circle-floating',
        flat: 'border-0 bg-core-circle-bg-page text-core-circle-text-main',
        'bordered-elevated': 'border border-core-circle-border-main bg-white text-core-circle-text-main shadow-core-circle-elevated',
        minimal: 'border-0 bg-transparent text-core-circle-text-main shadow-none',
        interactive: 'border border-core-circle-border-main bg-white text-core-circle-text-main shadow-core-circle-subtle hover:border-core-circle-primary hover:shadow-core-circle-elevated cursor-pointer active:scale-[0.99]',
        ghost: 'border-0 bg-transparent text-core-circle-text-main',
      },
      orientation: {
        vertical: 'flex-col',
        horizontal: 'flex-col md:flex-row',
      },
      rounded: {
        true: 'rounded-core-circle-2xl',
        false: 'rounded-none',
      },
      hoverable: {
        true: 'cursor-pointer hover:-translate-y-1 hover:shadow-core-circle-elevated hover:border-core-circle-primary/50',
        false: '',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      }
    },
    defaultVariants: {
      variant: 'outline',
      orientation: 'vertical',
      rounded: true,
      hoverable: false,
      fullWidth: true,
    }
  }
);

export const cardMediaVariants = cva(
  'relative overflow-hidden w-full bg-slate-100 shrink-0 group/media',
  {
    variants: {
      position: {
        top: 'w-full',
        bottom: 'w-full order-last',
        side: 'w-full md:w-2/5 min-h-[200px]',
        cover: 'absolute inset-0 w-full h-full z-0',
      },
      aspect: {
        video: 'aspect-video',
        square: 'aspect-square',
        wide: 'aspect-[21/9]',
        auto: 'h-auto',
      }
    },
    defaultVariants: {
      position: 'top',
      aspect: 'video',
    }
  }
);

export const cardCornerVariants = cva(
  'absolute z-20 inline-flex items-center justify-center shadow-core-circle-subtle transition-transform duration-200 overflow-hidden',
  {
    variants: {
      position: {
        'top-left': 'top-3.5 left-3.5',
        'top-right': 'top-3.5 right-3.5',
        'bottom-left': 'bottom-3.5 left-3.5',
        'bottom-right': 'bottom-3.5 right-3.5',
      },
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded-core-circle-lg',
        square: 'rounded-none',
      },
      size: {
        sm: 'h-8 w-8',
        md: 'h-11 w-11',
        lg: 'h-14 w-14',
      }
    },
    defaultVariants: {
      position: 'top-right',
      shape: 'rounded',
      size: 'md',
    }
  }
);

export const cardHeaderVariants = cva(
  'px-6 py-4 flex items-center justify-between gap-4 font-core-circle-bold relative z-10',
  {
    variants: {
      divider: {
        true: 'border-b border-core-circle-border-main/60',
        false: '',
      }
    },
    defaultVariants: {
      divider: false,
    }
  }
);

export const cardBodyVariants = cva(
  'flex-1 leading-relaxed relative z-10',
  {
    variants: {
      noPadding: {
        false: 'p-6',
        true: 'p-0',
      }
    },
    defaultVariants: {
      noPadding: false,
    }
  }
);

export const cardFooterVariants = cva(
  'px-6 py-4 flex items-center gap-4 relative z-10',
  {
    variants: {
      divider: {
        true: 'border-t border-core-circle-border-main/60',
        false: '',
      },
      align: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
      }
    },
    defaultVariants: {
      divider: false,
      align: 'end',
    }
  }
);
