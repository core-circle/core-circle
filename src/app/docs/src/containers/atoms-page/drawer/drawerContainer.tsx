'use client';

import { DrawerContainerProps } from '../../../interface/containers/atoms/drawer.types';
import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  ShoppingBag, 
  Shield, 
  Terminal, 
  Sparkles, 
  CheckIcon, 
  SlidersHorizontalIcon, 
  Lock 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DrawerPlayground } from '../../../components/playground/drawer/drawerPlayground';
import { drawerPageStyles as s } from './drawer.styles';
import { DRAWER_PROPS_DATA } from '../../../constants/atoms-page/drawer/drawerConstants';

export default function DrawerContainer({
  headerContent,
  breadcrumbItems
}: DrawerContainerProps) {
  const [activeThemeDrawer, setActiveThemeDrawer] = useState<string | null>(null);

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. E-Commerce Shopping Cart */}
          <DocSection
            id="theming-cart-drawer"
            title="1. E-Commerce Checkout & Cart Drawer Theme"
            description="Slide-over cart summary with order total calculation, item quantity controls, and express checkout button."
          >
            <ComponentPreview
              title="Shopping Cart Drawer"
              code={`<Drawer
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
</Drawer>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={20} className="text-core-circle-primary" />
                  <div>
                    <h4 className="font-bold text-sm text-core-circle-text-main">Shopping Bag (3 Items)</h4>
                    <p className="text-xs text-core-circle-text-muted">Subtotal: $489.00 • Free Shipping</p>
                  </div>
                </div>
                <Button variant="primary" size="sm" onClick={() => setActiveThemeDrawer('cart')}>
                  Open Cart Drawer
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Cloud Infrastructure Filters Sheet */}
          <DocSection
            id="theming-filter-sheet"
            title="2. Cloud Infrastructure Query Filter Sheet Theme"
            description="Bottom sheet for multi-parameter cluster log queries, region selectors, and telemetry filtering."
          >
            <ComponentPreview
              title="Filter Bottom Sheet"
              code={`<Drawer
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
</Drawer>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
                <div className="flex items-center gap-3">
                  <SlidersHorizontalIcon size={20} className="text-purple-600" />
                  <div>
                    <h4 className="font-bold text-sm text-core-circle-text-main">Telemetry Query Filter</h4>
                    <p className="text-xs text-core-circle-text-muted">Filtered by: us-east-1a • severity:error</p>
                  </div>
                </div>
                <Button variant="gradient" size="sm" onClick={() => setActiveThemeDrawer('filter')}>
                  Open Bottom Filter Sheet
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. IAM Role & Permission Matrix */}
          <DocSection
            id="theming-iam-inspector"
            title="3. IAM Security Role & Permission Inspector Theme"
            description="High-contrast dark sidebar drawer for viewing JSON IAM policies and OAuth scope bindings."
          >
            <ComponentPreview
              title="IAM Inspector Drawer"
              code={`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  size="lg"
  variant="dark"
  title="Role: Production-K8s-Admin"
  description="Granted to 12 active SSO enterprise identities"
>
  {/* IAM Scope Tree */}
</Drawer>`}
            >
              <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-emerald-500" />
                  <div>
                    <span className="font-mono text-xs font-bold text-core-circle-text-main">iam:role/k8s-prod-admin</span>
                    <p className="text-xs text-core-circle-text-muted">14 policies attached • 0 expired tokens</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm" onClick={() => setActiveThemeDrawer('iam')}>
                  Inspect IAM Role
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Mobile Navigation Drawer */}
          <DocSection
            id="theming-mobile-nav"
            title="4. Mobile App Main Navigation Drawer Theme"
            description="Left slide-out menu with branded headers, navigation links, and logout action."
          >
            <ComponentPreview
              title="Mobile Nav Drawer"
              code={`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="left"
  size="sm"
  variant="sidebar"
  title="CoreCircle Monorepo"
  description="Design System Navigation"
>
  {/* Nav links */}
</Drawer>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
                <div className="flex items-center gap-3">
                  <Sparkles size={20} className="text-core-circle-primary" />
                  <div>
                    <h4 className="font-bold text-sm text-core-circle-text-main">Mobile App Navigation</h4>
                    <p className="text-xs text-core-circle-text-muted">Left slide-out responsive navigation</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setActiveThemeDrawer('nav')}>
                  Open Left Sidebar
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Live Server Telemetry Log Panel */}
          <DocSection
            id="theming-telemetry-panel"
            title="5. Cyber Live Server Telemetry Log Panel Theme"
            description="Neon glowing terminal drawer streaming live socket logs."
          >
            <ComponentPreview
              title="Live Telemetry Log Drawer"
              code={`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  size="xl"
  variant="glow"
  title="gRPC Telemetry Log Stream"
  description="Connected to edge cluster: us-west-2 (120fps)"
>
  {/* Terminal output */}
</Drawer>`}
            >
              <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-emerald-500/30 rounded-core-circle-xl shadow-core-circle-subtle w-full">
                <div className="flex items-center gap-3">
                  <Terminal size={20} className="text-emerald-400" />
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-300">Live Socket Telemetry</span>
                    <p className="text-xs text-slate-400">12,480 packets/sec • 0 dropped frames</p>
                  </div>
                </div>
                <Button variant="primary" size="sm" onClick={() => setActiveThemeDrawer('telemetry')}>
                  Open Terminal Drawer
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Default, Subtle & Bordered */}
          <DocSection
            id="drawer-variants-surfaces"
            title="1. Clean Surface Styles (Default, Subtle, Bordered)"
            description="High-contrast white backgrounds, subtle slate surfaces, and strong bordered cards."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
              <Button variant="primary" onClick={() => setActiveThemeDrawer('var-default')}>Default Drawer</Button>
              <Button variant="secondary" onClick={() => setActiveThemeDrawer('var-subtle')}>Subtle Slate Drawer</Button>
              <Button variant="outline" onClick={() => setActiveThemeDrawer('var-bordered')}>Bordered Drawer</Button>
            </div>
          </DocSection>

          {/* 2. Glassmorphic & Radiant Gradient */}
          <DocSection
            id="drawer-variants-glass-gradient"
            title="2. Glassmorphic & Radiant Gradient Styles"
            description="Frosted glass translucent overlays and rich purple gradient panels."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 w-full">
              <Button variant="glassmorphic" onClick={() => setActiveThemeDrawer('var-glass')}>Glassmorphic Drawer</Button>
              <Button variant="gradient" onClick={() => setActiveThemeDrawer('var-gradient')}>Gradient Drawer</Button>
            </div>
          </DocSection>

          {/* 3. Neon Glow & Dark Mode */}
          <DocSection
            id="drawer-variants-glow-dark"
            title="3. Cyber Neon Glow & Dark Mode Styles"
            description="Luminous emerald halo outlines and deep slate-900 monospace console surfaces."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
              <Button variant="primary" onClick={() => setActiveThemeDrawer('var-glow')}>Neon Glow Drawer</Button>
              <Button variant="secondary" onClick={() => setActiveThemeDrawer('var-dark')}>Dark Mode Drawer</Button>
            </div>
          </DocSection>

          {/* 4. Sidebar & Accent */}
          <DocSection
            id="drawer-variants-sidebar-accent"
            title="4. Sidebar & Accent Header Styles"
            description="Dedicated left navigation drawer and blue accent top-stripe panel."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <Button variant="outline" onClick={() => setActiveThemeDrawer('var-sidebar')}>Sidebar Theme</Button>
              <Button variant="primary" onClick={() => setActiveThemeDrawer('var-accent')}>Accent Stripe Drawer</Button>
            </div>
          </DocSection>

          {/* 5. Directional Positions */}
          <DocSection
            id="drawer-variants-positions"
            title="5. 4-Directional Anchors (Right, Left, Top, Bottom)"
            description="Anchor drawers smoothly to any viewport boundary."
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
              <Button variant="outline" onClick={() => setActiveThemeDrawer('pos-right')}>Right Drawer</Button>
              <Button variant="outline" onClick={() => setActiveThemeDrawer('pos-left')}>Left Drawer</Button>
              <Button variant="outline" onClick={() => setActiveThemeDrawer('pos-top')}>Top Drawer</Button>
              <Button variant="outline" onClick={() => setActiveThemeDrawer('pos-bottom')}>Bottom Sheet</Button>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection
          id="drawer-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, 4 directional anchors, 5 sizes, and live React snippet generation."
        >
          <DrawerPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="drawer-mock-section"
            title="Dynamic Remote Shopping Cart Drawer Integration"
            description="Pattern for fetching remote cart items and managing drawer visibility with asynchronous checkout."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Cart Payload"
                code={JSON.stringify({
                  cartId: "cart_8f93b12",
                  items: [
                    { id: "sku_1", name: "CoreCircle Pro License", price: 299, qty: 1 },
                    { id: "sku_2", name: "Enterprise Support SLA (1yr)", price: 190, qty: 1 }
                  ],
                  subtotal: 489,
                  currency: "USD"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Cart Drawer Consumer Component"
                code={`import React, { useState, useEffect } from 'react';
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
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="drawer-overview-intro"
            title="Introduction"
            description="The Drawer component is a flexible slide-over container anchored to any viewport edge (right, left, top, bottom). It provides 10 visual styling variants, size presets from sm to full-width, keyboard navigation (ESC), and backdrop overlay dismissal."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Drawer, Button } from '@core-circle/ui';

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
</Drawer>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={DRAWER_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>

      {/* Dynamic Theme Modals */}
      <Drawer
        isOpen={activeThemeDrawer === 'cart'}
        onClose={() => setActiveThemeDrawer(null)}
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
            <Button variant="primary" fullWidth size="lg">Proceed to Checkout</Button>
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
              <p className="text-xs text-slate-500">Continuous Security Logging</p>
            </div>
            <span className="font-bold text-sm">$90</span>
          </div>
        </div>
      </Drawer>

      <Drawer
        isOpen={activeThemeDrawer === 'filter'}
        onClose={() => setActiveThemeDrawer(null)}
        position="bottom"
        size="md"
        variant="subtle"
        title="Query Telemetry Filter"
        description="Filter 2,400,000 ingest events by Kubernetes namespace and severity"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setActiveThemeDrawer(null)}>Reset</Button>
            <Button variant="primary" onClick={() => setActiveThemeDrawer(null)}>Apply Filter</Button>
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
            <p className="font-bold text-sm mt-1 text-rose-600">ERROR & FATAL</p>
          </div>
        </div>
      </Drawer>

      <Drawer
        isOpen={activeThemeDrawer === 'iam'}
        onClose={() => setActiveThemeDrawer(null)}
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

      <Drawer
        isOpen={activeThemeDrawer === 'nav'}
        onClose={() => setActiveThemeDrawer(null)}
        position="left"
        size="sm"
        variant="sidebar"
        title="CoreCircle Navigation"
        description="Main monorepo switcher"
      >
        <div className="space-y-2 text-sm">
          <Link href="/atoms" className="block p-3 rounded-lg hover:bg-slate-100 text-core-circle-text-main">Atoms Library</Link>
          <Link href="/molecules" className="block p-3 rounded-lg hover:bg-slate-100 text-core-circle-text-main">Molecules</Link>
          <Link href="/themes" className="block p-3 rounded-lg hover:bg-slate-100 text-core-circle-text-main">Design Tokens</Link>
        </div>
      </Drawer>

      <Drawer
        isOpen={activeThemeDrawer === 'telemetry'}
        onClose={() => setActiveThemeDrawer(null)}
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

      {/* Variant demo modal */}
      <Drawer
        isOpen={activeThemeDrawer?.startsWith('var-') || activeThemeDrawer?.startsWith('pos-')}
        onClose={() => setActiveThemeDrawer(null)}
        position={(activeThemeDrawer?.replace('pos-', '') as any) || 'right'}
        variant={(activeThemeDrawer?.replace('var-', '') as any) || 'default'}
        title={`Showcase: ${activeThemeDrawer}`}
        description="Explore responsive transitions and variants"
      >
        <p className="text-sm text-slate-600 dark:text-slate-300">
          This drawer demonstrates the <code>{activeThemeDrawer}</code> configuration with animated open/close transitions.
        </p>
      </Drawer>
    </div>
  );
}
