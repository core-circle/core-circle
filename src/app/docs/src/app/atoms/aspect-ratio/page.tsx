import { ASPECT_RATIO_SECTIONS, ASPECT_RATIO_HEADER_CONTENT, ASPECT_RATIO_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/aspect-ratio/aspectRatioConstants';
import AspectRatioContainer from '../../../containers/atoms-page/aspect-ratio/aspectRatioContainer';

export const metadata = {
  title: 'AspectRatio | Core Circle UI',
  description: 'A responsive layout container enforcing strict proportional dimensions.',
};

export default function AspectRatioDocsPage() {
  return (
    <AspectRatioContainer
      sections={ASPECT_RATIO_SECTIONS}
      headerContent={ASPECT_RATIO_HEADER_CONTENT}
      breadcrumbItems={ASPECT_RATIO_BREADCRUMB_ITEMS}
    />
  );
}
