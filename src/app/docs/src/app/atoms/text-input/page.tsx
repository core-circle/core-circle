import { TEXT_INPUT_SECTIONS, TEXT_INPUT_HEADER_CONTENT, TEXT_INPUT_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/text-input/textInputConstants';
import TextInputContainer from '../../../containers/atoms-page/text-input/textInputContainer';

export default function TextInputDocsPage() {
  return (
    <TextInputContainer
      sections={TEXT_INPUT_SECTIONS}
      headerContent={TEXT_INPUT_HEADER_CONTENT}
      breadcrumbItems={TEXT_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
