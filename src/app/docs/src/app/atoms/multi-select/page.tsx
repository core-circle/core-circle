import { 
  MULTI_SELECT_HEADER_CONTENT, 
  MULTI_SELECT_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/multi-select/multiSelectConstants';
import MultiSelectContainer from '../../../containers/atoms-page/multi-select/multiSelectContainer';

export const metadata = {
  title: 'MultiSelect | Core Circle UI',
  description: 'Select multiple items with removable tags and search filtering.',
};

export default function MultiSelectDocsPage() {
  return (
    <MultiSelectContainer
      headerContent={MULTI_SELECT_HEADER_CONTENT}
      breadcrumbItems={MULTI_SELECT_BREADCRUMB_ITEMS}
    />
  );
}
