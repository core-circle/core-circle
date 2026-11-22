import {
  NUMBER_INPUT_HEADER_CONTENT,
  NUMBER_INPUT_BREADCRUMB_ITEMS,
  NUMBER_INPUT_SECTIONS,
} from '../../../constants/atoms-page/number-input/numberInputConstants';
import NumberInputContainer from '../../../containers/atoms-page/number-input/numberInputContainer';

export const metadata = {
  title: 'NumberInput | Core Circle UI',
  description:
    'Formatted numeric and currency input featuring steppers, decimal precision, thousand separators, and boundary clamping.',
};

export default function NumberInputPage() {
  return (
    <NumberInputContainer
      sections={NUMBER_INPUT_SECTIONS}
      headerContent={NUMBER_INPUT_HEADER_CONTENT}
      breadcrumbItems={NUMBER_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
