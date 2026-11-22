import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Gauge } from './gauge';

describe('Gauge Component', () => {
  it('renders gauge with value and unit', () => {
    render(<Gauge value={75} label="CPU Utilization" unit="%" helperText="Normal operation" />);
    expect(screen.getByText('75')).toBeDefined();
    expect(screen.getByText('%')).toBeDefined();
    expect(screen.getByText('CPU Utilization')).toBeDefined();
    expect(screen.getByText('Normal operation')).toBeDefined();
  });

  it('supports custom thresholds and colors', () => {
    const thresholds = [
      { value: 50, color: '#10b981' },
      { value: 80, color: '#f59e0b' },
      { value: 100, color: '#ef4444' },
    ];
    const { container } = render(
      <Gauge value={92} thresholds={thresholds} size={200} />
    );
    expect(container.querySelector('svg')).toBeDefined();
    expect(screen.getByText('92')).toBeDefined();
  });
});
