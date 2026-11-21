'use client';

import Link from 'next/link';
import { Breadcrumb, ProjectScaffolder } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';

export default function ProjectScaffolderPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
            { label: 'Generators', href: '/generators' },
            { label: 'Project Scaffolder' },
          ]}
          renderLink={(props) => <Link {...props} />}
        />
      </div>

      <div className="w-full">
        <ProjectScaffolder />
      </div>
    </div>
  );
}
