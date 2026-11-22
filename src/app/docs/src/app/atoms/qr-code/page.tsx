import React from 'react';
import QRCodeContainer from '../../../containers/atoms-page/qr-code/qrCodeContainer';
import {
  QR_CODE_HEADER_CONTENT,
  QR_CODE_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/qr-code/qrCodeConstants';

export default function QRCodePage() {
  return (
    <QRCodeContainer
      headerContent={QR_CODE_HEADER_CONTENT}
      breadcrumbItems={QR_CODE_BREADCRUMB_ITEMS}
    />
  );
}
