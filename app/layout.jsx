import { Inter, Bebas_Neue } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata = {
  title: 'Portfolio - Mateo Nikšić',
  description: 'Portfolio stranica',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const bebas = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: ['400'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>{children}</body>
      <GoogleAnalytics gaId='G-C7RCT1CN0L' />
    </html>
  );
}
