import { 
  CARD_HEADER_CONTENT, 
  CARD_BREADCRUMB_ITEMS,
  CARD_SECTIONS 
} from '../../../constants/atoms-page/card/cardConstants';
import CardContainer from '../../../containers/atoms-page/card/cardContainer';

export const metadata = {
  title: 'Card | Core Circle UI',
  description: 'Flexible content container atom.',
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
