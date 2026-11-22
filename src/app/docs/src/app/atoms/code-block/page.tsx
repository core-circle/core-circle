import React from 'react';
import CodeBlockContainer from '../../../containers/atoms-page/code-block/codeBlockContainer';
import {
  CODE_BLOCK_HEADER_CONTENT,
  CODE_BLOCK_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/code-block/codeBlockConstants';

export default function CodeBlockPage() {
  return (
    <CodeBlockContainer
      headerContent={CODE_BLOCK_HEADER_CONTENT}
      breadcrumbItems={CODE_BLOCK_BREADCRUMB_ITEMS}
    />
  );
}
