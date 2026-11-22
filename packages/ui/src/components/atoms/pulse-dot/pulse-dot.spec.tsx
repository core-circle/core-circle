import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PulseDot } from './pulse-dot';

describe('PulseDot Component', () => {
  it('renders online dot without label', () => {
    const { container } = render(<PulseDot status="online" />);
    expect(container.querySelector('span')).toBeDefined();
  });

  it('renders with label on left and right placements', () => {
    const { rerender } = render(<PulseDot status="online" label="System Active" labelPlacement="right" />);
    expect(screen.getByText('System Active')).toBeDefined();

    rerender(<PulseDot status="busy" label="In Call" labelPlacement="left" />);
    expect(screen.getByText('In Call')).toBeDefined();
  });

  it('renders different statuses: offline, busy, away', () => {
    const { rerender } = render(<PulseDot status="offline" label="Offline" />);
    expect(screen.getByText('Offline')).toBeDefined();

    rerender(<PulseDot status="away" label="Away" ping={false} />);
    expect(screen.getByText('Away')).toBeDefined();
  });
});
