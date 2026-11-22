import React from 'react';
import ContextMenuContainer from '../../../containers/atoms-page/context-menu/contextMenuContainer';
import {
  CONTEXT_MENU_HEADER_CONTENT,
  CONTEXT_MENU_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/context-menu/contextMenuConstants';

export const metadata = {
  title: 'ContextMenu | CoreCircle Design System',
  description: 'An accessible right-click popup menu positioned at pointer coordinates with viewport clamping and keyboard shortcuts.',
};

export default function ContextMenuPage() {
  return (
    <ContextMenuContainer
      headerContent={CONTEXT_MENU_HEADER_CONTENT}
      breadcrumbItems={CONTEXT_MENU_BREADCRUMB_ITEMS}
    />
  );
}
