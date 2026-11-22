import React from 'react';
import PromptInputContainer from '../../../containers/atoms-page/prompt-input/promptInputContainer';
import {
  PROMPT_INPUT_HEADER_CONTENT,
  PROMPT_INPUT_BREADCRUMB_ITEMS,
} from '../../../constants/atoms-page/prompt-input/promptInputConstants';

export default function PromptInputPage() {
  return (
    <PromptInputContainer
      headerContent={PROMPT_INPUT_HEADER_CONTENT}
      breadcrumbItems={PROMPT_INPUT_BREADCRUMB_ITEMS}
    />
  );
}
