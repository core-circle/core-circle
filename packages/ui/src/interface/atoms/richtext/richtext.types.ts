import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { richTextVariants } from '../../../components/atoms/richtext/richtext.styles';

export interface RichTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof richTextVariants> {
  content: string;
}
