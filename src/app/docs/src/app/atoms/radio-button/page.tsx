import { 
  RADIO_BUTTON_HEADER_CONTENT, 
  RADIO_BUTTON_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/radio-button/radioButtonConstants';
import RadioButtonContainer from '../../../containers/atoms-page/radio-button/radioButtonContainer';

export const metadata = {
  title: 'RadioButton | Core Circle UI',
  description: 'Single selection control with rich card modes and 10 variants.',
};

export default function RadioButtonDocsPage() {
  return (
    <RadioButtonContainer
      headerContent={RADIO_BUTTON_HEADER_CONTENT}
      breadcrumbItems={RADIO_BUTTON_BREADCRUMB_ITEMS}
    />
  );
}
