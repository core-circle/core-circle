import { 
  TEXT_INPUT_BREADCRUMB_ITEMS, 
  TEXT_INPUT_HEADER_CONTENT, 
  TEXT_INPUT_SECTIONS 
} from '../../../constants/atoms-page/text-input/textInputConstants';

export interface TextInputContainerProps {
  sections?: typeof TEXT_INPUT_SECTIONS;
  headerContent: typeof TEXT_INPUT_HEADER_CONTENT;
  breadcrumbItems: typeof TEXT_INPUT_BREADCRUMB_ITEMS;
}
