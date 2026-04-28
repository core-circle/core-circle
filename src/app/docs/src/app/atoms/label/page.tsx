import { LABEL_SECTIONS, LABEL_HEADER_CONTENT, LABEL_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/label/labelConstants';
import LabelContainer from '../../../containers/atoms-page/label/labelContainer';

export default function LabelDocsPage() {
  return (
    <LabelContainer
      sections={LABEL_SECTIONS}
      headerContent={LABEL_HEADER_CONTENT}
      breadcrumbItems={LABEL_BREADCRUMB_ITEMS}
    />
  );
}
