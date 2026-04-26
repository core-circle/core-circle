import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@core-circle/icons';

const meta: Meta = {
  title: 'Foundation/Icons',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Gallery: StoryObj = {
  render: () => {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Icon Gallery</h1>
          <p className="text-lg text-slate-500">
            A comprehensive set of 50+ icons designed for the Core Circle ecosystem.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Object.entries(Icons).map(([name, IconComponent]) => (
            <div 
              key={name}
              className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(`<${name} />`);
                alert(`Copied <${name} /> to clipboard!`);
              }}
            >
              <div className="mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                {/* @ts-ignore */}
                <IconComponent size={32} />
              </div>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider text-center break-all">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
