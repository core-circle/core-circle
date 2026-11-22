import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FloatingAction } from './floating-action';

describe('FloatingAction Component', () => {
  const actions = [
    { id: 'chat', label: 'Start Chat', onClick: jest.fn() },
    { id: 'help', label: 'Help Desk', onClick: jest.fn() },
  ];

  it('renders FAB trigger button and reveals actions on click', () => {
    render(<FloatingAction actions={actions} label="Quick Actions" />);
    const trigger = screen.getByText('Quick Actions');
    expect(trigger).toBeDefined();

    expect(screen.queryByText('Start Chat')).toBeNull();

    fireEvent.click(trigger);
    expect(screen.getByText('Start Chat')).toBeDefined();
    expect(screen.getByText('Help Desk')).toBeDefined();

    const actionBtn = screen.getByRole('button', { name: 'Start Chat' });
    fireEvent.click(actionBtn);
    expect(actions[0].onClick).toHaveBeenCalled();
  });
});
