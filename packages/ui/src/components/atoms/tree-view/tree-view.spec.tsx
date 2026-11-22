import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TreeView } from './tree-view';

describe('TreeView Component', () => {
  const data = [
    {
      id: 'src',
      label: 'src',
      children: [
        { id: 'index', label: 'index.ts' },
        { id: 'styles', label: 'styles.css' },
      ],
    },
    {
      id: 'package',
      label: 'package.json',
    },
  ];

  it('renders root folders and files', () => {
    render(<TreeView data={data} />);
    expect(screen.getByText('src')).toBeDefined();
    expect(screen.getByText('package.json')).toBeDefined();
  });

  it('expands folder node on click and reveals child files', () => {
    render(<TreeView data={data} />);
    expect(screen.queryByText('index.ts')).toBeNull();

    const folderNode = screen.getByText('src');
    fireEvent.click(folderNode);

    expect(screen.getByText('index.ts')).toBeDefined();
    expect(screen.getByText('styles.css')).toBeDefined();
  });
});
