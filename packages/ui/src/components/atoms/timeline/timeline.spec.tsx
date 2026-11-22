import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Timeline } from './timeline';

describe('Timeline Component', () => {
  const items = [
    { id: '1', title: 'Order Placed', timestamp: '10:00 AM', status: 'completed' as const, description: 'Received order #102' },
    { id: '2', title: 'Processing', timestamp: '11:30 AM', status: 'current' as const },
    { id: '3', title: 'Dispatched', status: 'upcoming' as const },
  ];

  it('renders vertical timeline with all items', () => {
    render(<Timeline items={items} orientation="vertical" />);
    expect(screen.getByText('Order Placed')).toBeDefined();
    expect(screen.getByText('Processing')).toBeDefined();
    expect(screen.getByText('Dispatched')).toBeDefined();
    expect(screen.getByText('Received order #102')).toBeDefined();
  });

  it('renders horizontal timeline cleanly', () => {
    render(<Timeline items={items} orientation="horizontal" variant="dashed" />);
    expect(screen.getByText('Order Placed')).toBeDefined();
    expect(screen.getByText('Processing')).toBeDefined();
  });
});
