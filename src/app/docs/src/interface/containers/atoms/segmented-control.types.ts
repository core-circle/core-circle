import {
  SEGMENTED_CONTROL_BREADCRUMB_ITEMS,
  SEGMENTED_CONTROL_HEADER_CONTENT,
  SEGMENTED_CONTROL_SECTIONS,
} from '../../../constants/atoms-page/segmented-control/segmentedControlConstants';

export interface SegmentedControlContainerProps {
  sections?: typeof SEGMENTED_CONTROL_SECTIONS;
  headerContent: typeof SEGMENTED_CONTROL_HEADER_CONTENT;
  breadcrumbItems: typeof SEGMENTED_CONTROL_BREADCRUMB_ITEMS;
}
