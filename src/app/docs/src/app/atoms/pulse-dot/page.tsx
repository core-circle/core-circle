import React from 'react';
import PulseDotContainer from '../../../containers/atoms-page/pulse-dot/pulseDotContainer';
import {
  PULSE_DOT_HEADER_CONTENT,
  PULSE_DOT_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/pulse-dot/pulseDotConstants';

export const metadata = {
  title: 'PulseDot | CoreCircle Design System',
  description: 'An animated live status indicator beacon with a radiating radar ping pulse effect.',
};

export default function PulseDotPage() {
  return (
    <PulseDotContainer
      headerContent={PULSE_DOT_HEADER_CONTENT}
      breadcrumbItems={PULSE_DOT_BREADCRUMB_ITEMS}
    />
  );
}
