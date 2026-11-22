import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PhoneInput } from './phone-input';

describe('PhoneInput Component', () => {
  it('renders phone input with default country and format mask', () => {
    const handlePhoneChange = jest.fn();
    render(
      <PhoneInput
        label="Phone Number"
        defaultCountry="US"
        onPhoneChange={handlePhoneChange}
      />
    );

    expect(screen.getByText('Phone Number')).toBeDefined();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1234567890' } });

    expect(handlePhoneChange).toHaveBeenCalled();
  });

  it('opens country selector dropdown on flag click', () => {
    render(<PhoneInput defaultCountry="US" />);
    const countryButton = screen.getByLabelText('Select country code');
    fireEvent.click(countryButton);

    expect(screen.getByText('United Kingdom')).toBeDefined();
    expect(screen.getByText('India')).toBeDefined();
  });
});
