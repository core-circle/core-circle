import * as React from 'react';
import { DOCS_CANONICAL_TABS, createDocTabItems } from './docs-tabs-constant';

describe('Docs Canonical Tabs Constants', () => {
  it('defines 5 canonical tabs in correct order', () => {
    expect(DOCS_CANONICAL_TABS).toHaveLength(5);
    expect(DOCS_CANONICAL_TABS.map((t) => t.id)).toEqual([
      'theming',
      'variants',
      'playground',
      'mock-code',
      'overview',
    ]);
  });

  it('creates active tab items when slots are provided', () => {
    const slots = {
      theming: <div>Theming content</div>,
      variants: <div>Variants content</div>,
      playground: <div>Playground content</div>,
      mockCode: <div>Mock code content</div>,
      overview: <div>Overview content</div>,
    };

    const items = createDocTabItems(slots);
    expect(items).toHaveLength(5);
    expect(items[0].id).toBe('theming');
    expect(items[0].label).toBe('Theming');
  });

  it('filters out omitted slots', () => {
    const slots = {
      theming: <div>Theming content</div>,
    };

    const items = createDocTabItems(slots);
    expect(items).toHaveLength(1);
    expect(items[0].id).toBe('theming');
  });
});
