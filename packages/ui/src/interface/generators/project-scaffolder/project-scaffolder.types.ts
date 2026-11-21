import type { HTMLAttributes } from 'react';
import type { NeutralUndertonePreset, BorderRadiusPreset } from '@core-circle/theme';

export type ScaffolderFramework = 'nextjs' | 'react-vite';
export type ScaffolderTemplate = 'dashboard' | 'landing' | 'minimal';
export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export interface ProjectScaffolderConfig {
  projectName: string;
  framework: ScaffolderFramework;
  template: ScaffolderTemplate;
  packageManager: PackageManager;
  brandName: string;
  cssPrefix: string;
  primaryColor: string;
  neutralUndertone: NeutralUndertonePreset;
  radius: BorderRadiusPreset;
}

export interface GeneratedFileTree {
  [filePath: string]: string;
}

export interface ProjectScaffolderProps extends HTMLAttributes<HTMLDivElement> {
  initialConfig?: Partial<ProjectScaffolderConfig>;
  onDownload?: (config: ProjectScaffolderConfig) => void;
}
