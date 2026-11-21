import { 
  SELECT_BREADCRUMB_ITEMS, 
  SELECT_HEADER_CONTENT, 
  SELECT_SECTIONS 
} from '../../../constants/atoms-page/select/selectConstants';

export interface SelectContainerProps {
  sections?: typeof SELECT_SECTIONS;
  headerContent: typeof SELECT_HEADER_CONTENT;
  breadcrumbItems: typeof SELECT_BREADCRUMB_ITEMS;
}
