import { TABS_SECTIONS, TABS_HEADER_CONTENT, TABS_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/tabs/tabsConstants';
import TabsContainer from '../../../containers/atoms-page/tabs/tabsContainer';

export default function TabsDocsPage() {
  return (
    <TabsContainer 
      sections={TABS_SECTIONS}
      headerContent={TABS_HEADER_CONTENT}
      breadcrumbItems={TABS_BREADCRUMB_ITEMS}
    />
  );
}
