import './global.css';

const basePath = process.env.DEPLOY_TARGET === 'gh-pages' ? '/core-circle' : '';

export const metadata = {
  title: 'Core Circle UI | Premium Component Library',
  description:
    'A high-performance, accessible, and beautifully designed component library for the Core Circle ecosystem.',
  icons: {
    icon: [
      { url: `${basePath}/favicon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/favicon.ico` },
    ],
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="alternate icon" href={`${basePath}/favicon.ico`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
