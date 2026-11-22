import {
  INPUT_GROUP_HEADER_CONTENT,
  INPUT_GROUP_BREADCRUMB_ITEMS,
  INPUT_GROUP_SECTIONS,
} from '../../../constants/atoms-page/input-group/inputGroupConstants';
import InputGroupContainer from '../../../containers/atoms-page/input-group/inputGroupContainer';

export const metadata = {
  title: 'InputGroup | Core Circle UI',
  description:
    'Composite input container attaching prefix/suffix text add-ons, dropdowns, and actionable trigger buttons.',
};

export default function InputGroupPage() {
  return (
    <InputGroupContainer
      sections={INPUT_GROUP_SECTIONS}
      headerContent={INPUT_GROUP_HEADER_CONTENT}
      breadcrumbItems={INPUT_GROUP_BREADCRUMB_ITEMS}
    />
  );
}
