import { SKELETON_HEADER_CONTENT, SKELETON_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/skeleton/skeletonConstants';
import SkeletonContainer from '../../../containers/atoms-page/skeleton/skeletonContainer';

export default function SkeletonDocsPage() {
  return (
    <SkeletonContainer
      headerContent={SKELETON_HEADER_CONTENT}
      breadcrumbItems={SKELETON_BREADCRUMB_ITEMS}
    />
  );
}
