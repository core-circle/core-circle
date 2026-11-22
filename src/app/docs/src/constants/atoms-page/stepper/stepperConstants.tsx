'use client';

import React, { useState } from 'react';
import { Stepper, Badge, Button } from '@core-circle/ui';
import { UserCircle, Cloud, Shield, ShoppingBag, Lock, ChevronRight, ChevronLeft, HomeIcon } from '@core-circle/icons';
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

export const STEPPER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Stepper' }
];

export const STEPPER_HEADER_CONTENT = {
  title: 'Stepper',
  description: 'A multi-stage progress component supporting 10 visual variants, horizontal and vertical orientations, dynamic error states, custom step cards, and milestone timelines.',
};

export const STEPPER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade multi-step implementations for enterprise SaaS onboarding, CI/CD pipelines, KYC identity checks, and checkout flows.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 distinct layout and indicator surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live step navigation and orientation controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API multi-stage workflow integration and state machine example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const saasSteps = [
  { title: 'Workspace Setup', description: 'Configure subdomain and team name' },
  { title: 'Invite Engineers', description: 'Add IAM role-based teammates' },
  { title: 'Connect Git Repo', description: 'Link GitHub or GitLab org' },
  { title: 'Launch Production', description: 'Deploy serverless compute cluster' },
];

const cicdSteps = [
  { title: 'Lint & Compile', description: 'TypeScript AST check passed' },
  { title: 'Unit & E2E Tests', description: '418/418 assertions green' },
  { title: 'Container Build', description: 'Building Docker multi-arch image' },
  { title: 'Canary Rollout', description: 'Deploying 10% traffic to us-east-1' },
];

const kycSteps = [
  { title: 'Personal Profile', description: 'Full legal name and address' },
  { title: 'Passport Scan', description: 'OCR biometric document verification' },
  { title: 'Proof of Funds', description: 'Bank statement cryptographic audit' },
  { title: 'Compliance Approved', description: 'Institutional access granted' },
];

const checkoutSteps = [
  { title: 'Shopping Cart', description: '3 items ($129.00)' },
  { title: 'Shipping Address', description: 'Express air dispatch' },
  { title: 'Payment Method', description: 'Card ending in 4242' },
  { title: 'Order Complete', description: 'Tracking #CC-994821' },
];

const mfaSteps = [
  { title: 'Master Password', description: 'Argon2 hash verified' },
  { title: 'FIDO2 / WebAuthn', description: 'Insert YubiKey hardware key' },
  { title: 'Emergency Backup', description: 'Download 16-word recovery seed' },
];

const standardDemoSteps = [
  { title: 'Account Creation', description: 'Enter email credentials' },
  { title: 'Security 2FA', description: 'Hardware authenticator' },
  { title: 'Review & Finish', description: 'Accept platform terms' },
];

const SaasStepperDemo = () => {
  const [saasStep, setSaasStep] = useState(1);
  return (
    <div className="flex flex-col gap-6 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserCircle size={18} className="text-core-circle-primary" />
          <span className="font-bold text-core-circle-text-main text-sm">Organization Onboarding Flow</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="sm" shape="pill">Step {saasStep + 1} of 4</Badge>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" onClick={() => setSaasStep(Math.max(0, saasStep - 1))} disabled={saasStep === 0}>
              <ChevronLeft size={14} />
            </Button>
            <Button variant="primary" size="sm" onClick={() => setSaasStep(Math.min(saasSteps.length - 1, saasStep + 1))} disabled={saasStep === saasSteps.length - 1}>
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>
      <Stepper
        variant="cards"
        orientation="horizontal"
        activeStep={saasStep}
        steps={saasSteps}
      />
    </div>
  );
};

const CicdStepperDemo = () => {
  const [cicdStep, setCicdStep] = useState(2);
  return (
    <div className="flex flex-col gap-6 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cloud size={18} className="text-core-circle-primary" />
          <span className="font-mono text-xs font-bold text-core-circle-text-main">RELEASE PIPELINE: git.commit#9b4f8a</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="info" size="sm" shape="pill">Building Image</Badge>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" onClick={() => setCicdStep(Math.max(0, cicdStep - 1))} disabled={cicdStep === 0}>
              <ChevronLeft size={14} />
            </Button>
            <Button variant="primary" size="sm" onClick={() => setCicdStep(Math.min(cicdSteps.length - 1, cicdStep + 1))} disabled={cicdStep === cicdSteps.length - 1}>
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>
      <Stepper
        variant="dark"
        orientation="horizontal"
        activeStep={cicdStep}
        steps={cicdSteps}
      />
    </div>
  );
};

