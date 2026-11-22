import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SegmentedControl } from './segmented-control';

describe('SegmentedControl Component', () => {
  const options = [
    { label: 'Overview', value: 'overview' },
    { label: 'Activity', value: 'activity' },
    { label: 'Settings', value: 'settings' },
  ];

  it('renders all segment options and highlights active choice', () => {
    render(<SegmentedControl options={options} defaultValue="overview" label="View Mode" />);
    expect(screen.getByText('View Mode')).toBeDefined();
    expect(screen.getByText('Overview')).toBeDefined();
    expect(screen.getByText('Activity')).toBeDefined();
    expect(screen.getByText('Settings')).toBeDefined();
  });

  it('changes selected segment when clicked and fires onChange', () => {
    const handleChange = jest.fn();
    render(<SegmentedControl options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Activity'));
    expect(handleChange).toHaveBeenCalledWith('activity');
  });

  it('respects disabled state', () => {
    const handleChange = jest.fn();
    render(<SegmentedControl options={options} disabled onChange={handleChange} />);

    fireEvent.click(screen.getByText('Settings'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
