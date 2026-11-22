import React from 'react';
import StatContainer from '../../../containers/atoms-page/stat/statContainer';
import {
  STAT_HEADER_CONTENT,
  STAT_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/stat/statConstants';

export const metadata = {
  title: 'Stat | CoreCircle Design System',
  description: 'A key performance indicator metric block with prominent typography, label, contextual description, and trend indicators.',
};

export default function StatPage() {
  return (
    <StatContainer
      headerContent={STAT_HEADER_CONTENT}
      breadcrumbItems={STAT_BREADCRUMB_ITEMS}
    />
  );
}
