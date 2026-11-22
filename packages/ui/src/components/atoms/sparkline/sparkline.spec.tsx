import * as React from 'react';
import { render } from '@testing-library/react';
import { Sparkline } from './sparkline';

describe('Sparkline Component', () => {
  it('renders SVG sparkline for line type', () => {
    const { container } = render(
      <Sparkline data={[10, 25, 18, 42, 35, 60]} type="line" color="success" />
    );
    expect(container.querySelector('svg')).toBeDefined();
    expect(container.querySelector('path')).toBeDefined();
  });

  it('renders SVG sparkline for bar type', () => {
    const { container } = render(
      <Sparkline data={[12, 18, 9, 24, 30]} type="bar" color="primary" />
    );
    const rects = container.querySelectorAll('rect');
    expect(rects.length).toBeGreaterThan(0);
  });

  it('handles empty data gracefully', () => {
    const { container } = render(<Sparkline data={[]} />);
    expect(container.querySelector('svg')).toBeDefined();
  });
});
