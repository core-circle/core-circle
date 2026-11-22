import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { EmptyState } from './empty-state';

describe('EmptyState Component', () => {
  it('renders title and description', () => {
    render(
      <EmptyState
        title="No Results Found"
        description="Try adjusting your filter search criteria."
      />
    );
    expect(screen.getByText('No Results Found')).toBeDefined();
    expect(screen.getByText('Try adjusting your filter search criteria.')).toBeDefined();
  });

  it('renders action and secondaryAction buttons', () => {
    render(
      <EmptyState
        title="Empty Project"
        action={<button>Create Project</button>}
        secondaryAction={<button>Import Existing</button>}
      />
    );
    expect(screen.getByText('Create Project')).toBeDefined();
    expect(screen.getByText('Import Existing')).toBeDefined();
  });
});
