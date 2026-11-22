import { useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Drawer, Button } from '@core-circle/ui';
import {
  ShoppingBag,
  SlidersHorizontalIcon,
  Shield,
  Sparkles,
  Terminal,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface DrawerThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface DrawerVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const DRAWER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Drawer' },
];

export const DRAWER_HEADER_CONTENT = {
  title: 'Drawer',
  description:
    'A slide-over overlay panel anchored to any viewport edge, featuring 10 visual variants, 4-directional transitions, escape-key dismissing, and nested scrolling.',
};

export const DRAWER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade slide-over panels for shopping carts, cloud infrastructure filters, IAM permissions, mobile nav, and telemetry logs.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 10 surface styling variants from frosted glassmorphism to deep cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive drawer playground with live positioning, sizing, and code generation.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description:
      'Dynamic checkout cart and remote filtering panel integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const CartDrawerDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center gap-3">
        <ShoppingBag size={20} className="text-core-circle-primary" />
        <div>
          <h4 className="font-bold text-sm text-core-circle-text-main">
            Shopping Bag (3 Items)
          </h4>
          <p className="text-xs text-core-circle-text-muted">
            Subtotal: $489.00 • Free Shipping
          </p>
        </div>
      </div>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(true)}>
        Open Cart Drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="md"
        variant="default"
        title="Shopping Bag (3 Items)"
        description="Free expedited shipping applied"
        footer={
          <div className="space-y-3">
            <div className="flex justify-between font-bold text-sm">
              <span>Subtotal</span>
              <span>$489.00</span>
            </div>
            <Button variant="primary" fullWidth size="lg">
              Proceed to Checkout
            </Button>
          </div>
        }
      >
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 border rounded-xl flex justify-between items-center">
            <div>
              <p className="font-bold text-sm">CoreCircle Enterprise Plan</p>
              <p className="text-xs text-slate-500">12 Developer Seats</p>
            </div>
            <span className="font-bold text-sm">$399</span>
          </div>
          <div className="p-3 bg-slate-50 border rounded-xl flex justify-between items-center">
            <div>
              <p className="font-bold text-sm">Cloud Audit Add-on</p>
              <p className="text-xs text-slate-500">
                Continuous Security Logging
              </p>
            </div>
            <span className="font-bold text-sm">$90</span>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

const FilterSheetDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center gap-3">
        <SlidersHorizontalIcon size={20} className="text-purple-600" />
        <div>
          <h4 className="font-bold text-sm text-core-circle-text-main">
            Telemetry Query Filter
          </h4>
          <p className="text-xs text-core-circle-text-muted">
            Filtered by: us-east-1a • severity:error
          </p>
        </div>
      </div>
      <Button variant="gradient" size="sm" onClick={() => setIsOpen(true)}>
        Open Bottom Filter Sheet
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom"
        size="md"
        variant="subtle"
        title="Query Telemetry Filter"
        description="Filter 2,400,000 ingest events by Kubernetes namespace and severity"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Reset
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Apply Filter
            </Button>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl border">
            <p className="text-xs font-bold text-slate-500">REGION</p>
            <p className="font-bold text-sm mt-1">us-east-1 (N. Virginia)</p>
          </div>
          <div className="p-4 bg-white rounded-xl border">
            <p className="text-xs font-bold text-slate-500">NAMESPACE</p>
            <p className="font-bold text-sm mt-1">production-ingress</p>
          </div>
          <div className="p-4 bg-white rounded-xl border">
            <p className="text-xs font-bold text-slate-500">LOG SEVERITY</p>
            <p className="font-bold text-sm mt-1 text-rose-600">
              ERROR & FATAL
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

const IamInspectorDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
      <div className="flex items-center gap-3">
        <Shield size={20} className="text-emerald-500" />
        <div>
          <span className="font-mono text-xs font-bold text-core-circle-text-main">
            iam:role/k8s-prod-admin
          </span>
          <p className="text-xs text-core-circle-text-muted">
            14 policies attached • 0 expired tokens
          </p>
        </div>
      </div>
      <Button variant="secondary" size="sm" onClick={() => setIsOpen(true)}>
        Inspect IAM Role
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="lg"
        variant="dark"
        title="Role: Production-K8s-Admin"
        description="Granted to 12 active SSO enterprise identities"
      >
        <div className="space-y-4 font-mono text-xs text-slate-300">
          <div className="p-4 bg-white border border-core-circle-border-main rounded-core-circle-xl">
            <p className="text-emerald-400 font-bold mb-2">Attached Scopes:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>k8s:pods:exec</li>
              <li>k8s:secrets:decrypt</li>
              <li>k8s:deployments:scale</li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

const MobileNavDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center gap-3">
        <Sparkles size={20} className="text-core-circle-primary" />
        <div>
          <h4 className="font-bold text-sm text-core-circle-text-main">
            Mobile App Navigation
          </h4>
          <p className="text-xs text-core-circle-text-muted">
            Left slide-out responsive navigation
          </p>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
        Open Left Sidebar
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="left"
        size="sm"
        variant="sidebar"
        title="CoreCircle Navigation"
        description="Main monorepo switcher"
      >
        <div className="space-y-2 text-sm">
          <Link
            href="/atoms"
            className="block p-3 rounded-lg hover:bg-slate-100 text-core-circle-text-main"
          >
            Atoms Library
          </Link>
          <Link
            href="/molecules"
            className="block p-3 rounded-lg hover:bg-slate-100 text-core-circle-text-main"
          >
            Molecules
          </Link>
          <Link
            href="/themes"
            className="block p-3 rounded-lg hover:bg-slate-100 text-core-circle-text-main"
          >
            Design Tokens
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

const TelemetryPanelDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-emerald-500/30 rounded-core-circle-xl shadow-core-circle-subtle w-full">
      <div className="flex items-center gap-3">
        <Terminal size={20} className="text-emerald-400" />
        <div>
          <span className="font-mono text-xs font-bold text-emerald-300">
            Live Socket Telemetry
          </span>
          <p className="text-xs text-slate-400">
            12,480 packets/sec • 0 dropped frames
          </p>
        </div>
      </div>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(true)}>
        Open Terminal Drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="lg"
        variant="glow"
        title="gRPC Telemetry Log Stream"
        description="Connected to edge cluster: us-west-2 (120fps)"
      >
        <div className="font-mono text-xs text-emerald-400 space-y-2">
          <p>[16:45:01Z] RPC OK: HandleRequest(id=78b2) latency=0.8ms</p>
          <p>[16:45:02Z] RPC OK: HandleRequest(id=78b3) latency=0.7ms</p>
          <p>[16:45:03Z] MEMORY: RSS 312MB GC_PAUSE 0.04ms</p>
        </div>
      </Drawer>
    </div>
  );
};

const VariantDemoDrawer = ({
  variant,
  position,
  label,
}: {
  variant?: 'default' | 'subtle' | 'bordered' | 'glassmorphic' | 'gradient' | 'glow' | 'dark' | 'sidebar' | 'accent' | 'minimal';
  position?: 'right' | 'left' | 'top' | 'bottom';
  label: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        variant={variant || 'default'}
        position={position || 'right'}
        title={`Showcase: ${label}`}
        description="Explore responsive transitions and variants"
      >
        <p className="text-sm text-slate-600">
          This drawer demonstrates the <code>{label}</code> configuration with
          animated open/close transitions.
        </p>
      </Drawer>
    </>
  );
};

