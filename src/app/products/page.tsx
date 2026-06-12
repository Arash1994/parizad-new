'use client';

import React, { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Heart, SlidersHorizontal, ChevronRight, LayoutGrid } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, getProductsByCategory } from '@/data/products';
import { Product } from '@/types/product';

function ProductsListContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  const { toggleWishlist, isInWishlist, addToCart } = useCart();
  
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Kurtas', 'Kurta Sets', 'Anarkali', 'Skirt Sets', 'Ethnic Dresses', 'Tunics'];

  // Handle URL filters or category button selection
  useEffect(() => {
    let result = [...products];

    if (categoryFilter) {
      setActiveCategory(categoryFilter);
      result = result.filter((p) => p.category === categoryFilter);
    } else if (searchQuery) {
      setActiveCategory('All');
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    } else {
      setActiveCategory('All');
    }

    // Apply Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'discount') {
      result.sort((a, b) => {
        const discA = a.originalPrice ? a.originalPrice - a.price : 0;
        const discB = b.originalPrice ? b.originalPrice - b.price : 0;
        return discB - discA;
      });
    }

    setFilteredProducts(result);
  }, [categoryFilter, searchQuery, activeCategory, sortBy]);

  // Main Categories visual cards display (from screenshot 1)
  const mainCategoryBanners = [
    { name: 'Tunics', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=500&auto=format&fit=crop' },
    { name: 'Kurtas', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=500&auto=format&fit=crop' },
    { name: 'Ethnic Dresses', image: 'https://images.unsplash.com/photo-1768651925875-d1523ed07cb6?q=80&w=500&auto=format&fit=crop' },
    { name: 'Kurta Sets', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=500&auto=format&fit=crop' },
    { name: 'Anarkali', image: '/images/image.png' },
    { name: 'Skirt Sets', image: '/images/skirt.png' },
  ];

  return (
    <div className="py-10 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page title */}
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-burgundy/60 uppercase">Explore Handcrafts</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-wide text-burgundy">
            {searchQuery ? `Search Results for "${searchQuery}"` : categoryFilter || 'Ethnic Wear'}
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Categories Bar Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-burgundy/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                // Clear URL parameters
                window.history.pushState({}, '', '/products');
              }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-burgundy text-white border-burgundy shadow-xs'
                  : 'bg-white text-foreground/70 border-burgundy/10 hover:border-burgundy/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* If viewing All and no search query, render the design in screenshot 1 */}
        {activeCategory === 'All' && !searchQuery ? (
          <div className="space-y-16">
            {/* Category Cards Graphic Grid (First row of screenshot 1) */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              {mainCategoryBanners.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.name)}
                  className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xs border border-burgundy/5 cursor-pointer block"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-w-728px) 50vw, 16vw"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 text-left">
                    <span className="font-serif text-base sm:text-lg font-bold text-white tracking-wide block uppercase">
                      {cat.name}
                    </span>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gold opacity-90 block">
                      Shop Now
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Row-by-Row grouped categories */}
            {categories.slice(1).map((categoryName) => {
              const categoryItems = getProductsByCategory(categoryName).slice(0, 4);
              return (
                <div key={categoryName} className="space-y-6 pt-4 border-t border-burgundy/5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="font-serif text-2xl font-bold text-burgundy">{categoryName}</h2>
                      <div className="w-8 h-0.5 bg-gold" />
                    </div>
                    <button
                      onClick={() => setActiveCategory(categoryName)}
                      className="inline-flex items-center text-xs font-bold text-burgundy uppercase hover:underline"
                    >
                      View All <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                  {/* Horizontal Scroll / Grid of 4 items */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryItems.map((product) => {
                      const isLiked = isInWishlist(product.id);
                      return (
                        <div
                          key={product.id}
                          className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs border border-burgundy/5 hover:shadow-md transition-all duration-300"
                        >
                          <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                            <Link href={`/products/${product.id}`} className="block w-full h-full">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-w-728px) 50vw, 25vw"
                                style={{ objectFit: 'cover' }}
                                className="group-hover:scale-105 transition-transform duration-500"
                              />
                            </Link>

                            <button
                              onClick={() => toggleWishlist(product)}
                              className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-burgundy rounded-full shadow-xs hover:scale-105 transition-all"
                            >
                              <Heart
                                className={`w-4 h-4 transition-colors ${
                                  isLiked ? 'fill-burgundy text-burgundy' : 'text-burgundy/80'
                                }`}
                              />
                            </button>
                          </div>

                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <Link
                                href={`/products/${product.id}`}
                                className="font-serif text-sm font-bold text-foreground hover:text-burgundy transition-colors line-clamp-1 block"
                              >
                                {product.name}
                              </Link>
                              <p className="text-xs text-foreground/50 line-clamp-2 mt-1 leading-relaxed">
                                {product.description}
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-burgundy/5 flex items-center justify-between">
                              <div className="space-x-1.5 flex items-baseline">
                                <span className="text-sm font-extrabold text-burgundy">
                                  Rs. {product.price}
                                </span>
                                {product.originalPrice && (
                                  <span className="text-xs text-foreground/40 line-through">
                                    Rs. {product.originalPrice}
                                  </span>
                                )}
                              </div>
                              <button
                                onClick={() => addToCart(product, 1, product.sizes[0] || 'M')}
                                className="bg-burgundy text-white hover:bg-burgundy-light px-3 py-1.5 text-[9px] font-extrabold tracking-wider uppercase rounded-md transition-colors"
                              >
                                Add to Bag
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered Results layout */
          <div className="space-y-6">
            {/* Header controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white px-6 py-4 rounded-2xl border border-burgundy/5 gap-4">
              <div className="text-xs text-foreground/50 uppercase tracking-widest font-semibold flex items-center">
                <LayoutGrid className="w-4 h-4 text-burgundy mr-1.5" />
                Showing {filteredProducts.length} Creations
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-xs">
                  <SlidersHorizontal className="w-4 h-4 text-burgundy" />
                  <span className="font-bold text-burgundy uppercase">Sort by:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-cream border border-burgundy/20 px-3 py-1.5 text-xs rounded-lg text-foreground font-semibold outline-none focus:border-burgundy transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Biggest Savings</option>
                </select>
              </div>
            </div>

            {/* Grid display */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-burgundy/5 space-y-4">
                <div className="text-4xl">🔍</div>
                <h3 className="font-serif text-lg font-bold text-burgundy">No creations found</h3>
                <p className="text-xs text-foreground/50 max-w-sm mx-auto">
                  We couldn&apos;t find any matching products. Please try another category or adjust your search filter.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    window.history.pushState({}, '', '/products');
                  }}
                  className="bg-burgundy text-white px-6 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-burgundy-light shadow-md transition-colors"
                >
                  Reset Catalog
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                  const isLiked = isInWishlist(product.id);
                  return (
                    <div
                      key={product.id}
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs border border-burgundy/5 hover:shadow-md transition-all duration-300"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                        <Link href={`/products/${product.id}`} className="block w-full h-full">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-w-728px) 50vw, 25vw"
                            style={{ objectFit: 'cover' }}
                            className="group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>

                        <button
                          onClick={() => toggleWishlist(product)}
                          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-burgundy rounded-full shadow-xs hover:scale-105 transition-all"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              isLiked ? 'fill-burgundy text-burgundy' : 'text-burgundy/80'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-foreground/45 font-bold block mb-1">
                            {product.category}
                          </span>
                          <Link
                            href={`/products/${product.id}`}
                            className="font-serif text-sm font-bold text-foreground hover:text-burgundy transition-colors line-clamp-1 block"
                          >
                            {product.name}
                          </Link>
                          <p className="text-xs text-foreground/50 line-clamp-2 mt-1 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-burgundy/5 flex items-center justify-between">
                          <div className="space-x-1.5 flex items-baseline">
                            <span className="text-sm font-extrabold text-burgundy">
                              Rs. {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-foreground/40 line-through">
                                Rs. {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => addToCart(product, 1, product.sizes[0] || 'M')}
                            className="bg-burgundy text-white hover:bg-burgundy-light px-3 py-1.5 text-[9px] font-extrabold tracking-wider uppercase rounded-md transition-colors"
                          >
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center font-serif text-lg text-burgundy animate-pulse">
        Loading Parizaad Catalog...
      </div>
    }>
      <ProductsListContent />
    </Suspense>
  );
}
