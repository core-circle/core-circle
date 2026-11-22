'use client';

import React from 'react';
import { FileUpload, Badge } from '@core-circle/ui';
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

export const FILE_UPLOAD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'FileUpload' },
];

export const FILE_UPLOAD_HEADER_CONTENT = {
  title: 'FileUpload',
  description: 'An interactive drag-and-drop file upload dropzone featuring file type validation, size limit checks, multi-file queuing, progress states, and 10 styling variants.',
};

export const FILE_UPLOAD_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade file upload themes for KYC passport verifications, cloud binary ingestion, creative media portfolios, medical scans, and expense receipts.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants from dashed borders to frosted glass and cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive file upload playground with live drag-and-drop, multi-file limits, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic S3 pre-signed URL upload pipeline integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const FILE_UPLOAD_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-kyc-passport',
    title: '1. KYC Government ID & Passport Uploader Theme',
    description: 'High-security identity document uploader with strict PDF/JPG format checks and encryption badges.',
    previewTitle: 'Identity Verification Dropzone',
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
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
</div>`,
    render: () => (
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
    )
  },
  {
    id: 'theming-cloud-binary',
    title: '2. Cloud Artifact & Docker Image Ingestion Theme',
    description: 'Deep cyber slate dropzone with glowing emerald accents for tarballs and container layers.',
    previewTitle: 'Binary Ingestion Dropzone',
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
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
</div>`,
    render: () => (
      <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
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
    )
  },
  {
    id: 'theming-portfolio-media',
    title: '3. Creative Portfolio & Brand Media Assets Theme',
    description: 'Radiant purple gradient dropzone for high-resolution photography and vector SVG assets.',
    previewTitle: 'Creative Assets Dropzone',
    code: `<div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-purple-950">Brand Kit & Vector Artwork</h4>
  <FileUpload
    variant="gradient"
    multiple
    accept="image/*,.svg,.ai"
    title="Drop Brand Assets, SVGs, or 4K Renders"
    description="Batch upload supports up to 20 assets simultaneously"
  />
</div>`,
    render: () => (
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
    )
  },
  {
    id: 'theming-medical-scan',
    title: '4. Healthcare DICOM Scan & Laboratory Results Theme',
    description: 'Clean bordered uploader adhering to HIPAA medical record compliance standards.',
    previewTitle: 'Clinical Scan Dropzone',
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <div className="flex items-center justify-between">
    <h4 className="font-bold text-sm text-slate-900">Diagnostic Imaging Intake</h4>
    <Badge variant="success" size="sm" shape="pill">HIPAA Compliant</Badge>
  </div>
  <FileUpload
    variant="bordered"
    title="Upload MRI, CT Scan, or Ultrasound DICOM Packages"
    description="Zero-retention ephemeral processing pipeline"
  />
</div>`,
    render: () => (
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
    )
  },
  {
    id: 'theming-expense-receipts',
    title: '5. Expense Invoices & Tax Receipt Ingestion Theme',
    description: 'Frosted glassmorphism uploader with OCR automated data extraction.',
    previewTitle: 'Receipt OCR Ingestion',
    code: `<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-blue-950">AI Automated Receipt OCR</h4>
  <FileUpload
    variant="glassmorphic"
    multiple
    title="Drop Invoices, Receipts, or PDF Statements"
    description="Line items, tax totals, and currencies are automatically parsed"
  />
</div>`,
    render: () => (
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
        <h4 className="font-bold text-sm text-blue-950">AI Automated Receipt OCR</h4>
        <FileUpload
          variant="glassmorphic"
          multiple
          title="Drop Invoices, Receipts, or PDF Statements"
          description="Line items, tax totals, and currencies are automatically parsed"
        />
      </div>
    )
  }
];

export const FILE_UPLOAD_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'file-upload-variants-surfaces',
    title: '1. Clean Surface Styles (Default, Dashed, Subtle)',
    description: 'Classic dashed borders, slate neutral backgrounds, and subtle surfaces.',
    customRender: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <FileUpload variant="default" title="Default Dashed" description="2px dashed primary outline" showFileList={false} />
        <FileUpload variant="dashed" title="Slate Dashed" description="Neutral slate outline" showFileList={false} />
        <FileUpload variant="subtle" title="Subtle Surface" description="Solid background surface" showFileList={false} />
      </div>
    )
  },
  {
    id: 'file-upload-variants-glass-gradient',
    title: '2. Glassmorphic & Gradient Styles',
    description: 'Translucent frosted glass backgrounds and purple gradient dropzones.',
    customRender: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <FileUpload variant="glassmorphic" title="Glassmorphic Dropzone" description="Frosted backdrop blur" showFileList={false} />
        <FileUpload variant="gradient" title="Gradient Dropzone" description="Radiant purple gradient" showFileList={false} />
      </div>
    )
  },
  {
    id: 'file-upload-variants-glow-dark',
    title: '3. Cyber Neon Glow & Dark Mode',
    description: 'Luminous emerald halos and dark slate surfaces for engineering platforms.',
    customRender: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <FileUpload variant="glow" title="Neon Glow" description="Emerald cyber outline" showFileList={false} />
        <FileUpload variant="dark" title="Dark Mode" description="Deep slate dropzone" showFileList={false} />
      </div>
    )
  },
  {
    id: 'file-upload-variants-compact-accent',
    title: '4. Compact & Primary Accent Styles',
    description: 'Compact padding for inline modal forms and strong brand accent borders.',
    customRender: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <FileUpload variant="compact" title="Compact Dropzone" description="Low vertical footprint" showFileList={false} />
        <FileUpload variant="accent" title="Primary Accent" description="Brand colored outline" showFileList={false} />
      </div>
    )
  }
];

export const FILE_UPLOAD_PLAYGROUND_SECTION = {
  id: 'file-upload-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 dropzone variants, multiple file mode, drag-and-drop state, and code generator.',
};

export const FILE_UPLOAD_MOCK_SECTION = {
  id: 'file-upload-mock-section',
  title: 'Dynamic S3 Pre-Signed URL Upload Pipeline Integration',
  description: 'Pattern for uploading files directly to cloud object storage using presigned upload URLs.',
  snippets: [
    {
      label: 'Sample Pre-Signed URL Response',
      code: JSON.stringify({
        uploadUrl: "https://s3.us-east-1.amazonaws.com/bucket/uploads/file_98b.png",
        fields: {
          key: "uploads/file_98b.png",
          acl: "private",
          "Content-Type": "image/png"
        },
        expiresInSeconds: 300
      }, null, 2),
    },
    {
      label: 'Direct S3 Upload Component',
      code: `import React, { useState } from 'react';
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
};`,
    }
  ]
};

export const FILE_UPLOAD_OVERVIEW_SECTION = {
  id: 'file-upload-overview-intro',
  title: 'Introduction',
  description: 'The FileUpload component provides a flexible drag-and-drop area for uploading single or batch files. It features 10 visual variants, format validation, size limit checks, live preview lists, and asynchronous progress hooks.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { FileUpload } from '@core-circle/ui';

<FileUpload
  variant="default"
  multiple
  accept="image/*,.pdf"
  maxSize={10 * 1024 * 1024}
  onChange={(files) => console.log(files)}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const FILE_UPLOAD_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'dashed' | 'subtle' | 'bordered' | 'glassmorphic' | 'gradient' | 'glow' | 'dark' | 'compact' | 'accent'",
    defaultValue: "'default'",
    description: 'Dropzone border and surface styling aesthetic.'
  },
  {
    name: 'accept',
    type: 'string',
    defaultValue: '-',
    description: 'Allowed MIME types or file extensions (e.g. image/*, .pdf).'
  },
  {
    name: 'multiple',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether multiple files can be selected simultaneously.'
  },
  {
    name: 'maxFiles',
    type: 'number',
    defaultValue: '-',
    description: 'Maximum allowable number of attached files.'
  },
  {
    name: 'maxSize',
    type: 'number',
    defaultValue: '-',
    description: 'Maximum file size in bytes.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables dropzone clicks and drag events.'
  },
  {
    name: 'showFileList',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render the attached file preview list below the dropzone.'
  },
  {
    name: 'title',
    type: 'React.ReactNode',
    defaultValue: "'Click or drag files here to upload'",
    description: 'Primary headline text inside the dropzone.'
  },
  {
    name: 'description',
    type: 'React.ReactNode',
    defaultValue: "'Supports documents, images, and archives up to 25MB'",
    description: 'Secondary guidance text.'
  },
  {
    name: 'onChange',
    type: '(files: UploadedFileItem[]) => void',
    defaultValue: '-',
    description: 'Callback triggered whenever the file queue changes.'
  },
];
