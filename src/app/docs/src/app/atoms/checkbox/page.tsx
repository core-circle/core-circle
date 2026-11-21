import { 
  CHECKBOX_HEADER_CONTENT, 
  CHECKBOX_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/checkbox/checkboxConstants';
import CheckboxContainer from '../../../containers/atoms-page/checkbox/checkboxContainer';

export const metadata = {
  title: 'Checkbox | Core Circle UI',
  description: 'Selection control with indeterminate group support and 10 variants.',
};

export default function CheckboxDocsPage() {
  return (
    <CheckboxContainer
      headerContent={CHECKBOX_HEADER_CONTENT}
      breadcrumbItems={CHECKBOX_BREADCRUMB_ITEMS}
    />
  );
}
