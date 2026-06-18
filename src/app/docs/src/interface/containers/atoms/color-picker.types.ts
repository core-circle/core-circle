import { 
  COLOR_PICKER_BREADCRUMB_ITEMS, 
  COLOR_PICKER_HEADER_CONTENT, 
  COLOR_PICKER_SECTIONS 
} from '../../../constants/atoms-page/color-picker/colorPickerConstants';

export interface ColorPickerContainerProps {
  sections: typeof COLOR_PICKER_SECTIONS;
  headerContent: typeof COLOR_PICKER_HEADER_CONTENT;
  breadcrumbItems: typeof COLOR_PICKER_BREADCRUMB_ITEMS;
}
