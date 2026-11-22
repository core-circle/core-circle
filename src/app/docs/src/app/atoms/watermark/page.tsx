import React from 'react';
import WatermarkContainer from '../../../containers/atoms-page/watermark/watermarkContainer';
import {
  WATERMARK_HEADER_CONTENT,
  WATERMARK_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/watermark/watermarkConstants';

export default function WatermarkPage() {
  return (
    <WatermarkContainer
      headerContent={WATERMARK_HEADER_CONTENT}
      breadcrumbItems={WATERMARK_BREADCRUMB_ITEMS}
    />
  );
}
