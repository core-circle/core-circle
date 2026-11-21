import * as React from 'react';

export type FileUploadVariant = 
  | 'default'
  | 'dashed'
  | 'subtle'
  | 'bordered'
  | 'glassmorphic'
  | 'gradient'
  | 'glow'
  | 'dark'
  | 'compact'
  | 'accent';

export interface UploadedFileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  progress?: number;
  status?: 'pending' | 'uploading' | 'success' | 'error';
  errorMessage?: string;
  file?: File;
}

export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'title'> {
  variant?: FileUploadVariant;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // In bytes (e.g. 10 * 1024 * 1024 for 10MB)
  disabled?: boolean;
  showFileList?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  files?: UploadedFileItem[];
  onChange?: (files: UploadedFileItem[]) => void;
  onDropRejected?: (error: string) => void;
}
