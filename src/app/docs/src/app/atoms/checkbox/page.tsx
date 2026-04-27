import { CHECKBOX_SECTIONS, CHECKBOX_HEADER_CONTENT, CHECKBOX_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/checkbox/checkboxConstants';
import CheckboxContainer from '../../../containers/atoms-page/checkbox/checkboxContainer';

export default function CheckboxDocsPage() {
  return (
    <CheckboxContainer
      sections={CHECKBOX_SECTIONS}
      headerContent={CHECKBOX_HEADER_CONTENT}
      breadcrumbItems={CHECKBOX_BREADCRUMB_ITEMS}
    />
  );
}
