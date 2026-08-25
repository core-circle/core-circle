import { TIME_PICKER_SECTIONS, TIME_PICKER_HEADER_CONTENT, TIME_PICKER_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/time-picker/timePickerConstants';
import TimePickerContainer from '../../../containers/atoms-page/time-picker/timePickerContainer';

export const metadata = {
  title: 'TimePicker | Core Circle UI',
  description: 'An interactive time selection input component.',
};

export default function TimePickerDocsPage() {
  return (
    <TimePickerContainer
      sections={TIME_PICKER_SECTIONS}
      headerContent={TIME_PICKER_HEADER_CONTENT}
      breadcrumbItems={TIME_PICKER_BREADCRUMB_ITEMS}
    />
  );
}
