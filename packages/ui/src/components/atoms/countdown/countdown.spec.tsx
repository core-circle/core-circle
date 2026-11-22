import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Countdown } from './countdown';

describe('Countdown Component', () => {
  it('renders countdown timer segments with labels', () => {
    // 2 days in the future
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 48 + 10000).toISOString();
    render(<Countdown targetDate={futureDate} showDays showLabels variant="boxes" />);

    expect(screen.getByText('Hours')).toBeDefined();
    expect(screen.getByText('Minutes')).toBeDefined();
    expect(screen.getByText('Seconds')).toBeDefined();
  });

  it('renders minimal variant without days segment when showDays=false', () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 30).toISOString();
    render(<Countdown targetDate={futureDate} showDays={false} variant="minimal" />);

    expect(screen.queryByText('Days')).toBeNull();
  });
});
