import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Chip } from './chip';

describe('Chip Component', () => {
  it('renders label and count badge', () => {
    render(<Chip label="React" count={42} />);
    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByText('42')).toBeDefined();
  });

  it('handles toggle selection when clicked', () => {
    const handleSelect = jest.fn();
    render(<Chip label="TypeScript" onSelect={handleSelect} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleSelect).toHaveBeenCalledWith(true);
  });

  it('handles removal click with onRemove callback', () => {
    const handleRemove = jest.fn();
    render(<Chip label="Removable Tag" removable onRemove={handleRemove} />);

    const removeBtn = screen.getByLabelText('Remove filter');
    fireEvent.click(removeBtn);
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });

  it('does not toggle or trigger clicks when disabled', () => {
    const handleSelect = jest.fn();
    render(<Chip label="Disabled Tag" disabled onSelect={handleSelect} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleSelect).not.toHaveBeenCalled();
  });
});
