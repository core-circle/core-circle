import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContextMenu } from './context-menu';

describe('ContextMenu Component', () => {
  const items = [
    { id: 'copy', label: 'Copy Link', onClick: jest.fn() },
    { id: 'delete', label: 'Delete Item', destructive: true, onClick: jest.fn() },
  ];

  it('opens context menu on contextmenu event and executes item click', () => {
    render(
      <ContextMenu items={items}>
        <div data-testid="target-zone">Right click area</div>
      </ContextMenu>
    );

    expect(screen.queryByText('Copy Link')).toBeNull();

    fireEvent.contextMenu(screen.getByTestId('target-zone'));

    expect(screen.getByText('Copy Link')).toBeDefined();
    expect(screen.getByText('Delete Item')).toBeDefined();

    fireEvent.click(screen.getByText('Copy Link'));
    expect(items[0].onClick).toHaveBeenCalledTimes(1);
  });
});
