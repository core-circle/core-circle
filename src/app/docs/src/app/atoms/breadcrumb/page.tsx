import { BREADCRUMB_SECTIONS, BREADCRUMB_HEADER_CONTENT, BREADCRUMB_DOCS_ITEMS } from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';
import BreadcrumbContainer from '../../../containers/atoms-page/breadcrumb/breadcrumbContainer';

export default function BreadcrumbDocsPage() {
  return (
    <BreadcrumbContainer
      sections={BREADCRUMB_SECTIONS}
      headerContent={BREADCRUMB_HEADER_CONTENT}
      breadcrumbItems={BREADCRUMB_DOCS_ITEMS}
    />
  );
}
