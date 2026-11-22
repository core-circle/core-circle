import React from 'react';
import CommandContainer from '../../../containers/atoms-page/command/commandContainer';
import {
  COMMAND_HEADER_CONTENT,
  COMMAND_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/command/commandConstants';

export default function CommandPage() {
  return (
    <CommandContainer
      headerContent={COMMAND_HEADER_CONTENT}
      breadcrumbItems={COMMAND_BREADCRUMB_ITEMS}
    />
  );
}
