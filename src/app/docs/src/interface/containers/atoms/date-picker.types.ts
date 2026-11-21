import { 
  DATE_PICKER_BREADCRUMB_ITEMS, 
  DATE_PICKER_HEADER_CONTENT 
} from '../../../constants/atoms-page/date-picker/datePickerConstants';

export interface DatePickerContainerProps {
  headerContent: typeof DATE_PICKER_HEADER_CONTENT;
  breadcrumbItems?: typeof DATE_PICKER_BREADCRUMB_ITEMS;
}
