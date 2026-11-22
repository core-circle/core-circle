'use client';

import React, { useState } from 'react';
import { Rating, Badge } from '@core-circle/ui';
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

export const RATING_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Rating' },
];

export const RATING_HEADER_CONTENT = {
  title: 'Rating',
  description: 'An interactive satisfaction and evaluation rating component supporting half-star increments, custom icon slots, read-only mode, and 10 visual variants.',
};

export const RATING_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade rating themes for e-commerce reviews, NPS feedback surveys, movie critic scores, Michelin guides, and app store ratings.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 color and halo glow styling variants across sizes sm through xl.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive rating playground with live hover state toggles, half-star controls, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic customer review submission payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const NpsRatingDemo = () => {
  const [npsScore, setNpsScore] = useState(9);
  return (
    <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
      <div>
        <h4 className="font-bold text-sm text-core-circle-text-main">How likely are you to recommend CoreCircle?</h4>
        <p className="text-xs text-slate-400">1 = Not Likely, 10 = Extremely Likely</p>
      </div>
      <Rating
        value={npsScore}
        onChange={setNpsScore}
        max={10}
        variant="emerald"
        size="md"
        showScore
        scoreText={(val, max) => `${val}/${max} (${val >= 9 ? 'Promoter' : val >= 7 ? 'Passive' : 'Detractor'})`}
      />
    </div>
  );
};

export const RATING_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-ecommerce-review',
    title: '1. E-Commerce Verified Buyer Product Review Theme',
    description: 'Luminous gold star rating with half-star precision and review volume badge.',
    previewTitle: 'Verified Buyer Review Card',
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <div className="flex items-center justify-between">
    <Rating value={4.8} max={5} allowHalf readOnly variant="gold" size="lg" showScore />
    <Badge variant="success" size="sm" shape="pill">Verified Buyer</Badge>
  </div>
  <p className="font-bold text-sm text-slate-900">Exceptional engineering and premium tactile finish</p>
  <p className="text-xs text-slate-500">Reviewed by Sarah Jenkins on August 24, 2026</p>
