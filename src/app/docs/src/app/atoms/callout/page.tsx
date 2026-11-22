import React from 'react';
import CalloutContainer from '../../../containers/atoms-page/callout/calloutContainer';
import {
  CALLOUT_HEADER_CONTENT,
  CALLOUT_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/callout/calloutConstants';

export const metadata = {
  title: 'Callout | CoreCircle Design System',
  description: 'A prominent contextual banner designed to surface key updates, operational alerts, status announcements, and warnings.',
};

export default function CalloutPage() {
  return (
    <CalloutContainer
      headerContent={CALLOUT_HEADER_CONTENT}
      breadcrumbItems={CALLOUT_BREADCRUMB_ITEMS}
    />
  );
}
