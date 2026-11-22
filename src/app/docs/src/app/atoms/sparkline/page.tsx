import React from 'react';
import SparklineContainer from '../../../containers/atoms-page/sparkline/sparklineContainer';
import {
  SPARKLINE_HEADER_CONTENT,
  SPARKLINE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/sparkline/sparklineConstants';

export const metadata = {
  title: 'Sparkline | CoreCircle Design System',
  description: 'A pure zero-dependency lightweight SVG micro-chart (line, area, or bar) for compact trend visuals.',
};

export default function SparklinePage() {
  return (
    <SparklineContainer
      headerContent={SPARKLINE_HEADER_CONTENT}
      breadcrumbItems={SPARKLINE_BREADCRUMB_ITEMS}
    />
  );
}
