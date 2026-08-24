import { 
  MULTI_SELECT_BREADCRUMB_ITEMS, 
  MULTI_SELECT_HEADER_CONTENT 
} from '../../../constants/atoms-page/multi-select/multiSelectConstants';

export interface MultiSelectContainerProps {
  headerContent: typeof MULTI_SELECT_HEADER_CONTENT;
  breadcrumbItems?: typeof MULTI_SELECT_BREADCRUMB_ITEMS;
}
