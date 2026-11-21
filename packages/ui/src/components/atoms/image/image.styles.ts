import { cva } from 'class-variance-authority';

export const imageContainerVariants = cva(
  'relative inline-block overflow-hidden transition-all duration-300 group select-none bg-core-circle-bg-page',
  {
    variants: {
      variant: {
        card: 'border border-core-circle-border-main bg-white rounded-core-circle-2xl shadow-core-circle-subtle',
        floating: 'border border-core-circle-border-main/50 bg-white rounded-core-circle-2xl shadow-core-circle-elevated hover:shadow-core-circle-floating hover:-translate-y-0.5',
        glassmorphic: 'backdrop-blur-md bg-white/80 border border-core-circle-border-main/70 rounded-core-circle-2xl shadow-core-circle-subtle',
        gradient: 'border-2 border-core-circle-primary/40 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-purple-500/20 rounded-core-circle-2xl p-1 shadow-core-circle-subtle',
        circular: 'rounded-full aspect-square border border-core-circle-border-main shadow-core-circle-subtle',
        pill: 'rounded-full border border-core-circle-border-main shadow-core-circle-subtle',
        polaroid: 'bg-white p-3 pb-8 border border-core-circle-border-main shadow-core-circle-elevated rounded-xl',
        minimal: 'border-0 bg-transparent rounded-core-circle-lg',
        bordered: 'border-2 border-core-circle-border-strong rounded-core-circle-2xl shadow-core-circle-subtle',
        thumbnail: 'border border-core-circle-border-main bg-white rounded-xl shadow-sm',
      },
      aspectRatio: {
        '1:1': 'aspect-square',
        '16:9': 'aspect-video',
        '4:3': 'aspect-[4/3]',
        '21:9': 'aspect-[21/9]',
        '3:2': 'aspect-[3/2]',
        auto: 'aspect-auto',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'card',
      aspectRatio: 'auto',
      rounded: 'xl',
    },
  }
);

export const imageElementVariants = cva(
  'w-full h-full transition-all duration-500 ease-out',
  {
    variants: {
      fit: {
        cover: 'object-cover',
        contain: 'object-contain',
        fill: 'object-fill',
        none: 'object-none',
        'scale-down': 'object-scale-down',
      },
      zoomOnHover: {
        true: 'group-hover:scale-105',
        false: 'group-hover:scale-100',
      },
    },
    defaultVariants: {
      fit: 'cover',
      zoomOnHover: false,
    },
  }
);
