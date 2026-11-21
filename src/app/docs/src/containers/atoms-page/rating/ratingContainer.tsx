'use client';

import { RatingContainerProps } from '../../../interface/containers/atoms/rating.types';
import React, { useState } from 'react';
import Link from 'next/link';
import { Rating, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Star, 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { RatingPlayground } from '../../../components/playground/rating/ratingPlayground';
import { ratingPageStyles as s } from './rating.styles';
import { RATING_PROPS_DATA } from '../../../constants/atoms-page/rating/ratingConstants';

export default function RatingContainer({
  headerContent,
  breadcrumbItems
}: RatingContainerProps) {
  const [productRating, setProductRating] = useState(4.5);
  const [npsScore, setNpsScore] = useState(9);

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. E-Commerce Verified Buyer Review */}
          <DocSection
            id="theming-ecommerce-review"
            title="1. E-Commerce Verified Buyer Product Review Theme"
            description="Luminous gold star rating with half-star precision and review volume badge."
          >
            <ComponentPreview
              title="Verified Buyer Review Card"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <div className="flex items-center justify-between">
    <Rating value={4.8} max={5} allowHalf readOnly variant="gold" size="lg" showScore />
    <Badge variant="success" size="sm" shape="pill">Verified Buyer</Badge>
  </div>
  <p className="font-bold text-sm text-slate-900">Exceptional engineering and premium tactile finish</p>
  <p className="text-xs text-slate-500">Reviewed by Sarah Jenkins on August 24, 2026</p>
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <Rating value={4.8} max={5} allowHalf readOnly variant="gold" size="lg" showScore />
                  <Badge variant="success" size="sm" shape="pill">Verified Buyer</Badge>
                </div>
                <p className="font-bold text-sm text-slate-900">Exceptional engineering and premium tactile finish</p>
                <p className="text-xs text-slate-500">Reviewed by Sarah Jenkins on August 24, 2026</p>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. NPS Customer Feedback Survey */}
          <DocSection
            id="theming-nps-survey"
            title="2. Net Promoter Score (NPS 1-10) Interactive Survey Theme"
            description="Interactive 10-point satisfaction rating scale with emerald gradient feedback."
          >
            <ComponentPreview
              title="NPS 10-Point Scale"
              code={`<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 3. Film & Media Critic Score */}
          <DocSection
            id="theming-film-critic"
            title="3. Film & Editorial Media Score Theme"
            description="Radiant purple gradient stars for cinema releases and streaming platform reviews."
          >
            <ComponentPreview
              title="Media Critic Rating"
              code={`<div className="p-6 bg-gradient-to-r from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm flex items-center justify-between w-full">
  <div>
    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">CRITICS CONSENSUS</span>
    <h4 className="font-bold text-base text-purple-950 mt-1">Interstellar Odysseys 4K</h4>
  </div>
  <Rating value={4.5} allowHalf readOnly variant="gradient" size="lg" showScore />
</div>`}
            >
              <div className="p-6 bg-gradient-to-r from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm flex items-center justify-between w-full">
                <div>
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">CRITICS CONSENSUS</span>
                  <h4 className="font-bold text-base text-purple-950 mt-1">Interstellar Odysseys 4K</h4>
                </div>
                <Rating value={4.5} allowHalf readOnly variant="gradient" size="lg" showScore />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Michelin Restaurant Guide */}
          <DocSection
            id="theming-michelin-guide"
            title="4. Michelin Gastronomy 3-Star Guide Theme"
            description="Amber gold 3-star culinary prestige rating badge."
          >
            <ComponentPreview
              title="3-Star Michelin Award"
              code={`<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-yellow-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
  <div>
    <span className="text-xs font-mono font-bold text-yellow-500">MICHELIN GUIDE 2026</span>
    <h4 className="font-bold text-base text-core-circle-text-main mt-1">L&apos;Ambroisie Paris</h4>
  </div>
  <Rating value={3} max={3} readOnly variant="gold" size="xl" />
</div>`}
            >
              <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-yellow-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
                <div>
                  <span className="text-xs font-mono font-bold text-yellow-500">MICHELIN GUIDE 2026</span>
                  <h4 className="font-bold text-base text-core-circle-text-main mt-1">L&apos;Ambroisie Paris</h4>
                </div>
                <Rating value={3} max={3} readOnly variant="gold" size="xl" />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. App Store Satisfaction */}
          <DocSection
            id="theming-app-store"
            title="5. App Store Global Satisfaction Theme"
            description="Rose rating theme for mobile application marketplace rankings."
          >
            <ComponentPreview
              title="App Store Rating Card"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
  <div>
    <h4 className="font-bold text-sm text-core-circle-text-main">CoreCircle iOS SDK</h4>
    <p className="text-xs text-core-circle-text-muted">14,280 global ratings</p>
  </div>
  <Rating value={4.9} max={5} allowHalf readOnly variant="rose" size="md" showScore />
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
                <div>
                  <h4 className="font-bold text-sm text-core-circle-text-main">CoreCircle iOS SDK</h4>
                  <p className="text-xs text-core-circle-text-muted">14,280 global ratings</p>
                </div>
                <Rating value={4.9} max={5} allowHalf readOnly variant="rose" size="md" showScore />
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
          {/* 1. Amber, Gold & Rose */}
          <DocSection
            id="rating-variants-warm"
            title="1. Warm Color Tones (Amber, Gold, Rose)"
            description="Traditional review stars, luminous gold awards, and rose red accents."
          >
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
          </DocSection>

          {/* 2. Emerald, Indigo & Purple Gradient */}
          <DocSection
            id="rating-variants-cool"
            title="2. Cool Tones & Radiant Gradients (Emerald, Indigo, Gradient)"
            description="Modern satisfaction indicators and high-tech purple gradients."
          >
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
          </DocSection>

          {/* 3. Neon Glow & Dark Mode */}
          <DocSection
            id="rating-variants-glow-dark"
            title="3. Cyber Neon Glow & Dark Mode"
            description="Luminous halo stars designed for dark gaming interfaces and cyber terminals."
          >
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
          </DocSection>

          {/* 4. Fractional Half Stars */}
          <DocSection
            id="rating-variants-half-stars"
            title="4. Fractional Half-Star Precision (0.5 Increments)"
            description="Fine-grained rating values with precise half-star filling."
          >
            <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
              <Rating value={3.5} allowHalf readOnly variant="gold" size="lg" showScore />
              <Rating value={4.5} allowHalf readOnly variant="amber" size="lg" showScore />
            </div>
          </DocSection>

          {/* 5. Scale Sizes (sm - xl) */}
          <DocSection
            id="rating-variants-sizes"
            title="5. Scale Sizes (sm, md, lg, xl)"
            description="Proportionally scaled star icons for inline tables up to hero showcases."
          >
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
          id="rating-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, half-star mode, max star count, and live React code generation."
        >
          <RatingPlayground />
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
            id="rating-mock-section"
            title="Dynamic Customer Review Submission Integration"
            description="Pattern for submitting verified rating scores to an external review API."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Review API Payload"
                code={JSON.stringify({
                  productId: "prod_mechanical_keyboard_v3",
                  rating: 5,
                  title: "Best switches I've ever used",
                  author: "alex.dev@corecircle.io",
                  verifiedPurchase: true
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Review Form Component"
                code={`import React, { useState } from 'react';
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
            id="rating-overview-intro"
            title="Introduction"
            description="The Rating component provides interactive or read-only star evaluation scoring. It supports 10 visual variants, fractional half-star increments, custom maximum items (e.g. 5 or 10 stars), keyboard accessibility, and numerical score badges."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Rating } from '@core-circle/ui';

const [rating, setRating] = useState(4.5);

<Rating
  value={rating}
  onChange={setRating}
  allowHalf
  variant="gold"
  size="lg"
  showScore
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={RATING_PROPS_DATA} />
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
    </div>
  );
}