export const DRAWER_THEME_CONFIGS: DrawerThemeConfig[] = [
  {
    id: 'theming-cart-drawer',
    sectionTitle: '1. E-Commerce Checkout & Cart Drawer Theme',
    description:
      'Slide-over cart summary with order total calculation, item quantity controls, and express checkout button.',
    previewTitle: 'Shopping Cart Drawer',
    render: () => <CartDrawerDemo />,
    code: `<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  size="md"
  variant="default"
  title="Shopping Bag (3 Items)"
  description="Free expedited shipping applied"
  footer={
    <div className="space-y-3">
      <div className="flex justify-between font-bold">
        <span>Subtotal</span>
        <span>$489.00</span>
      </div>
      <Button variant="primary" fullWidth size="lg">Proceed to Checkout</Button>
    </div>
  }
>
  {/* Cart item list */}
</Drawer>`,
  },
  {
    id: 'theming-filter-sheet',
    sectionTitle: '2. Cloud Infrastructure Query Filter Sheet Theme',
    description:
      'Bottom sheet for multi-parameter cluster log queries, region selectors, and telemetry filtering.',
    previewTitle: 'Filter Bottom Sheet',
    render: () => <FilterSheetDemo />,
    code: `<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="bottom"
  size="lg"
  variant="subtle"
  title="Query Telemetry Filter"
  description="Filter 2,400,000 ingest events by Kubernetes namespace and severity"
  footer={
    <div className="flex justify-end gap-3">
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Reset Filters</Button>
      <Button variant="primary" onClick={() => setIsOpen(false)}>Apply Query (14 Matches)</Button>
    </div>
  }
>
  {/* Filter grid */}
</Drawer>`,
  },
  {
    id: 'theming-iam-inspector',
    sectionTitle: '3. IAM Security Role & Permission Inspector Theme',
    description:
      'High-contrast dark sidebar drawer for viewing JSON IAM policies and OAuth scope bindings.',
    previewTitle: 'IAM Inspector Drawer',
    render: () => <IamInspectorDemo />,
    code: `<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  size="lg"
  variant="dark"
  title="Role: Production-K8s-Admin"
  description="Granted to 12 active SSO enterprise identities"
>
  {/* IAM Scope Tree */}
</Drawer>`,
  },
  {
    id: 'theming-mobile-nav',
    sectionTitle: '4. Mobile App Main Navigation Drawer Theme',
    description:
      'Left slide-out menu with branded headers, navigation links, and logout action.',
    previewTitle: 'Mobile Nav Drawer',
    render: () => <MobileNavDemo />,
    code: `<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="left"
  size="sm"
  variant="sidebar"
  title="CoreCircle Monorepo"
  description="Design System Navigation"
>
  {/* Nav links */}
</Drawer>`,
  },
  {
    id: 'theming-telemetry-panel',
    sectionTitle: '5. Cyber Live Server Telemetry Log Panel Theme',
    description:
      'Neon glowing terminal drawer streaming live socket logs.',
    previewTitle: 'Live Telemetry Log Drawer',
    render: () => <TelemetryPanelDemo />,
    code: `<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  size="xl"
  variant="glow"
  title="gRPC Telemetry Log Stream"
  description="Connected to edge cluster: us-west-2 (120fps)"
>
  {/* Terminal output */}
</Drawer>`,
  },
];

export const DRAWER_VARIANT_GROUPS: DrawerVariantGroup[] = [
  {
    id: 'drawer-variants-surfaces',
    title: '1. Clean Surface Styles (Default, Subtle, Bordered)',
    description:
      'High-contrast white backgrounds, subtle slate surfaces, and strong bordered cards.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
        <VariantDemoDrawer variant="default" label="Default Drawer" />
        <VariantDemoDrawer variant="subtle" label="Subtle Slate Drawer" />
        <VariantDemoDrawer variant="bordered" label="Bordered Drawer" />
      </div>
    ),
  },
  {
    id: 'drawer-variants-glass-gradient',
    title: '2. Glassmorphic & Radiant Gradient Styles',
    description:
      'Frosted glass translucent overlays and rich purple gradient panels.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 w-full">
        <VariantDemoDrawer variant="glassmorphic" label="Glassmorphic Drawer" />
        <VariantDemoDrawer variant="gradient" label="Gradient Drawer" />
      </div>
    ),
  },
  {
    id: 'drawer-variants-glow-dark',
    title: '3. Cyber Neon Glow & Dark Mode Styles',
    description:
      'Luminous emerald halo outlines and deep slate-900 monospace console surfaces.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
        <VariantDemoDrawer variant="glow" label="Neon Glow Drawer" />
        <VariantDemoDrawer variant="dark" label="Dark Mode Drawer" />
      </div>
    ),
  },
  {
    id: 'drawer-variants-sidebar-accent',
    title: '4. Sidebar & Accent Header Styles',
    description:
      'Dedicated left navigation drawer and blue accent top-stripe panel.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <VariantDemoDrawer variant="sidebar" position="left" label="Sidebar Theme" />
        <VariantDemoDrawer variant="accent" label="Accent Stripe Drawer" />
      </div>
    ),
  },
  {
    id: 'drawer-variants-positions',
    title: '5. 4-Directional Anchors (Right, Left, Top, Bottom)',
    description: 'Anchor drawers smoothly to any viewport boundary.',
    render: () => (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
        <VariantDemoDrawer position="right" label="Right Drawer" />
        <VariantDemoDrawer position="left" label="Left Drawer" />
        <VariantDemoDrawer position="top" label="Top Drawer" />
        <VariantDemoDrawer position="bottom" label="Bottom Sheet" />
      </div>
    ),
  },
];

