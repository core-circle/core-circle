import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DropdownMenu } from './dropdown-menu';

describe('DropdownMenu Component', () => {
  const items = [
    { id: 'profile', label: 'View Profile', onClick: jest.fn() },
    { id: 'settings', label: 'Account Settings', onClick: jest.fn() },
  ];

  it('toggles menu open and renders items when clicking trigger', () => {
    render(
      <DropdownMenu
        trigger={<button>Actions</button>}
        items={items}
      />
    );

    expect(screen.queryByText('View Profile')).toBeNull();

    const triggerBtn = screen.getByRole('button', { name: 'Actions' });
    fireEvent.click(triggerBtn);

    expect(screen.getByText('View Profile')).toBeDefined();
    expect(screen.getByText('Account Settings')).toBeDefined();

    fireEvent.click(screen.getByText('View Profile'));
    expect(items[0].onClick).toHaveBeenCalledTimes(1);
  });
});
