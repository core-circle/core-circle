import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { QRCode } from './qr-code';

describe('QRCode Component', () => {
  it('renders SVG QR code correctly with caption', () => {
    const { container } = render(
      <QRCode value="https://corecircle.io" caption="Scan to visit" />
    );
    expect(screen.getByText('Scan to visit')).toBeDefined();
    expect(container.querySelector('svg')).toBeDefined();
  });

  it('renders with download button when downloadable is true', () => {
    render(
      <QRCode value="https://corecircle.io" downloadable />
    );
    expect(screen.getByText('Download PNG')).toBeDefined();
  });
});
