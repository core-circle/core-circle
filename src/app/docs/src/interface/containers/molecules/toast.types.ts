import { 
  TOAST_BREADCRUMB_ITEMS, 
  TOAST_HEADER_CONTENT, 
  TOAST_SECTIONS 
} from '../../../constants/molecules-page/toast/toastConstants';

export interface ToastContainerProps {
  sections: typeof TOAST_SECTIONS;
  headerContent: typeof TOAST_HEADER_CONTENT;
  breadcrumbItems: typeof TOAST_BREADCRUMB_ITEMS;
}
