import { COUNTER_HEADER_CONTENT, COUNTER_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/counter/counterConstants';
import CounterContainer from '../../../containers/atoms-page/counter/counterContainer';

export default function CounterDocsPage() {
  return (
    <CounterContainer
      headerContent={COUNTER_HEADER_CONTENT}
      breadcrumbItems={COUNTER_BREADCRUMB_ITEMS}
    />
  );
}
