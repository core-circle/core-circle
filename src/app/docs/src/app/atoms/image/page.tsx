import { IMAGE_HEADER_CONTENT, IMAGE_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/image/imageConstants';
import ImageContainer from '../../../containers/atoms-page/image/imageContainer';

export default function ImageDocsPage() {
  return (
    <ImageContainer
      headerContent={IMAGE_HEADER_CONTENT}
      breadcrumbItems={IMAGE_BREADCRUMB_ITEMS}
    />
  );
}
