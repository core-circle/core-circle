import { SLIDER_INPUT_SECTIONS, SLIDER_INPUT_HEADER_CONTENT, SLIDER_INPUT_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/slider-input/sliderInputConstants';
import SliderInputContainer from '../../../containers/atoms-page/slider-input/sliderInputContainer';

export default function SliderInputDocsPage() {
  return (
    <SliderInputContainer 
      sections={SLIDER_INPUT_SECTIONS}
      headerContent={SLIDER_INPUT_HEADER_CONTENT}
      breadcrumbItems={SLIDER_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
