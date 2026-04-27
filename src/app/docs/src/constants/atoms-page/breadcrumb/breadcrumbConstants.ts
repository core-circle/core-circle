import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const BREADCRUMB_DOCS_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Breadcrumb' }
];

export const BREADCRUMB_HEADER_CONTENT = {
  title: 'Breadcrumb',
  description: 'A navigation aid that allows users to keep track of their location within programs, documents, or websites. It provides a way to go back to previous levels of hierarchy.',
};

export const BREADCRUMB_SECTIONS = [
  {
    id: 'playground',
    title: 'Interactive Playground',
    description: 'Experiment with different variants and configurations.',
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Three distinct styles to match your application\'s aesthetic.',
    previews: [
      {
        id: 'standard',
        title: 'Standard',
        code: `<Breadcrumb \n  items={[\n    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },\n    { label: 'Atoms', href: '/atoms' },\n    { label: 'Breadcrumb' }\n  ]} \n/>`
      },
      {
        id: 'ghost',
        title: 'Ghost',
        code: `<Breadcrumb variant="ghost" items={defaultItems} />`
      },
      {
        id: 'pills',
        title: 'Pills',
        code: `<Breadcrumb variant="pills" items={defaultItems} />`
      }
    ]
  },
  {
    id: 'back-link',
    title: 'Go Back Support',
    description: 'Built-in support for browser history navigation.',
    previews: [
      {
        id: 'go-back',
        title: 'With Back Link',
        code: `<Breadcrumb \n  showBack \n  backLabel="Go Back" \n  items={defaultItems} \n/>`
      }
    ]
  },
  {
    id: 'customization',
    title: 'Custom Separators',
    description: 'Easily change the icon or element between items.',
    previews: [
      {
        id: 'custom-separator',
        title: 'Custom Separator',
        code: `<Breadcrumb \n  separator={<ArrowRight size={14} className="opacity-30 mx-1" />} \n  items={defaultItems} \n/>`
      }
    ]
  },
  {
    id: 'item-prefix-suffix',
    title: 'Item Prefix & Suffix',
    description: 'Add labels, emojis, or status indicators to individual breadcrumb items.',
    previews: [
      {
        id: 'custom-labels',
        title: 'Custom Labels',
        code: `<Breadcrumb \n  items={[\n    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },\n    { label: 'Orders', href: '#', prefix: <ShoppingBag size={14} /> },\n    { label: 'Checkout', suffix: '(Active)' }\n  ]} \n/>`
      }
    ]
  }
];
