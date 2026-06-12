'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopByCategories() {
  const categories = [
    {
      name: 'Kurtas',
      count: '4 designs',
      image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=500&auto=format&fit=crop',
      href: '/products?category=Kurtas'
    },
    {
      name: 'Kurta Sets',
      count: '4 designs',
      image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=500&auto=format&fit=crop',
      href: '/products?category=Kurta%20Sets'
    },
    {
      name: 'Anarkali',
      count: '4 designs',
      image: '/images/image.png',
      href: '/products?category=Anarkali'
    },
    {
      name: 'Skirt Sets',
      count: '4 designs',
      image: '/images/skirt.png',
      href: '/products?category=Skirt%20Sets'
    },
    {
      name: 'Ethnic Dresses',
      count: '4 designs',
      image: 'https://images.unsplash.com/photo-1768651925875-d1523ed07cb6?q=80&w=400&auto=format&fit=crop',
      href: '/products?category=Ethnic%20Dresses'
    },
    {
      name: 'Tunics',
      count: '4 designs',
      image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=400&auto=format&fit=crop',
      href: '/products?category=Tunics'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-burgundy">
            Shop by Categories
          </h2>
          <div className="flex justify-center items-center py-1">
            <div className="w-10 h-[1px] bg-gold" />
            <div className="w-2.5 h-2.5 rotate-45 border border-gold mx-2" />
            <div className="w-10 h-[1px] bg-gold" />
          </div>
        </div>

        {/* Circular Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-center">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="group flex flex-col items-center space-y-4"
            >
              {/* Oval Image Container */}
              <div className="relative w-28 h-40 sm:w-36 sm:h-52 rounded-full overflow-hidden border-2 border-burgundy/10 group-hover:border-burgundy shadow-xs group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-w-728px) 150px, 200px"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Count */}
              <div className="text-center">
                <h3 className="font-serif text-sm font-bold text-burgundy tracking-wide group-hover:text-gold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[10px] tracking-wider text-foreground/40 uppercase mt-0.5">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
