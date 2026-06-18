import { 
  OTP_INPUT_BREADCRUMB_ITEMS, 
  OTP_INPUT_HEADER_CONTENT, 
  OTP_INPUT_SECTIONS 
} from '../../../constants/atoms-page/otp-input/otpInputConstants';

export interface OTPInputContainerProps {
  sections: typeof OTP_INPUT_SECTIONS;
  headerContent: typeof OTP_INPUT_HEADER_CONTENT;
  breadcrumbItems: typeof OTP_INPUT_BREADCRUMB_ITEMS;
}
