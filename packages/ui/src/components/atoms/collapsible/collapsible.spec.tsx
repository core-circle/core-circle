import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Collapsible } from './collapsible';

describe('Collapsible Component', () => {
  it('renders trigger and expands content when clicked', () => {
    render(
      <Collapsible defaultOpen={false} unmountOnExit>
        <Collapsible.Trigger>Toggle Panel</Collapsible.Trigger>
        <Collapsible.Content>Secret Content Revealed</Collapsible.Content>
      </Collapsible>
    );

    expect(screen.getByText('Toggle Panel')).toBeDefined();
    // Default closed with unmountOnExit
    expect(screen.queryByText('Secret Content Revealed')).toBeNull();

    // Toggle open
    fireEvent.click(screen.getByText('Toggle Panel'));
    expect(screen.getByText('Secret Content Revealed')).toBeDefined();
  });

  it('supports controlled open state and onOpenChange', () => {
    const handleOpenChange = jest.fn();
    render(
      <Collapsible open={true} onOpenChange={handleOpenChange}>
        <Collapsible.Trigger>Controlled Header</Collapsible.Trigger>
        <Collapsible.Content>Expanded Text</Collapsible.Content>
      </Collapsible>
    );

    expect(screen.getByText('Expanded Text')).toBeDefined();
    fireEvent.click(screen.getByText('Controlled Header'));
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });
});
