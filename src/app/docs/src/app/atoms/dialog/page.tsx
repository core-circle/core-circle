import { 
  DIALOG_HEADER_CONTENT, 
  DIALOG_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/dialog/dialogConstants';
import DialogContainer from '../../../containers/atoms-page/dialog/dialogContainer';

export const metadata = {
  title: 'Dialog | Core Circle UI',
  description: 'A window overlaid on the primary window.',
};

export default function DialogPage() {
  return (
    <DialogContainer 
      headerContent={DIALOG_HEADER_CONTENT}
      breadcrumbItems={DIALOG_BREADCRUMB_ITEMS}
    />
  );
}
