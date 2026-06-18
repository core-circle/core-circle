'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Skeleton, Breadcrumb, Tabs, Button, Typography } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon, Rotate } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SkeletonPlayground } from '../../../components/playground/skeleton/skeletonPlayground';
import { buttonPageStyles as s } from '../button/button.styles';

export default function SkeletonContainer({ headerContent, breadcrumbItems }: any) {
  const [isLoaded, setIsLoaded] = useState(false);

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="skeleton-intro" title="Introduction" description="Skeleton screens are placeholders for content while it's loading. They can be used as standalone shapes or as wrappers that automatically match the size of their children.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Wrapper Usage"
                code={`<Skeleton loading={isLoading}>\n  <UserProfileCard user={user} />\n</Skeleton>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={[
                  { name: 'loading', type: 'boolean', defaultValue: 'true', description: 'Toggle between skeleton and content' },
                  { name: 'variant', type: 'text | circular | rectangular', defaultValue: 'rectangular', description: 'Shape (if not using children)' },
                  { name: 'animation', type: 'none | pulse | shimmer', defaultValue: 'shimmer', description: 'The loading animation style' },
                  { name: 'width', type: 'string | number', defaultValue: '100%', description: 'Width of the skeleton' },
                  { name: 'height', type: 'string | number', defaultValue: '-', description: 'Height of the skeleton' },
                ]} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="skeleton-wrapper" title="Wrapper Pattern" description="Wrap any component to automatically generate a matching loading state.">
            <ComponentPreview 
              title="Wrapper Demo"
              code={`<Skeleton loading={!isLoaded}>\n  <div className="p-6 border rounded-2xl bg-white shadow-sm flex items-center gap-4 w-full">\n    <div className="w-12 h-12 rounded-full bg-core-circle-primary/10 flex items-center justify-center text-core-circle-primary font-bold">JD</div>\n    <div className="flex-1">\n      <h3 className="text-lg font-bold">John Doe</h3>\n      <p className="text-sm text-core-circle-text-muted">Software Engineer</p>\n    </div>\n  </div>\n</Skeleton>`}
            >
              <div className="flex flex-col gap-6 items-center w-full max-w-md">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsLoaded(!isLoaded)}
                  startIcon={<Rotate size={14} />}
                >
                  Toggle Loading State
                </Button>
                
                <Skeleton loading={!isLoaded} className="w-full">
                  <div className="p-6 border rounded-2xl bg-white shadow-sm flex items-center gap-4 w-full">
                    <div className="w-12 h-12 rounded-full bg-core-circle-primary/10 flex items-center justify-center text-core-circle-primary font-bold">
                      JD
                    </div>
                    <div className="flex-1">
                      <Typography variant="h3" className="text-lg font-bold">John Doe</Typography>
                      <Typography variant="p" className="text-sm text-core-circle-text-muted">Software Engineer at Core Circle</Typography>
                    </div>
                  </div>
                </Skeleton>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="skeleton-shapes" title="Standalone Shapes" description="Use predefined shapes for custom loading structures.">
            <ComponentPreview 
              title="Shapes"
              code={`<Skeleton variant="text" width="60%" />\n<Skeleton variant="circular" width={60} height={60} />\n<Skeleton variant="rectangular" width="100%" height={150} />`}
            >
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-core-circle-text-muted">Text Skeleton</span>
                  <Skeleton variant="text" width="60%" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-core-circle-text-muted">Circular Skeleton</span>
                  <Skeleton variant="circular" width={60} height={60} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-core-circle-text-muted">Rectangular Skeleton</span>
                  <Skeleton variant="rectangular" width="100%" height={150} />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="skeleton-animations" title="Animations" description="Choose between pulse, shimmer, or no animation.">
            <ComponentPreview 
              title="Animations"
              code={`<Skeleton animation="shimmer" height={100} />\n<Skeleton animation="pulse" height={100} />`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-core-circle-text-muted">Shimmer (Default)</span>
                  <Skeleton animation="shimmer" height={100} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-core-circle-text-muted">Pulse</span>
                  <Skeleton animation="pulse" height={100} />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: <SkeletonPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="skeleton-mock" title="Enterprise Integration" description="Example of how to use Skeleton for complex layout placeholders.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Component Wrapper"
                code={`const DynamicCard = ({ data, isLoading }) => (\n  <Skeleton loading={isLoading} className="rounded-xl">\n    <div className="card-content">\n       <h2>{data.title}</h2>\n       <p>{data.body}</p>\n    </div>\n  </Skeleton>\n);`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <Typography variant="h1" className={s?.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s?.description}>{headerContent?.description}</Typography>
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
