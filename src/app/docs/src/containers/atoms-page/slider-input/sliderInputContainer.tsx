'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SliderInput, Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Speaker, 
  Cloud, 
  Sun, 
  Banknotes, 
  Video, 
  Terminal, 
  SlidersHorizontalIcon, 
  Sparkles,
  CheckIcon
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { SliderInputPlayground } from '../../../components/playground/slider-input/SliderInputPlayground';
import { sliderInputPageStyles as s } from './slider-input.styles';
import {
  SLIDER_INPUT_PROPS_DATA
} from '../../../constants/atoms-page/slider-input/sliderInputConstants';
import { SliderInputContainerProps } from '../../../interface/containers/atoms/slider-input.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function SliderInputContainer({ headerContent, breadcrumbItems }: SliderInputContainerProps) {
  const [audioGain, setAudioGain] = useState(12);
  const [cpuCores, setCpuCores] = useState(16);
  const [lumens, setLumens] = useState(3200);
  const [downPayment, setDownPayment] = useState(150000);
  const [bitrate, setBitrate] = useState(6500);

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Studio Audio Gain & Decibels Slider Theme */}
          <DocSection
            id="theming-audio-gain"
            title="1. Studio Audio Gain & Decibels Slider Theme"
            description="High-fidelity neon glow slider with live logarithmic decibel feedback and clipping warnings."
          >
            <ComponentPreview
              title="Studio Master Gain Decibels"
              code={`<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-emerald-500/30 rounded-core-circle-xl shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Speaker size={18} className="text-emerald-600" />
      <span className="font-mono text-xs font-bold text-core-circle-text-main">MASTER AUDIO GAIN (+dB)</span>
    </div>
    <Badge variant="success" size="sm" shape="pill">+{audioGain} dB</Badge>
  </div>
  
  <SliderInput
    variant="glow"
    min={-60}
    max={24}
    step={1}
    value={audioGain}
    onChange={(e) => setAudioGain(Number(e.target.value))}
    showValue
    formatValue={(val) => \`\${val > 0 ? '+' : ''}\${val} dB\`}
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-emerald-500/30 rounded-core-circle-xl shadow-core-circle-subtle w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Speaker size={18} className="text-emerald-600" />
                    <span className="font-mono text-xs font-bold text-core-circle-text-main">MASTER AUDIO GAIN (+dB)</span>
                  </div>
                  <Badge variant="success" size="sm" shape="pill">{audioGain > 0 ? `+${audioGain}` : audioGain} dB</Badge>
                </div>
                
                <SliderInput
                  variant="glow"
                  min={-60}
                  max={24}
                  step={1}
                  value={audioGain}
                  onChange={(e) => setAudioGain(Number(e.target.value))}
                  showValue
                  formatValue={(val) => `${val > 0 ? '+' : ''}${val} dB`}
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Cloud Server Infrastructure CPU Provisioning Theme */}
          <DocSection
            id="theming-cloud-cpu"
            title="2. Cloud Server Infrastructure CPU & RAM Provisioning Theme"
            description="Primary branded slider with granular core steppers and compute tier pricing badges."
          >
            <ComponentPreview
              title="Cloud Kubernetes Node Cores"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Cloud size={18} className="text-core-circle-primary" />
      <span className="font-bold text-core-circle-text-main text-sm">vCPU Core Allocation</span>
    </div>
    <Badge variant="primary" size="sm" shape="pill">{cpuCores} vCPUs ($0.04/hr)</Badge>
  </div>
  
  <SliderInput
    variant="primary"
    min={2}
    max={64}
    step={2}
    value={cpuCores}
    onChange={(e) => setCpuCores(Number(e.target.value))}
    showValue
    formatValue={(val) => \`\${val} Cores\`}
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cloud size={18} className="text-core-circle-primary" />
                    <span className="font-bold text-core-circle-text-main text-sm">vCPU Core Allocation</span>
                  </div>
                  <Badge variant="primary" size="sm" shape="pill">{cpuCores} vCPUs ($0.04/hr)</Badge>
                </div>
                
                <SliderInput
                  variant="primary"
                  min={2}
                  max={64}
                  step={2}
                  value={cpuCores}
                  onChange={(e) => setCpuCores(Number(e.target.value))}
                  showValue
                  formatValue={(val) => `${val} Cores`}
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Smart Home Lighting Lumens & Kelvin Tuner Theme */}
          <DocSection
            id="theming-smart-lighting"
            title="3. Smart Home Lighting Lumens & Kelvin Tuner Theme"
            description="Radiant gradient track slider with warm-to-cool Kelvin color spectrum."
          >
            <ComponentPreview
              title="Smart Light Lumens Tuner"
              code={`<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-amber-50/40 via-white to-purple-50/40 border border-amber-200/60 rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Sun size={18} className="text-amber-500" />
      <span className="font-bold text-slate-800 text-sm">Living Room Ambient Lumens</span>
    </div>
    <Badge variant="gradient" size="sm" shape="pill">{lumens} lm</Badge>
  </div>
  
  <SliderInput
    variant="gradient"
    min={200}
    max={6000}
    step={100}
    value={lumens}
    onChange={(e) => setLumens(Number(e.target.value))}
    showValue
    formatValue={(val) => \`\${val} lm\`}
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-amber-50/40 via-white to-purple-50/40 border border-amber-200/60 rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sun size={18} className="text-amber-500" />
                    <span className="font-bold text-slate-800 text-sm">Living Room Ambient Lumens</span>
                  </div>
                  <Badge variant="gradient" size="sm" shape="pill">{lumens} lm</Badge>
                </div>
                
                <SliderInput
                  variant="gradient"
                  min={200}
                  max={6000}
                  step={100}
                  value={lumens}
                  onChange={(e) => setLumens(Number(e.target.value))}
                  showValue
                  formatValue={(val) => `${val} lm`}
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Real Estate Mortgage Down Payment & Loan Sizer Theme */}
          <DocSection
            id="theming-mortgage-downpayment"
            title="4. Real Estate Mortgage Down Payment & Loan Sizer Theme"
            description="Elevated floating slider with localized currency formatting and loan-to-value calculations."
          >
            <ComponentPreview
              title="Mortgage Down Payment Calculator"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Banknotes size={18} className="text-blue-600" />
      <span className="font-bold text-core-circle-text-main text-sm">Down Payment Amount</span>
    </div>
    <Badge variant="outline" size="sm" shape="pill">\${downPayment.toLocaleString()}</Badge>
  </div>
  
  <SliderInput
    variant="floating"
    min={20000}
    max={500000}
    step={5000}
    value={downPayment}
    onChange={(e) => setDownPayment(Number(e.target.value))}
    showValue
    formatValue={(val) => \`$\${val.toLocaleString()}\`}
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Banknotes size={18} className="text-blue-600" />
                    <span className="font-bold text-core-circle-text-main text-sm">Down Payment Amount</span>
                  </div>
                  <Badge variant="outline" size="sm" shape="pill">${downPayment.toLocaleString()}</Badge>
                </div>
                
                <SliderInput
                  variant="floating"
                  min={20000}
                  max={500000}
                  step={5000}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  showValue
                  formatValue={(val) => `$${val.toLocaleString()}`}
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Video Transcoding Live Bitrate & FPS Encoder Theme */}
          <DocSection
            id="theming-video-transcoder"
            title="5. Video Transcoding Live Bitrate (kbps) Encoder Theme"
            description="Deep slate-900 high-performance slider for stream quality and frame rendering."
          >
            <ComponentPreview
              title="Video Live Bitrate Transcoder"
              code={`<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Video size={18} className="text-indigo-600" />
      <span className="font-mono text-xs font-bold text-core-circle-text-main">HEVC/H.265 STREAM BITRATE</span>
    </div>
    <Badge variant="info" size="sm" shape="pill">{bitrate} kbps</Badge>
  </div>
  
  <SliderInput
    variant="dark"
    min={1000}
    max={25000}
    step={250}
    value={bitrate}
    onChange={(e) => setBitrate(Number(e.target.value))}
    showValue
    formatValue={(val) => \`\${val} kbps\`}
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Video size={18} className="text-indigo-600" />
                    <span className="font-mono text-xs font-bold text-core-circle-text-main">HEVC/H.265 STREAM BITRATE</span>
                  </div>
                  <Badge variant="info" size="sm" shape="pill">{bitrate} kbps</Badge>
                </div>
                
                <SliderInput
                  variant="dark"
                  min={1000}
                  max={25000}
                  step={250}
                  value={bitrate}
                  onChange={(e) => setBitrate(Number(e.target.value))}
                  showValue
                  formatValue={(val) => `${val} kbps`}
                  fullWidth
                />
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
          {/* 1. Primary & Standard */}
          <DocSection
            id="slider-variants-primary-standard"
            title="1. Primary & Standard Sliders"
            description="Core brand primary color track and standard neutral border track."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Primary Track"
                code={`<SliderInput variant="primary" label="Volume" defaultValue={60} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="primary" label="Volume" defaultValue={60} showValue fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Standard Track (Default)"
                code={`<SliderInput variant="standard" label="Neutral Setting" defaultValue={40} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="standard" label="Neutral Setting" defaultValue={40} showValue fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 2. Radiant Gradient & Neon Glow */}
          <DocSection
            id="slider-variants-gradient-glow"
            title="2. Radiant Gradient & Neon Glow Sliders"
            description="Vibrant indigo-purple gradient spectrum and luminous neon green glow."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Radiant Gradient Track"
                code={`<SliderInput variant="gradient" label="Color Saturation" defaultValue={75} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="gradient" label="Color Saturation" defaultValue={75} showValue fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Neon Glow Track"
                code={`<SliderInput variant="glow" label="Audio Threshold" defaultValue={85} showValue fullWidth />`}
              >
                <div className="w-full p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
                  <SliderInput variant="glow" label="Audio Threshold" defaultValue={85} showValue fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 3. Glassmorphic & Floating Elevated */}
          <DocSection
            id="slider-variants-glass-floating"
            title="3. Glassmorphic & Floating Elevated Sliders"
            description="Translucent frosted blur backdrop and elevated white thumb with shadow."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Glassmorphic Track"
                code={`<SliderInput variant="glassmorphic" label="Backdrop Opacity" defaultValue={50} showValue fullWidth />`}
              >
                <div className="w-full p-4 bg-gradient-to-br from-blue-50/70 to-purple-50/70 rounded-2xl">
                  <SliderInput variant="glassmorphic" label="Backdrop Opacity" defaultValue={50} showValue fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Floating Elevated Track"
                code={`<SliderInput variant="floating" label="Loan Amount" defaultValue={70} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="floating" label="Loan Amount" defaultValue={70} showValue fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 4. Success, Warning & Danger States */}
          <DocSection
            id="slider-variants-feedback"
            title="4. Status Feedback Sliders (Success, Warning, Danger)"
            description="Semantic feedback tones for thresholds, battery indicators, and alerts."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Success (Emerald)"
                code={`<SliderInput variant="success" label="Battery Level" defaultValue={88} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="success" label="Battery Level" defaultValue={88} showValue fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Warning (Amber)"
                code={`<SliderInput variant="warning" label="Thermal Alert" defaultValue={65} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="warning" label="Thermal Alert" defaultValue={65} showValue fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Danger (Rose)"
                code={`<SliderInput variant="danger" label="Critical Load" defaultValue={92} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="danger" label="Critical Load" defaultValue={92} showValue fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 5. Dark Mode & Accent Ring */}
          <DocSection
            id="slider-variants-dark-accent"
            title="5. High-Contrast Dark & Accent Ring Sliders"
            description="Deep terminal slate background or focused blue accent halo."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Dark Mode Style"
                code={`<SliderInput variant="dark" label="Server Bitrate" defaultValue={55} showValue fullWidth />`}
              >
                <div className="w-full p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
                  <SliderInput variant="dark" label="Server Bitrate" defaultValue={55} showValue fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Accent Ring Style"
                code={`<SliderInput variant="accent" label="Precision Control" defaultValue={45} showValue fullWidth />`}
              >
                <div className="w-full">
                  <SliderInput variant="accent" label="Precision Control" defaultValue={45} showValue fullWidth />
                </div>
              </ComponentPreview>
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
          id="slider-playground-section"
          title="Interactive Playground"
          description="Test 12 variants, min/max bounds, step increments, and custom value formatters live."
        >
          <SliderInputPlayground />
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
            id="slider-mock-section"
            title="Real-Time Media Encoding Config State Integration"
            description="Pattern for binding slider values to live WebRTC audio/video constraints."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Video Stream Encoding Configuration"
                code={JSON.stringify({
                  streamId: "stream_live_449",
                  resolution: "1080p60",
                  videoConfig: {
                    minBitrateKbps: 1500,
                    maxBitrateKbps: 20000,
                    defaultBitrateKbps: 6000,
                    stepKbps: 250
                  },
                  audioConfig: {
                    minGainDb: -40,
                    maxGainDb: 18,
                    defaultGainDb: 6
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Transcoder Control Component"
                code={`import React, { useState } from 'react';
import { SliderInput, Card, Badge, Typography } from '@core-circle/ui';
import { Video, Speaker } from '@core-circle/icons';

export const StreamEncoderSettings = ({ streamConfig, onUpdate }) => {
  const [bitrate, setBitrate] = useState(streamConfig.videoConfig.defaultBitrateKbps);
  const [gain, setGain] = useState(streamConfig.audioConfig.defaultGainDb);

  const handleBitrateChange = (e) => {
    const val = Number(e.target.value);
    setBitrate(val);
    onUpdate?.({ bitrate: val, gain });
  };

  return (
    <Card variant="floating" className="p-6 flex flex-col gap-6 max-w-lg">
      <div className="flex items-center justify-between">
        <Typography variant="h3" className="text-base font-bold">Stream Encoding Quality</Typography>
        <Badge variant="primary" size="sm" shape="pill">Live 60 FPS</Badge>
      </div>

      <SliderInput
        variant="dark"
        label="Video Bitrate"
        min={streamConfig.videoConfig.minBitrateKbps}
        max={streamConfig.videoConfig.maxBitrateKbps}
        step={streamConfig.videoConfig.stepKbps}
        value={bitrate}
        onChange={handleBitrateChange}
        showValue
        formatValue={(val) => \`\${val} kbps\`}
        fullWidth
      />

      <SliderInput
        variant="glow"
        label="Audio Microphone Gain"
        min={streamConfig.audioConfig.minGainDb}
        max={streamConfig.audioConfig.maxGainDb}
        value={gain}
        onChange={(e) => setGain(Number(e.target.value))}
        showValue
        formatValue={(val) => \`\${val > 0 ? '+' : ''}\${val} dB\`}
        fullWidth
      />
    </Card>
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
            id="slider-overview-intro"
            title="Introduction"
            description="SliderInput provides a clean range control for selecting continuous or stepped numeric values. It supports 12 aesthetic themes, live numeric badges, validation states, and custom formatters."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { SliderInput } from '@core-circle/ui';

<SliderInput
  variant="primary"
  label="Volume"
  defaultValue={50}
  showValue
  formatValue={(val) => \`\${val}%\`}
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={SLIDER_INPUT_PROPS_DATA} />
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
