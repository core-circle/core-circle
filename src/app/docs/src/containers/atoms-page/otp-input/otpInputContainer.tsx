'use client';

import React from 'react';
import Link from 'next/link';
import { OTPInput, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { OTPInputPlayground } from '../../../components/playground/otp-input/otpInputPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import {
  OTP_INPUT_PROPS_DATA
} from '../../../constants/atoms-page/otp-input/otpInputConstants';
import { OTPInputContainerProps } from '../../../interface/containers/atoms/otp-input.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function OTPInputContainer({ sections, headerContent, breadcrumbItems }: OTPInputContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <OTPInputPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="otp-variants" title="Visual Variants" description="Choose a style that matches your application's theme.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'outline' && <OTPInput variant="outline" length={4} />}
                    {preview.id === 'material' && <OTPInput variant="material" length={6} />}
                    {preview.id === 'standard' && <OTPInput variant="standard" length={4} />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="otp-sizes" title="Sizes" description="Use different sizes to fit various layout requirements.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.find(s => s.id === 'sizes')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'sm' && <OTPInput size="sm" length={4} />}
                    {preview.id === 'lg' && <OTPInput size="lg" length={4} />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>
          </div>
        );
      default:
        return null;
    }
  };

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="otp-intro" title="Introduction" description="OTPInput provides a seamless experience for users entering multi-digit codes. It handles focus shifting automatically and allows users to paste codes directly into the fields.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { OTPInput } from '@core-circle/ui';\n\n<OTPInput \n  length={6} \n  onComplete={(code) => console.log(code)} \n  variant="outline"\n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={OTP_INPUT_PROPS_DATA} />
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
      content: getSectionContent('variants')
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: getSectionContent('playground')
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="otp-mock" title="Integration Example" description="Standard verification flow implementation using OTPInput.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="State Management Example"
                code={`const VerificationForm = () => {\n  const [error, setError] = React.useState('');\n  \n  const handleSubmit = async (code) => {\n    const response = await verifyCode(code);\n    if (!response.success) setError('Invalid code, please try again');\n  };\n\n  return (\n    <div className="space-y-4">\n      <OTPInput \n        length={6} \n        error={error} \n        onComplete={handleSubmit}\n        onChange={() => setError('')} \n      />\n    </div>\n  );\n};`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s.title}>{headerContent.title}</h1>
        <p className={s.description}>{headerContent.description}</p>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
