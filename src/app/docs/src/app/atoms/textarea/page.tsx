import { TEXTAREA_SECTIONS, TEXTAREA_HEADER_CONTENT, TEXTAREA_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/textarea/textareaConstants';
import TextareaContainer from '../../../containers/atoms-page/textarea/textareaContainer';

export const metadata = {
  title: 'Textarea | Core Circle UI',
  description: 'Multi-line text input component.',
};

export default function TextareaDocsPage() {
  return (
    <TextareaContainer
      sections={TEXTAREA_SECTIONS}
      headerContent={TEXTAREA_HEADER_CONTENT}
      breadcrumbItems={TEXTAREA_BREADCRUMB_ITEMS}
    />
  );
}
