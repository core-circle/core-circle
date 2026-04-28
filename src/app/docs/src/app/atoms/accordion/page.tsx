import { 
  ACCORDION_SECTIONS, 
  ACCORDION_HEADER_CONTENT, 
  ACCORDION_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/accordion/accordionConstants';
import AccordionContainer from '../../../containers/atoms-page/accordion/accordionContainer';

export const metadata = {
  title: 'Accordion | Core Circle UI',
  description: 'Vertical stacked sections of content.',
};

export default function AccordionPage() {
  return (
    <AccordionContainer 
      sections={ACCORDION_SECTIONS}
      headerContent={ACCORDION_HEADER_CONTENT}
      breadcrumbItems={ACCORDION_BREADCRUMB_ITEMS}
    />
  );
}
