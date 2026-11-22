import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Stat } from './stat';

describe('Stat Component', () => {
  it('renders basic stat with label and value', () => {
    render(<Stat label="Total Users" value="12,540" />);
    expect(screen.getByText('Total Users')).toBeDefined();
    expect(screen.getByText('12,540')).toBeDefined();
  });

  it('renders description, trend, badge and footer', () => {
    render(
      <Stat
        label="Revenue"
        value="$54,200"
        description="+14% compared to last month"
        trend={<span>+14%</span>}
        badge={<span>Verified</span>}
        footer={<span>Updated 2 hours ago</span>}
      />
    );
    expect(screen.getByText('+14% compared to last month')).toBeDefined();
    expect(screen.getByText('+14%')).toBeDefined();
    expect(screen.getByText('Verified')).toBeDefined();
    expect(screen.getByText('Updated 2 hours ago')).toBeDefined();
  });

  it('renders horizontal orientation and dark variant', () => {
    const { container } = render(
      <Stat label="CPU Load" value="48%" orientation="horizontal" variant="dark" />
    );
    expect(screen.getByText('CPU Load')).toBeDefined();
    expect(screen.getByText('48%')).toBeDefined();
    expect(container.firstChild).toBeDefined();
  });
});
