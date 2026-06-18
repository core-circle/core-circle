import { 
  ACCORDION_BREADCRUMB_ITEMS, 
  ACCORDION_HEADER_CONTENT, 
  ACCORDION_SECTIONS 
} from '../../../constants/molecules-page/accordion/accordionConstants';

export interface AccordionContainerProps {
  sections: typeof ACCORDION_SECTIONS;
  headerContent: typeof ACCORDION_HEADER_CONTENT;
  breadcrumbItems: typeof ACCORDION_BREADCRUMB_ITEMS;
}
