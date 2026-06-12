'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FestiveReady() {
  const collections = [
    {
      title: 'Mehndi Perfect Fits',
      subtitle: 'Greens & Pastel Yellows',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Kurtas',
      color: 'border-green-600/20 text-green-800'
    },
    {
      title: 'Sangeet Perfect Styles',
      subtitle: 'For the Dance Floor',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Kurta%20Sets',
      color: 'border-pink-600/20 text-pink-800'
    },
    {
      title: 'Elegant & Evening-Ready',
      subtitle: 'Velvets & Heavy Zari',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Anarkali',
      color: 'border-purple-600/20 text-purple-800'
    },
    {
      title: 'Wedding Perfect Looks',
      subtitle: 'Grand Banarasi & Georgettes',
      image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Skirt%20Sets',
      color: 'border-gold/20 text-gold'
    }
  ];

  return (
    <section className="py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center space-x-1.5">
            <span className="text-xl">✨</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-burgundy">
              Get Festive Ready
            </h2>
            <span className="text-xl">🪔</span>
          </div>
          <p className="text-xs sm:text-sm tracking-widest text-foreground/50 uppercase max-w-lg mx-auto">
            Explore curated looks crafted for unforgettable celebrations
          </p>
          <div className="w-12 h-[1px] bg-burgundy/20 mx-auto pt-1" />
        </div>

        {/* 4 Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((col, index) => (
            <Link
              key={index}
              href={col.href}
              className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 border border-burgundy/5"
            >
              {/* Arch Shaped Image Frame */}
              <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden border border-burgundy/10 shadow-inner">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-w-728px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title & Details */}
              <div className="text-center mt-5 space-y-1 w-full">
                <h3 className="font-serif text-base font-bold text-burgundy tracking-wide group-hover:text-burgundy-light transition-colors">
                  {col.title}
                </h3>
                <p className="text-[11px] tracking-wider text-foreground/50 uppercase">
                  {col.subtitle}
                </p>
                <div className="inline-flex items-center text-[10px] font-bold tracking-widest text-burgundy uppercase pt-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  View Collection &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
