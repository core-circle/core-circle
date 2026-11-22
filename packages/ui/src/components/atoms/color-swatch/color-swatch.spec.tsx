import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ColorSwatch, isLightColor } from './color-swatch';

describe('ColorSwatch Component', () => {
  const colors = [
    { label: 'Emerald', value: '#10b981' },
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Amber', value: '#f59e0b' },
  ];

  it('renders all color options', () => {
    render(<ColorSwatch colors={colors} label="Theme Palette" />);
    expect(screen.getByText('Theme Palette')).toBeDefined();
    expect(screen.getByTitle('Emerald')).toBeDefined();
    expect(screen.getByTitle('Indigo')).toBeDefined();
    expect(screen.getByTitle('Amber')).toBeDefined();
  });

  it('selects color on click and fires onChange', () => {
    const handleChange = jest.fn();
    render(<ColorSwatch colors={colors} onChange={handleChange} />);

    fireEvent.click(screen.getByTitle('Indigo'));
    expect(handleChange).toHaveBeenCalledWith('#6366f1');
  });

  it('computes isLightColor helper correctly', () => {
    expect(isLightColor('#ffffff')).toBe(true);
    expect(isLightColor('#000000')).toBe(false);
    expect(isLightColor('invalid')).toBe(false);
  });
});
