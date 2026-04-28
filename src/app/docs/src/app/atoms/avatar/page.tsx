import { 
  AVATAR_SECTIONS, 
  AVATAR_HEADER_CONTENT, 
  AVATAR_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/avatar/avatarConstants';
import AvatarContainer from '../../../containers/atoms-page/avatar/avatarContainer';

export const metadata = {
  title: 'Avatar | Core Circle UI',
  description: 'Visual representation of a user or entity.',
};

export default function AvatarPage() {
  return (
    <AvatarContainer 
      sections={AVATAR_SECTIONS}
      headerContent={AVATAR_HEADER_CONTENT}
      breadcrumbItems={AVATAR_BREADCRUMB_ITEMS}
    />
  );
}
