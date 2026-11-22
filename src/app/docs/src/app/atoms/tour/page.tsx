import {
  TOUR_HEADER_CONTENT,
  TOUR_BREADCRUMB_ITEMS,
  TOUR_SECTIONS,
} from '../../../constants/atoms-page/tour/tourConstants';
import TourContainer from '../../../containers/atoms-page/tour/tourContainer';

export const metadata = {
  title: 'Tour | Core Circle UI',
  description:
    'Interactive product walkthrough guide and pulsing hotspot beacons for multi-step feature onboarding.',
};

export default function TourPage() {
  return (
    <TourContainer
      sections={TOUR_SECTIONS}
      headerContent={TOUR_HEADER_CONTENT}
      breadcrumbItems={TOUR_BREADCRUMB_ITEMS}
    />
  );
}
