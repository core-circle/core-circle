import { 
  BUTTON_BREADCRUMB_ITEMS, 
  BUTTON_HEADER_CONTENT, 
  BUTTON_SECTIONS 
} from '../../../constants/atoms-page/button/buttonConstants';

export interface ButtonContainerProps {
  sections: typeof BUTTON_SECTIONS;
  headerContent: typeof BUTTON_HEADER_CONTENT;
  breadcrumbItems: typeof BUTTON_BREADCRUMB_ITEMS;
}
