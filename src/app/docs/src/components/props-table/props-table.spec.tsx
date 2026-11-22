import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PropsTable from './index';

describe('PropsTable Component', () => {
  const mockProps = [
    {
      name: 'variant',
      type: 'string',
      defaultValue: "'solid'",
      description: 'Visual style of the component',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      defaultValue: '',
      description: 'Content to render inside',
      required: true,
    },
  ];

  it('renders correctly when passed data prop', () => {
    render(<PropsTable data={mockProps} />);
    expect(screen.getByText('variant')).toBeDefined();
    expect(screen.getByText("'solid'")).toBeDefined();
    expect(screen.getByText('Visual style of the component')).toBeDefined();
    expect(screen.getByText('Required')).toBeDefined();
    expect(screen.getByText('—')).toBeDefined(); // empty default value for children
  });

  it('renders fallback when passed legacy propsData prop', () => {
    render(<PropsTable propsData={mockProps} />);
    expect(screen.getByText('variant')).toBeDefined();
    expect(screen.getByText('children')).toBeDefined();
  });

  it('renders empty table gracefully without crashing when no data passed', () => {
    render(<PropsTable />);
    expect(screen.getByRole('table')).toBeDefined();
  });
});
