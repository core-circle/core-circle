import { 
  LABEL_HEADER_CONTENT, 
  LABEL_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/label/labelConstants';
import LabelContainer from '../../../containers/atoms-page/label/labelContainer';

export const metadata = {
  title: 'Label | Core Circle UI',
  description: 'Form label primitive with required and optional indicators.',
};

export default function LabelDocsPage() {
  return (
    <LabelContainer
      headerContent={LABEL_HEADER_CONTENT}
      breadcrumbItems={LABEL_BREADCRUMB_ITEMS}
    />
  );
}
