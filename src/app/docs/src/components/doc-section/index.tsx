import React from 'react';

interface DocSectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  showBorder?: boolean;
}

const DocSection = ({ id, title, description, children, showBorder }: DocSectionProps) => (
  <section id={id}>
    <div className="mb-8">
      <h2 className={`text-core-circle-text-main text-2xl font-core-circle-bold mb-2 ${showBorder ? 'border-b border-core-circle-border-main pb-4' : ''}`}>
        {title}
      </h2>
      <p className="text-core-circle-text-muted text-core-circle-sm mt-4">{description}</p>
    </div>
    {children}
  </section>
);

export default DocSection;
