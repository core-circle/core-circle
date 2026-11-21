import { TAG_INPUT_SECTIONS, TAG_INPUT_HEADER_CONTENT, TAG_INPUT_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/tag-input/tagInputConstants';
import TagInputContainer from '../../../containers/atoms-page/tag-input/tagInputContainer';

export const metadata = {
  title: 'TagInput | Core Circle UI',
  description: 'An interactive chip and tag creation input component.',
};

export default function TagInputDocsPage() {
  return (
    <TagInputContainer
      sections={TAG_INPUT_SECTIONS}
      headerContent={TAG_INPUT_HEADER_CONTENT}
      breadcrumbItems={TAG_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
