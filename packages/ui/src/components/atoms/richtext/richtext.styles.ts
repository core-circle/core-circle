import { cva } from 'class-variance-authority';

export const richTextVariants = cva(
  'max-w-none transition-all duration-300 w-full',
  {
    variants: {
      variant: {
        default:
          'text-core-circle-text-main leading-relaxed',
        card:
          'bg-white border border-core-circle-border-main rounded-core-circle-2xl p-6 sm:p-8 shadow-core-circle-subtle text-core-circle-text-main',
        bordered:
          'border border-core-circle-border-main rounded-core-circle-2xl p-6 sm:p-8 bg-transparent text-core-circle-text-main',
        floating:
          'bg-white border border-core-circle-border-main/50 rounded-core-circle-2xl p-6 sm:p-8 shadow-core-circle-elevated hover:shadow-core-circle-floating transition-all duration-300 text-core-circle-text-main',
        glassmorphic:
          'backdrop-blur-md bg-white/75 border border-white/80 rounded-core-circle-2xl p-6 sm:p-8 shadow-core-circle-subtle text-core-circle-text-main',
        gradient:
          'bg-gradient-to-br from-core-circle-blue-50/40 via-core-circle-indigo-50/30 to-core-circle-purple-50/40 border border-core-circle-blue-200/50 rounded-core-circle-2xl p-6 sm:p-8 text-core-circle-text-main [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h1]:bg-gradient-to-r [&_h1]:from-core-circle-blue-600 [&_h1]:to-core-circle-purple-600 [&_h2]:text-core-circle-indigo-900',
        filled:
          'bg-core-circle-bg-page border border-transparent rounded-core-circle-2xl p-6 sm:p-8 text-core-circle-text-main',
        minimal:
          'bg-transparent text-core-circle-text-main [&_h1]:mb-3 [&_h1]:mt-4 [&_h2]:mb-2 [&_h2]:mt-4 [&_p]:mb-2.5 [&_ul]:mb-2.5 [&_ol]:mb-2.5',
        ghost:
          'bg-transparent text-core-circle-text-muted hover:text-core-circle-text-main transition-colors',
        accent:
          'bg-core-circle-blue-50/30 border-l-4 border-core-circle-primary rounded-r-core-circle-2xl p-6 sm:p-8 text-core-circle-text-main shadow-core-circle-subtle',
        dark:
          'bg-core-circle-slate-900 border border-core-circle-slate-800 rounded-core-circle-2xl p-6 sm:p-8 text-core-circle-slate-100 [&_h1]:text-white [&_h2]:text-core-circle-slate-100 [&_h3]:text-core-circle-slate-200 [&_p]:text-core-circle-slate-300 [&_blockquote]:text-core-circle-slate-300 [&_blockquote]:border-core-circle-blue-400 [&_code]:bg-core-circle-slate-800 [&_code]:text-core-circle-blue-300 [&_a]:text-core-circle-blue-400',
      },
      size: {
        sm: 'text-xs [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_p]:text-xs [&_li]:text-xs [&_code]:text-[11px]',
        base: 'text-sm sm:text-base [&_h1]:text-3xl sm:[&_h1]:text-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h3]:text-xl sm:[&_h3]:text-2xl [&_p]:text-sm sm:[&_p]:text-base [&_li]:text-sm sm:[&_li]:text-base [&_code]:text-xs sm:[&_code]:text-sm',
        lg: 'text-base sm:text-lg [&_h1]:text-4xl sm:[&_h1]:text-5xl [&_h2]:text-3xl sm:[&_h2]:text-4xl [&_h3]:text-2xl sm:[&_h3]:text-3xl [&_p]:text-base sm:[&_p]:text-lg [&_li]:text-base sm:[&_li]:text-lg [&_code]:text-sm sm:[&_code]:text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'base',
    },
  }
);
