'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CollageGallery() {
  const items = [
    {
      title: 'Nightwear',
      tagline: 'Comfort meets elegance',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Tunics',
      gridArea: 'lg:col-span-2 lg:row-span-2'
    },
    {
      title: 'Printed Cord Sets',
      tagline: 'Modern Fusion',
      image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Kurtas',
      gridArea: 'lg:col-span-2 lg:row-span-1'
    },
    {
      title: 'Premium Prints',
      tagline: 'Timeless block prints',
      image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Kurta%20Sets',
      gridArea: 'lg:col-span-2 lg:row-span-1'
    },
    {
      title: 'Pastel Dreams',
      tagline: 'Serene Pastels',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Ethnic%20Dresses',
      gridArea: 'lg:col-span-2 lg:row-span-1'
    },
    {
      title: 'Floral Classics',
      tagline: 'Vibrant handcrafts',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
      href: '/products?category=Anarkali',
      gridArea: 'lg:col-span-2 lg:row-span-1'
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-burgundy/60">Featured Lookbooks</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-burgundy">
            Discover Our Stories
          </h2>
          <div className="w-12 h-[1px] bg-burgundy/20 mx-auto mt-2" />
        </div>

        {/* CSS Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[250px] sm:auto-rows-[300px]">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl shadow-sm border border-burgundy/5 cursor-pointer block ${item.gridArea}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-w-728px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Overlay mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:via-black/30 transition-all duration-300" />

              {/* Text details overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-cream/80 tracking-wider font-sans uppercase">
                  {item.tagline}
                </p>
                <div className="pt-2 text-[10px] uppercase font-bold tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Look &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
