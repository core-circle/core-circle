import { 
  LABEL_BREADCRUMB_ITEMS, 
  LABEL_HEADER_CONTENT, 
  LABEL_SECTIONS 
} from '../../../constants/atoms-page/label/labelConstants';

export interface LabelContainerProps {
  sections: typeof LABEL_SECTIONS;
  headerContent: typeof LABEL_HEADER_CONTENT;
  breadcrumbItems: typeof LABEL_BREADCRUMB_ITEMS;
}
