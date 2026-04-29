import * as React from 'react';
import { cn } from '../../../utils/cn';
import { RichTextProps } from '../../../interface/atoms/richtext/richtext.types';
import { richTextVariants } from './richtext.styles';

export const RichText = React.forwardRef<HTMLDivElement, RichTextProps>(
  ({ className, content, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          richTextVariants({ size }),
          // Custom overrides to match design system if prose is not available
          'text-core-circle-text-main leading-relaxed',
          '[&_h1]:text-core-circle-4xl [&_h1]:font-core-circle-bold [&_h1]:mb-6 [&_h1]:mt-10',
          '[&_h2]:text-core-circle-3xl [&_h2]:font-core-circle-semibold [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:border-b [&_h2]:border-core-circle-border-main [&_h2]:pb-2',
          '[&_h3]:text-core-circle-2xl [&_h3]:font-core-circle-semibold [&_h3]:mb-3 [&_h3]:mt-6',
          '[&_p]:mb-4',
          '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4',
          '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4',
          '[&_li]:mb-1',
          '[&_blockquote]:border-l-4 [&_blockquote]:border-core-circle-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6',
          '[&_code]:bg-core-circle-bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-sm',
          '[&_a]:text-core-circle-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-core-circle-primary-hover',
          className
        )}
        dangerouslySetInnerHTML={{ __html: content }}
        {...props}
      />
    );
  }
);

RichText.displayName = 'RichText';
