import {
  COLOR_PICKER_SECTIONS,
  COLOR_PICKER_HEADER_CONTENT,
  COLOR_PICKER_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/color-picker/colorPickerConstants';
import ColorPickerContainer from '../../../containers/atoms-page/color-picker/colorPickerContainer';

export const metadata = {
  title: 'ColorPicker | Core Circle UI',
  description: 'Visual color selection component.',
};

export default function ColorPickerDocsPage() {
  return (
    <ColorPickerContainer
      sections={COLOR_PICKER_SECTIONS}
      headerContent={COLOR_PICKER_HEADER_CONTENT}
      breadcrumbItems={COLOR_PICKER_BREADCRUMB_ITEMS}
    />
  );
}
