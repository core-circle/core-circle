import { 
  CHECKBOX_BREADCRUMB_ITEMS, 
  CHECKBOX_HEADER_CONTENT 
} from '../../../constants/atoms-page/checkbox/checkboxConstants';

export interface CheckboxContainerProps {
  headerContent: typeof CHECKBOX_HEADER_CONTENT;
  breadcrumbItems?: typeof CHECKBOX_BREADCRUMB_ITEMS;
}
