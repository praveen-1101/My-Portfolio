import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import DiamondOverlay from '@/components/diamond-overlay';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Praveen Kumar - Full-Stack Developer',
  description: 'Full-Stack Developer passionate about building efficient, user-friendly web applications. Backend Intern @ Advertyzement | UI Developer @ SafeYourWeb',
  keywords: 'full-stack developer, web developer, react, next.js, node.js, portfolio',
  authors: [{ name: 'Bora Sai Venkata Praveen Kumar' }],
  openGraph: {
    title: 'Praveen Kumar - Full-Stack Developer',
    description: 'Full-Stack Developer passionate about building efficient, user-friendly web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <DiamondOverlay />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}