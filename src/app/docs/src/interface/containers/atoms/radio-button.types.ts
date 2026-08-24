import { 
  RADIO_BUTTON_BREADCRUMB_ITEMS, 
  RADIO_BUTTON_HEADER_CONTENT 
} from '../../../constants/atoms-page/radio-button/radioButtonConstants';

export interface RadioButtonContainerProps {
  headerContent: typeof RADIO_BUTTON_HEADER_CONTENT;
  breadcrumbItems?: typeof RADIO_BUTTON_BREADCRUMB_ITEMS;
}
