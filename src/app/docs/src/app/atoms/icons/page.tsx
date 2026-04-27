import { ICONS_SECTIONS, ICONS_HEADER_CONTENT, ICONS_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/icons/iconsConstants';
import IconsContainer from '../../../containers/atoms-page/icons/iconsContainer';

export default function IconsDocsPage() {
  return (
    <IconsContainer
      sections={ICONS_SECTIONS}
      headerContent={ICONS_HEADER_CONTENT}
      breadcrumbItems={ICONS_BREADCRUMB_ITEMS}
    />
  );
}
