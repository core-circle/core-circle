import { 
  PROGRESS_HEADER_CONTENT, 
  PROGRESS_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/progress/progressConstants';
import ProgressContainer from '../../../containers/atoms-page/progress/progressContainer';

export const metadata = {
  title: 'Progress | Core Circle UI',
  description: 'Visual indicator of task completion.',
};

export default function ProgressPage() {
  return (
    <ProgressContainer 
      headerContent={PROGRESS_HEADER_CONTENT}
      breadcrumbItems={PROGRESS_BREADCRUMB_ITEMS}
    />
  );
}
