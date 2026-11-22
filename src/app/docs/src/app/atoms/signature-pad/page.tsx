import {
  SIGNATURE_PAD_HEADER_CONTENT,
  SIGNATURE_PAD_BREADCRUMB_ITEMS,
  SIGNATURE_PAD_SECTIONS,
} from '../../../constants/atoms-page/signature-pad/signaturePadConstants';
import SignaturePadContainer from '../../../containers/atoms-page/signature-pad/signaturePadContainer';

export const metadata = {
  title: 'SignaturePad | Core Circle UI',
  description:
    'HTML5 canvas digital signature capture component featuring stroke customization, undo history, and PNG export.',
};

export default function SignaturePadPage() {
  return (
    <SignaturePadContainer
      sections={SIGNATURE_PAD_SECTIONS}
      headerContent={SIGNATURE_PAD_HEADER_CONTENT}
      breadcrumbItems={SIGNATURE_PAD_BREADCRUMB_ITEMS}
    />
  );
}
