'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { MarkdownProps } from '../../../interface/atoms/markdown/markdown.types';
import { markdownContainerVariants } from './markdown.styles';

function parseMarkdownToHtml(md: string, sanitize = true): string {
  if (!md) return '';

  let text = md.replace(/\r\n/g, '\n');

  if (sanitize) {
    text = text
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '');
  }

  // Fenced Code Blocks: ```lang ... ```
  text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<pre class="my-4 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto"><code>${escaped.trim()}</code></pre>`;
  });

  // Split into lines for block processing
  const lines = text.split('\n');
  const processedBlocks: string[] = [];
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) {
      processedBlocks.push('</ul>');
      inUl = false;
    }
    if (inOl) {
      processedBlocks.push('</ol>');
      inOl = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Headings
    if (line.startsWith('#### ')) {
      closeLists();
      processedBlocks.push(`<h4 class="text-sm font-bold text-slate-900 mt-4 mb-2">${line.slice(5)}</h4>`);
      continue;
    }
    if (line.startsWith('### ')) {
      closeLists();
      processedBlocks.push(`<h3 class="text-base font-bold text-slate-900 mt-5 mb-2">${line.slice(4)}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeLists();
      processedBlocks.push(`<h2 class="text-lg font-bold text-slate-900 mt-6 mb-3 border-b border-slate-200 pb-1">${line.slice(3)}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      closeLists();
      processedBlocks.push(`<h1 class="text-2xl font-extrabold text-slate-900 mt-6 mb-4">${line.slice(2)}</h1>`);
      continue;
    }

    // Horizontal Rule
    if (/^(\*{3,}|-{3,}|_{3,})$/.test(line.trim())) {
      closeLists();
      processedBlocks.push('<hr class="my-6 border-slate-200" />');
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      closeLists();
      processedBlocks.push(`<blockquote class="border-l-4 border-core-circle-primary pl-4 py-1 my-3 italic text-slate-600 bg-slate-50/70 rounded-r">${line.slice(2)}</blockquote>`);
      continue;
    }

    // Unordered list item
    if (/^[\*\-]\s+(.*)/.test(line)) {
      if (!inUl) {
        closeLists();
        processedBlocks.push('<ul class="list-disc pl-5 my-2 space-y-1 text-slate-700">');
        inUl = true;
      }
      const itemContent = line.replace(/^[\*\-]\s+/, '');
      processedBlocks.push(`<li>${itemContent}</li>`);
      continue;
    }

    // Ordered list item
    if (/^\d+\.\s+(.*)/.test(line)) {
      if (!inOl) {
        closeLists();
        processedBlocks.push('<ol class="list-decimal pl-5 my-2 space-y-1 text-slate-700">');
        inOl = true;
      }
      const itemContent = line.replace(/^\d+\.\s+/, '');
      processedBlocks.push(`<li>${itemContent}</li>`);
      continue;
    }

    // Paragraph or empty line
    closeLists();
    if (line.trim().length === 0) {
      continue;
    }

    processedBlocks.push(`<p class="my-2 text-slate-700 leading-relaxed">${line}</p>`);
  }

  closeLists();

  let html = processedBlocks.join('\n');

  // Inline styling:
  // 1. Inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 text-pink-600 font-mono text-xs border border-slate-200">$1</code>');
  // 2. Bold: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  // 3. Italic: *text*
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
  // 4. Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-core-circle-primary font-medium underline underline-offset-2 hover:opacity-80">$1</a>');

  return html;
}

export const Markdown = React.forwardRef<HTMLDivElement, MarkdownProps>(
  (
    {
      className,
      content = '',
      sanitize = true,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const parsedHtml = React.useMemo(
      () => parseMarkdownToHtml(content, sanitize),
      [content, sanitize]
    );

    return (
      <div
        {...props}
        ref={ref}
        className={cn(markdownContainerVariants({ variant }), className)}
        dangerouslySetInnerHTML={{ __html: parsedHtml }}
      />
    );
  }
);

Markdown.displayName = 'Markdown';
export default Markdown;
