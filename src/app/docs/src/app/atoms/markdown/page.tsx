import React from 'react';
import MarkdownContainer from '../../../containers/atoms-page/markdown/markdownContainer';
import {
  MARKDOWN_HEADER_CONTENT,
  MARKDOWN_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/markdown/markdownConstants';

export default function MarkdownPage() {
  return (
    <MarkdownContainer
      headerContent={MARKDOWN_HEADER_CONTENT}
      breadcrumbItems={MARKDOWN_BREADCRUMB_ITEMS}
    />
  );
}