const KycStepperDemo = () => {
  const [kycStep, setKycStep] = useState(2);
  return (
    <div className="flex flex-col gap-6 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-purple-600" />
          <span className="font-bold text-purple-950 text-sm">Institutional KYC Identity Verification</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="gradient" size="sm" shape="pill">Stage {kycStep + 1} of 4</Badge>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" onClick={() => setKycStep(Math.max(0, kycStep - 1))} disabled={kycStep === 0}>
              <ChevronLeft size={14} />
            </Button>
            <Button variant="primary" size="sm" onClick={() => setKycStep(Math.min(kycSteps.length - 1, kycStep + 1))} disabled={kycStep === kycSteps.length - 1}>
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>
      <Stepper
        variant="gradient"
        orientation="horizontal"
        activeStep={kycStep}
        steps={kycSteps}
      />
    </div>
  );
};

const CheckoutStepperDemo = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);
  return (
    <div className="flex flex-col gap-6 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={18} className="text-blue-600" />
          <span className="font-bold text-core-circle-text-main text-sm">Express Order Checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm" shape="pill">Order #CC-994821</Badge>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" onClick={() => setCheckoutStep(Math.max(0, checkoutStep - 1))} disabled={checkoutStep === 0}>
              <ChevronLeft size={14} />
            </Button>
            <Button variant="primary" size="sm" onClick={() => setCheckoutStep(Math.min(checkoutSteps.length - 1, checkoutStep + 1))} disabled={checkoutStep === checkoutSteps.length - 1}>
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>
      <Stepper
        variant="timeline"
        orientation="horizontal"
        activeStep={checkoutStep}
        steps={checkoutSteps}
      />
    </div>
  );
};

const MfaStepperDemo = () => {
  const [mfaStep, setMfaStep] = useState(1);
  return (
    <div className="flex flex-col gap-6 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lock size={18} className="text-emerald-600" />
          <span className="font-bold text-core-circle-text-main text-sm">FIDO2 Hardware Key Enrollment</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" size="sm" shape="pill">High Security</Badge>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" onClick={() => setMfaStep(Math.max(0, mfaStep - 1))} disabled={mfaStep === 0}>
              <ChevronLeft size={14} />
            </Button>
            <Button variant="primary" size="sm" onClick={() => setMfaStep(Math.min(mfaSteps.length - 1, mfaStep + 1))} disabled={mfaStep === mfaSteps.length - 1}>
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>
      <Stepper
        variant="pill"
        orientation="horizontal"
        activeStep={mfaStep}
        steps={mfaSteps}
      />
    </div>
  );
};

