import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NumberInput } from './number-input';

describe('NumberInput Component', () => {
  it('renders with defaultValue and responds to stepper increment/decrement', () => {
    const handleChange = jest.fn();
    render(
      <NumberInput
        defaultValue={10}
        min={0}
        max={100}
        step={5}
        onNumberChange={handleChange}
        label="Quantity"
      />
    );

    expect(screen.getByText('Quantity')).toBeDefined();
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    const incBtn = screen.getByLabelText('Increment');
    fireEvent.click(incBtn);
    expect(handleChange).toHaveBeenCalledWith(15, '15');

    const decBtn = screen.getByLabelText('Decrement');
    fireEvent.click(decBtn);
    expect(handleChange).toHaveBeenCalledWith(10, '10');
  });

  it('renders prefix and suffix elements', () => {
    render(<NumberInput defaultValue={50} prefix="$" suffix="USD" />);
    expect(screen.getByText('$')).toBeDefined();
    expect(screen.getByText('USD')).toBeDefined();
  });
});
