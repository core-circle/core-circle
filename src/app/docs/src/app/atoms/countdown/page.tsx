import React from 'react';
import CountdownContainer from '../../../containers/atoms-page/countdown/countdownContainer';
import {
  COUNTDOWN_HEADER_CONTENT,
  COUNTDOWN_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/countdown/countdownConstants';

export default function CountdownPage() {
  return (
    <CountdownContainer
      headerContent={COUNTDOWN_HEADER_CONTENT}
      breadcrumbItems={COUNTDOWN_BREADCRUMB_ITEMS}
    />
  );
}
