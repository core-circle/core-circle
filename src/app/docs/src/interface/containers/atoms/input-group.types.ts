import {
  INPUT_GROUP_BREADCRUMB_ITEMS,
  INPUT_GROUP_HEADER_CONTENT,
  INPUT_GROUP_SECTIONS,
} from '../../../constants/atoms-page/input-group/inputGroupConstants';

export interface InputGroupContainerProps {
  sections?: typeof INPUT_GROUP_SECTIONS;
  headerContent: typeof INPUT_GROUP_HEADER_CONTENT;
  breadcrumbItems: typeof INPUT_GROUP_BREADCRUMB_ITEMS;
}
