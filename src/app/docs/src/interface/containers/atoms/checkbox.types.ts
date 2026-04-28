import { 
  CHECKBOX_BREADCRUMB_ITEMS, 
  CHECKBOX_HEADER_CONTENT, 
  CHECKBOX_SECTIONS 
} from '../../../constants/atoms-page/checkbox/checkboxConstants';

export interface CheckboxContainerProps {
  sections: typeof CHECKBOX_SECTIONS;
  headerContent: typeof CHECKBOX_HEADER_CONTENT;
  breadcrumbItems: typeof CHECKBOX_BREADCRUMB_ITEMS;
}