</div>`,
    render: () => (
      <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
        <div className="flex items-center justify-between">
          <Rating value={4.8} max={5} allowHalf readOnly variant="gold" size="lg" showScore />
          <Badge variant="success" size="sm" shape="pill">Verified Buyer</Badge>
        </div>
        <p className="font-bold text-sm text-slate-900">Exceptional engineering and premium tactile finish</p>
        <p className="text-xs text-slate-500">Reviewed by Sarah Jenkins on August 24, 2026</p>
      </div>
    )
  },
  {
    id: 'theming-nps-survey',
    title: '2. Net Promoter Score (NPS 1-10) Interactive Survey Theme',
    description: 'Interactive 10-point satisfaction rating scale with emerald gradient feedback.',
    previewTitle: 'NPS 10-Point Scale',
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
  <div>
    <h4 className="font-bold text-sm text-core-circle-text-main">How likely are you to recommend CoreCircle?</h4>
    <p className="text-xs text-slate-400">1 = Not Likely, 10 = Extremely Likely</p>
  </div>
  <Rating
    value={npsScore}
    onChange={setNpsScore}
    max={10}
    variant="emerald"
    size="md"
    showScore
    scoreText={(val, max) => \`\${val}/\${max} (\${val >= 9 ? 'Promoter' : val >= 7 ? 'Passive' : 'Detractor'})\`}
  />
</div>`,
    render: () => <NpsRatingDemo />
  },
  {
    id: 'theming-film-critic',
    title: '3. Film & Editorial Media Score Theme',
    description: 'Radiant purple gradient stars for cinema releases and streaming platform reviews.',
    previewTitle: 'Media Critic Rating',
    code: `<div className="p-6 bg-gradient-to-r from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm flex items-center justify-between w-full">
  <div>
    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">CRITICS CONSENSUS</span>
    <h4 className="font-bold text-base text-purple-950 mt-1">Interstellar Odysseys 4K</h4>
  </div>
  <Rating value={4.5} allowHalf readOnly variant="gradient" size="lg" showScore />
</div>`,
    render: () => (
      <div className="p-6 bg-gradient-to-r from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm flex items-center justify-between w-full">
        <div>
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">CRITICS CONSENSUS</span>
          <h4 className="font-bold text-base text-purple-950 mt-1">Interstellar Odysseys 4K</h4>
        </div>
        <Rating value={4.5} allowHalf readOnly variant="gradient" size="lg" showScore />
      </div>
    )
  },
  {
    id: 'theming-michelin-guide',
    title: '4. Michelin Gastronomy 3-Star Guide Theme',
    description: 'Amber gold 3-star culinary prestige rating badge.',
    previewTitle: '3-Star Michelin Award',
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-yellow-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
  <div>
    <span className="text-xs font-mono font-bold text-yellow-500">MICHELIN GUIDE 2026</span>
    <h4 className="font-bold text-base text-core-circle-text-main mt-1">L'Ambroisie Paris</h4>
  </div>
  <Rating value={3} max={3} readOnly variant="gold" size="xl" />
</div>`,
    render: () => (
      <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-yellow-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
        <div>
          <span className="text-xs font-mono font-bold text-yellow-500">MICHELIN GUIDE 2026</span>
          <h4 className="font-bold text-base text-core-circle-text-main mt-1">L&apos;Ambroisie Paris</h4>
        </div>
        <Rating value={3} max={3} readOnly variant="gold" size="xl" />
      </div>
    )
  },
  {
    id: 'theming-app-store',
    title: '5. App Store Global Satisfaction Theme',
    description: 'Rose rating theme for mobile application marketplace rankings.',
    previewTitle: 'App Store Rating Card',
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
  <div>
    <h4 className="font-bold text-sm text-core-circle-text-main">CoreCircle iOS SDK</h4>
    <p className="text-xs text-core-circle-text-muted">14,280 global ratings</p>
  </div>
  <Rating value={4.9} max={5} allowHalf readOnly variant="rose" size="md" showScore />
</div>`,
    render: () => (
      <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
        <div>
          <h4 className="font-bold text-sm text-core-circle-text-main">CoreCircle iOS SDK</h4>
          <p className="text-xs text-core-circle-text-muted">14,280 global ratings</p>
        </div>
        <Rating value={4.9} max={5} allowHalf readOnly variant="rose" size="md" showScore />
      </div>
    )
  }
];

export const RATING_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'rating-variants-warm',
    title: '1. Warm Color Tones (Amber, Gold, Rose)',
    description: 'Traditional review stars, luminous gold awards, and rose red accents.',
    customRender: () => (
      <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <div className="text-center space-y-2">
          <Rating defaultValue={4} variant="default" size="lg" />
          <p className="text-xs text-slate-500">Default Amber</p>
        </div>
        <div className="text-center space-y-2">
          <Rating defaultValue={5} variant="gold" size="lg" />
          <p className="text-xs text-slate-500">Luminous Gold</p>
        </div>
        <div className="text-center space-y-2">
          <Rating defaultValue={4} variant="rose" size="lg" />
          <p className="text-xs text-slate-500">Rose Red</p>
        </div>
      </div>
    )
  },
  {
    id: 'rating-variants-cool',
    title: '2. Cool Tones & Radiant Gradients (Emerald, Indigo, Gradient)',
    description: 'Modern satisfaction indicators and high-tech purple gradients.',
    customRender: () => (
      <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <div className="text-center space-y-2">
          <Rating defaultValue={5} variant="emerald" size="lg" />
          <p className="text-xs text-slate-500">Emerald Green</p>
        </div>
        <div className="text-center space-y-2">
          <Rating defaultValue={4} variant="indigo" size="lg" />
          <p className="text-xs text-slate-500">Indigo Blue</p>
        </div>
        <div className="text-center space-y-2">
          <Rating defaultValue={5} variant="gradient" size="lg" />
          <p className="text-xs text-slate-500">Purple Gradient</p>
        </div>
      </div>
    )
  },
  {
    id: 'rating-variants-glow-dark',
    title: '3. Cyber Neon Glow & Dark Mode',
    description: 'Luminous halo stars designed for dark gaming interfaces and cyber terminals.',
    customRender: () => (
      <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
        <div className="text-center space-y-2">
          <Rating defaultValue={5} variant="glow" size="lg" />
          <p className="text-xs text-emerald-400">Neon Glow</p>
        </div>
        <div className="text-center space-y-2">
          <Rating defaultValue={4} variant="dark" size="lg" />
          <p className="text-xs text-slate-400">Dark Slate</p>
        </div>
      </div>
    )
  },
  {
    id: 'rating-variants-half-stars',
    title: '4. Fractional Half-Star Precision (0.5 Increments)',
    description: 'Fine-grained rating values with precise half-star filling.',
    customRender: () => (
      <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
        <Rating value={3.5} allowHalf readOnly variant="gold" size="lg" showScore />
        <Rating value={4.5} allowHalf readOnly variant="amber" size="lg" showScore />
      </div>
    )
  },
  {
    id: 'rating-variants-sizes',
    title: '5. Scale Sizes (sm, md, lg, xl)',
    description: 'Proportionally scaled star icons for inline tables up to hero showcases.',
    customRender: () => (
      <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">SM</span>
          <Rating defaultValue={4} size="sm" showScore />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">MD</span>
          <Rating defaultValue={4} size="md" showScore />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">LG</span>
          <Rating defaultValue={4} size="lg" showScore />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">XL</span>
          <Rating defaultValue={4} size="xl" showScore />
        </div>
      </div>
    )
  }
];

