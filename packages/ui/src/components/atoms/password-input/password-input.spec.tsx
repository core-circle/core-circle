import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordInput, calculatePasswordStrength } from './password-input';

describe('PasswordInput Component', () => {
  it('renders with label and toggles password visibility', () => {
    render(<PasswordInput label="Account Password" showToggle />);
    expect(screen.getByText('Account Password')).toBeDefined();

    const input = screen.getByLabelText('Account Password') as HTMLInputElement;
    expect(input.type).toBe('password');

    const toggleBtn = screen.getByLabelText('Show password');
    fireEvent.click(toggleBtn);
    expect(input.type).toBe('text');

    const hideBtn = screen.getByLabelText('Hide password');
    fireEvent.click(hideBtn);
    expect(input.type).toBe('password');
  });

  it('calculates password strength accurately', () => {
    expect(calculatePasswordStrength('').label).toBe('Empty');
    expect(calculatePasswordStrength('abc').label).toBe('Weak');
    expect(calculatePasswordStrength('Abc12345!').label).toBe('Good');
    expect(calculatePasswordStrength('SuperSecurePass123!').label).toBe('Strong');
  });
});
