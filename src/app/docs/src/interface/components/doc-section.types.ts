import React from 'react';

export interface DocSectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  showBorder?: boolean;
}
