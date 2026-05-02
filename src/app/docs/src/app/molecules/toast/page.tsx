import { TOAST_SECTIONS, TOAST_HEADER_CONTENT, TOAST_BREADCRUMB_ITEMS } from '../../../constants/molecules-page/toast/toastConstants';
import ToastContainer from '../../../containers/molecules-page/toast/toastContainer';

export const metadata = {
  title: 'Toast | Core Circle UI',
  description: 'Temporary notification component system.',
};

export default function ToastDocsPage() {
  return (
    <ToastContainer
      sections={TOAST_SECTIONS}
      headerContent={TOAST_HEADER_CONTENT}
      breadcrumbItems={TOAST_BREADCRUMB_ITEMS}
    />
  );
}
