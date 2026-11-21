import * as React from 'react';
import { cn } from '../../../utils/cn';
import { RichTextProps } from '../../../interface/atoms/richtext/richtext.types';
import { richTextVariants } from './richtext.styles';

export const RichText = React.forwardRef<HTMLDivElement, RichTextProps>(
  ({ className, content, variant = 'default', size = 'base', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          richTextVariants({ variant, size }),
          // Universal typography styling for HTML tags
          'leading-relaxed font-core-circle-body',
          '[&_h1]:font-core-circle-bold [&_h1]:tracking-tight [&_h1]:mb-6 [&_h1]:mt-8 first:[&_h1]:mt-0',
          '[&_h2]:font-core-circle-semibold [&_h2]:tracking-tight [&_h2]:mb-4 [&_h2]:mt-8 first:[&_h2]:mt-0 [&_h2]:border-b [&_h2]:border-core-circle-border-main/40 [&_h2]:pb-2',
          '[&_h3]:font-core-circle-semibold [&_h3]:tracking-tight [&_h3]:mb-3 [&_h3]:mt-6 first:[&_h3]:mt-0',
          '[&_h4]:font-core-circle-semibold [&_h4]:mb-2 [&_h4]:mt-4',
          '[&_p]:mb-4 last:[&_p]:mb-0',
          '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1',
          '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1',
          '[&_li]:mb-1',
          '[&_blockquote]:border-l-4 [&_blockquote]:border-core-circle-primary [&_blockquote]:bg-core-circle-slate-50/70 [&_blockquote]:pl-4 [&_blockquote]:pr-3 [&_blockquote]:py-2 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:rounded-r-core-circle-md',
          '[&_code]:bg-core-circle-bg-muted [&_code]:text-core-circle-primary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-core-circle-xs [&_code]:font-mono [&_code]:font-medium',
          '[&_pre]:bg-core-circle-slate-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-core-circle-xl [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre_code]:bg-transparent [&_pre_code]:text-white [&_pre_code]:p-0',
          '[&_a]:text-core-circle-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-medium [&_a]:hover:text-core-circle-primary-hover [&_a]:transition-colors',
          '[&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_th]:border-b-2 [&_th]:border-core-circle-border-strong [&_th]:text-left [&_th]:p-3 [&_th]:font-core-circle-bold [&_td]:border-b [&_td]:border-core-circle-border-main [&_td]:p-3',
          className
        )}
        dangerouslySetInnerHTML={{ __html: content }}
        {...props}
      />
    );
  }
);

RichText.displayName = 'RichText';
