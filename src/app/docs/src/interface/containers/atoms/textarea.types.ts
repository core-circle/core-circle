import { 
  TEXTAREA_BREADCRUMB_ITEMS, 
  TEXTAREA_HEADER_CONTENT, 
  TEXTAREA_SECTIONS 
} from '../../../constants/atoms-page/textarea/textareaConstants';

export interface TextareaContainerProps {
  sections: typeof TEXTAREA_SECTIONS;
  headerContent: typeof TEXTAREA_HEADER_CONTENT;
  breadcrumbItems: typeof TEXTAREA_BREADCRUMB_ITEMS;
}
