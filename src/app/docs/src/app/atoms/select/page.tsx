import { SELECT_SECTIONS, SELECT_HEADER_CONTENT, SELECT_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/select/selectConstants';
import SelectContainer from '../../../containers/atoms-page/select/selectContainer';

export default function SelectDocsPage() {
  return (
    <SelectContainer
      sections={SELECT_SECTIONS}
      headerContent={SELECT_HEADER_CONTENT}
      breadcrumbItems={SELECT_BREADCRUMB_ITEMS}
    />
  );
}
