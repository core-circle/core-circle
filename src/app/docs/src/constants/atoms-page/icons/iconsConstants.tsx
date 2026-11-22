import { PropItem } from '../../../interface/components/props-table.types';

export const ICONS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Icons' },
];

export const ICONS_HEADER_CONTENT = {
  title: 'Icons',
  description:
    'A comprehensive collection of 520+ fully customizable SVG icons designed to integrate seamlessly across the Core Circle design system.',
};

export const ICONS_SECTIONS = [
  {
    id: 'usage',
    title: 'Usage',
    description:
      'Icons are easy to use and fully customizable with standard SVG props, variable sizes, colors, and stroke widths.',
    previews: [
      {
        title: 'Basic Usage',
        code: `import { HomeIcon, SearchIcon, Activity } from '@core-circle/icons';

<HomeIcon size={24} color="currentColor" />
<SearchIcon size={20} className="text-core-circle-primary" />
<Activity size={32} strokeWidth={1.5} color="#2563eb" />`,
      },
    ],
  },
  {
    id: 'gallery',
    title: '520+ Icon Gallery',
    description:
      'Filter, customize size, color, and stroke width live, then click any icon to copy the React code.',
    showBorder: true,
    isGallery: true,
  },
];

export const ICONS_PROPS_DATA: PropItem[] = [
  {
    name: 'size',
    type: 'number | string',
    defaultValue: '24',
    description:
      'Sets both width and height of the icon (pixels or CSS unit).',
  },
  {
    name: 'color',
    type: 'string',
    defaultValue: "'currentColor'",
    description:
      'Stroke or fill color of the icon. Defaults to current text color.',
  },
  {
    name: 'strokeWidth',
    type: 'number | string',
    defaultValue: '2',
    description: 'Stroke line width (e.g. 1, 1.5, 2, 2.5).',
  },
  {
    name: 'className',
    type: 'string',
    defaultValue: "''",
    description:
      'Custom CSS classes (Tailwind utilities like text-*, hover:*, animate-*).',
  },
];
