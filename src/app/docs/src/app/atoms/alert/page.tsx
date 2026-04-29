import { 
  ALERT_HEADER_CONTENT, 
  ALERT_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/alert/alertConstants';
import AlertContainer from '../../../containers/atoms-page/alert/alertContainer';

export const metadata = {
  title: 'Alert | Core Circle UI',
  description: 'Displays a callout for user attention.',
};

export default function AlertPage() {
  return (
    <AlertContainer 
      headerContent={ALERT_HEADER_CONTENT}
      breadcrumbItems={ALERT_BREADCRUMB_ITEMS}
    />
  );
}
