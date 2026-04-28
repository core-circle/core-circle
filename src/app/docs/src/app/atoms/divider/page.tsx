import { DIVIDER_HEADER_CONTENT, DIVIDER_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/divider/dividerConstants';
import DividerContainer from '../../../containers/atoms-page/divider/dividerContainer';

export default function DividerDocsPage() {
  return (
    <DividerContainer
      headerContent={DIVIDER_HEADER_CONTENT}
      breadcrumbItems={DIVIDER_BREADCRUMB_ITEMS}
    />
  );
}
