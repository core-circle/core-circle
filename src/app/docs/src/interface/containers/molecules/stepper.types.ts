import { 
  STEPPER_BREADCRUMB_ITEMS, 
  STEPPER_HEADER_CONTENT, 
  STEPPER_SECTIONS 
} from '../../../constants/molecules-page/stepper/stepperConstants';

export interface StepperContainerProps {
  sections: typeof STEPPER_SECTIONS;
  headerContent: typeof STEPPER_HEADER_CONTENT;
  breadcrumbItems: typeof STEPPER_BREADCRUMB_ITEMS;
}
