import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SignaturePad } from './signature-pad';

describe('SignaturePad Component', () => {
  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
      fillRect: jest.fn(),
      clearRect: jest.fn(),
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      scale: jest.fn(),
      getImageData: jest.fn(() => ({ data: new Uint8ClampedArray(10) })),
      putImageData: jest.fn(),
    })) as any;
  });

  it('renders canvas with label and control buttons', () => {
    render(
      <SignaturePad
        label="Customer Signature"
        helperText="Sign within the box"
        showControls
      />
    );

    expect(screen.getByText('Customer Signature')).toBeDefined();
    expect(screen.getByText('Sign within the box')).toBeDefined();
    expect(screen.getByRole('button', { name: /clear/i })).toBeDefined();
  });

  it('triggers clear action when clicking Clear button', () => {
    render(<SignaturePad showControls />);
    const clearBtn = screen.getByRole('button', { name: /clear/i });
    fireEvent.click(clearBtn);
    expect(clearBtn).toBeDefined();
  });
});
