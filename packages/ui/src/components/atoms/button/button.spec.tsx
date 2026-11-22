import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  it('renders correctly with children text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeDefined();
  });

  it('handles onClick callback', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Submit</Button>);
    fireEvent.click(screen.getByText('Submit'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).toHaveProperty('disabled', true);
  });

  it('renders loading state and disables button', () => {
    const handleClick = jest.fn();
    render(<Button loading onClick={handleClick}>Loading State</Button>);
    fireEvent.click(screen.getByText('Loading State'));
    expect(handleClick).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).toHaveProperty('disabled', true);
  });

  it('renders custom icons and fullWidth class', () => {
    render(
      <Button
        startIcon={<span data-testid="start-icon">★</span>}
        endIcon={<span data-testid="end-icon">→</span>}
        fullWidth
        variant="outline"
        size="lg"
      >
        Icon Button
      </Button>
    );
    expect(screen.getByTestId('start-icon')).toBeDefined();
    expect(screen.getByTestId('end-icon')).toBeDefined();
    expect(screen.getByRole('button').className).toContain('w-full');
  });
});
