import { STEPPER_SECTIONS, STEPPER_HEADER_CONTENT, STEPPER_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/stepper/stepperConstants';
import StepperContainer from '../../../containers/atoms-page/stepper/stepperContainer';

export const metadata = {
  title: 'Stepper | Core Circle UI',
  description: 'Multi-step progress indicator component.',
};

export default function StepperDocsPage() {
  return (
    <StepperContainer
      sections={STEPPER_SECTIONS}
      headerContent={STEPPER_HEADER_CONTENT}
      breadcrumbItems={STEPPER_BREADCRUMB_ITEMS}
    />
  );
}
