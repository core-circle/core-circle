import React from 'react';
import ResizableContainer from '../../../containers/atoms-page/resizable/resizableContainer';
import {
  RESIZABLE_HEADER_CONTENT,
  RESIZABLE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/resizable/resizableConstants';

export const metadata = {
  title: 'Resizable Atom Component | CoreCircle Documentation',
  description: 'A multi-pane resizable layout container featuring interactive mouse/touch drag handles, percentage constraints, and orientation switching.',
};

export default function ResizablePage() {
  return (
    <ResizableContainer
      headerContent={RESIZABLE_HEADER_CONTENT}
      breadcrumbItems={RESIZABLE_BREADCRUMB_ITEMS}
    />
  );
}