export const STEPPER_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-saas-onboarding',
    title: '1. Multi-Stage Enterprise SaaS Onboarding Theme',
    description: 'Elevated card-box step layout with interactive next/previous progression.',
    previewTitle: 'Enterprise SaaS Onboarding Flow',
    code: `<div className="flex flex-col gap-6 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <UserCircle size={18} className="text-core-circle-primary" />
      <span className="font-bold text-core-circle-text-main text-sm">Organization Onboarding Flow</span>
    </div>
    <Badge variant="primary" size="sm" shape="pill">Step {saasStep + 1} of 4</Badge>
  </div>
  
  <Stepper
    variant="cards"
    orientation="horizontal"
    activeStep={saasStep}
    steps={saasSteps}
  />
</div>`,
    render: () => <SaasStepperDemo />
  },
  {
    id: 'theming-cicd-pipeline',
    title: '2. Cloud Infrastructure CI/CD Release Pipeline Theme',
    description: 'Deep slate-900 terminal stepper with milestone status and live progress indicators.',
    previewTitle: 'Kubernetes CI/CD Release Pipeline',
    code: `<div className="flex flex-col gap-6 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Cloud size={18} className="text-core-circle-primary" />
      <span className="font-mono text-xs font-bold text-core-circle-text-main">RELEASE PIPELINE: git.commit#9b4f8a</span>
    </div>
    <Badge variant="info" size="sm" shape="pill">Building Image</Badge>
  </div>
  
  <Stepper
    variant="dark"
    orientation="horizontal"
    activeStep={cicdStep}
    steps={cicdSteps}
  />
</div>`,
    render: () => <CicdStepperDemo />
  },
  {
    id: 'theming-kyc-verification',
    title: '3. FinTech KYC Identity Verification & Biometrics Theme',
    description: 'Radiant purple-indigo gradient stepper for high-assurance compliance flows.',
    previewTitle: 'KYC Compliance Stepper',
    code: `<div className="flex flex-col gap-6 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Shield size={18} className="text-purple-600" />
      <span className="font-bold text-purple-950 text-sm">Institutional KYC Identity Verification</span>
    </div>
    <Badge variant="gradient" size="sm" shape="pill">Stage {kycStep + 1} of 4</Badge>
  </div>
  
  <Stepper
    variant="gradient"
    orientation="horizontal"
    activeStep={kycStep}
    steps={kycSteps}
  />
</div>`,
    render: () => <KycStepperDemo />
  },
  {
    id: 'theming-ecommerce-checkout',
    title: '4. E-Commerce Multi-Step Checkout & Shipping Tracker Theme',
    description: 'Timeline pin style with continuous track progression and order confirmation.',
    previewTitle: 'E-Commerce Checkout Tracker',
    code: `<div className="flex flex-col gap-6 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <ShoppingBag size={18} className="text-blue-600" />
      <span className="font-bold text-core-circle-text-main text-sm">Express Order Checkout</span>
    </div>
    <Badge variant="outline" size="sm" shape="pill">Order #CC-994821</Badge>
  </div>
  
  <Stepper
    variant="timeline"
    orientation="horizontal"
    activeStep={checkoutStep}
    steps={checkoutSteps}
  />
</div>`,
    render: () => <CheckoutStepperDemo />
  },
  {
    id: 'theming-mfa-provisioning',
    title: '5. Multi-Factor Security Token Provisioning Theme',
    description: 'Pill badge stepper with hardware authenticator verification.',
    previewTitle: 'FIDO2 / WebAuthn Hardware Provisioning',
    code: `<div className="flex flex-col gap-6 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Lock size={18} className="text-emerald-600" />
      <span className="font-bold text-core-circle-text-main text-sm">FIDO2 Hardware Key Enrollment</span>
    </div>
    <Badge variant="success" size="sm" shape="pill">High Security</Badge>
  </div>
  
  <Stepper
    variant="pill"
    orientation="horizontal"
    activeStep={mfaStep}
    steps={mfaSteps}
  />
</div>`,
    render: () => <MfaStepperDemo />
  }
];

