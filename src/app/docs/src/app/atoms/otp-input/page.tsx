import { 
  OTP_INPUT_HEADER_CONTENT, 
  OTP_INPUT_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/otp-input/otpInputConstants';
import OtpInputContainer from '../../../containers/atoms-page/otp-input/otpInputContainer';

export const metadata = {
  title: 'OtpInput | Core Circle UI',
  description: 'Verification code input component with 10 variants.',
};

export default function OTPInputDocsPage() {
  return (
    <OtpInputContainer
      headerContent={OTP_INPUT_HEADER_CONTENT}
      breadcrumbItems={OTP_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
