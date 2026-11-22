import React from 'react';
import GaugeContainer from '../../../containers/atoms-page/gauge/gaugeContainer';
import {
  GAUGE_HEADER_CONTENT,
  GAUGE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/gauge/gaugeConstants';

export default function GaugePage() {
  return (
    <GaugeContainer
      headerContent={GAUGE_HEADER_CONTENT}
      breadcrumbItems={GAUGE_BREADCRUMB_ITEMS}
    />
  );
}
