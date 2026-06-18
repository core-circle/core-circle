import { cva } from 'class-variance-authority';

export const datePickerStyles = {
  container: 'relative w-fit',
  fullWidth: 'w-full',
  popover: 'absolute top-full left-0 z-50 mt-2 p-4 bg-white border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-lg animate-in fade-in zoom-in-95 duration-200 origin-top',
};

export const calendarStyles = {
  header: 'flex items-center justify-between mb-4',
  title: 'text-sm font-core-circle-bold text-core-circle-text-main',
  navButton: 'p-1 hover:bg-core-circle-bg-muted rounded-lg transition-colors',
  grid: 'grid grid-cols-7 gap-1',
  weekday: 'h-8 w-8 flex items-center justify-center text-[10px] font-core-circle-bold uppercase tracking-wider text-core-circle-text-muted',
};

export const dayVariants = cva(
  'h-8 w-8 flex items-center justify-center text-xs rounded-lg transition-all duration-200',
  {
    variants: {
      status: {
        default: 'text-core-circle-text-main hover:bg-core-circle-bg-muted cursor-pointer',
        selected: 'bg-core-circle-primary text-white font-core-circle-bold shadow-sm',
        today: 'text-core-circle-primary font-core-circle-bold border border-core-circle-primary/30 bg-core-circle-primary/5',
        outside: 'text-core-circle-text-muted opacity-40 hover:bg-transparent cursor-default',
        disabled: 'text-core-circle-text-muted opacity-30 cursor-not-allowed',
        'range-start': 'bg-core-circle-primary text-white font-core-circle-bold rounded-r-none',
        'range-end': 'bg-core-circle-primary text-white font-core-circle-bold rounded-l-none',
        'range-between': 'bg-core-circle-primary/10 text-core-circle-primary rounded-none hover:bg-core-circle-primary/20',
      }
    },
    defaultVariants: {
      status: 'default',
    }
  }
);
