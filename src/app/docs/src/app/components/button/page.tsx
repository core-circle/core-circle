import Link from 'next/link';
import { Button } from '@org/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { ButtonPlayground } from '../../../components/playground/button/buttonPlayground';

export const metadata = {
  title: 'Button Component | Core Circle UI',
  description: 'Comprehensive documentation for the Core Circle Button component, featuring variants, sizes, and interactive playgrounds.',
};

export default function ButtonDocsPage() {
  return (
    <div className="max-w-6xl mx-auto p-12 lg:p-20 bg-core-circle-bg-surface min-h-screen">
      <header className="mb-16">
        <div className="flex items-center gap-2 text-core-circle-text-muted text-core-circle-xs mb-4">
          <Link href="/" className="hover:text-core-circle-primary transition-colors font-core-circle-medium">Components</Link>
          <span>/</span>
          <span className="text-core-circle-text-main font-core-circle-medium">Button</span>
        </div>
        <h1 className="text-core-circle-text-main text-5xl font-core-circle-bold tracking-tight mb-4">
          Button
        </h1>
        <p className="text-core-circle-text-muted text-core-circle-lg max-w-2xl leading-relaxed">
          The core button component with multiple variants, sizes, and advanced loading states.
          Perfectly crafted for the Core Circle ecosystem.
        </p>
      </header>

      <div className="flex flex-col gap-24">
        <DocSection
          id="playground"
          title="Live Playground"
          description="Experiment with props live to see how the button behaves and copy the generated code."
          showBorder
        >
          <ButtonPlayground />
        </DocSection>

        <DocSection
          id="variants"
          title="Style Variants"
          description="Choose from 6 distinct visual styles to match your UI context."
        >
          <ComponentPreview
            title="All Variants"
            code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="warning">Warning</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>`}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </ComponentPreview>
        </DocSection>

        <DocSection
          id="sizes"
          title="Sizes"
          description="Four sizes tailored for various layout densities."
        >
          <ComponentPreview
            title="Size Scale"
            code={`<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>\n<Button size="icon"><i className="fa-solid fa-bell" /></Button>`}
          >
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" variant="outline">
              <span>🔔</span>
            </Button>
          </ComponentPreview>
        </DocSection>

        <DocSection
          id="icons"
          title="With Icons"
          description="Enhance buttons with visual cues using start and end icon slots."
        >
          <ComponentPreview
            title="Icon Positions"
            code={`<Button startIcon={<i className="fa-solid fa-envelope" />}>Email</Button>\n<Button variant="secondary" endIcon={<i className="fa-solid fa-arrow-right" />}>Continue</Button>\n<Button variant="ghost" startIcon={<i className="fa-solid fa-gear" />}>Settings</Button>`}
          >
            <Button startIcon={<span>📧</span>}>Email</Button>
            <Button variant="secondary" startIcon={<span>⚙️</span>}>Continue</Button>
            <Button variant="ghost" endIcon={<span>→</span>}>Settings</Button>
          </ComponentPreview>
        </DocSection>

        <DocSection
          id="loading"
          title="Loading States"
          description="Built-in loading indicators with support for custom icons and positioning."
        >
          <ComponentPreview
            title="Interactive Loaders"
            code={`<Button loading>Default Loader</Button>\n<Button variant="secondary" loading startLoadingIcon={<i className="fa-solid fa-rotate" />}>\n  Custom Start Loader\n</Button>\n<Button variant="warning" loading endLoadingIcon={<i className="fa-regular fa-clock" />}>\n  Custom End Loader\n</Button>`}
          >
            <Button loading>Default Loader</Button>
            <Button variant="secondary" loading startLoadingIcon={<span>♻️</span>}>
              Custom Start Loader
            </Button>
            <Button variant="warning" loading endLoadingIcon={<span>⌛</span>}>
              Custom End Loader
            </Button>
          </ComponentPreview>
        </DocSection>
      </div>
    </div>
  );
}
