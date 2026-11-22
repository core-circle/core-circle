import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup } from '../../../components/atoms/input-group/input-group';
import { TextInput } from '../../../components/atoms/text-input/text-input';

const meta: Meta<typeof InputGroup> = {
  title: 'Atoms/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    joined: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const DomainPrefix: Story = {
  render: () => (
    <InputGroup label="Website URL" fullWidth>
      <InputGroup.Text>https://</InputGroup.Text>
      <TextInput placeholder="yourbrand" fullWidth />
      <InputGroup.Text>.corecircle.io</InputGroup.Text>
    </InputGroup>
  ),
};

export const SearchWithButton: Story = {
  render: () => (
    <InputGroup label="Search Documents" fullWidth>
      <TextInput placeholder="Search knowledge base..." fullWidth />
      <InputGroup.Button variant="primary">Search</InputGroup.Button>
    </InputGroup>
  ),
};

export const CurrencyAddon: Story = {
  render: () => (
    <InputGroup label="Subscription Price" fullWidth>
      <InputGroup.Text>$</InputGroup.Text>
      <TextInput defaultValue="49.99" fullWidth />
      <InputGroup.Text>/month</InputGroup.Text>
    </InputGroup>
  ),
};

export const DisjoinedLayout: Story = {
  render: () => (
    <InputGroup label="Referral Code" joined={false} fullWidth>
      <TextInput defaultValue="REF-2026-X8" fullWidth />
      <InputGroup.Button variant="outline">Apply</InputGroup.Button>
    </InputGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <InputGroup size="sm" label="Small (sm)">
        <InputGroup.Text>https://</InputGroup.Text>
        <TextInput placeholder="subdomain" fullWidth />
      </InputGroup>
      <InputGroup size="md" label="Medium (md)">
        <InputGroup.Text>https://</InputGroup.Text>
        <TextInput placeholder="subdomain" fullWidth />
      </InputGroup>
      <InputGroup size="lg" label="Large (lg)">
        <InputGroup.Text>https://</InputGroup.Text>
        <TextInput placeholder="subdomain" fullWidth />
      </InputGroup>
    </div>
  ),
};
