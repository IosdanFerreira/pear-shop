import type { Metadata } from 'next';
import { poppins } from '@/components/ui/fonts';
import './globals.css';
import { Providers } from '@/provider';
import Hydration from '@/store/hydration';

export const metadata: Metadata = {
  title: 'Pear Shop',
  description: 'Renove seu guarda-roupas e sua imagem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${poppins.className} antialiased bg-[#fff]`}>
        <Providers>
          <Hydration />
          {children}
        </Providers>
      </body>
    </html>
  );
}
