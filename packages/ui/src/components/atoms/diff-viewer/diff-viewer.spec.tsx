import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DiffViewer } from './diff-viewer';

describe('DiffViewer Component', () => {
  const oldCode = 'const name = "Alice";\nconsole.log(name);';
  const newCode = 'const name = "Bob";\nconsole.log(name);';

  it('renders split view diff comparison', () => {
    render(
      <DiffViewer
        oldCode={oldCode}
        newCode={newCode}
        filename="user.ts"
        splitView={true}
      />
    );
    expect(screen.getByText('user.ts')).toBeDefined();
    expect(screen.getByText('+1')).toBeDefined();
    expect(screen.getByText('-1')).toBeDefined();
  });

  it('renders unified view diff comparison', () => {
    render(
      <DiffViewer
        oldCode={oldCode}
        newCode={newCode}
        splitView={false}
      />
    );
    expect(screen.getByText('const name = "Alice";')).toBeDefined();
    expect(screen.getByText('const name = "Bob";')).toBeDefined();
  });

  it('toggles view mode between split and unified', () => {
    const handleSplitChange = jest.fn();
    render(
      <DiffViewer
        oldCode={oldCode}
        newCode={newCode}
        onSplitViewChange={handleSplitChange}
      />
    );
    const splitBtn = screen.getByText('Split');
    fireEvent.click(splitBtn);
    expect(handleSplitChange).toHaveBeenCalledWith(true);
  });
});
