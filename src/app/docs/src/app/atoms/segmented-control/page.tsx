import {
  SEGMENTED_CONTROL_HEADER_CONTENT,
  SEGMENTED_CONTROL_BREADCRUMB_ITEMS,
  SEGMENTED_CONTROL_SECTIONS,
} from '../../../constants/atoms-page/segmented-control/segmentedControlConstants';
import SegmentedControlContainer from '../../../containers/atoms-page/segmented-control/segmentedControlContainer';

export const metadata = {
  title: 'SegmentedControl | Core Circle UI',
  description:
    'iOS/macOS-style sliding pill-button toggle for mutually exclusive selections and view switchers.',
};

export default function SegmentedControlPage() {
  return (
    <SegmentedControlContainer
      sections={SEGMENTED_CONTROL_SECTIONS}
      headerContent={SEGMENTED_CONTROL_HEADER_CONTENT}
      breadcrumbItems={SEGMENTED_CONTROL_BREADCRUMB_ITEMS}
    />
  );
}
