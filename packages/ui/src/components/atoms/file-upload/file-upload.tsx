'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { FileUploadProps, UploadedFileItem } from '../../../interface/atoms/file-upload/file-upload.types';
import { fileUploadDropzoneVariants, fileItemVariants } from './file-upload.styles';
import { Cloud, XIcon, CheckIcon, Alert } from '@core-circle/icons';

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      variant = 'default',
      accept,
      multiple = false,
      maxFiles,
      maxSize,
      disabled = false,
      showFileList = true,
      title = 'Click or drag files here to upload',
      description = 'Supports documents, images, and archives up to 25MB',
      icon,
      files: controlledFiles,
      onChange,
      onDropRejected,
      className,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [uncontrolledFiles, setUncontrolledFiles] = React.useState<UploadedFileItem[]>([]);
    const [isDragging, setIsDragging] = React.useState(false);

    const fileList = controlledFiles !== undefined ? controlledFiles : uncontrolledFiles;

    const processFiles = (incomingFiles: FileList | File[]) => {
      const validFiles: UploadedFileItem[] = [];
      const fileArray = Array.from(incomingFiles);

      for (const file of fileArray) {
        if (maxSize && file.size > maxSize) {
          onDropRejected?.(`File "${file.name}" exceeds maximum size of ${formatFileSize(maxSize)}`);
          continue;
        }
        if (maxFiles && fileList.length + validFiles.length >= maxFiles) {
          onDropRejected?.(`Cannot exceed maximum of ${maxFiles} files`);
          break;
        }

        validFiles.push({
          id: `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'success',
          file: file,
        });
      }

      const updated = multiple ? [...fileList, ...validFiles] : validFiles;
      if (controlledFiles === undefined) {
        setUncontrolledFiles(updated);
      }
      onChange?.(updated);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      if (disabled) return;
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFiles(e.dataTransfer.files);
      }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = () => {
      setIsDragging(false);
    };

    const handleFileDelete = (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const updated = fileList.filter((f) => f.id !== id);
      if (controlledFiles === undefined) {
        setUncontrolledFiles(updated);
      }
      onChange?.(updated);
    };

    return (
      <div ref={ref} className={cn('space-y-4 w-full', className)} {...props}>
        {/* Hidden File Input */}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              processFiles(e.target.files);
              e.target.value = '';
            }
          }}
          className="hidden"
        />

        {/* Dropzone Area */}
        <div
          onClick={() => {
            if (!disabled) inputRef.current?.click();
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(fileUploadDropzoneVariants({ variant, isDragging, disabled }))}
        >
          <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-full text-core-circle-primary mb-3 inline-flex items-center justify-center">
            {icon || <Cloud size={24} />}
          </div>
          <p className="font-core-circle-bold text-sm text-core-circle-text-main mb-1">
            {title}
          </p>
          <p className="text-xs text-core-circle-text-muted">
            {description}
          </p>
        </div>

        {/* Attached Files List */}
        {showFileList && fileList.length > 0 && (
          <div className="space-y-2">
            {fileList.map((file) => (
              <div key={file.id} className={cn(fileItemVariants({ status: file.status }))}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0">
                    {file.status === 'success' ? (
                      <CheckIcon size={16} className="text-emerald-600" />
                    ) : file.status === 'error' ? (
                      <Alert size={16} className="text-rose-600" />
                    ) : (
                      <Cloud size={16} className="text-slate-500" />
                    )}
                  </div>
                  <div className="overflow-hidden text-left">
                    <p className="font-semibold text-xs truncate text-core-circle-text-main">
                      {file.name}
                    </p>
                    <p className="text-[11px] text-core-circle-text-muted">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleFileDelete(file.id, e)}
                  className="p-1 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors focus:outline-none shrink-0"
                  aria-label="Remove file"
                >
                  <XIcon size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
