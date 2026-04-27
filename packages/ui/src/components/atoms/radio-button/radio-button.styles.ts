import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva(
  "inline-flex items-center gap-3 cursor-pointer group select-none transition-all duration-200",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export const radioVariants = cva(
  "flex items-center justify-center rounded-full border transition-all duration-200 ring-offset-white focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        outline: "bg-white border-core-circle-border-main group-hover:border-core-circle-primary/50",
        solid: "bg-core-circle-bg-page border-transparent",
      },
      size: {
        sm: "w-3.5 h-3.5",
        md: "w-4.5 h-4.5",
        lg: "w-5.5 h-5.5",
      },
      checked: {
        true: "border-core-circle-primary",
        false: "",
      },
      hasError: {
        true: "border-core-circle-warning",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        checked: true,
        className: "bg-core-circle-primary/10 border-core-circle-primary shadow-inner",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      checked: false,
      hasError: false,
    },
  }
);

export const innerCircleVariants = cva(
  "rounded-full bg-core-circle-primary transition-all duration-200 transform scale-0",
  {
    variants: {
      size: {
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
      },
      checked: {
        true: "scale-100",
        false: "scale-0",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
    },
  }
);
