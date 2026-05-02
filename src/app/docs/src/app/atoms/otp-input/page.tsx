import { OTP_INPUT_SECTIONS, OTP_INPUT_HEADER_CONTENT, OTP_INPUT_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/otp-input/otpInputConstants';
import OTPInputContainer from '../../../containers/atoms-page/otp-input/otpInputContainer';

export const metadata = {
  title: 'OTPInput | Core Circle UI',
  description: 'Verification code input component.',
};

export default function OTPInputDocsPage() {
  return (
    <OTPInputContainer
      sections={OTP_INPUT_SECTIONS}
      headerContent={OTP_INPUT_HEADER_CONTENT}
      breadcrumbItems={OTP_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
