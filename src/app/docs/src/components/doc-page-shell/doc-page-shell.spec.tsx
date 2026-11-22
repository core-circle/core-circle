import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { DocPageShell } from './docPageShell';

describe('DocPageShell Component', () => {
  const headerContent = {
    title: 'Button Component',
    description: 'Interactive button with multiple styles and sizes.',
  };

  it('renders header title and description', () => {
    render(<DocPageShell headerContent={headerContent} />);
    expect(screen.getByText('Button Component')).toBeDefined();
    expect(screen.getByText('Interactive button with multiple styles and sizes.')).toBeDefined();
  });

  it('renders with canonical tabs slot mapping', () => {
    render(
      <DocPageShell
        headerContent={headerContent}
        tabs={{
          theming: <div>Theming Content</div>,
          variants: <div>Variants Content</div>,
        }}
      />
    );
    expect(screen.getByText('Theming Content')).toBeDefined();
  });
});
