import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { InputGroup, InputGroupText, InputGroupButton } from './input-group';

describe('InputGroup Component', () => {
  it('renders input group with prefix text and input child', () => {
    render(
      <InputGroup label="Website URL" helperText="Enter your custom domain">
        <InputGroupText>https://</InputGroupText>
        <input placeholder="mysite.com" />
      </InputGroup>
    );
    expect(screen.getByText('Website URL')).toBeDefined();
    expect(screen.getByText('https://')).toBeDefined();
    expect(screen.getByPlaceholderText('mysite.com')).toBeDefined();
    expect(screen.getByText('Enter your custom domain')).toBeDefined();
  });

  it('renders input group with button action', () => {
    render(
      <InputGroup>
        <input placeholder="Search..." />
        <InputGroupButton variant="primary">Search</InputGroupButton>
      </InputGroup>
    );
    expect(screen.getByText('Search')).toBeDefined();
  });
});
