import { 
  COLOR_PICKER_BREADCRUMB_ITEMS, 
  COLOR_PICKER_HEADER_CONTENT 
} from '../../../constants/atoms-page/color-picker/colorPickerConstants';

export interface ColorPickerContainerProps {
  headerContent: typeof COLOR_PICKER_HEADER_CONTENT;
  breadcrumbItems?: typeof COLOR_PICKER_BREADCRUMB_ITEMS;
}
