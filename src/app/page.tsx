'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CreditCard, Truck, Landmark, Heart } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import FestiveReady from '@/components/ui/FestiveReady';
import ShopByCategories from '@/components/ui/ShopByCategories';
import CollageGallery from '@/components/ui/CollageGallery';
import Reviews from '@/components/ui/Reviews';
import { getFeaturedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export default function HomePage() {
  const featured = getFeaturedProducts();
  const { toggleWishlist, isInWishlist, addToCart } = useCart();

  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-burgundy" />,
      title: 'Assured Quality & Perfect Fit',
      description: 'Handcrafted with premium materials, following rigorous double-check size styling guidelines.'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-burgundy" />,
      title: 'Secure Payments',
      description: 'Your transactions are fully encrypted and protected using international security standards.'
    },
    {
      icon: <Truck className="w-8 h-8 text-burgundy" />,
      title: 'Free Delivery & Easy Returns',
      description: 'Enjoy free delivery across India on orders above Rs. 4999. Stress-free exchanges.'
    },
    {
      icon: <Landmark className="w-8 h-8 text-burgundy" />,
      title: 'COD Available',
      description: 'Convenient Cash on Delivery option is available for almost all pincodes across India.'
    }
  ];

  const instagramPosts = [
    {
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop',
      likes: '1.2k'
    },
    {
      image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=400&auto=format&fit=crop',
      likes: '958'
    },
    {
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop',
      likes: '2.1k'
    },
    {
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop',
      likes: '1.5k'
    },
    {
      image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=400&auto=format&fit=crop',
      likes: '842'
    },
    {
      image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=400&auto=format&fit=crop',
      likes: '1.7k'
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Showcase */}
      <Hero />

      {/* 2. Shop Categories Roundups */}
      <ShopByCategories />

      {/* 3. Festive Ready Arch Sections */}
      <FestiveReady />

      {/* 4. Lookbooks Grid Collage */}
      <CollageGallery />

      {/* 5. Featured/Trending Collection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-burgundy">
              The Curated Classics
            </h2>
            <p className="text-xs sm:text-sm tracking-widest text-foreground/50 uppercase max-w-lg mx-auto">
              Handpicked designs showcasing exquisite artistry
            </p>
            <div className="w-12 h-[1px] bg-burgundy/20 mx-auto pt-1" />
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {featured.map((product) => {
              const isLiked = isInWishlist(product.id);
              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-[#FCFBF7] rounded-xl overflow-hidden shadow-xs border border-burgundy/5 hover:shadow-md transition-all duration-300"
                >
                  {/* Image container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                    <Link href={`/products/${product.id}`} className="block w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-w-728px) 50vw, 16vw"
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Wishlist toggle button */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-burgundy rounded-full shadow-xs hover:scale-105 transition-all"
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isLiked ? 'fill-burgundy text-burgundy' : 'text-burgundy/80'
                        }`}
                      />
                    </button>
                    
                    {/* Size list display on hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-xs py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-burgundy">Sizes:</span>
                      <span className="text-foreground/70">{product.sizes.join(', ')}</span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">
                        {product.category}
                      </span>
                      <Link
                        href={`/products/${product.id}`}
                        className="font-serif text-xs sm:text-sm font-bold text-foreground hover:text-burgundy transition-colors line-clamp-1 block"
                      >
                        {product.name}
                      </Link>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="space-x-1.5 flex items-baseline">
                        <span className="text-xs sm:text-sm font-extrabold text-burgundy">
                          Rs. {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] sm:text-xs text-foreground/40 line-through">
                            Rs. {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(product, 1, product.sizes[0] || 'M')}
                        className="bg-burgundy/5 hover:bg-burgundy text-burgundy hover:text-white px-2.5 py-1 text-[9px] font-extrabold tracking-wider uppercase rounded transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-burgundy hover:bg-burgundy-light text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Parizaad / Benefits Section */}
      <section className="py-20 bg-[#FCFBF7] border-t border-burgundy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-burgundy">
              Why Parizaad?
            </h2>
            <div className="w-12 h-[1px] bg-burgundy/20 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-burgundy/5 shadow-xs text-center space-y-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="font-serif text-sm font-bold text-burgundy tracking-wide uppercase">
                  {benefit.title}
                </h3>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Ratings and Reviews Section */}
      <Reviews />

      {/* 8. Instagram Grid section */}
      <section className="py-20 bg-white border-t border-burgundy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-burgundy/60 flex items-center justify-center space-x-1">
              <InstagramIcon className="w-4 h-4 text-burgundy mr-1" />
              Instagram Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-burgundy">
              @parizaad_india
            </h2>
            <div className="w-12 h-[1px] bg-burgundy/20 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden shadow-xs border border-burgundy/5 cursor-pointer"
              >
                <Image
                  src={post.image}
                  alt={`Instagram feature ${index + 1}`}
                  fill
                  sizes="(max-w-728px) 50vw, 16vw"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-burgundy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-1">
                  <InstagramIcon className="w-6 h-6 animate-pulse" />
                  <span className="text-xs font-bold font-sans tracking-wide">{post.likes} Likes</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
