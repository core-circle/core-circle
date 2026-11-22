import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Resizable } from './resizable';

describe('Resizable Component', () => {
  it('renders horizontal resizable panels and handle', () => {
    render(
      <Resizable direction="horizontal" defaultSize={40}>
        <Resizable.Panel>Left Content</Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel>Right Content</Resizable.Panel>
      </Resizable>
    );

    expect(screen.getByText('Left Content')).toBeDefined();
    expect(screen.getByText('Right Content')).toBeDefined();
  });

  it('renders vertical resizable panels cleanly', () => {
    render(
      <Resizable direction="vertical" defaultSize={50}>
        <Resizable.Panel>Top Content</Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel>Bottom Content</Resizable.Panel>
      </Resizable>
    );

    expect(screen.getByText('Top Content')).toBeDefined();
    expect(screen.getByText('Bottom Content')).toBeDefined();
  });
});
