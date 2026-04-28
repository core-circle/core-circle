import { 
  RADIO_BUTTON_BREADCRUMB_ITEMS, 
  RADIO_BUTTON_HEADER_CONTENT, 
  RADIO_BUTTON_SECTIONS 
} from '../../../constants/atoms-page/radio-button/radioButtonConstants';

export interface RadioButtonContainerProps {
  sections: typeof RADIO_BUTTON_SECTIONS;
  headerContent: typeof RADIO_BUTTON_HEADER_CONTENT;
  breadcrumbItems: typeof RADIO_BUTTON_BREADCRUMB_ITEMS;
}