export const STEPPER_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'stepper-variants-numbers-dots',
    title: '1. Numbers & Dots Styles',
    description: 'Classical indexed numerical sequence or minimal bullet dots.',
    items: [
      {
        title: 'Numbers Style (Default)',
        code: `<Stepper variant="numbers" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full">
            <Stepper variant="numbers" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      },
      {
        title: 'Dots Style',
        code: `<Stepper variant="dots" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full">
            <Stepper variant="dots" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      }
    ]
  },
  {
    id: 'stepper-variants-gradient-glow',
    title: '2. Radiant Gradient & Neon Glow Styles',
    description: 'Luminous halos and purple-indigo gradient indicators.',
    items: [
      {
        title: 'Radiant Gradient Style',
        code: `<Stepper variant="gradient" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full">
            <Stepper variant="gradient" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      },
      {
        title: 'Neon Glow Style',
        code: `<Stepper variant="glow" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
            <Stepper variant="glow" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      }
    ]
  },
  {
    id: 'stepper-variants-cards-glass',
    title: '3. Cards & Glassmorphic Container Styles',
    description: 'Elevated box containers or frosted glass translucent backdrops.',
    items: [
      {
        title: 'Card Box Containers',
        code: `<Stepper variant="cards" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full">
            <Stepper variant="cards" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      },
      {
        title: 'Glassmorphic Container',
        code: `<Stepper variant="glassmorphic" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full p-4 bg-gradient-to-br from-blue-50/70 to-purple-50/70 rounded-2xl">
            <Stepper variant="glassmorphic" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      }
    ]
  },
  {
    id: 'stepper-variants-timeline-pill',
    title: '4. Timeline & Pill Badge Styles',
    description: 'Continuous progress timeline milestones or badge pills.',
    items: [
      {
        title: 'Timeline Style',
        code: `<Stepper variant="timeline" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full">
            <Stepper variant="timeline" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      },
      {
        title: 'Pill Badge Style',
        code: `<Stepper variant="pill" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full">
            <Stepper variant="pill" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      }
    ]
  },
  {
    id: 'stepper-variants-vertical-dark',
    title: '5. Vertical Orientation & Dark Mode Styles',
    description: 'Vertical sidebar progression and terminal dark mode theme.',
    items: [
      {
        title: 'Vertical Orientation',
        code: `<Stepper orientation="vertical" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full max-w-sm">
            <Stepper orientation="vertical" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      },
      {
        title: 'Dark Mode Terminal',
        code: `<Stepper variant="dark" activeStep={1} steps={steps} />`,
        render: () => (
          <div className="w-full">
            <Stepper variant="dark" activeStep={1} steps={standardDemoSteps} />
          </div>
        )
      }
    ]
  }
];

export const STEPPER_PLAYGROUND_SECTION = {
  id: 'stepper-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 visual variants, orientation modes, active steps, and live generated snippets.',
};

export const STEPPER_MOCK_SECTION = {
  id: 'stepper-mock-section',
  title: 'Dynamic Multi-Stage Workflow & State Machine',
  description: 'Pattern for fetching remote step configuration from REST API and managing state transitions.',
  snippets: [
    {
      label: 'Sample Backend Workflow Configuration Payload',
      code: JSON.stringify({
        workflowId: "wf_saas_onboarding_881",
        activeStepIndex: 1,
        totalSteps: 3,
        stages: [
          { id: "step_1", title: "Domain & SSL", status: "completed", estimatedTimeMin: 2 },
          { id: "step_2", title: "IAM Roles & Permissions", status: "active", estimatedTimeMin: 5 },
          { id: "step_3", title: "Cluster Provisioning", status: "pending", estimatedTimeMin: 10 }
        ]
      }, null, 2),
    },
    {
      label: 'Dynamic Multi-Stage State Component',
      code: `import React, { useState, useEffect } from 'react';
import { Stepper, Button, Card, Typography } from '@core-circle/ui';

export const DynamicOnboardingWizard = ({ workflowId }) => {
  const [workflow, setWorkflow] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    fetch(\`/api/v1/workflows/\${workflowId}\`)
      .then((res) => res.json())
      .then((data) => {
        setWorkflow(data);
        setActiveStep(data.activeStepIndex);
      });
  }, [workflowId]);

  if (!workflow) return null;

  return (
    <Card variant="floating" className="p-6 flex flex-col gap-6 max-w-2xl">
      <Typography variant="h3" className="text-base font-bold">Enterprise Onboarding Flow</Typography>
      
      <Stepper
        variant="cards"
        activeStep={activeStep}
        steps={workflow.stages.map((s) => ({
          title: s.title,
          description: \`~\${s.estimatedTimeMin} min\`
        }))}
      />

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0}>
          Back
        </Button>
        <Button variant="primary" onClick={() => setActiveStep(Math.min(workflow.stages.length - 1, activeStep + 1))}>
          Continue
        </Button>
      </div>
    </Card>
  );
};`,
    }
  ]
};

export const STEPPER_OVERVIEW_SECTION = {
  id: 'stepper-overview-intro',
  title: 'Introduction',
  description: 'The Stepper component guides users sequentially through complex multi-step forms and processes. It supports 10 distinct styling variants, error markers, and orientation flexibility.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Stepper } from '@core-circle/ui';

<Stepper
  variant="numbers"
  activeStep={1}
  steps={[
    { title: 'Personal Info', description: 'Enter name' },
    { title: 'Verification', description: 'Phone code' },
    { title: 'Success', description: 'All done' }
  ]}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const STEPPER_PROPS_DATA: PropItem[] = [
  {
    name: 'steps',
    type: 'StepItem[]',
    description: 'Array of step descriptor objects ({ title, description?, icon?, status? }).'
  },
  {
    name: 'activeStep',
    type: 'number',
    defaultValue: '0',
    description: 'The zero-indexed value of the currently active step.'
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
    description: 'The layout direction of the stepper.'
  },
  {
    name: 'variant',
    type: "'numbers' | 'dots' | 'circles' | 'pill' | 'gradient' | 'glow' | 'glassmorphic' | 'cards' | 'timeline' | 'dark'",
    defaultValue: "'numbers'",
    description: 'Visual indicator geometry and surface container styling.'
  },
  {
    name: 'showDescription',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render optional subtitle descriptions beneath/beside step titles.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes for outer container customization.'
  }
];
