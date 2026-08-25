import { AVATAR_GROUP_SECTIONS, AVATAR_GROUP_HEADER_CONTENT, AVATAR_GROUP_BREADCRUMB_ITEMS } from '../../../constants/atoms-page/avatar-group/avatarGroupConstants';
import AvatarGroupContainer from '../../../containers/atoms-page/avatar-group/avatarGroupContainer';

export const metadata = {
  title: 'AvatarGroup | Core Circle UI',
  description: 'A stacked cluster of user identity avatars.',
};

export default function AvatarGroupDocsPage() {
  return (
    <AvatarGroupContainer
      sections={AVATAR_GROUP_SECTIONS}
      headerContent={AVATAR_GROUP_HEADER_CONTENT}
      breadcrumbItems={AVATAR_GROUP_BREADCRUMB_ITEMS}
    />
  );
}