export const DRAWER_PLAYGROUND_SECTION = {
  id: 'drawer-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 variants, 4 directional anchors, 5 sizes, and live React snippet generation.',
};

export const DRAWER_MOCK_SECTION = {
  id: 'drawer-mock-section',
  title: 'Dynamic Remote Shopping Cart Drawer Integration',
  description:
    'Pattern for fetching remote cart items and managing drawer visibility with asynchronous checkout.',
  snippets: [
    {
      label: 'Sample Backend Cart Payload',
      code: JSON.stringify(
        {
          cartId: 'cart_8f93b12',
          items: [
            { id: 'sku_1', name: 'CoreCircle Pro License', price: 299, qty: 1 },
            {
              id: 'sku_2',
              name: 'Enterprise Support SLA (1yr)',
              price: 190,
              qty: 1,
            },
          ],
          subtotal: 489,
          currency: 'USD',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Cart Drawer Consumer Component',
      code: `import React, { useState, useEffect } from 'react';
import { Drawer, Button, Badge } from '@core-circle/ui';

export const DynamicCartDrawer = ({ cartId, isOpen, onClose }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetch(\`/api/v1/cart/\${cartId}\`)
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
  }, [cartId, isOpen]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      size="md"
      title="Your Shopping Cart"
      description={cart ? \`\${cart.items.length} items in cart\` : 'Loading cart...'}
      footer={
        <div className="space-y-3">
          <div className="flex justify-between font-bold text-sm">
            <span>Total</span>
            <span>\${cart?.subtotal || 0}.00</span>
          </div>
          <Button variant="primary" fullWidth size="lg">Checkout Now</Button>
        </div>
      }
    >
      <div className="space-y-4">
        {cart?.items.map((item) => (
          <div key={item.id} className="flex justify-between p-3 border rounded-xl">
            <div>
              <p className="font-bold text-sm">{item.name}</p>
              <p className="text-xs text-slate-500">Qty: {item.qty}</p>
            </div>
            <span className="font-bold text-sm">\${item.price}</span>
          </div>
        ))}
      </div>
    </Drawer>
  );
};`,
    },
  ],
};

export const DRAWER_OVERVIEW_SECTION = {
  id: 'drawer-overview-intro',
  title: 'Introduction',
  description:
    'The Drawer component is a flexible slide-over container anchored to any viewport edge (right, left, top, bottom). It provides 10 visual styling variants, size presets from sm to full-width, keyboard navigation (ESC), and backdrop overlay dismissal.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Drawer, Button } from '@core-circle/ui';

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  size="md"
  title="Settings"
  description="Manage preferences"
>
  <p>Content goes here.</p>
</Drawer>`,
  },
  propsTableTitle: 'Component Props',
};

export const DRAWER_PROPS_DATA: PropItem[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the slide-over drawer is currently visible.',
  },
  {
    name: 'onClose',
    type: '() => void',
    defaultValue: '-',
    description:
      'Callback triggered when backdrop, close button, or ESC key is pressed.',
  },
  {
    name: 'position',
    type: "'right' | 'left' | 'top' | 'bottom'",
    defaultValue: "'right'",
    description: 'Viewport edge that the drawer panel slides in from.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Width or height scale of the drawer panel.',
  },
  {
    name: 'variant',
    type: "'default' | 'subtle' | 'bordered' | 'glassmorphic' | 'gradient' | 'glow' | 'dark' | 'sidebar' | 'accent' | 'minimal'",
    defaultValue: "'default'",
    description: 'Visual styling theme of the panel container.',
  },
  {
    name: 'title',
    type: 'React.ReactNode',
    defaultValue: '-',
    description: 'Header headline text or custom element.',
  },
  {
    name: 'description',
    type: 'React.ReactNode',
    defaultValue: '-',
    description: 'Header subtitle text.',
  },
  {
    name: 'footer',
    type: 'React.ReactNode',
    defaultValue: '-',
    description: 'Sticky bottom action bar container.',
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the top-right X dismiss icon.',
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether clicking the backdrop overlay triggers onClose.',
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether pressing the Escape key triggers onClose.',
  },
];
