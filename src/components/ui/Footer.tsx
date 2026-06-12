'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22c-.4 0-.8-.1-1.1-.3-.3-.2-.5-.5-.5-.9.1-1.6.4-3.5.7-5.5-.3-.6-.5-1.4-.5-2.2 0-2 .9-3.8 2.6-3.8.9 0 1.6.6 1.6 1.7 0 1-.6 2.3-1 3.5-.3.8.3 1.5 1.1 1.5 1.5 0 2.7-1.6 2.7-3.9 0-3.3-2.1-5.5-5.3-5.5-3.8 0-6.1 2.8-6.1 5.9 0 1.2.4 2.2 1 2.9.1.1.1.3 0 .5l-.4 1.4c-.1.2-.2.3-.4.2-1.3-.5-2.1-2.1-2.1-3.8 0-4.4 3.7-8.7 9.5-8.7 5 0 8.3 3.6 8.3 7.8 0 5.1-2.8 8.8-6.8 8.8-1.3 0-2.6-.7-3-1.6l-.8 3.1c-.3 1.1-.9 2.2-1.5 3.1z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white border-t border-burgundy/10 pt-16 pb-8 text-foreground/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="relative h-12 w-36 mb-2">
              <Image
                src="/logo.png"
                alt="Parizaad Footer Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-xs leading-relaxed text-foreground/60">
              Premium handcrafted ethnic and fusion wear designed with love. Celebrating the rich legacy of traditional embroideries and silhouettes with a contemporary twist.
            </p>
            <div className="space-y-2.5 text-xs text-foreground/70 pt-2">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-burgundy flex-shrink-0" />
                <span>Sector 17, Chandigarh, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-burgundy flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-burgundy flex-shrink-0" />
                <span>support@parizaad.com</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-3">
              <a href="#" className="p-2 bg-burgundy/5 rounded-full hover:bg-burgundy hover:text-white text-burgundy transition-all" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-burgundy/5 rounded-full hover:bg-burgundy hover:text-white text-burgundy transition-all" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-burgundy/5 rounded-full hover:bg-burgundy hover:text-white text-burgundy transition-all" aria-label="Pinterest">
                <PinterestIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Pages list */}
          <div>
            <h3 className="font-serif text-sm font-bold text-burgundy uppercase tracking-wider mb-5">Pages</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/about" className="hover:text-burgundy hover:underline transition-all">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-burgundy hover:underline transition-all">Contact Us</Link></li>
              <li><Link href="/products" className="hover:text-burgundy hover:underline transition-all">Search Catalog</Link></li>
              <li><Link href="#" className="hover:text-burgundy hover:underline transition-all">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-burgundy hover:underline transition-all">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-burgundy hover:underline transition-all">Refund & Returns</Link></li>
            </ul>
          </div>

          {/* Column 3: Shop Categories */}
          <div>
            <h3 className="font-serif text-sm font-bold text-burgundy uppercase tracking-wider mb-5">Shop</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/products?category=Kurtas" className="hover:text-burgundy hover:underline transition-all">Kurtas</Link></li>
              <li><Link href="/products?category=Kurta%20Sets" className="hover:text-burgundy hover:underline transition-all">Kurta Sets</Link></li>
              <li><Link href="/products?category=Anarkali" className="hover:text-burgundy hover:underline transition-all">Anarkali</Link></li>
              <li><Link href="/products?category=Skirt%20Sets" className="hover:text-burgundy hover:underline transition-all">Skirt Sets</Link></li>
              <li><Link href="/products?category=Ethnic%20Dresses" className="hover:text-burgundy hover:underline transition-all">Ethnic Dresses</Link></li>
              <li><Link href="/products?category=Tunics" className="hover:text-burgundy hover:underline transition-all">Tunics</Link></li>
            </ul>
          </div>

          {/* Column 4: Help Info / Newsletter */}
          <div className="space-y-5">
            <div>
              <h3 className="font-serif text-sm font-bold text-burgundy uppercase tracking-wider mb-5">Subscribe</h3>
              <p className="text-xs text-foreground/60 mb-3 leading-relaxed">
                Sign up for exclusive styling tips, new collections arrivals, and festive sale events.
              </p>
              
              {subscribed ? (
                <div className="bg-green-50 text-green-700 text-xs font-semibold p-3 rounded-lg border border-green-200">
                  🎉 Thank you for subscribing to Parizaad!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-cream border border-burgundy/20 rounded-lg px-3 py-2 text-xs outline-none focus:border-burgundy text-foreground transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-burgundy hover:bg-burgundy-light text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-burgundy block mb-2 uppercase tracking-wider">Help & Support</span>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <Link href="#" className="hover:text-burgundy transition-all">Size Chart</Link>
                <Link href="#" className="hover:text-burgundy transition-all">Track Order</Link>
                <Link href="#" className="hover:text-burgundy transition-all">Shipping FAQs</Link>
                <Link href="#" className="hover:text-burgundy transition-all">Easy Returns</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="border-t border-burgundy/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-xs text-foreground/50 tracking-wider">
            &copy; {new Date().getFullYear()} Parizaad India. All Rights Reserved. Designed for elegance.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center space-x-3 opacity-60">
            <span className="text-[10px] uppercase font-bold tracking-wider text-foreground/50 mr-2">Secured Payments</span>
            <div className="bg-cream border border-foreground/15 rounded px-2 py-1 text-[9px] font-black tracking-widest text-foreground/75">VISA</div>
            <div className="bg-cream border border-foreground/15 rounded px-2 py-1 text-[9px] font-black tracking-widest text-foreground/75">MC</div>
            <div className="bg-cream border border-foreground/15 rounded px-2 py-1 text-[9px] font-black tracking-widest text-foreground/75">RUPAY</div>
            <div className="bg-cream border border-foreground/15 rounded px-2 py-1 text-[9px] font-black tracking-widest text-foreground/75">UPI</div>
            <div className="bg-cream border border-foreground/15 rounded px-2 py-1 text-[9px] font-black tracking-widest text-foreground/75">COD</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
