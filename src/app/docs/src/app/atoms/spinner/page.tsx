import { SPINNER_HEADER_CONTENT, SPINNER_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/spinner/spinnerConstants';
import SpinnerContainer from '../../../containers/atoms-page/spinner/spinnerContainer';

export default function SpinnerDocsPage() {
  return (
    <SpinnerContainer
      headerContent={SPINNER_HEADER_CONTENT}
      breadcrumbItems={SPINNER_BREADCRUMB_ITEMS}
    />
  );
}
