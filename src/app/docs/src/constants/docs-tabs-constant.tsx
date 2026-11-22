import { Palette, Layers, Play, CodeIcon, Info } from '@core-circle/icons';
import type { ReactNode } from 'react';

export type CanonicalTabId = 'theming' | 'variants' | 'playground' | 'mock-code' | 'overview';

export interface CanonicalTabMeta {
  id: CanonicalTabId;
  label: string;
  icon: ReactNode;
  enabled?: boolean;
}

/**
 * Master configuration for the canonical 5-tab documentation showcase architecture.
 * Centralizing this ensures tab labels, icons, and display order can be updated in a single place.
 */
export const DOCS_CANONICAL_TABS: CanonicalTabMeta[] = [
  { id: 'theming', label: 'Theming', icon: <Palette size={16} />, enabled: true },
  { id: 'variants', label: 'Variants', icon: <Layers size={16} />, enabled: true },
  { id: 'playground', label: 'Playground', icon: <Play size={16} />, enabled: true },
  { id: 'mock-code', label: 'Mock Code', icon: <CodeIcon size={16} />, enabled: true },
  { id: 'overview', label: 'Overview', icon: <Info size={16} />, enabled: true },
];

export type DocTabSlots = {
  theming?: ReactNode;
  variants?: ReactNode;
  playground?: ReactNode;
  mockCode?: ReactNode;
  overview?: ReactNode;
};

/**
 * Builds the array of TabItem objects expected by `<Tabs />` from a slot dictionary.
 */
export function createDocTabItems(
  slots: DocTabSlots,
  config: CanonicalTabMeta[] = DOCS_CANONICAL_TABS
) {
  const slotKeyMap: Record<CanonicalTabId, keyof DocTabSlots> = {
    'theming': 'theming',
    'variants': 'variants',
    'playground': 'playground',
    'mock-code': 'mockCode',
    'overview': 'overview',
  };

  return config
    .filter((tab) => tab.enabled !== false && slots[slotKeyMap[tab.id]] !== undefined)
    .map((tab) => ({
      id: tab.id,
      label: tab.label,
      icon: tab.icon,
      content: slots[slotKeyMap[tab.id]],
    }));
}
