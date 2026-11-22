import React from 'react';
import { PromptInput } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const PROMPT_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'PromptInput' },
];

export const PROMPT_INPUT_HEADER_CONTENT = {
  title: 'PromptInput',
  description:
    'An auto-growing multiline chat and copilot prompt input component featuring model pill selection, file attachment actions, voice dictation, and streaming cancel controls.',
};

export const PROMPT_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore generative AI chat consoles, engineering copilots, data science assistants, and compact omnibars.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore framing containers, generating stop states, media action toggles, and multiline heights.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test auto-growing prompts, model switches, and streaming cancel buttons.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Vercel AI SDK and streaming response integration pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const PROMPT_INPUT_THEME_CONFIGS = [
  {
    id: 'theming-multimodal-chat',
    title: '1. Multimodal AI Assistant Console Theme',
    description: 'Standard conversational surface with model selector and attachment tools.',
    previewTitle: 'Generative AI Interface',
    code: `<PromptInput
  placeholder="Ask Gemini, upload a screenshot, or dictate..."
  models={['Gemini 2.0 Flash', 'Claude 3.7 Sonnet', 'GPT-4o']}
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <PromptInput
            placeholder="Ask Gemini, upload a screenshot, or dictate..."
            models={['Gemini 2.0 Flash', 'Claude 3.7 Sonnet', 'GPT-4o']}
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-code-copilot',
    title: '2. Full-Stack Software Engineering Copilot Theme',
    description: 'High-contrast bordered input optimized for code refactoring instructions.',
    previewTitle: 'Architecture Code Copilot',
    code: `<PromptInput
  placeholder="Describe the React component or backend API to scaffold..."
  models={['Claude 3.7 Sonnet (Thinking)', 'DeepSeek-R1']}
  variant="bordered"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <PromptInput
            placeholder="Describe the React component or backend API to scaffold..."
            models={['Claude 3.7 Sonnet (Thinking)', 'DeepSeek-R1']}
            variant="bordered"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-streaming-active',
    title: '3. Real-Time Streaming Generation Theme',
    description: 'Shows active streaming state with circular red Stop generation button.',
    previewTitle: 'Active Streaming Generation',
    code: `<PromptInput
  value="Generate an optimized PostgreSQL database schema for multi-tenant billing..."
  loading
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <PromptInput
            value="Generate an optimized PostgreSQL database schema for multi-tenant billing..."
            loading
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-customer-ops',
    title: '4. Support Desk Copilot Theme',
    description: 'Soft card styling embedded within customer support ticket dashboards.',
    previewTitle: 'Support Response Assistant',
    code: `<PromptInput
  placeholder="Draft an empathetic response apologizing for delivery delays..."
  models={['GPT-4o Mini', 'Gemini 2.0 Flash']}
  variant="card"
  showVoice={false}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <PromptInput
            placeholder="Draft an empathetic response apologizing for delivery delays..."
            models={['GPT-4o Mini', 'Gemini 2.0 Flash']}
            variant="card"
            showVoice={false}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-compact-search',
    title: '5. Compact Single-Line Query Theme',
    description: 'Minimal AI input without voice or attachments for omnibar search.',
    previewTitle: 'Minimal Natural Language Search',
    code: `<PromptInput
  placeholder="Search database using natural language..."
  minRows={1}
  showAttachments={false}
  showVoice={false}
  models={[]}
  variant="bordered"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <PromptInput
            placeholder="Search database using natural language..."
            minRows={1}
            showAttachments={false}
            showVoice={false}
            models={[]}
            variant="bordered"
          />
        </div>
      </div>
    ),
  },
];

export const PROMPT_INPUT_VARIANT_GROUPS = [
  {
    id: 'group-framing',
    title: 'Framing & Surface Variants',
    description: 'Default elevated focus, high-contrast double border, and soft card tint.',
    items: [
      {
        title: 'Default Elevated Focus',
        code: `<PromptInput placeholder="Default elevated prompt..." variant="default" />`,
        render: () => (
          <PromptInput placeholder="Default elevated prompt..." variant="default" />
        ),
      },
      {
        title: 'High-Contrast Bordered',
        code: `<PromptInput placeholder="Bordered container..." variant="bordered" />`,
        render: () => (
          <PromptInput placeholder="Bordered container..." variant="bordered" />
        ),
      },
      {
        title: 'Soft Card Surface Tint',
        code: `<PromptInput placeholder="Soft background..." variant="card" />`,
        render: () => (
          <PromptInput placeholder="Soft background..." variant="card" />
        ),
      },
    ],
  },
  {
    id: 'group-states',
    title: 'Interactive States & Media Toggles',
    description: 'Streaming cancel stop button, disabled state, and media button toggles.',
    items: [
      {
        title: 'Active Streaming / Stop State',
        code: `<PromptInput value="Generating unit tests for payment webhook..." loading />`,
        render: () => (
          <PromptInput value="Generating unit tests for payment webhook..." loading />
        ),
      },
      {
        title: 'Without Media Buttons (Text Only)',
        code: `<PromptInput placeholder="Text-only prompt input..." showAttachments={false} showVoice={false} />`,
        render: () => (
          <PromptInput placeholder="Text-only prompt input..." showAttachments={false} showVoice={false} />
        ),
      },
      {
        title: 'Disabled Read-Only State',
        code: `<PromptInput value="Model quota exceeded for current billing cycle." disabled />`,
        render: () => (
          <PromptInput value="Model quota exceeded for current billing cycle." disabled />
        ),
      },
    ],
  },
];

export const PROMPT_INPUT_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Customize prompt values, test auto-growing textarea lines, model selectors, and loading states.',
};

export const PROMPT_INPUT_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'AI chat interface integration with Vercel AI SDK useChat hook.',
  snippets: [
    {
      label: 'StreamingChatSession.tsx',
      code: `import React from 'react';
import { PromptInput } from '@core-circle/ui';
import { useChat } from 'ai/react';

export const StreamingChatSession: React.FC = () => {
  const { input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
      <PromptInput
        value={input}
        onChange={(val) => handleInputChange({ target: { value: val } } as any)}
        onSend={() => handleSubmit()}
        loading={isLoading}
        onStop={stop}
        models={['Gemini 2.0 Flash', 'Claude 3.7 Sonnet', 'GPT-4o']}
        placeholder="Type a message or press Enter..."
      />
    </div>
  );
};`,
    },
  ],
};

export const PROMPT_INPUT_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { PromptInput } from '@core-circle/ui';

export default function MyChat() {
  return (
    <PromptInput
      placeholder="Ask a question..."
      onSend={(prompt) => console.log('Prompt:', prompt)}
    />
  );
}`,
  },
};

