import type { ReactNode } from 'react';
import { Dialog, Button, TextInput } from '@core-circle/ui';
import {
  Alert,
  Star,
  CheckIcon,
  Shield,
  CreditCard,
  UserIcon,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface DialogThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface DialogVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const DIALOG_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Dialog' },
];

export const DIALOG_HEADER_CONTENT = {
  title: 'Dialog',
  description:
    'An accessible modal window overlaid on the primary viewport, supporting 10 visual variants, header icon badges, backdrop blur, custom screen positions, and keyboard escape handling.',
};

export const DIALOG_THEME_CONFIGS: DialogThemeConfig[] = [
  {
    id: 'theming-destructive-dialog',
    sectionTitle: '1. Enterprise Destructive Resource Deletion Theme',
    description:
      'High-alert confirmation dialog for permanent database cluster and infrastructure deletion.',
    previewTitle: 'Irreversible Action Modal',
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50/50 rounded-2xl border border-slate-100">
        <Dialog
          variant="destructive"
          icon={
            <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
              <Alert size={20} />
            </div>
          }
          title="Delete Production Cluster?"
          description="This action cannot be undone. All database replicas in 'prod-us-east-1' will be terminated permanently."
          trigger={
            <Button
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Launch Deletion Dialog
            </Button>
          }
          footer={
            <div className="flex gap-2 justify-end w-full">
              <Button variant="ghost">Cancel</Button>
              <Button
                variant="primary"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Permanently Delete
              </Button>
            </div>
          }
        >
          <div className="flex flex-col gap-3 py-2">
            <p className="text-xs text-slate-500">
              Please type{' '}
              <strong className="text-slate-900 font-mono">prod-us-east-1</strong>{' '}
              to confirm deletion:
            </p>
            <TextInput placeholder="prod-us-east-1" fullWidth />
          </div>
        </Dialog>
      </div>
    ),
    code: `<Dialog
  variant="destructive"
  icon={
    <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
      <Alert size={20} />
    </div>
  }
  title="Delete Production Cluster?"
  description="This action cannot be undone. All database replicas in 'prod-us-east-1' will be terminated permanently."
  trigger={<Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Delete Cluster</Button>}
  footer={
    <div className="flex gap-2 justify-end w-full">
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary" className="bg-red-600 hover:bg-red-700 text-white">Permanently Delete</Button>
    </div>
  }
>
  <div className="flex flex-col gap-3 py-2">
    <p className="text-xs text-slate-500">Please type <strong className="text-slate-900 font-mono">prod-us-east-1</strong> to confirm deletion:</p>
    <TextInput placeholder="prod-us-east-1" fullWidth />
  </div>
</Dialog>`,
  },
  {
    id: 'theming-vip-celebration',
    sectionTitle: '2. Royal VIP Loyalty Upgrade Celebration Theme',
    description:
      'Luminous celebration dialog featuring top gradient accent bar and achievement perks.',
    previewTitle: 'VIP Tier Upgrade Modal',
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50/50 rounded-2xl border border-slate-100">
        <Dialog
          variant="gradient"
          size="md"
          icon={
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Star size={20} className="text-amber-500 fill-amber-400" />
            </div>
          }
          title="Welcome to Platinum VIP!"
          description="Your organization has surpassed 1,000,000 monthly API calls. Enjoy your new perks!"
          trigger={<Button variant="gradient">Claim VIP Upgrade</Button>}
          footer={
            <div className="flex gap-2 justify-end w-full">
              <Button variant="primary" fullWidth>
                Activate My 25% Discount
              </Button>
            </div>
          }
        >
          <div className="space-y-2 py-2">
            <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex items-center gap-3">
              <CheckIcon size={16} className="text-purple-600 shrink-0" />
              <span className="text-xs font-bold text-purple-950">
                Zero-latency dedicated edge compute
              </span>
            </div>
            <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex items-center gap-3">
              <CheckIcon size={16} className="text-purple-600 shrink-0" />
              <span className="text-xs font-bold text-purple-950">
                24/7 Priority Discord & Phone Engineer Access
              </span>
            </div>
          </div>
        </Dialog>
      </div>
    ),
    code: `<Dialog
  variant="gradient"
  size="md"
  icon={
    <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
      <Star size={20} className="text-amber-500 fill-amber-400" />
    </div>
  }
  title="Welcome to Platinum VIP!"
  description="Your organization has surpassed 1,000,000 monthly API calls. Enjoy your new perks!"
  trigger={<Button variant="gradient">Claim VIP Upgrade</Button>}
  footer={
    <div className="flex gap-2 justify-end w-full">
      <Button variant="primary" fullWidth>Activate My 25% Discount</Button>
    </div>
  }
>
  <div className="space-y-2 py-2">
    <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex items-center gap-3">
      <CheckIcon size={16} className="text-purple-600 shrink-0" />
      <span className="text-xs font-bold text-purple-950">Zero-latency dedicated edge compute</span>
    </div>
    <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex items-center gap-3">
      <CheckIcon size={16} className="text-purple-600 shrink-0" />
      <span className="text-xs font-bold text-purple-950">24/7 Priority Discord & Phone Engineer Access</span>
    </div>
  </div>
</Dialog>`,
  },
  {
    id: 'theming-security-2fa',
    sectionTitle: '3. Two-Factor Authentication (2FA) Security Theme',
    description:
      'Deep floating modal for authenticator app configuration and biometric enrollment.',
    previewTitle: 'Two-Factor Security Modal',
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50/50 rounded-2xl border border-slate-100">
        <Dialog
          variant="floating"
          icon={
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Shield size={20} />
            </div>
          }
          title="Two-Factor Authentication Required"
          description="Enter the 6-digit verification code generated by your Authenticator app (1Password, Google Authenticator)."
          trigger={<Button variant="outline">Configure 2FA</Button>}
          footer={
            <div className="flex gap-2 justify-end w-full">
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Verify & Enable</Button>
            </div>
          }
        >
          <div className="flex flex-col gap-3 py-2">
            <TextInput placeholder="• • • • • •" fullWidth />
            <span className="text-xs text-core-circle-primary cursor-pointer hover:underline">
              Lost access to your device? Use backup code
            </span>
          </div>
        </Dialog>
      </div>
    ),
    code: `<Dialog
  variant="floating"
  icon={
    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
      <Shield size={20} />
    </div>
  }
  title="Two-Factor Authentication Required"
  description="Enter the 6-digit verification code generated by your Authenticator app (1Password, Google Authenticator)."
  trigger={<Button variant="outline">Configure 2FA</Button>}
  footer={
    <div className="flex gap-2 justify-end w-full">
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Verify & Enable</Button>
    </div>
  }
>
  <div className="flex flex-col gap-3 py-2">
    <TextInput placeholder="• • • • • •" fullWidth />
    <span className="text-xs text-core-circle-primary cursor-pointer hover:underline">Lost access to your device? Use backup code</span>
  </div>
</Dialog>`,
  },
  {
    id: 'theming-ecommerce-checkout',
    sectionTitle: '4. E-Commerce Checkout & Payment Confirmation Theme',
    description:
      'Card modal with price breakdown and fast one-click payment buttons.',
    previewTitle: 'Payment Order Summary Modal',
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50/50 rounded-2xl border border-slate-100">
        <Dialog
          variant="card"
          icon={
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CreditCard size={20} />
            </div>
          }
          title="Complete Your Order"
          description="Review your order details before final charge."
          trigger={<Button variant="primary">Proceed to Pay ($249.00)</Button>}
          footer={
            <div className="flex gap-2 justify-end w-full">
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Pay $249.00 with Card</Button>
            </div>
          }
        >
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Pro Subscription (Annual)</span>
              <span className="font-bold text-slate-900">$240.00</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Sales Tax (NY 3.75%)</span>
              <span className="font-bold text-slate-900">$9.00</span>
            </div>
            <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-200 text-sm">
              <span>Total Charged Today</span>
              <span className="text-core-circle-primary">$249.00</span>
            </div>
          </div>
        </Dialog>
      </div>
    ),
    code: `<Dialog
  variant="card"
  icon={
    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
      <CreditCard size={20} />
    </div>
  }
  title="Complete Your Order"
  description="Review your order details before final charge."
  trigger={<Button variant="primary">Proceed to Pay ($249.00)</Button>}
  footer={
    <div className="flex gap-2 justify-end w-full">
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Pay $249.00 with Card</Button>
    </div>
  }
>
  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2 text-xs">
    <div className="flex justify-between text-slate-600">
      <span>Pro Subscription (Annual)</span>
      <span className="font-bold text-slate-900">$240.00</span>
    </div>
    <div className="flex justify-between text-slate-600">
      <span>Sales Tax (NY 3.75%)</span>
      <span className="font-bold text-slate-900">$9.00</span>
    </div>
    <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-200 text-sm">
      <span>Total Charged Today</span>
      <span className="text-core-circle-primary">$249.00</span>
    </div>
  </div>
</Dialog>`,
  },
  {
    id: 'theming-workspace-invite',
    sectionTitle: '5. User Invite & Workspace Team Permissions Theme',
    description:
      'Glassmorphic modal for adding new team collaborators and assigning role permissions.',
    previewTitle: 'Invite Teammates Modal',
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50/50 rounded-2xl border border-slate-100">
        <Dialog
          variant="glassmorphic"
          icon={
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <UserIcon size={20} />
            </div>
          }
          title="Invite Teammates to CoreCircle"
          description="Add coworkers by email. They will receive an onboarding invite link."
          trigger={<Button variant="outline">Invite Members</Button>}
          footer={
            <div className="flex gap-2 justify-end w-full">
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Send 1 Invitation</Button>
            </div>
          }
        >
          <div className="flex flex-col gap-3 py-2">
            <TextInput
              label="Colleague Email Address"
              placeholder="alex@company.com"
              fullWidth
            />
          </div>
        </Dialog>
      </div>
    ),
    code: `<Dialog
  variant="glassmorphic"
  icon={
    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
      <UserIcon size={20} />
    </div>
  }
  title="Invite Teammates to CoreCircle"
  description="Add coworkers by email. They will receive an onboarding invite link."
  trigger={<Button variant="outline">Invite Members</Button>}
  footer={
    <div className="flex gap-2 justify-end w-full">
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Send 1 Invitation</Button>
    </div>
  }
>
  <div className="flex flex-col gap-3 py-2">
    <TextInput label="Colleague Email Address" placeholder="alex@company.com" fullWidth />
  </div>
</Dialog>`,
  },
];

