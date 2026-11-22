import React from 'react';
import TrendBadgeContainer from '../../../containers/atoms-page/trend-badge/trendBadgeContainer';
import {
  TREND_BADGE_HEADER_CONTENT,
  TREND_BADGE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/trend-badge/trendBadgeConstants';

export const metadata = {
  title: 'TrendBadge | CoreCircle Design System',
  description: 'A compact contextual delta indicator showing growth, decline, and neutral metrics with directional icons.',
};

export default function TrendBadgePage() {
  return (
    <TrendBadgeContainer
      headerContent={TREND_BADGE_HEADER_CONTENT}
      breadcrumbItems={TREND_BADGE_BREADCRUMB_ITEMS}
    />
  );
}
