import { ASPECT_RATIO_HEADER_CONTENT, ASPECT_RATIO_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/aspect-ratio/aspectRatioConstants';
import AspectRatioContainer from '../../../containers/atoms-page/aspect-ratio/aspectRatioContainer';

export default function AspectRatioDocsPage() {
  return (
    <AspectRatioContainer
      headerContent={ASPECT_RATIO_HEADER_CONTENT}
      breadcrumbItems={ASPECT_RATIO_BREADCRUMB_ITEMS}
    />
  );
}
