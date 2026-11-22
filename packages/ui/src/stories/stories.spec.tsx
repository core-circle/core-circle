import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/atoms/button/button';
import { Checkbox } from '../components/atoms/checkbox/checkbox';
import { Accordion } from '../components/atoms/accordion/accordion';
import { Callout } from '../components/atoms/callout/callout';
import { Stat } from '../components/atoms/stat/stat';
import { Chip } from '../components/atoms/chip/chip';
import { TrendBadge } from '../components/atoms/trend-badge/trend-badge';

import * as ButtonStories from './atoms/button/button.stories';
import * as CheckboxStories from './atoms/checkbox/checkbox.stories';
import * as AccordionStories from './atoms/accordion/accordion.stories';
import * as CalloutStories from './atoms/callout/callout.stories';
import * as StatStories from './atoms/stat/stat.stories';
import * as ChipStories from './atoms/chip/chip.stories';
import * as TrendBadgeStories from './atoms/trend-badge/trend-badge.stories';

describe('Storybook Stories Smoke Tests', () => {
  it('renders Button primary story cleanly', () => {
    const args = ButtonStories.Primary?.args || {};
    render(<Button {...args}>Primary Button</Button>);
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('renders Checkbox story cleanly', () => {
    const args = (CheckboxStories as any).Solid?.args || (CheckboxStories as any).Default?.args || {};
    render(<Checkbox label="Story Checkbox" {...args} />);
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  it('renders Accordion story cleanly', () => {
    const args = (AccordionStories as any).Bordered?.args || (AccordionStories as any).Default?.args || {};
    render(<Accordion {...args} />);
    expect(screen.getByText('Profile Information')).toBeDefined();
  });

  it('renders Callout story cleanly', () => {
    const args = (CalloutStories as any).Default?.args || (CalloutStories as any).Info?.args || {};
    render(<Callout {...args} />);
    expect(screen.getByRole('region')).toBeDefined();
  });

  it('renders Stat story cleanly', () => {
    const args = (StatStories as any).Default?.args || (StatStories as any).Card?.args || {};
    render(<Stat label="Metric" value="100" {...args} />);
    expect(screen.getByText(args.label || 'Metric')).toBeDefined();
  });

  it('renders Chip story cleanly', () => {
    const args = (ChipStories as any).Default?.args || (ChipStories as any).Solid?.args || {};
    render(<Chip {...args} />);
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('renders TrendBadge story cleanly', () => {
    const args = (TrendBadgeStories as any).Default?.args || (TrendBadgeStories as any).Positive?.args || {};
    render(<TrendBadge value="+25%" {...args} />);
    expect(screen.getByText('+25%')).toBeDefined();
  });
});
