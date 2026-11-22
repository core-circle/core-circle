import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { HoverCard } from './hover-card';

describe('HoverCard Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('reveals popover content on mouseEnter after openDelay', () => {
    render(
      <HoverCard
        trigger={<button>Hover Me</button>}
        openDelay={100}
        closeDelay={100}
      >
        <div>User Profile Details</div>
      </HoverCard>
    );

    expect(screen.queryByText('User Profile Details')).toBeNull();

    fireEvent.mouseEnter(screen.getByText('Hover Me'));
    act(() => {
      jest.advanceTimersByTime(150);
    });

    expect(screen.getByText('User Profile Details')).toBeDefined();

    fireEvent.mouseLeave(screen.getByText('Hover Me'));
    act(() => {
      jest.advanceTimersByTime(150);
    });

    expect(screen.queryByText('User Profile Details')).toBeNull();
  });
});
