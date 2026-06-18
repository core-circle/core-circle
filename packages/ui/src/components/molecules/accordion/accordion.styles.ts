import { cva } from 'class-variance-authority';

export const accordionContainerVariants = cva(
  'w-full flex flex-col',
  {
    variants: {
      variant: {
        bordered: 'border border-core-circle-border-main rounded-core-circle-xl overflow-hidden divide-y divide-core-circle-border-main',
        ghost: 'divide-y divide-core-circle-border-main/50',
        separated: 'gap-4',
      }
    },
    defaultVariants: {
      variant: 'bordered',
    }
  }
);

export const accordionItemVariants = cva(
  'flex flex-col transition-all duration-300',
  {
    variants: {
      variant: {
        bordered: '',
        ghost: '',
        separated: 'border border-core-circle-border-main rounded-core-circle-xl bg-white overflow-hidden',
      },
      isOpen: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'opacity-100',
      }
    },
    defaultVariants: {
      variant: 'bordered',
      isOpen: false,
      disabled: false,
    }
  }
);

export const accordionTriggerVariants = cva(
  'w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 hover:bg-core-circle-bg-page/50',
  {
    variants: {
      isOpen: {
        true: 'bg-core-circle-bg-page/30',
        false: '',
      }
    }
  }
);

export const accordionContentVariants = cva(
  'overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
  {
    variants: {
      isOpen: {
        true: 'max-h-[1000px] opacity-100',
        false: 'max-h-0 opacity-0 pointer-events-none',
      }
    }
  }
);
