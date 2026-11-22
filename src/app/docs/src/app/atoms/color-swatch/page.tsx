import {
  COLOR_SWATCH_HEADER_CONTENT,
  COLOR_SWATCH_BREADCRUMB_ITEMS,
  COLOR_SWATCH_SECTIONS,
} from '../../../constants/atoms-page/color-swatch/colorSwatchConstants';
import ColorSwatchContainer from '../../../containers/atoms-page/color-swatch/colorSwatchContainer';

export const metadata = {
  title: 'ColorSwatch | Core Circle UI',
  description:
    'Interactive color palette selection matrix featuring checkmark indicators, geometric shapes, and tooltips.',
};

export default function ColorSwatchPage() {
  return (
    <ColorSwatchContainer
      sections={COLOR_SWATCH_SECTIONS}
      headerContent={COLOR_SWATCH_HEADER_CONTENT}
      breadcrumbItems={COLOR_SWATCH_BREADCRUMB_ITEMS}
    />
  );
}
