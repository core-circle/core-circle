import { RADIO_BUTTON_SECTIONS, RADIO_BUTTON_HEADER_CONTENT, RADIO_BUTTON_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/radio-button/radioButtonConstants';
import RadioButtonContainer from '../../../containers/atoms-page/radio-button/radioButtonContainer';

export default function RadioButtonDocsPage() {
  return (
    <RadioButtonContainer
      sections={RADIO_BUTTON_SECTIONS}
      headerContent={RADIO_BUTTON_HEADER_CONTENT}
      breadcrumbItems={RADIO_BUTTON_BREADCRUMB_ITEMS}
    />
  );
}
