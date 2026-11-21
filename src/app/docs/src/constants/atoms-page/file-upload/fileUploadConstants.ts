import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const FILE_UPLOAD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
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
