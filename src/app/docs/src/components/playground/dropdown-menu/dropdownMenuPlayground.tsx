'use client';

import React, { useState } from 'react';
import { DropdownMenu, Button, Badge, Select } from '@core-circle/ui';
import {
  DropdownMenuVariant,
  DropdownMenuPosition,
  DropdownMenuSize,
} from '@core-circle/ui';
import {
  UserCircle,
  SettingsIcon,
  CreditCard,
  Lock,
  ChevronDown,
  CodeIcon,
  CopyIcon,
} from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { dropdownMenuPlaygroundStyles as s } from './dropdownMenuPlayground.styles';

export const DropdownMenuPlayground: React.FC = () => {
  const [variant, setVariant] = useState<DropdownMenuVariant>('card');
  const [position, setPosition] = useState<DropdownMenuPosition>('bottom-start');
  const [size, setSize] = useState<DropdownMenuSize>('md');

  const demoItems = [
    { id: 'profile', label: 'My Profile', icon: <UserCircle size={16} />, shortcut: '⇧⌘P' },
    { id: 'billing', label: 'Subscription Plan', icon: <CreditCard size={16} />, badge: <Badge size="sm" variant="gradient">PRO</Badge> },
    { id: 'settings', label: 'Account Settings', icon: <SettingsIcon size={16} />, shortcut: '⌘S' },
    { id: 'security', label: 'Security & 2FA', icon: <Lock size={16} />, divider: true },
    { id: 'logout', label: 'Sign Out', destructive: true, divider: true },
  ];

  const generatedCode = `<DropdownMenu
  variant="${variant}"
  size="${size}"
  position="${position}"
  trigger={
    <Button variant="primary" endIcon={<ChevronDown size={14} />}>
      Actions ▾
    </Button>
  }
  items={[
    { id: 'profile', label: 'My Profile', icon: <UserCircle size={16} />, shortcut: '⇧⌘P' },
    { id: 'billing', label: 'Subscription Plan', icon: <CreditCard size={16} />, badge: <Badge size="sm" variant="gradient">PRO</Badge> },
    { id: 'settings', label: 'Account Settings', icon: <SettingsIcon size={16} />, shortcut: '⌘S' },
    { id: 'security', label: 'Security & 2FA', icon: <Lock size={16} />, divider: true },
    { id: 'logout', label: 'Sign Out', destructive: true, divider: true },
  ]}
/>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as DropdownMenuVariant)}
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'card', label: 'Card' },
                  { value: 'minimal', label: 'Minimal' },
                  { value: 'glassmorphic', label: 'Glassmorphic' },
                  { value: 'gradient', label: 'Gradient' },
                  { value: 'bordered', label: 'Bordered' },
                  { value: 'dark', label: 'Dark' },
                  { value: 'compact', label: 'Compact' },
                  { value: 'pill', label: 'Pill' },
                  { value: 'accent', label: 'Accent' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as DropdownMenuSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />

              <Select
                label="Placement"
                value={position}
                onChange={(e) => setPosition(e.target.value as DropdownMenuPosition)}
                options={[
                  { value: 'bottom-start', label: 'Bottom Start' },
                  { value: 'bottom-end', label: 'Bottom End' },
                  { value: 'bottom-center', label: 'Bottom Center' },
                  { value: 'top-start', label: 'Top Start' },
                  { value: 'top-end', label: 'Top End' },
                  { value: 'left', label: 'Left' },
                  { value: 'right', label: 'Right' },
                ]}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <DropdownMenu
              variant={variant}
              size={size}
              position={position}
              trigger={
                <Button variant="primary" endIcon={<ChevronDown size={14} />}>
                  Open Dropdown Menu ▾
                </Button>
              }
              items={demoItems}
            />
          </div>

          {/* Live Code Output */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
