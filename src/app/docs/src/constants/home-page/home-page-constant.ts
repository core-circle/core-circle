import { Atom, /* Molecule, Puzzle, */ Palette } from '@core-circle/icons';

/**
 * Home Page Header Content
 */
export const HOME_HEADER_CONTENT = {
  title: 'Core Circle',
  titleAccent: 'UI Components',
  description: 'A high-performance, accessible, and beautifully designed component library built for the next generation of Core Circle applications.',
};

/**
 * Home Page Section Title
 */
export const HOME_SECTION_TITLE = 'Library Components';

/**
 * Main component category cards for the home page grid
 */
export const HOME_COMPONENT_CARDS = [
  {
    title: 'Atoms',
    description: 'The basic building blocks: Buttons, Icons, and Inputs. The foundation of our UI.',
    href: '/atoms',
    icon: Atom,
  },
  // {
  //   title: 'Molecules',
  //   description: 'Groups of atoms bonded together. More complex components like Search Bars or Card headers.',
  //   href: '/molecules',
  //   icon: Molecule,
  // },
  // {
  //   title: 'Organisms',
  //   description: 'Relatively complex UI components composed of groups of molecules and/or atoms.',
  //   href: '/organisms',
  //   icon: Puzzle,
  // },
  {
    title: 'Generators',
    description: 'Interactive tooling, theme configurators, and asset generators for the CoreCircle ecosystem.',
    href: '/generators',
    icon: Palette,
  },
];