export const RATING_PLAYGROUND_SECTION = {
  id: 'rating-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 variants, half-star mode, max star count, and live React code generation.',
};

export const RATING_MOCK_SECTION = {
  id: 'rating-mock-section',
  title: 'Dynamic Customer Review Submission Integration',
  description: 'Pattern for submitting verified rating scores to an external review API.',
  snippets: [
    {
      label: 'Sample Review API Payload',
      code: JSON.stringify({
        productId: "prod_mechanical_keyboard_v3",
        rating: 5,
        title: "Best switches I've ever used",
        author: "alex.dev@corecircle.io",
        verifiedPurchase: true
      }, null, 2),
    },
    {
      label: 'Dynamic Review Form Component',
      code: `import React, { useState } from 'react';
import { Rating, Button, Textarea } from '@core-circle/ui';

export const ProductReviewForm = ({ productId }) => {
  const [score, setScore] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/v1/reviews', {
      method: 'POST',
      body: JSON.stringify({ productId, rating: score, comment }),
    });
  };

  return (
    <form className="space-y-4 max-w-md">
      <Rating
        value={score}
        onChange={setScore}
        variant="gold"
        size="lg"
        allowHalf
        showScore
      />
      <Textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button variant="primary" onClick={handleSubmit}>Submit Review</Button>
    </form>
  );
};`,
    }
  ]
};

export const RATING_OVERVIEW_SECTION = {
  id: 'rating-overview-intro',
  title: 'Introduction',
  description: 'The Rating component provides interactive or read-only star evaluation scoring. It supports 10 visual variants, fractional half-star increments, custom maximum items (e.g. 5 or 10 stars), keyboard accessibility, and numerical score badges.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Rating } from '@core-circle/ui';

const [rating, setRating] = useState(4.5);

<Rating
  value={rating}
  onChange={setRating}
  allowHalf
  variant="gold"
  size="lg"
  showScore
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const RATING_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'number',
    defaultValue: '-',
    description: 'Controlled star rating numeric value.'
  },
  {
    name: 'defaultValue',
    type: 'number',
    defaultValue: '0',
    description: 'Initial rating value in uncontrolled mode.'
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '5',
    description: 'Total number of star rating items to render.'
  },
  {
    name: 'allowHalf',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to allow 0.5 decimal fractional increments.'
  },
  {
    name: 'readOnly',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If true, user cannot interactively modify the score.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables all interactions and applies reduced opacity.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Scale size of the star items.'
  },
  {
    name: 'variant',
    type: "'default' | 'amber' | 'gold' | 'rose' | 'emerald' | 'indigo' | 'gradient' | 'glow' | 'glassmorphic' | 'dark'",
    defaultValue: "'default'",
    description: 'Visual color theme and drop shadow effect.'
  },
  {
    name: 'showScore',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the numerical value alongside the stars.'
  },
  {
    name: 'onChange',
    type: '(value: number) => void',
    defaultValue: '-',
    description: 'Callback triggered when user selects a new rating value.'
  },
];