export const PROMPT_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    defaultValue: "''",
    description: 'Controlled input string value.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when textarea text changes.',
  },
  {
    name: 'onSend',
    type: '(value: string) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when Enter key is pressed or Send button is clicked.',
  },
  {
    name: 'onStop',
    type: '() => void',
    defaultValue: 'undefined',
    description: 'Callback fired when generation is aborted via Stop button in loading state.',
  },
  {
    name: 'models',
    type: 'string[]',
    defaultValue: "['Gemini 2.0 Flash', 'Claude 3.7 Sonnet', 'GPT-4o']",
    description: 'List of model names available in the model selector pill dropdown.',
  },
  {
    name: 'selectedModel',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Currently selected model name.',
  },
  {
    name: 'onModelChange',
    type: '(model: string) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when user picks a different model.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Ask a question or enter a prompt...'",
    description: 'Placeholder string displayed inside the textarea.',
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the AI model is currently generating (displays Stop button).',
  },
  {
    name: 'minRows',
    type: 'number',
    defaultValue: '2',
    description: 'Minimum visible lines for the textarea.',
  },
  {
    name: 'maxRows',
    type: 'number',
    defaultValue: '8',
    description: 'Maximum visible lines before internal vertical scroll activates.',
  },
  {
    name: 'variant',
    type: "'default' | 'bordered' | 'card'",
    defaultValue: "'default'",
    description: 'Container framing surface style.',
  },
  {
    name: 'showAttachments',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to show the paperclip file attachment button.',
  },
  {
    name: 'showVoice',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to show the microphone voice dictation button.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether prompt input interactions and buttons are disabled.',
  },
];
