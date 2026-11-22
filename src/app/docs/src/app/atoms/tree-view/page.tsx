import React from 'react';
import TreeViewContainer from '../../../containers/atoms-page/tree-view/treeViewContainer';
import {
  TREE_VIEW_HEADER_CONTENT,
  TREE_VIEW_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/tree-view/treeViewConstants';

export default function TreeViewPage() {
  return (
    <TreeViewContainer
      headerContent={TREE_VIEW_HEADER_CONTENT}
      breadcrumbItems={TREE_VIEW_BREADCRUMB_ITEMS}
    />
  );
}
