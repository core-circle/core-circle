import {
  PHONE_INPUT_HEADER_CONTENT,
  PHONE_INPUT_BREADCRUMB_ITEMS,
  PHONE_INPUT_SECTIONS,
} from '../../../constants/atoms-page/phone-input/phoneInputConstants';
import PhoneInputContainer from '../../../containers/atoms-page/phone-input/phoneInputContainer';

export const metadata = {
  title: 'PhoneInput | Core Circle UI',
  description:
    'International phone number input with interactive country flag selector, dial masks, and automated number formatting.',
};

export default function PhoneInputPage() {
  return (
    <PhoneInputContainer
      sections={PHONE_INPUT_SECTIONS}
      headerContent={PHONE_INPUT_HEADER_CONTENT}
      breadcrumbItems={PHONE_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
