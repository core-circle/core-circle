import { 
  BREADCRUMB_DOCS_ITEMS, 
  BREADCRUMB_HEADER_CONTENT, 
  BREADCRUMB_SECTIONS 
} from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';

export interface BreadcrumbContainerProps {
  sections: typeof BREADCRUMB_SECTIONS;
  headerContent: typeof BREADCRUMB_HEADER_CONTENT;
  breadcrumbItems: typeof BREADCRUMB_DOCS_ITEMS;
}
