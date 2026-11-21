import { FILE_UPLOAD_SECTIONS, FILE_UPLOAD_HEADER_CONTENT, FILE_UPLOAD_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/file-upload/fileUploadConstants';
import FileUploadContainer from '../../../containers/atoms-page/file-upload/fileUploadContainer';

export const metadata = {
  title: 'FileUpload | Core Circle UI',
  description: 'An interactive drag-and-drop file upload dropzone.',
};

export default function FileUploadDocsPage() {
  return (
    <FileUploadContainer
      sections={FILE_UPLOAD_SECTIONS}
      headerContent={FILE_UPLOAD_HEADER_CONTENT}
      breadcrumbItems={FILE_UPLOAD_BREADCRUMB_ITEMS}
    />
  );
}
