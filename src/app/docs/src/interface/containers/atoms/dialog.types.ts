import { 
  DIALOG_BREADCRUMB_ITEMS, 
  DIALOG_HEADER_CONTENT 
} from '../../../constants/atoms-page/dialog/dialogConstants';

export interface DialogContainerProps {
  headerContent: typeof DIALOG_HEADER_CONTENT;
  breadcrumbItems?: typeof DIALOG_BREADCRUMB_ITEMS;
}
