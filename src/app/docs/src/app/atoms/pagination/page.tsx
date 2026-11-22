import React from 'react';
import PaginationContainer from '../../../containers/atoms-page/pagination/paginationContainer';
import {
  PAGINATION_HEADER_CONTENT,
  PAGINATION_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/pagination/paginationConstants';

export const metadata = {
  title: 'Pagination | CoreCircle Design System',
  description: 'An accessible multi-page navigation control featuring automated sibling ellipsis collapse and directional arrow buttons.',
};

export default function PaginationPage() {
  return (
    <PaginationContainer
      headerContent={PAGINATION_HEADER_CONTENT}
      breadcrumbItems={PAGINATION_BREADCRUMB_ITEMS}
    />
  );
}
