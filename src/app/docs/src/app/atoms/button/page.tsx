import { BUTTON_HEADER_CONTENT, BUTTON_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/button/buttonConstants';
import ButtonContainer from '../../../containers/atoms-page/button/buttonContainer';

export default function ButtonDocsPage() {
  return (
    <ButtonContainer
      headerContent={BUTTON_HEADER_CONTENT}
      breadcrumbItems={BUTTON_BREADCRUMB_ITEMS}
    />
  );
}
