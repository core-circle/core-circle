import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Command } from './command';

describe('Command Component', () => {
  const groups = [
    {
      id: 'nav',
      heading: 'Navigation',
      items: [
        { id: 'home', label: 'Go to Home', onSelect: jest.fn() },
        { id: 'docs', label: 'Go to Documentation', onSelect: jest.fn() },
      ],
    },
    {
      id: 'actions',
      heading: 'Actions',
      items: [
        { id: 'settings', label: 'Open Settings', onSelect: jest.fn() },
      ],
    },
  ];

  it('renders command list items and placeholder', () => {
    render(<Command groups={groups} placeholder="Type a command..." />);
    expect(screen.getByPlaceholderText('Type a command...')).toBeDefined();
    expect(screen.getByText('Go to Home')).toBeDefined();
    expect(screen.getByText('Open Settings')).toBeDefined();
  });

  it('filters items when typing in query input', () => {
    render(<Command groups={groups} placeholder="Search commands" />);
    const input = screen.getByPlaceholderText('Search commands');
    fireEvent.change(input, { target: { value: 'Home' } });

    expect(screen.getByText('Go to Home')).toBeDefined();
    expect(screen.queryByText('Open Settings')).toBeNull();
  });

  it('triggers item selection on click', () => {
    render(<Command groups={groups} />);
    const item = screen.getByText('Go to Home');
    fireEvent.click(item);
    expect(groups[0].items[0].onSelect).toHaveBeenCalled();
  });
});
