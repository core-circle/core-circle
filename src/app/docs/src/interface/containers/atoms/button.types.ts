import { 
  BUTTON_BREADCRUMB_ITEMS, 
  BUTTON_HEADER_CONTENT 
} from '../../../constants/atoms-page/button/buttonConstants';

export interface ButtonContainerProps {
  sections?: any[];
  headerContent: typeof BUTTON_HEADER_CONTENT;
  breadcrumbItems: typeof BUTTON_BREADCRUMB_ITEMS;
}
