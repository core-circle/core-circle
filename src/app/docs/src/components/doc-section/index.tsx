import React from 'react';
import { Typography } from '@core-circle/ui';
import { DocSectionProps } from '../../interface/components/doc-section.types';
import { docSectionStyles as s } from './doc-section.styles';

const DocSection = ({ id, title, description, children, showBorder }: DocSectionProps) => (
  <section id={id}>
    <div className={s.headerWrapper}>
      <Typography 
        as="h2"
        variant="h2" 
        className={`${s.title.base} ${showBorder ? s.title.withBorder : ''}`}
      >
        {title}
      </Typography>
      <Typography variant="p" className={s.description}>{description}</Typography>
    </div>
    {children}
  </section>
);

export default DocSection;
