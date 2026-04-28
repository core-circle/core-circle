import { 
  BADGE_SECTIONS, 
  BADGE_HEADER_CONTENT, 
  BADGE_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/badge/badgeConstants';
import BadgeContainer from '../../../containers/atoms-page/badge/badgeContainer';

export const metadata = {
  title: 'Badge | Core Circle UI',
  description: 'Small visual indicator for status, counts, or categorization.',
};

export default function BadgePage() {
  return (
    <BadgeContainer 
      sections={BADGE_SECTIONS}
      headerContent={BADGE_HEADER_CONTENT}
      breadcrumbItems={BADGE_BREADCRUMB_ITEMS}
    />
  );
}
