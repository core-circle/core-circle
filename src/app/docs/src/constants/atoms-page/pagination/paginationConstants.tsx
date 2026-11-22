import React from 'react';
import { Pagination } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ThemeConfig {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantItem {
  title: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantGroup {
  id: string;
  title: string;
  description: string;
  items?: VariantItem[];
  customRender?: () => React.ReactNode;
}

export const PAGINATION_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Pagination' },
];

export const PAGINATION_HEADER_CONTENT = {
  title: 'Pagination',
  description: 'An accessible multi-page navigation control featuring automated sibling ellipsis collapse, directional arrow buttons, and diverse visual styles.',
};

export const PAGINATION_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production pagination controls across SaaS data grids, search results, product catalogs, and audit logs.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore styling variants (default, pills, bordered, minimal) across size scales.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive pagination sandbox with live page selection, total pages, and styling controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic server-side paginated table query integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const PAGINATION_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-enterprise-table',
    title: '1. Enterprise Data Grid Footer Theme',
    description: 'Clean bordered variant with page status caption and directional controls.',
    previewTitle: 'Data Grid Table Pagination',
    code: `<Pagination currentPage={4} totalPages={18} variant="bordered" size="md" />`,
    render: () => (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <span className="text-xs text-slate-500 font-medium">Showing 31–40 of 180 results</span>
        <Pagination currentPage={4} totalPages={18} variant="bordered" size="md" />
      </div>
    ),
  },
  {
    id: 'theming-pill-catalog',
    title: '2. E-Commerce & Asset Catalog Pills Theme',
    description: 'Rounded pill buttons for modern lifestyle and digital asset storefronts.',
    previewTitle: 'Catalog Pill Navigation',
    code: `<Pagination currentPage={2} totalPages={8} variant="pills" size="md" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <Pagination currentPage={2} totalPages={8} variant="pills" size="md" />
      </div>
    ),
  },
  {
    id: 'theming-compact-audit',
    title: '3. Compact Sidebar & Modal Pagination',
    description: 'Small size scale for tight viewports and embedded modal lists.',
    previewTitle: 'Compact Navigation (sm)',
    code: `<Pagination currentPage={1} totalPages={5} size="sm" variant="default" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Pagination currentPage={1} totalPages={5} size="sm" variant="default" />
      </div>
    ),
  },
  {
    id: 'theming-minimal-search',
    title: '4. Minimalist Web Search Query Theme',
    description: 'Subtle hover states and low visual weight for high-density document search results.',
    previewTitle: 'Minimalist Search Pagination',
    code: `<Pagination currentPage={3} totalPages={12} variant="minimal" size="md" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <Pagination currentPage={3} totalPages={12} variant="minimal" size="md" />
      </div>
    ),
  },
  {
    id: 'theming-large-hero',
    title: '5. High-Impact Large Hero Scale',
    description: 'Generous touch target sizing for tablet and mobile accessibility.',
    previewTitle: 'Touch-Optimized Large Scale',
    code: `<Pagination currentPage={6} totalPages={25} size="lg" variant="pills" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Pagination currentPage={6} totalPages={25} size="lg" variant="pills" />
      </div>
    ),
  },
];

export const PAGINATION_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-styles',
    title: 'Styling Variants',
    description: 'Default rounded, pill, bordered, and minimal presentations.',
    items: [
      {
        title: 'Default Variant',
        code: `<Pagination currentPage={3} totalPages={10} variant="default" />`,
        render: () => <Pagination currentPage={3} totalPages={10} variant="default" />,
      },
      {
        title: 'Pills Variant',
        code: `<Pagination currentPage={3} totalPages={10} variant="pills" />`,
        render: () => <Pagination currentPage={3} totalPages={10} variant="pills" />,
      },
      {
        title: 'Bordered Variant',
        code: `<Pagination currentPage={3} totalPages={10} variant="bordered" />`,
        render: () => <Pagination currentPage={3} totalPages={10} variant="bordered" />,
      },
      {
        title: 'Minimal Variant',
        code: `<Pagination currentPage={3} totalPages={10} variant="minimal" />`,
        render: () => <Pagination currentPage={3} totalPages={10} variant="minimal" />,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: 'Size Scales',
    description: 'Three proportional sizes (sm, md, lg).',
    items: [
      {
        title: 'Small Scale (sm - 28px)',
        code: `<Pagination currentPage={2} totalPages={6} size="sm" />`,
        render: () => <Pagination currentPage={2} totalPages={6} size="sm" />,
      },
      {
        title: 'Medium Scale (md - 36px, default)',
        code: `<Pagination currentPage={2} totalPages={6} size="md" />`,
        render: () => <Pagination currentPage={2} totalPages={6} size="md" />,
      },
      {
        title: 'Large Scale (lg - 44px)',
        code: `<Pagination currentPage={2} totalPages={6} size="lg" />`,
        render: () => <Pagination currentPage={2} totalPages={6} size="lg" />,
      },
    ],
  },
];

export const PAGINATION_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test active page changes, total page counts, sibling counts, and styling variants.',
};

export const PAGINATION_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Server-Side Paginated Table Integration',
  description: 'Integration pattern linking pagination state with async API fetch handlers.',
  snippets: [
    {
      label: 'usePaginatedQuery.ts',
      code: `import { useState, useEffect } from 'react';

export function usePaginatedUsers(pageSize = 10) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(\`/api/users?page=\${page}&limit=\${pageSize}\`)
      .then((res) => res.json())
      .then((res) => {
        if (!ignore) {
          setData(res.items);
          setTotalPages(Math.ceil(res.total / pageSize));
          setLoading(false);
        }
      });

    return () => { ignore = true; };
  }, [page, pageSize]);

  return { page, setPage, totalPages, data, loading };
}`,
    },
  ],
};

export const PAGINATION_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Pagination } from '@core-circle/ui';
import { useState } from 'react';

export default function MyTablePagination() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      currentPage={page}
      totalPages={20}
      onPageChange={setPage}
      variant="bordered"
    />
  );
}`,
  },
  propsTableTitle: 'Pagination Props',
};

export const PAGINATION_PROPS_DATA: PropItem[] = [
  {
    name: 'currentPage',
    type: 'number',
    required: true,
    description: 'Active 1-indexed current page number.',
  },
  {
    name: 'totalPages',
    type: 'number',
    required: true,
    description: 'Total number of pages available.',
  },
  {
    name: 'onPageChange',
    type: '(page: number) => void',
    required: false,
    description: 'Callback executed whenever a page item or directional arrow is clicked.',
  },
  {
    name: 'siblingCount',
    type: 'number',
    required: false,
    defaultValue: '1',
    description: 'Number of page siblings visible on either side of the current page.',
  },
  {
    name: 'variant',
    type: "'default' | 'pills' | 'bordered' | 'minimal'",
    required: false,
    defaultValue: "'default'",
    description: 'Visual styling presentation for page items.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'md'",
    description: 'Size scale controlling button height, width, and typography size.',
  },
  {
    name: 'showControls',
    type: 'boolean',
    required: false,
    defaultValue: 'true',
    description: 'Whether to show previous and next directional buttons.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description: 'When true, disables all pagination buttons.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the nav element.',
  },
];
