import {
  PHONE_INPUT_BREADCRUMB_ITEMS,
  PHONE_INPUT_HEADER_CONTENT,
  PHONE_INPUT_SECTIONS,
} from '../../../constants/atoms-page/phone-input/phoneInputConstants';

export interface PhoneInputContainerProps {
  sections?: typeof PHONE_INPUT_SECTIONS;
  headerContent: typeof PHONE_INPUT_HEADER_CONTENT;
  breadcrumbItems: typeof PHONE_INPUT_BREADCRUMB_ITEMS;
}
