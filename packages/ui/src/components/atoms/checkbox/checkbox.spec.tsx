import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Checkbox Component', () => {
  it('renders correctly with label and description', () => {
    render(
      <Checkbox
        id="test-checkbox"
        label="Accept Terms"
        description="Agree to privacy policy"
        badge={<span>Optional</span>}
      />
    );
    expect(screen.getByText('Accept Terms')).toBeDefined();
    expect(screen.getByText('Agree to privacy policy')).toBeDefined();
    expect(screen.getByText('Optional')).toBeDefined();
  });

  it('handles uncontrolled toggling with defaultChecked', () => {
    render(<Checkbox label="Toggle Me" defaultChecked={false} />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(input.checked).toBe(false);

    fireEvent.click(input);
    expect(input.checked).toBe(true);

    fireEvent.click(input);
    expect(input.checked).toBe(false);
  });

  it('handles onCheckedChange boolean callback', () => {
    const handleCheckedChange = jest.fn();
    render(<Checkbox label="Controlled" onCheckedChange={handleCheckedChange} />);
    const input = screen.getByRole('checkbox');

    fireEvent.click(input);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);

    fireEvent.click(input);
    expect(handleCheckedChange).toHaveBeenCalledWith(false);
  });

  it('handles boolean onChange callback correctly (defensive unchecking)', () => {
    const handleChange = jest.fn((checked) => checked);
    render(<Checkbox label="Boolean Handler" onChange={handleChange} />);
    const input = screen.getByRole('checkbox');

    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('handles native event onChange callback when accessing target', () => {
    const handleEventChange = jest.fn((e) => e.target.checked);
    render(<Checkbox label="Event Handler" onChange={handleEventChange} />);
    const input = screen.getByRole('checkbox');

    fireEvent.click(input);
    expect(handleEventChange).toHaveBeenCalled();
  });

  it('respects disabled state', () => {
    const handleCheckedChange = jest.fn();
    render(<Checkbox disabled label="Disabled Checkbox" onCheckedChange={handleCheckedChange} />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(input.disabled).toBe(true);

    fireEvent.click(input);
    expect(handleCheckedChange).not.toHaveBeenCalled();
  });

  it('renders indeterminate state and error or helper text', () => {
    const { rerender } = render(
      <Checkbox
        indeterminate
        label="Indeterminate"
        error="This field is required"
        size="sm"
        shape="circle"
      />
    );
    expect(screen.getByText('This field is required')).toBeDefined();

    rerender(
      <Checkbox
        label="With Helper"
        helperText="Helpful instructions"
        size="lg"
        shape="square"
        checked={true}
      />
    );
    expect(screen.getByText('Helpful instructions')).toBeDefined();
  });
});
