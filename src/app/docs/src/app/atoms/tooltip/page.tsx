import { TOOLTIP_SECTIONS, TOOLTIP_HEADER_CONTENT, TOOLTIP_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/tooltip/tooltipConstants';
import TooltipContainer from '../../../containers/atoms-page/tooltip/tooltipContainer';

export default function TooltipDocsPage() {
  return (
    <TooltipContainer
      sections={TOOLTIP_SECTIONS}
      headerContent={TOOLTIP_HEADER_CONTENT}
      breadcrumbItems={TOOLTIP_BREADCRUMB_ITEMS}
    />
  );
}
