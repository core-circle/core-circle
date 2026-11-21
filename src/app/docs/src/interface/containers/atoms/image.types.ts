import { 
  IMAGE_BREADCRUMB_ITEMS, 
  IMAGE_HEADER_CONTENT 
} from '../../../constants/atoms-page/image/imageConstants';

export interface ImageContainerProps {
  headerContent: typeof IMAGE_HEADER_CONTENT;
  breadcrumbItems?: typeof IMAGE_BREADCRUMB_ITEMS;
}
