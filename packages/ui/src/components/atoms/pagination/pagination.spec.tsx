import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Pagination Component', () => {
  it('renders page buttons and triggers onPageChange', () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    );

    expect(screen.getByText('2')).toBeDefined();
    const page3Btn = screen.getByText('3');
    fireEvent.click(page3Btn);
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it('renders next and previous navigation controls', () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={handlePageChange}
        showControls
      />
    );

    const prevBtn = screen.getByRole('button', { name: /previous page/i });
    const nextBtn = screen.getByRole('button', { name: /next page/i });

    fireEvent.click(nextBtn);
    expect(handlePageChange).toHaveBeenCalledWith(4);

    fireEvent.click(prevBtn);
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});
