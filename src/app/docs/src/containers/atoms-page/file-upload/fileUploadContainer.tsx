'use client';

import React from 'react';
import Link from 'next/link';
import { FileUpload, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Cloud, 
  Shield, 
  Sparkles, 
  Terminal, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { FileUploadPlayground } from '../../../components/playground/file-upload/fileUploadPlayground';
import { fileUploadPageStyles as s } from './file-upload.styles';
import { FILE_UPLOAD_PROPS_DATA } from '../../../constants/atoms-page/file-upload/fileUploadConstants';

export default function FileUploadContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. KYC Identity Verification */}
          <DocSection
            id="theming-kyc-passport"
            title="1. KYC Government ID & Passport Uploader Theme"
            description="High-security identity document uploader with strict PDF/JPG format checks and encryption badges."
          >
            <ComponentPreview
              title="Identity Verification Dropzone"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-bold text-sm text-slate-900">Government Photo ID Verification</h4>
      <p className="text-xs text-slate-500">Encrypted in-transit via TLS 1.3 AES-256</p>
    </div>
    <Badge variant="primary" size="sm" shape="pill">Required Step</Badge>
  </div>
  <FileUpload
    variant="accent"
    accept="image/*,.pdf"
    title="Upload Passport or Driver's License"
    description="Drop high-resolution scan (PNG, JPG, PDF up to 15MB)"
  />
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Government Photo ID Verification</h4>
                    <p className="text-xs text-slate-500">Encrypted in-transit via TLS 1.3 AES-256</p>
                  </div>
                  <Badge variant="primary" size="sm" shape="pill">Required Step</Badge>
                </div>
                <FileUpload
                  variant="accent"
                  accept="image/*,.pdf"
                  title="Upload Passport or Driver's License"
                  description="Drop high-resolution scan (PNG, JPG, PDF up to 15MB)"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Cloud Artifact Binary Ingestion */}
          <DocSection
            id="theming-cloud-binary"
            title="2. Cloud Artifact & Docker Image Ingestion Theme"
            description="Deep cyber slate dropzone with glowing emerald accents for tarballs and container layers."
          >
            <ComponentPreview
              title="Binary Ingestion Dropzone"
              code={`<div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl space-y-4 w-full">
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs font-bold text-emerald-400">ARTIFACT REGISTRY v2</span>
    <Badge variant="info" size="sm" shape="pill">Wasm & OCI Layers</Badge>
  </div>
  <FileUpload
    variant="glow"
    multiple
    title="Drag compiled Wasm binaries or Docker tarballs"
    description="Automatic SHA256 integrity checksum calculation on upload"
  />
</div>`}
            >
              <div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400">ARTIFACT REGISTRY v2</span>
                  <Badge variant="info" size="sm" shape="pill">Wasm & OCI Layers</Badge>
                </div>
                <FileUpload
                  variant="glow"
                  multiple
                  title="Drag compiled Wasm binaries or Docker tarballs"
                  description="Automatic SHA256 integrity checksum calculation on upload"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Creative Portfolio Media Assets */}
          <DocSection
            id="theming-portfolio-media"
            title="3. Creative Portfolio & Brand Media Assets Theme"
            description="Radiant purple gradient dropzone for high-resolution photography and vector SVG assets."
          >
            <ComponentPreview
              title="Creative Assets Dropzone"
              code={`<div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-purple-950">Brand Kit & Vector Artwork</h4>
  <FileUpload
    variant="gradient"
    multiple
    accept="image/*,.svg,.ai"
    title="Drop Brand Assets, SVGs, or 4K Renders"
    description="Batch upload supports up to 20 assets simultaneously"
  />
</div>`}
            >
              <div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
                <h4 className="font-bold text-sm text-purple-950">Brand Kit & Vector Artwork</h4>
                <FileUpload
                  variant="gradient"
                  multiple
                  accept="image/*,.svg,.ai"
                  title="Drop Brand Assets, SVGs, or 4K Renders"
                  description="Batch upload supports up to 20 assets simultaneously"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Medical Scan DICOM Uploader */}
          <DocSection
            id="theming-medical-scan"
            title="4. Healthcare DICOM Scan & Laboratory Results Theme"
            description="Clean bordered uploader adhering to HIPAA medical record compliance standards."
          >
            <ComponentPreview
              title="Clinical Scan Dropzone"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <div className="flex items-center justify-between">
    <h4 className="font-bold text-sm text-slate-900">Diagnostic Imaging Intake</h4>
    <Badge variant="success" size="sm" shape="pill">HIPAA Compliant</Badge>
  </div>
  <FileUpload
    variant="bordered"
    title="Upload MRI, CT Scan, or Ultrasound DICOM Packages"
    description="Zero-retention ephemeral processing pipeline"
  />
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900">Diagnostic Imaging Intake</h4>
                  <Badge variant="success" size="sm" shape="pill">HIPAA Compliant</Badge>
                </div>
                <FileUpload
                  variant="bordered"
                  title="Upload MRI, CT Scan, or Ultrasound DICOM Packages"
                  description="Zero-retention ephemeral processing pipeline"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Expense Receipts & Financial Invoices */}
          <DocSection
            id="theming-expense-receipts"
            title="5. Expense Invoices & Tax Receipt Ingestion Theme"
            description="Frosted glassmorphism uploader with OCR automated data extraction."
          >
            <ComponentPreview
              title="Receipt OCR Ingestion"
              code={`<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-blue-950">AI Automated Receipt OCR</h4>
  <FileUpload
    variant="glassmorphic"
    multiple
    title="Drop Invoices, Receipts, or PDF Statements"
    description="Line items, tax totals, and currencies are automatically parsed"
  />
</div>`}
            >
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
                <h4 className="font-bold text-sm text-blue-950">AI Automated Receipt OCR</h4>
                <FileUpload
                  variant="glassmorphic"
                  multiple
                  title="Drop Invoices, Receipts, or PDF Statements"
                  description="Line items, tax totals, and currencies are automatically parsed"
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
          {/* 1. Dashed, Slate & Subtle */}
          <DocSection
            id="file-upload-variants-surfaces"
            title="1. Clean Surface Styles (Default, Dashed, Subtle)"
            description="Classic dashed borders, slate neutral backgrounds, and subtle surfaces."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <FileUpload variant="default" title="Default Dashed" description="2px dashed primary outline" showFileList={false} />
              <FileUpload variant="dashed" title="Slate Dashed" description="Neutral slate outline" showFileList={false} />
              <FileUpload variant="subtle" title="Subtle Surface" description="Solid background surface" showFileList={false} />
            </div>
          </DocSection>

          {/* 2. Glassmorphic & Radiant Gradient */}
          <DocSection
            id="file-upload-variants-glass-gradient"
            title="2. Glassmorphic & Gradient Styles"
            description="Translucent frosted glass backgrounds and purple gradient dropzones."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FileUpload variant="glassmorphic" title="Glassmorphic Dropzone" description="Frosted backdrop blur" showFileList={false} />
              <FileUpload variant="gradient" title="Gradient Dropzone" description="Radiant purple gradient" showFileList={false} />
            </div>
          </DocSection>

          {/* 3. Cyber Neon Glow & Dark Mode */}
          <DocSection
            id="file-upload-variants-glow-dark"
            title="3. Cyber Neon Glow & Dark Mode"
            description="Luminous emerald halos and dark slate surfaces for engineering platforms."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FileUpload variant="glow" title="Neon Glow" description="Emerald cyber outline" showFileList={false} />
              <FileUpload variant="dark" title="Dark Mode" description="Deep slate dropzone" showFileList={false} />
            </div>
          </DocSection>

          {/* 4. Compact & Accent */}
          <DocSection
            id="file-upload-variants-compact-accent"
            title="4. Compact & Primary Accent Styles"
            description="Compact padding for inline modal forms and strong brand accent borders."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FileUpload variant="compact" title="Compact Dropzone" description="Low vertical footprint" showFileList={false} />
              <FileUpload variant="accent" title="Primary Accent" description="Brand colored outline" showFileList={false} />
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
          id="file-upload-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 dropzone variants, multiple file mode, drag-and-drop state, and code generator."
        >
          <FileUploadPlayground />
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
            id="file-upload-mock-section"
            title="Dynamic S3 Pre-Signed URL Upload Pipeline Integration"
            description="Pattern for uploading files directly to cloud object storage using presigned upload URLs."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Pre-Signed URL Response"
                code={JSON.stringify({
                  uploadUrl: "https://s3.us-east-1.amazonaws.com/bucket/uploads/file_98b.png",
                  fields: {
                    key: "uploads/file_98b.png",
                    acl: "private",
                    "Content-Type": "image/png"
                  },
                  expiresInSeconds: 300
                }, null, 2)}
              />

              <CodeSnippet
                label="Direct S3 Upload Component"
                code={`import React, { useState } from 'react';
import { FileUpload } from '@core-circle/ui';

export const CloudStorageUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFilesChange = async (uploadedFiles) => {
    setFiles(uploadedFiles);
    for (const item of uploadedFiles) {
      if (item.file && item.status === 'success') {
        const res = await fetch('/api/v1/presign', {
          method: 'POST',
          body: JSON.stringify({ filename: item.name, contentType: item.type })
        });
        const { uploadUrl } = await res.json();
        await fetch(uploadUrl, { method: 'PUT', body: item.file });
      }
    }
  };

  return (
    <FileUpload
      variant="gradient"
      multiple
      files={files}
      onChange={handleFilesChange}
    />
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
            id="file-upload-overview-intro"
            title="Introduction"
            description="The FileUpload component provides a flexible drag-and-drop area for uploading single or batch files. It features 10 visual variants, format validation, size limit checks, live preview lists, and asynchronous progress hooks."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { FileUpload } from '@core-circle/ui';

<FileUpload
  variant="default"
  multiple
  accept="image/*,.pdf"
  maxSize={10 * 1024 * 1024}
  onChange={(files) => console.log(files)}
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={FILE_UPLOAD_PROPS_DATA} />
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
