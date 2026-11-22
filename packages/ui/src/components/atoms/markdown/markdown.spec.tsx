import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Markdown } from './markdown';

describe('Markdown Component', () => {
  it('renders markdown headers, bold, and code blocks', () => {
    const content = '## Subheader\n**Important text**\n```js\nconst x = 10;\n```';
    render(<Markdown content={content} />);
    expect(screen.getByText('Subheader')).toBeDefined();
    expect(screen.getByText('Important text')).toBeDefined();
  });

  it('renders bullet list items', () => {
    const listContent = '- Item 1\n- Item 2\n- Item 3';
    render(<Markdown content={listContent} />);
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });
});
