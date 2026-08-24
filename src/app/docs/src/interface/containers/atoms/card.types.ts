import { 
  CARD_BREADCRUMB_ITEMS, 
  CARD_HEADER_CONTENT, 
  CARD_SECTIONS 
} from '../../../constants/atoms-page/card/cardConstants';

export interface CardContainerProps {
  sections: typeof CARD_SECTIONS;
  headerContent: typeof CARD_HEADER_CONTENT;
  breadcrumbItems: typeof CARD_BREADCRUMB_ITEMS;
}
