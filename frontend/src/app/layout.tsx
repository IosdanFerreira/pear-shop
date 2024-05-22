import type { Metadata } from 'next';
import { mulish } from '@/components/ui/fonts';
import './globals.css';
import { Providers } from '@/provider';

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
      <body className={`${mulish.className} antialiased bg-[#F4F4F4]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
