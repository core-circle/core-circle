import { 
  SLIDER_INPUT_BREADCRUMB_ITEMS, 
  SLIDER_INPUT_HEADER_CONTENT, 
  SLIDER_INPUT_SECTIONS 
} from '../../../constants/atoms-page/slider-input/sliderInputConstants';

export interface SliderInputContainerProps {
  sections?: typeof SLIDER_INPUT_SECTIONS;
  headerContent: typeof SLIDER_INPUT_HEADER_CONTENT;
  breadcrumbItems: typeof SLIDER_INPUT_BREADCRUMB_ITEMS;
}
