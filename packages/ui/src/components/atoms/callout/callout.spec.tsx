import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Callout } from './callout';

describe('Callout Component', () => {
  it('renders default info callout with title and children', () => {
    render(<Callout title="Notice">This is an informational message</Callout>);
    expect(screen.getByText('Notice')).toBeDefined();
    expect(screen.getByText('This is an informational message')).toBeDefined();
  });

  it('renders various variants (success, warning, danger, brand)', () => {
    const { rerender } = render(<Callout variant="success" title="Success!">Operation succeeded</Callout>);
    expect(screen.getByText('Success!')).toBeDefined();

    rerender(<Callout variant="warning" title="Warning!">Caution needed</Callout>);
    expect(screen.getByText('Warning!')).toBeDefined();

    rerender(<Callout variant="danger" title="Error!">Fatal error</Callout>);
    expect(screen.getByText('Error!')).toBeDefined();

    rerender(<Callout variant="brand" title="Feature!">AI update</Callout>);
    expect(screen.getByText('Feature!')).toBeDefined();
  });

  it('handles dismissible behavior and calls onDismiss callback', () => {
    const handleDismiss = jest.fn();
    render(
      <Callout title="Dismissible" dismissible onDismiss={handleDismiss}>
        Can be closed
      </Callout>
    );

    const closeBtn = screen.getByRole('button', { name: /dismiss notice/i });
    fireEvent.click(closeBtn);
    expect(handleDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Dismissible')).toBeNull();
  });

  it('renders action element when provided', () => {
    render(
      <Callout title="Update" action={<button>Upgrade Now</button>}>
        New version available
      </Callout>
    );
    expect(screen.getByText('Upgrade Now')).toBeDefined();
  });
});
