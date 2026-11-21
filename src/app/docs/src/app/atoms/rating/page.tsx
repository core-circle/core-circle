import { RATING_SECTIONS, RATING_HEADER_CONTENT, RATING_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/rating/ratingConstants';
import RatingContainer from '../../../containers/atoms-page/rating/ratingContainer';

export const metadata = {
  title: 'Rating | Core Circle UI',
  description: 'An interactive satisfaction and evaluation rating component.',
};

export default function RatingDocsPage() {
  return (
    <RatingContainer
      sections={RATING_SECTIONS}
      headerContent={RATING_HEADER_CONTENT}
      breadcrumbItems={RATING_BREADCRUMB_ITEMS}
    />
  );
}
