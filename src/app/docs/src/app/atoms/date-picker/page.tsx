import { DATE_PICKER_SECTIONS, DATE_PICKER_HEADER_CONTENT, DATE_PICKER_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/date-picker/datePickerConstants';
import DatePickerContainer from '../../../containers/atoms-page/date-picker/datePickerContainer';

export const metadata = {
  title: 'DatePicker | Core Circle UI',
  description: 'Visual date selection component.',
};

export default function DatePickerDocsPage() {
  return (
    <DatePickerContainer
      sections={DATE_PICKER_SECTIONS}
      headerContent={DATE_PICKER_HEADER_CONTENT}
      breadcrumbItems={DATE_PICKER_BREADCRUMB_ITEMS}
    />
  );
}
