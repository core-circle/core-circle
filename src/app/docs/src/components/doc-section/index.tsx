import React from 'react';
import { DocSectionProps } from '../../interface/components/doc-section.types';
import { docSectionStyles as s } from './doc-section.styles';

const DocSection = ({ id, title, description, children, showBorder }: DocSectionProps) => (
  <section id={id}>
    <div className={s.headerWrapper}>
      <h2 className={`${s.title.base} ${showBorder ? s.title.withBorder : ''}`}>
        {title}
      </h2>
      <p className={s.description}>{description}</p>
    </div>
    {children}
  </section>
);

export default DocSection;
