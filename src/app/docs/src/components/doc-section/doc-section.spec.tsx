import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DocSection from './index';

describe('DocSection Component', () => {
  it('renders section title, description, and children', () => {
    render(
      <DocSection id="test-section" title="Theme Showcase" description="Production themes">
        <div>Section Body Content</div>
      </DocSection>
    );

    expect(screen.getByText('Theme Showcase')).toBeDefined();
    expect(screen.getByText('Production themes')).toBeDefined();
    expect(screen.getByText('Section Body Content')).toBeDefined();
  });
});
