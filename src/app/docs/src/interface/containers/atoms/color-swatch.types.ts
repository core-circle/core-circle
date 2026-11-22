import {
  COLOR_SWATCH_BREADCRUMB_ITEMS,
  COLOR_SWATCH_HEADER_CONTENT,
  COLOR_SWATCH_SECTIONS,
} from '../../../constants/atoms-page/color-swatch/colorSwatchConstants';

export interface ColorSwatchContainerProps {
  sections?: typeof COLOR_SWATCH_SECTIONS;
  headerContent: typeof COLOR_SWATCH_HEADER_CONTENT;
  breadcrumbItems: typeof COLOR_SWATCH_BREADCRUMB_ITEMS;
}
