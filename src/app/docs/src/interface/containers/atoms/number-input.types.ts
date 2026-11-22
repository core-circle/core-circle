import {
  NUMBER_INPUT_BREADCRUMB_ITEMS,
  NUMBER_INPUT_HEADER_CONTENT,
  NUMBER_INPUT_SECTIONS,
} from '../../../constants/atoms-page/number-input/numberInputConstants';

export interface NumberInputContainerProps {
  sections?: typeof NUMBER_INPUT_SECTIONS;
  headerContent: typeof NUMBER_INPUT_HEADER_CONTENT;
  breadcrumbItems: typeof NUMBER_INPUT_BREADCRUMB_ITEMS;
}
