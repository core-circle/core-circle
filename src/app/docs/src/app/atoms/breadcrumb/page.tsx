import { BREADCRUMB_HEADER_CONTENT, BREADCRUMB_DOCS_ITEMS } from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';
import BreadcrumbContainer from '../../../containers/atoms-page/breadcrumb/breadcrumbContainer';

export default function BreadcrumbDocsPage() {
  return (
    <BreadcrumbContainer
      headerContent={BREADCRUMB_HEADER_CONTENT}
      breadcrumbItems={BREADCRUMB_DOCS_ITEMS}
    />
  );
}
