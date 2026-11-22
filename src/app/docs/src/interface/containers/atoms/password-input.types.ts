import {
  PASSWORD_INPUT_BREADCRUMB_ITEMS,
  PASSWORD_INPUT_HEADER_CONTENT,
  PASSWORD_INPUT_SECTIONS,
} from '../../../constants/atoms-page/password-input/passwordInputConstants';

export interface PasswordInputContainerProps {
  sections?: typeof PASSWORD_INPUT_SECTIONS;
  headerContent: typeof PASSWORD_INPUT_HEADER_CONTENT;
  breadcrumbItems: typeof PASSWORD_INPUT_BREADCRUMB_ITEMS;
}
