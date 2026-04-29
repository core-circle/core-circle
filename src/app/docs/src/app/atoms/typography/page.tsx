import { TYPOGRAPHY_HEADER_CONTENT, TYPOGRAPHY_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/typography/typographyConstants';
import TypographyContainer from '../../../containers/atoms-page/typography/typographyContainer';

export default function TypographyDocsPage() {
  return (
    <TypographyContainer
      headerContent={TYPOGRAPHY_HEADER_CONTENT}
      breadcrumbItems={TYPOGRAPHY_BREADCRUMB_ITEMS}
    />
  );
}
