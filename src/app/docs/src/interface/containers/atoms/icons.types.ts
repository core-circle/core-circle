import { 
  ICONS_BREADCRUMB_ITEMS, 
  ICONS_HEADER_CONTENT, 
  ICONS_SECTIONS 
} from '../../../constants/atoms-page/icons/iconsConstants';

export interface IconsContainerProps {
  sections?: typeof ICONS_SECTIONS;
  headerContent: typeof ICONS_HEADER_CONTENT;
  breadcrumbItems: typeof ICONS_BREADCRUMB_ITEMS;
}
