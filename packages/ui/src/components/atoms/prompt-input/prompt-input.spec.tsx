import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PromptInput } from './prompt-input';

describe('PromptInput Component', () => {
  it('renders textarea with placeholder and model selector', () => {
    render(<PromptInput placeholder="Type your AI prompt here..." />);
    expect(screen.getByPlaceholderText('Type your AI prompt here...')).toBeDefined();
    expect(screen.getByText('Gemini 2.0 Flash')).toBeDefined();
  });

  it('triggers onSend callback when clicking the submit button', () => {
    const handleSend = jest.fn();
    render(<PromptInput value="Hello AI" onSend={handleSend} />);

    const sendBtn = screen.getByTitle('Send message');
    fireEvent.click(sendBtn);
    expect(handleSend).toHaveBeenCalledTimes(1);
  });

  it('renders stop button when loading=true', () => {
    const handleStop = jest.fn();
    render(<PromptInput loading onStop={handleStop} />);

    const stopBtn = screen.getByTitle('Stop generation');
    fireEvent.click(stopBtn);
    expect(handleStop).toHaveBeenCalledTimes(1);
  });
});
