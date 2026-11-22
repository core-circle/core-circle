import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { qrCodeContainerVariants } from '../../../components/atoms/qr-code/qr-code.styles';
import { QRErrorCorrectionLevel } from '../../../components/atoms/qr-code/qr-generator';

export type QRCodeVariant = 'default' | 'card' | 'bordered';

export interface QRCodeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof qrCodeContainerVariants> {
  /** Target URL, string, WiFi payload, or cryptographic identifier */
  value: string;
  /** Pixel size (width and height) of the rendered QR Code canvas. Default: 180 */
  size?: number;
  /** Primary dark module fill color. Default: '#0f172a' */
  color?: string;
  /** Background canvas fill color. Default: '#ffffff' */
  bgColor?: string;
  /** ISO/IEC 18004 Error Correction Level: 'L' (7%), 'M' (15%), 'Q' (25%), 'H' (30%). Default: 'M' */
  level?: QRErrorCorrectionLevel;
  /** Whether to render a 4-module quiet zone margin around the matrix. Default: true */
  includeMargin?: boolean;
  /** Center emblem, brand icon, or badge slot */
  logo?: React.ReactNode;
  /** Text caption or subtitle rendered below the QR Code */
  caption?: string;
  /** Sub-caption or secondary descriptive text */
  helperText?: string;
  /** Whether to show interactive copy & download buttons */
  downloadable?: boolean;
}