export const DIALOG_VARIANT_GROUPS: DialogVariantGroup[] = [
  {
    id: 'dialog-variants-styles',
    title: '1. Modal Container Styles (10 Variants)',
    description:
      'Card, floating, glassmorphic, gradient, destructive, success, centered-hero, drawer, minimal, and bordered.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <Dialog
          variant="card"
          title="Card Dialog"
          trigger={
            <Button variant="outline" fullWidth>
              Card
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Standard card style modal.</p>
        </Dialog>
        <Dialog
          variant="floating"
          title="Floating Dialog"
          trigger={
            <Button variant="outline" fullWidth>
              Floating
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Deep elevation shadow style.</p>
        </Dialog>
        <Dialog
          variant="glassmorphic"
          title="Glassmorphic Dialog"
          trigger={
            <Button variant="outline" fullWidth>
              Glassmorphic
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Frosted translucent backdrop.</p>
        </Dialog>
        <Dialog
          variant="gradient"
          title="Gradient Bar Dialog"
          trigger={
            <Button variant="outline" fullWidth>
              Gradient
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Luminous top accent bar.</p>
        </Dialog>
        <Dialog
          variant="destructive"
          title="Destructive Warning"
          trigger={
            <Button variant="outline" fullWidth>
              Destructive
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Warning alert style modal.</p>
        </Dialog>
        <Dialog
          variant="success"
          title="Success Confirmation"
          trigger={
            <Button variant="outline" fullWidth>
              Success
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Success confirmation style.</p>
        </Dialog>
        <Dialog
          variant="centered-hero"
          title="Centered Hero"
          trigger={
            <Button variant="outline" fullWidth>
              Centered Hero
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Centered headline and body.</p>
        </Dialog>
        <Dialog
          variant="drawer"
          title="Drawer Sheet"
          trigger={
            <Button variant="outline" fullWidth>
              Drawer Sheet
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Bottom sheet style dialog.</p>
        </Dialog>
        <Dialog
          variant="bordered"
          title="Bordered Strong"
          trigger={
            <Button variant="outline" fullWidth>
              Bordered
            </Button>
          }
        >
          <p className="text-xs text-slate-600">Strong 2px outline border.</p>
        </Dialog>
      </div>
    ),
  },
  {
    id: 'dialog-variants-sizes',
    title: '2. Dialog Width Scales',
    description:
      'Small (sm), Medium (md), Large (lg), Extra-Large (xl), and Full Screen.',
    render: () => (
      <div className="flex flex-wrap gap-4 w-full">
        <Dialog
          size="sm"
          title="Small Dialog"
          trigger={<Button size="sm">Small (sm)</Button>}
        >
          <p className="text-xs text-slate-600">Compact modal for brief alerts.</p>
        </Dialog>
        <Dialog
          size="md"
          title="Medium Dialog"
          trigger={<Button size="sm">Medium (md)</Button>}
        >
          <p className="text-xs text-slate-600">Standard general-purpose modal.</p>
        </Dialog>
        <Dialog
          size="lg"
          title="Large Dialog"
          trigger={<Button size="sm">Large (lg)</Button>}
        >
          <p className="text-xs text-slate-600">
            Spacious modal for forms and tables.
          </p>
        </Dialog>
        <Dialog
          size="xl"
          title="Extra Large Dialog"
          trigger={<Button size="sm">Extra Large (xl)</Button>}
        >
          <p className="text-xs text-slate-600">
            Wide view modal for multi-column dashboards.
          </p>
        </Dialog>
      </div>
    ),
  },
];

export const DIALOG_PLAYGROUND_SECTION = {
  id: 'dialog-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 visual variants, sizes, screen positions, and dismiss handlers.',
};

export const DIALOG_MOCK_SECTION = {
  id: 'dialog-mock',
  title: 'Dynamic Confirmation Dialog Integration',
  description:
    'Manage modal state with asynchronous API mutations and state triggers.',
  snippets: [
    {
      label: 'Sample Backend Deletion API Payload',
      code: JSON.stringify(
        {
          action: 'delete_cluster',
          resource_id: 'prod-us-east-1',
          requested_by: 'sec_admin@corecircle.design',
          timestamp: '2026-08-24T22:35:00Z',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Consumer Component',
      code: `import React, { useState } from 'react';
import { Dialog, Button, TextInput } from '@core-circle/ui';
import { Alert } from '@core-circle/icons';

export const DeleteClusterModal = () => {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const handleDelete = async () => {
    await fetch('/api/v1/clusters/prod-us-east-1', { method: 'DELETE' });
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      variant="destructive"
      title="Delete Production Cluster?"
      trigger={<Button variant="outline">Delete</Button>}
      footer={
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button 
            variant="primary" 
            disabled={inputVal !== 'prod-us-east-1'}
            onClick={handleDelete}
          >
            Confirm
          </Button>
        </div>
      }
    >
      <TextInput 
        value={inputVal} 
        onChange={(e) => setInputVal(e.target.value)} 
        placeholder="Type prod-us-east-1" 
      />
    </Dialog>
  );
};`,
    },
  ],
};

export const DIALOG_OVERVIEW_SECTION = {
  id: 'dialog-usage',
  title: 'Introduction',
  description:
    'The Dialog atom displays an accessible overlay window, preventing interaction with background content until dismissed.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Dialog, Button } from '@core-circle/ui';

<Dialog
  title="Account Settings"
  trigger={<Button>Open Settings</Button>}
>
  <p>Your modal content...</p>
</Dialog>`,
  },
  propsTableTitle: 'Component Props',
};

export const DIALOG_PROPS_DATA: PropItem[] = [
  {
    name: 'open',
    type: 'boolean',
    defaultValue: '-',
    description: 'Controlled visibility state of the dialog modal.',
  },
  {
    name: 'defaultOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial open state for uncontrolled usage.',
  },
  {
    name: 'trigger',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Element that triggers the dialog opening on click.',
  },
  {
    name: 'title',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'The title displayed in the dialog header.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Subtitle description text displayed below the title.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional icon badge displayed in the dialog header.',
  },
  {
    name: 'variant',
    type: "'card' | 'floating' | 'glassmorphic' | 'gradient' | 'destructive' | 'success' | 'centered-hero' | 'drawer' | 'minimal' | 'bordered'",
    defaultValue: "'card'",
    description: 'Visual style variant of the dialog (10 options).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Maximum width constraints of the dialog container.',
  },
  {
    name: 'position',
    type: "'center' | 'top' | 'bottom'",
    defaultValue: "'center'",
    description: 'Viewport alignment position of the modal.',
  },
  {
    name: 'footer',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional action buttons slot placed at the bottom.',
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the close (X) icon in top right corner.',
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether clicking the backdrop closes the dialog.',
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether pressing the Escape key dismisses the dialog.',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    defaultValue: '-',
    description: 'Callback fired whenever the open state changes.',
  },
];
