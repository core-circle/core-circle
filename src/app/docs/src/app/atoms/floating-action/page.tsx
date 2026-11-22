import React from 'react';
import FloatingActionContainer from '../../../containers/atoms-page/floating-action/floatingActionContainer';
import {
  FLOATING_ACTION_HEADER_CONTENT,
  FLOATING_ACTION_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/floating-action/floatingActionConstants';

export const metadata = {
  title: 'FloatingAction Atom Component | CoreCircle Documentation',
  description: 'A floating action button (FAB) primitive anchoring speed-dial menu actions with animated rotations and custom trigger labels.',
};

export default function FloatingActionPage() {
  return (
    <FloatingActionContainer
      headerContent={FLOATING_ACTION_HEADER_CONTENT}
      breadcrumbItems={FLOATING_ACTION_BREADCRUMB_ITEMS}
    />
  );
}
