import { 
  MULTI_SELECT_BREADCRUMB_ITEMS, 
  MULTI_SELECT_HEADER_CONTENT, 
  MULTI_SELECT_SECTIONS 
} from '../../../constants/atoms-page/multi-select/multiSelectConstants';

export interface MultiSelectContainerProps {
  sections: typeof MULTI_SELECT_SECTIONS;
  headerContent: typeof MULTI_SELECT_HEADER_CONTENT;
  breadcrumbItems: typeof MULTI_SELECT_BREADCRUMB_ITEMS;
}
