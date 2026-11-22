import React from 'react';
import TimelineContainer from '../../../containers/atoms-page/timeline/timelineContainer';
import {
  TIMELINE_HEADER_CONTENT,
  TIMELINE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/timeline/timelineConstants';

export const metadata = {
  title: 'Timeline | CoreCircle Design System',
  description: 'A sequential milestone progression component visualizing chronological events, delivery tracking, and multi-stage pipelines.',
};

export default function TimelinePage() {
  return (
    <TimelineContainer
      headerContent={TIMELINE_HEADER_CONTENT}
      breadcrumbItems={TIMELINE_BREADCRUMB_ITEMS}
    />
  );
}
