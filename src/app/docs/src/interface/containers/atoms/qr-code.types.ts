import React from 'react';

export interface QRCodeContainerProps {
  sections?: any[];
  headerContent: {
    title: string;
    description: string;
  };
  breadcrumbItems: {
    label: string;
    href?: string;
    icon?: React.ReactNode;
  }[];
}
