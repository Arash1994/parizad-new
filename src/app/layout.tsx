import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'PARIZAAD | Handcrafted Ethnic & Fusion Wear',
  description:
    'Discover exquisite handcrafted ethnic and fusion wear from PARIZAAD. Premium quality suits, traditional wear, and designer pieces with intricate embroidery. Worldwide shipping available.',
  keywords: [
    'ethnic wear',
    'fusion wear',
    'handcrafted clothing',
    'Indian suits',
    'designer wear',
    'PARIZAAD',
    'Chandigarh fashion'
  ],
  authors: [{ name: 'PARIZAAD' }],
  openGraph: {
    title: 'PARIZAAD | From Our Hearts to Your Wardrobe',
    description: 'Premium handcrafted ethnic and fusion wear',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased bg-cream">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
