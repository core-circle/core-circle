import { 
  POPOVER_BREADCRUMB_ITEMS, 
  POPOVER_HEADER_CONTENT 
} from '../../../constants/atoms-page/popover/popoverConstants';

export interface PopoverContainerProps {
  headerContent: typeof POPOVER_HEADER_CONTENT;
  breadcrumbItems?: typeof POPOVER_BREADCRUMB_ITEMS;
}
