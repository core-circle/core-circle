import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CodeBlock } from './code-block';

describe('CodeBlock Component', () => {
  const sampleCode = `const greeting = "Hello World";\nconsole.log(greeting);`;

  it('renders code snippet with line numbers and filename', () => {
    render(
      <CodeBlock
        code={sampleCode}
        filename="index.ts"
        language="typescript"
        showLineNumbers
      />
    );
    expect(screen.getByText('index.ts')).toBeDefined();
    expect(screen.getByText('typescript')).toBeDefined();
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
  });

  it('handles copy button click and clipboard interaction', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(<CodeBlock code={sampleCode} copyable />);
    const copyBtn = screen.getByText('Copy');
    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(sampleCode);
  });
});
