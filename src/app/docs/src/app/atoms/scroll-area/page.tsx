import { SCROLL_AREA_SECTIONS, SCROLL_AREA_HEADER_CONTENT, SCROLL_AREA_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/scroll-area/scrollAreaConstants';
import ScrollAreaContainer from '../../../containers/atoms-page/scroll-area/scrollAreaContainer';

export const metadata = {
  title: 'ScrollArea | Core Circle UI',
  description: 'A cross-browser custom smooth scrollable viewport.',
};

export default function ScrollAreaDocsPage() {
  return (
    <ScrollAreaContainer
      sections={SCROLL_AREA_SECTIONS}
      headerContent={SCROLL_AREA_HEADER_CONTENT}
      breadcrumbItems={SCROLL_AREA_BREADCRUMB_ITEMS}
    />
  );
}
