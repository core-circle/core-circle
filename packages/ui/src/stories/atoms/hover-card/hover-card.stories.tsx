import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard } from '../../../components/atoms/hover-card/hover-card';
import { Avatar } from '../../../components/atoms/avatar/avatar';
import { Badge } from '../../../components/atoms/badge/badge';
import { Button } from '../../../components/atoms/button/button';
import { Calendar, UserCircle } from '@core-circle/icons';

const meta: Meta<typeof HoverCard> = {
  title: 'Atoms/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {
    trigger: (
      <span className="font-semibold text-core-circle-primary hover:underline cursor-pointer">
        @sarah_design
      </span>
    ),
    children: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar name="Sarah Jenkins" size="md" />
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900 leading-tight">Sarah Jenkins</h4>
            <p className="text-xs text-slate-500">@sarah_design</p>
          </div>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Lead Product Designer @corecircle. Building accessible design systems and design engineering tokens.
        </p>
        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar size={13} />
            <span>Joined March 2022</span>
          </div>
        </div>
      </div>
    ),
    variant: 'card',
    position: 'bottom',
    size: 'md',
  },
};

export const RichCardWithAction: Story = {
  args: {
    trigger: (
      <Button variant="outline" size="sm">
        Hover Member Preview
      </Button>
    ),
    children: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <UserCircle size={28} className="text-indigo-600" />
            <div>
              <div className="font-bold text-sm text-slate-900">Enterprise Workspace</div>
              <div className="text-xs text-slate-400">CoreCircle Cloud</div>
            </div>
          </div>
          <Badge size="sm" variant="gradient">VERIFIED</Badge>
        </div>
        <p className="text-xs text-slate-600">
          Organization ID: <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-[10px]">org_core_9921</code>
        </p>
        <Button variant="primary" size="sm" fullWidth>
          View Organization Profile
        </Button>
      </div>
    ),
    variant: 'card',
    position: 'bottom',
  },
};
