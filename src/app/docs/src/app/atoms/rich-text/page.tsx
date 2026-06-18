import { RICHTEXT_HEADER_CONTENT, RICHTEXT_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/rich-text/richTextConstants';
import RichTextContainer from '../../../containers/atoms-page/rich-text/richTextContainer';

export default function RichTextDocsPage() {
  return (
    <RichTextContainer
      headerContent={RICHTEXT_HEADER_CONTENT}
      breadcrumbItems={RICHTEXT_BREADCRUMB_ITEMS}
    />
  );
}
