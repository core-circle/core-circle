import React from 'react';
import HoverCardContainer from '../../../containers/atoms-page/hover-card/hoverCardContainer';
import {
  HOVER_CARD_HEADER_CONTENT,
  HOVER_CARD_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/hover-card/hoverCardConstants';

export const metadata = {
  title: 'HoverCard | CoreCircle Design System',
  description: 'A floating preview card triggered on pointer hover or focus, designed for user profile cards, link previews, and rich entity previews.',
};

export default function HoverCardPage() {
  return (
    <HoverCardContainer
      headerContent={HOVER_CARD_HEADER_CONTENT}
      breadcrumbItems={HOVER_CARD_BREADCRUMB_ITEMS}
    />
  );
}
