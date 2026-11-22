import { SWITCH_HEADER_CONTENT, SWITCH_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/switch/switchConstants';
import SwitchContainer from '../../../containers/atoms-page/switch/switchContainer';

export default function SwitchDocsPage() {
  return (
    <SwitchContainer
      headerContent={SWITCH_HEADER_CONTENT}
      breadcrumbItems={SWITCH_BREADCRUMB_ITEMS}
    />
  );
}
