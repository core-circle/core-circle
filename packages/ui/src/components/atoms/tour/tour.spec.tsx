import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tour } from './tour';

describe('Tour Component', () => {
  const steps = [
    { title: 'Welcome', description: 'Welcome to our platform' },
    { title: 'Dashboard', description: 'View your analytics here' },
  ];

  it('renders first step title and description', () => {
    render(<Tour steps={steps} open />);
    expect(screen.getByText('Welcome')).toBeDefined();
    expect(screen.getByText('Welcome to our platform')).toBeDefined();
  });

  it('navigates to next step on Next button click', () => {
    const handleStepChange = jest.fn();
    render(<Tour steps={steps} open onStepChange={handleStepChange} />);

    const nextBtn = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextBtn);
    expect(handleStepChange).toHaveBeenCalledWith(1);
  });

  it('calls onClose when clicking skip tour', () => {
    const handleClose = jest.fn();
    render(<Tour steps={steps} open onClose={handleClose} showSkip />);

    const skipBtn = screen.getByText('Skip Tour');
    fireEvent.click(skipBtn);
    expect(handleClose).toHaveBeenCalled();
  });
});
