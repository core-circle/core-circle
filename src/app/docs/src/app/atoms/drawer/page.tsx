import { DRAWER_SECTIONS, DRAWER_HEADER_CONTENT, DRAWER_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/drawer/drawerConstants';
import DrawerContainer from '../../../containers/atoms-page/drawer/drawerContainer';

export const metadata = {
  title: 'Drawer | Core Circle UI',
  description: 'A slide-over overlay panel anchored to any viewport edge.',
};

export default function DrawerDocsPage() {
  return (
    <DrawerContainer
      sections={DRAWER_SECTIONS}
      headerContent={DRAWER_HEADER_CONTENT}
      breadcrumbItems={DRAWER_BREADCRUMB_ITEMS}
    />
  );
}
