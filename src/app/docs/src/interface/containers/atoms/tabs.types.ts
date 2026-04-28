import { 
  TABS_BREADCRUMB_ITEMS, 
  TABS_HEADER_CONTENT, 
  TABS_SECTIONS 
} from '../../../constants/atoms-page/tabs/tabsConstants';

export interface TabsContainerProps {
  sections: typeof TABS_SECTIONS;
  headerContent: typeof TABS_HEADER_CONTENT;
  breadcrumbItems: typeof TABS_BREADCRUMB_ITEMS;
}
