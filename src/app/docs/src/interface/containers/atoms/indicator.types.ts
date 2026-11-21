import { 
  INDICATOR_BREADCRUMB_ITEMS, 
  INDICATOR_HEADER_CONTENT 
} from '../../../constants/atoms-page/indicator/indicatorConstants';

export interface IndicatorContainerProps {
  headerContent: typeof INDICATOR_HEADER_CONTENT;
  breadcrumbItems?: typeof INDICATOR_BREADCRUMB_ITEMS;
}
