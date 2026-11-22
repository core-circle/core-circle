import {
  PASSWORD_INPUT_HEADER_CONTENT,
  PASSWORD_INPUT_BREADCRUMB_ITEMS,
  PASSWORD_INPUT_SECTIONS,
} from '../../../constants/atoms-page/password-input/passwordInputConstants';
import PasswordInputContainer from '../../../containers/atoms-page/password-input/passwordInputContainer';

export const metadata = {
  title: 'PasswordInput | Core Circle UI',
  description:
    'Secure password input field with show/hide toggle, live strength indicator, and caps lock detection.',
};

export default function PasswordInputPage() {
  return (
    <PasswordInputContainer
      sections={PASSWORD_INPUT_SECTIONS}
      headerContent={PASSWORD_INPUT_HEADER_CONTENT}
      breadcrumbItems={PASSWORD_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
