import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva(
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

export const checkboxVariants = cva(
  "flex items-center justify-center rounded-core-circle-xs border transition-all duration-200 ring-offset-white focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-offset-2",
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
        true: "",
        false: "",
      },
      hasError: {
        true: "border-core-circle-warning",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        checked: true,
        className: "bg-core-circle-primary border-core-circle-primary shadow-sm",
      },
      {
        variant: "solid",
        checked: true,
        className: "bg-core-circle-primary shadow-inner",
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

export const labelVariants = cva(
  "font-core-circle-normal text-core-circle-text-main capitalize font-core-circle-body transition-colors",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      hasError: {
        true: "text-core-circle-warning",
        false: "group-hover:text-core-circle-primary",
      },
    },
    defaultVariants: {
      size: "md",
      hasError: false,
    },
  }
);
