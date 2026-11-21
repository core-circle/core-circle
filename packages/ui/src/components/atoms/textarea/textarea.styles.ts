import { cva } from 'class-variance-authority';

export const textareaContainerVariants = cva(
  'relative flex flex-col w-full transition-all duration-200',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
      hasFloatingLabel: {
        true: 'mt-6',
      }
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

export const textareaWrapperVariants = cva(
  'relative flex items-start group w-full font-core-circle-medium transition-all duration-200 outline-none',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white rounded-core-circle-lg focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/10',
        material: 'border-b-2 border-core-circle-border-main bg-core-circle-bg-page hover:bg-core-circle-bg-muted focus-within:border-core-circle-primary rounded-t-core-circle-md',
        'material-animated': 'border-b-2 border-core-circle-border-main bg-core-circle-bg-page hover:bg-core-circle-bg-muted focus-within:border-core-circle-primary rounded-t-core-circle-md',
        ghost: 'bg-transparent border-none hover:bg-core-circle-bg-page focus-within:bg-core-circle-bg-page',
        standard: 'border-b border-core-circle-border-main bg-transparent focus-within:border-core-circle-primary',
        filled: 'border-0 bg-slate-100 rounded-core-circle-lg focus-within:bg-slate-200/80 focus-within:ring-2 focus-within:ring-core-circle-primary/20',
        glassmorphic: 'bg-white/40 backdrop-blur-md border border-white/60 rounded-core-circle-lg shadow-sm focus-within:bg-white/80 focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/10',
        floating: 'border border-core-circle-border-main bg-white rounded-core-circle-lg shadow-md hover:shadow-lg focus-within:shadow-xl focus-within:border-core-circle-primary transition-shadow',
        gradient: 'p-[1.5px] rounded-core-circle-lg bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 focus-within:from-purple-600 focus-within:to-indigo-600 shadow-sm',
        pill: 'border border-core-circle-border-main bg-white rounded-2xl focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/10',
        accent: 'border-2 border-blue-500 bg-blue-50/20 rounded-core-circle-lg focus-within:bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/20',
        dark: 'border border-slate-700 bg-slate-900 text-white rounded-core-circle-lg focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/20',
      },
      hasError: {
        true: 'border-core-circle-warning focus-within:border-core-circle-warning focus-within:ring-core-circle-warning/10',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      }
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export const textareaVariants = cva(
  'w-full bg-transparent border-none outline-none text-core-circle-text-main placeholder:text-core-circle-text-muted disabled:cursor-not-allowed min-h-[100px]',
  {
    variants: {
      size: {
        sm: 'px-3 py-1.5 text-core-circle-xs',
        md: 'px-4 py-2.5 text-core-circle-sm',
        lg: 'px-6 py-4 text-core-circle-md',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
      variant: {
        outline: '',
        material: '',
        'material-animated': '',
        ghost: '',
        standard: '',
        filled: '',
        glassmorphic: '',
        floating: '',
        gradient: 'bg-white rounded-[7px]',
        pill: 'px-5 py-4',
        accent: '',
        dark: 'text-white placeholder:text-slate-500',
      }
    },
    compoundVariants: [
      {
        variant: 'material-animated',
        className: 'pt-6 pb-1.5',
      }
    ],
    defaultVariants: {
      size: 'md',
      resize: 'vertical',
    },
  }
);

export const labelVariants = cva(
  'mb-1.5 text-core-circle-sm font-core-circle-normal capitalize font-core-circle-body tracking-normal transition-all duration-200 pointer-events-none',
  {
    variants: {
      variant: {
        outline: 'text-core-circle-text-muted',
        material: 'text-core-circle-primary',
        'material-animated': 'absolute left-4 top-4 mb-0 text-core-circle-sm font-core-circle-medium normal-case tracking-normal text-core-circle-text-muted',
        ghost: 'text-core-circle-text-muted',
        standard: 'text-core-circle-text-muted',
        filled: 'text-core-circle-text-muted',
        glassmorphic: 'text-slate-700 font-bold',
        floating: 'text-core-circle-text-main font-bold',
        gradient: 'text-purple-900 font-bold',
        pill: 'text-core-circle-text-muted',
        accent: 'text-blue-900 font-bold',
        dark: 'text-slate-300 font-bold',
      },
      hasError: {
        true: 'text-core-circle-warning',
      },
      isFloating: {
        true: '',
      }
    },
    compoundVariants: [
      {
        variant: 'material-animated',
        isFloating: true,
        className: '-translate-y-8 left-0 scale-100 text-core-circle-primary font-core-circle-bold capitalize tracking-normal text-[10px]',
      }
    ],
    defaultVariants: {
      variant: 'outline',
    },
  }
);

