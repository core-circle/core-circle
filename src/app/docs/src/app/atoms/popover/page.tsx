import { 
  POPOVER_HEADER_CONTENT, 
  POPOVER_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/popover/popoverConstants';
import PopoverContainer from '../../../containers/atoms-page/popover/popoverContainer';

export const metadata = {
  title: 'Popover | Core Circle UI',
  description: 'Displays rich content in a portal.',
};

export default function PopoverPage() {
  return (
    <PopoverContainer 
      headerContent={POPOVER_HEADER_CONTENT}
      breadcrumbItems={POPOVER_BREADCRUMB_ITEMS}
    />
  );
}
