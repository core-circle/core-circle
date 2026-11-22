import React from 'react';
import EmptyStateContainer from '../../../containers/atoms-page/empty-state/emptyStateContainer';
import {
  EMPTY_STATE_HEADER_CONTENT,
  EMPTY_STATE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/empty-state/emptyStateConstants';

export const metadata = {
  title: 'EmptyState | CoreCircle Design System',
  description: 'An informative placeholder surface communicating that a table, list, search, or inbox has no data.',
};

export default function EmptyStatePage() {
  return (
    <EmptyStateContainer
      headerContent={EMPTY_STATE_HEADER_CONTENT}
      breadcrumbItems={EMPTY_STATE_BREADCRUMB_ITEMS}
    />
  );
}
