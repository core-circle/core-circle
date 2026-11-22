import React from 'react';
import CollapsibleContainer from '../../../containers/atoms-page/collapsible/collapsibleContainer';
import {
  COLLAPSIBLE_HEADER_CONTENT,
  COLLAPSIBLE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/collapsible/collapsibleConstants';

export const metadata = {
  title: 'Collapsible Atom Component | CoreCircle Documentation',
  description: 'A lightweight collapsible container primitive featuring animated CSS height transitions and compound trigger/content slots.',
};

export default function CollapsiblePage() {
  return (
    <CollapsibleContainer
      headerContent={COLLAPSIBLE_HEADER_CONTENT}
      breadcrumbItems={COLLAPSIBLE_BREADCRUMB_ITEMS}
    />
  );
}
