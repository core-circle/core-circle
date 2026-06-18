import { 
  TOAST_HEADER_CONTENT, 
  TOAST_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/toast/toastConstants';
import ToastContainer from '../../../containers/atoms-page/toast/toastContainer';

export const metadata = {
  title: 'Toast | Core Circle UI',
  description: 'A succinct message that is displayed temporarily.',
};

export default function ToastPage() {
  return (
    <ToastContainer 
      headerContent={TOAST_HEADER_CONTENT}
      breadcrumbItems={TOAST_BREADCRUMB_ITEMS}
    />
  );
}
