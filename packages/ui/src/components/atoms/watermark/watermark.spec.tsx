import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Watermark } from './watermark';

describe('Watermark Component', () => {
  it('renders children with watermark background overlay', () => {
    render(
      <Watermark content="CONFIDENTIAL">
        <div>Protected Document Body</div>
      </Watermark>
    );

    expect(screen.getByText('Protected Document Body')).toBeDefined();
  });

  it('supports multiline text watermark array', () => {
    render(
      <Watermark content={['INTERNAL ONLY', 'DO NOT SHARE']}>
        <div>Internal Report</div>
      </Watermark>
    );

    expect(screen.getByText('Internal Report')).toBeDefined();
  });
});
