'use client';

import Link from 'next/link';
import { Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import { atomsPageStyles as s } from '../../containers/atoms-page/atoms.styles';
import {
  createDocTabItems,
  DOCS_CANONICAL_TABS,
  type CanonicalTabMeta,
  type DocTabSlots,
} from '../../constants/docs-tabs-constant';
import type { ReactNode } from 'react';

export interface DocPageShellProps {
  headerContent: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
  tabs?: DocTabSlots;
  customTabItems?: any[];
  tabConfig?: CanonicalTabMeta[];
  className?: string;
  children?: ReactNode;
}

/**
 * Reusable layout shell for documentation component showcase pages.
 * Handles header, breadcrumbs, typography, and standard 5-tab composition.
 */
export function DocPageShell({
  headerContent,
  breadcrumbItems,
  tabs,
  customTabItems,
  tabConfig = DOCS_CANONICAL_TABS,
  className,
  children,
}: DocPageShellProps) {
  const items = customTabItems || (tabs ? createDocTabItems(tabs, tabConfig) : []);

  return (
    <div className={className || s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb
            items={breadcrumbItems}
            renderLink={(props) => <Link {...props} />}
            className="mb-4"
          />
        )}
        <Typography variant="h1" className={s.title}>
          {headerContent.title}
        </Typography>
        <Typography variant="p" className={s.description}>
          {headerContent.description}
        </Typography>
      </header>

      {items.length > 0 && (
        <div className="mt-8">
          <Tabs items={items} variant="underline" size="lg" className="w-full" />
        </div>
      )}

      {children}
    </div>
  );
}

export default DocPageShell;
