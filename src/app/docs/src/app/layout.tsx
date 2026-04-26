import './global.css';

export const metadata = {
  title: 'Core Circle UI | Premium Component Library',
  description: 'A high-performance, accessible, and beautifully designed component library for the Core Circle ecosystem.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
