import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TrendBadge } from './trend-badge';

describe('TrendBadge Component', () => {
  it('renders with positive trend value', () => {
    render(<TrendBadge value="+12.5%" prefix="Up by" />);
    expect(screen.getByText('+12.5%')).toBeDefined();
    expect(screen.getByText('Up by')).toBeDefined();
  });

  it('renders with negative trend value and suffix', () => {
    render(<TrendBadge value="-3.2%" suffix="MoM" />);
    expect(screen.getByText('-3.2%')).toBeDefined();
    expect(screen.getByText('MoM')).toBeDefined();
  });

  it('supports explicit trend and invertColors', () => {
    const { container } = render(
      <TrendBadge value="15ms" trend="up" invertColors variant="solid" />
    );
    expect(screen.getByText('15ms')).toBeDefined();
    expect(container.firstChild).toBeDefined();
  });
});
