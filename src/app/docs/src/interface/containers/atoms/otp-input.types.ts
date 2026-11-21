import { 
  OTP_INPUT_BREADCRUMB_ITEMS, 
  OTP_INPUT_HEADER_CONTENT 
} from '../../../constants/atoms-page/otp-input/otpInputConstants';

export interface OtpInputContainerProps {
  headerContent: typeof OTP_INPUT_HEADER_CONTENT;
  breadcrumbItems?: typeof OTP_INPUT_BREADCRUMB_ITEMS;
}
