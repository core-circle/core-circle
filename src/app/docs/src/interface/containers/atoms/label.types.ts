import { 
  LABEL_BREADCRUMB_ITEMS, 
  LABEL_HEADER_CONTENT 
} from '../../../constants/atoms-page/label/labelConstants';

export interface LabelContainerProps {
  headerContent: typeof LABEL_HEADER_CONTENT;
  breadcrumbItems?: typeof LABEL_BREADCRUMB_ITEMS;
}
