import { SWITCH_SECTIONS, SWITCH_HEADER_CONTENT, SWITCH_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/switch/switchConstants';
import SwitchContainer from '../../../containers/atoms-page/switch/switchContainer';

export default function SwitchDocsPage() {
  return (
    <SwitchContainer
      sections={SWITCH_SECTIONS}
      headerContent={SWITCH_HEADER_CONTENT}
      breadcrumbItems={SWITCH_BREADCRUMB_ITEMS}
    />
  );
}
