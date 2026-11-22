import {
  SIGNATURE_PAD_BREADCRUMB_ITEMS,
  SIGNATURE_PAD_HEADER_CONTENT,
  SIGNATURE_PAD_SECTIONS,
} from '../../../constants/atoms-page/signature-pad/signaturePadConstants';

export interface SignaturePadContainerProps {
  sections?: typeof SIGNATURE_PAD_SECTIONS;
  headerContent: typeof SIGNATURE_PAD_HEADER_CONTENT;
  breadcrumbItems: typeof SIGNATURE_PAD_BREADCRUMB_ITEMS;
}
