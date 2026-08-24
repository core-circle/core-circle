import { 
  DATE_PICKER_BREADCRUMB_ITEMS, 
  DATE_PICKER_HEADER_CONTENT, 
  DATE_PICKER_SECTIONS 
} from '../../../constants/atoms-page/date-picker/datePickerConstants';

export interface DatePickerContainerProps {
  sections: typeof DATE_PICKER_SECTIONS;
  headerContent: typeof DATE_PICKER_HEADER_CONTENT;
  breadcrumbItems: typeof DATE_PICKER_BREADCRUMB_ITEMS;
}
