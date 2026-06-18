import { INDICATOR_HEADER_CONTENT, INDICATOR_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/indicator/indicatorConstants';
import IndicatorContainer from '../../../containers/atoms-page/indicator/indicatorContainer';

export default function IndicatorDocsPage() {
  return (
    <IndicatorContainer
      headerContent={INDICATOR_HEADER_CONTENT}
      breadcrumbItems={INDICATOR_BREADCRUMB_ITEMS}
    />
  );
}
