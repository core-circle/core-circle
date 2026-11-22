import React from 'react';
import DiffViewerContainer from '../../../containers/atoms-page/diff-viewer/diffViewerContainer';
import {
  DIFF_VIEWER_HEADER_CONTENT,
  DIFF_VIEWER_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/diff-viewer/diffViewerConstants';

export default function DiffViewerPage() {
  return (
    <DiffViewerContainer
      headerContent={DIFF_VIEWER_HEADER_CONTENT}
      breadcrumbItems={DIFF_VIEWER_BREADCRUMB_ITEMS}
    />
  );
}
