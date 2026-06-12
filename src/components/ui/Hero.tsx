'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[65vh] sm:h-[80vh] flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background Image with elegant overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-pulse-slow transition-transform duration-[10s]"
        style={{ 
          backgroundImage: `url('/images/hero.webp')`,
          animationDuration: '20s'
        }}
      />
      {/* Dark gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 via-transparent to-black/30" />

      {/* Decorative Traditional Arch Frame (Simulated via borders) */}
      <div className="absolute inset-4 sm:inset-10 border border-white/20 pointer-events-none rounded-xl z-10 flex items-center justify-center">
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/40" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/40" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/40" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/40" />
      </div>

      {/* Hero Content */}
      <div className="relative text-center text-white px-4 z-20 max-w-3xl space-y-6 animate-fade-in-up">
        
        {/* Vintage Ornament Icon representation */}
        <div className="flex justify-center items-center space-x-2">
          <div className="w-8 h-[1px] bg-gold" />
          <span className="text-gold text-xs tracking-widest uppercase font-bold">Festive Collection 2026</span>
          <div className="w-8 h-[1px] bg-gold" />
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-wide leading-tight drop-shadow-lg">
          Celebrate Weddings <br />
          <span className="italic font-normal text-gold">in style</span>
        </h1>

        <p className="text-sm sm:text-base font-light tracking-widest max-w-lg mx-auto opacity-95 text-cream/90 uppercase">
          From serene vows to sparkling nights
        </p>

        {/* Ornament line */}
        <div className="flex justify-center items-center py-2">
          <div className="w-12 h-[1px] bg-gold/50" />
          <div className="w-2.5 h-2.5 rotate-45 border border-gold mx-2" />
          <div className="w-12 h-[1px] bg-gold/50" />
        </div>

        <div className="pt-2">
          <Link
            href="/products"
            className="inline-block bg-gold hover:bg-gold-light text-burgundy font-bold text-xs tracking-widest uppercase px-10 py-4 rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center space-y-2 text-white/50 text-[10px] uppercase tracking-widest">
        <span>Scroll Down</span>
        <div className="w-[1px] h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-3 bg-gold rounded animate-bounce" />
        </div>
      </div>
    </section>
  );
}
