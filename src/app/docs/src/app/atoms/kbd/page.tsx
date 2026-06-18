import { KBD_HEADER_CONTENT, KBD_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/kbd/kbdConstants';
import KbdContainer from '../../../containers/atoms-page/kbd/kbdContainer';

export default function KbdDocsPage() {
  return (
    <KbdContainer
      headerContent={KBD_HEADER_CONTENT}
      breadcrumbItems={KBD_BREADCRUMB_ITEMS}
    />
  );
}
