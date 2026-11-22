import {
  TOUR_BREADCRUMB_ITEMS,
  TOUR_HEADER_CONTENT,
  TOUR_SECTIONS,
} from '../../../constants/atoms-page/tour/tourConstants';

export interface TourContainerProps {
  sections?: typeof TOUR_SECTIONS;
  headerContent: typeof TOUR_HEADER_CONTENT;
  breadcrumbItems: typeof TOUR_BREADCRUMB_ITEMS;
}
