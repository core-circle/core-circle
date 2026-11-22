import React from 'react';
import DropdownMenuContainer from '../../../containers/atoms-page/dropdown-menu/dropdownMenuContainer';
import {
  DROPDOWN_MENU_HEADER_CONTENT,
  DROPDOWN_MENU_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/dropdown-menu/dropdownMenuConstants';

export const metadata = {
  title: 'DropdownMenu | CoreCircle Design System',
  description: 'An interactive contextual action menu triggered by click with shortcuts and submenus.',
};

export default function DropdownMenuPage() {
  return (
    <DropdownMenuContainer
      headerContent={DROPDOWN_MENU_HEADER_CONTENT}
      breadcrumbItems={DROPDOWN_MENU_BREADCRUMB_ITEMS}
    />
  );
}
