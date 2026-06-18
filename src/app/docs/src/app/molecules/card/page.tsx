import { CARD_SECTIONS, CARD_HEADER_CONTENT, CARD_BREADCRUMB_ITEMS } from '../../../constants/molecules-page/card/cardConstants';
import CardContainer from '../../../containers/molecules-page/card/cardContainer';

export const metadata = {
  title: 'Card | Core Circle UI',
  description: 'Flexible content container molecule.',
};

export default function CardDocsPage() {
  return (
    <CardContainer
      sections={CARD_SECTIONS}
      headerContent={CARD_HEADER_CONTENT}
      breadcrumbItems={CARD_BREADCRUMB_ITEMS}
    />
  );
}
