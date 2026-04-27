import { MULTI_SELECT_SECTIONS, MULTI_SELECT_HEADER_CONTENT, MULTI_SELECT_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/multi-select/multiSelectConstants';
import MultiSelectContainer from '../../../containers/atoms-page/multi-select/multiSelectContainer';

export default function MultiSelectDocsPage() {
  return (
    <MultiSelectContainer
      sections={MULTI_SELECT_SECTIONS}
      headerContent={MULTI_SELECT_HEADER_CONTENT}
      breadcrumbItems={MULTI_SELECT_BREADCRUMB_ITEMS}
    />
  );
}
