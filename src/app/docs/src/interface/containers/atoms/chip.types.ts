import {
  CHIP_BREADCRUMB_ITEMS,
  CHIP_HEADER_CONTENT,
  CHIP_SECTIONS,
} from '../../../constants/atoms-page/chip/chipConstants';

export interface ChipContainerProps {
  sections?: typeof CHIP_SECTIONS;
  headerContent: typeof CHIP_HEADER_CONTENT;
  breadcrumbItems: typeof CHIP_BREADCRUMB_ITEMS;
}
