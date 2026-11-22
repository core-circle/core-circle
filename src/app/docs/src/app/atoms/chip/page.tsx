import {
  CHIP_HEADER_CONTENT,
  CHIP_BREADCRUMB_ITEMS,
  CHIP_SECTIONS,
} from '../../../constants/atoms-page/chip/chipConstants';
import ChipContainer from '../../../containers/atoms-page/chip/chipContainer';

export const metadata = {
  title: 'Chip | Core Circle UI',
  description:
    'Interactive compact pill for multi-selection filters, removable tags, counts, and entity chips.',
};

export default function ChipPage() {
  return (
    <ChipContainer
      sections={CHIP_SECTIONS}
      headerContent={CHIP_HEADER_CONTENT}
      breadcrumbItems={CHIP_BREADCRUMB_ITEMS}
    />
  );
}
