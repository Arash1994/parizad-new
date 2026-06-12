'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, ShoppingBag, Truck, Undo2, Award, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

export default function ProductDetailClient({
  product,
  relatedProducts
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('details');
  const [activeImage, setActiveImage] = useState<string>(product.image);

  const isLiked = isInWishlist(product.id);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToBag = () => {
    addToCart(product, quantity, selectedSize);
  };

  const accordionTabs = [
    {
      id: 'details',
      title: 'Materials & Care',
      content: (
        <ul className="list-disc pl-4 space-y-1.5 text-xs text-foreground/70">
          {product.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
          <li>Authentic premium tailoring with delicate finishings.</li>
        </ul>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      content: (
        <p className="text-xs text-foreground/70 leading-relaxed">
          We ship worldwide. Orders within India are dispatched within 24-48 hours and delivered within 3-5 business days. Free shipping on all orders above Rs. 4999.
        </p>
      )
    },
    {
      id: 'returns',
      title: 'Easy Returns & Exchange',
      content: (
        <p className="text-xs text-foreground/70 leading-relaxed">
          We offer a hassle-free 7-day return and exchange policy on all unworn items with tags intact. Contact support@parizaad.com to initiate.
        </p>
      )
    }
  ];

  return (
    <div className="py-12 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-foreground/50 flex items-center space-x-1.5 font-semibold tracking-wide uppercase">
          <Link href="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-burgundy">Catalog</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-burgundy">{product.category}</Link>
          <span>/</span>
          <span className="text-burgundy">{product.name}</span>
        </div>

        {/* Product Visual & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Product Images Panel (5 columns) */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            {/* Alternative images list */}
            <div className="col-span-2 space-y-3">
              <button
                onClick={() => setActiveImage(product.image)}
                className={`relative aspect-[3/4] w-full rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === product.image ? 'border-burgundy' : 'border-burgundy/10'
                }`}
              >
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
              </button>
              {product.hoverImage && (
                <button
                  onClick={() => setActiveImage(product.hoverImage!)}
                  className={`relative aspect-[3/4] w-full rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === product.hoverImage ? 'border-burgundy' : 'border-burgundy/10'
                  }`}
                >
                  <Image src={product.hoverImage} alt={product.name} fill style={{ objectFit: 'cover' }} />
                </button>
              )}
            </div>

            {/* Selected Main Image */}
            <div className="col-span-10 relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-burgundy/5 shadow-sm bg-white">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                sizes="(max-w-728px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right: Product Details Panel (5 columns) */}
          <div className="lg:col-span-5 space-y-6 bg-white p-8 rounded-3xl border border-burgundy/5 shadow-xs">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-burgundy/60">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl font-extrabold text-foreground tracking-wide leading-tight">
                {product.name}
              </h1>
              
              {/* Star reviews representation */}
              <div className="flex items-center space-x-2 pt-1">
                <div className="flex items-center text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-foreground/45 uppercase tracking-wider">
                  (4.9 Rating based on 12 reviews)
                </span>
              </div>
            </div>

            {/* Price section */}
            <div className="space-y-1.5 pt-2 border-t border-burgundy/5">
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl font-black text-burgundy">
                  Rs. {product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-foreground/40 line-through">
                      Rs. {product.originalPrice}
                    </span>
                    <span className="text-xs bg-gold/10 text-gold font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <span className="text-[10px] text-green-700 font-bold block">
                Inclusive of all taxes
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-foreground/70 leading-relaxed pt-2">
              {product.description}
            </p>

            {/* Size selection */}
            <div className="space-y-3 pt-4 border-t border-burgundy/5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-burgundy uppercase tracking-wider">Select Size</span>
                <button className="text-[11px] text-burgundy hover:underline font-semibold">Size Chart</button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 rounded-lg border text-xs font-bold transition-all ${
                      selectedSize === size
                        ? 'bg-burgundy text-white border-burgundy shadow-xs'
                        : 'bg-white text-foreground/70 border-burgundy/10 hover:border-burgundy/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selection & Action buttons */}
            <div className="space-y-4 pt-4 border-t border-burgundy/5">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-bold text-burgundy uppercase tracking-wider">Qty</span>
                <div className="flex items-center border border-burgundy/15 rounded-lg bg-cream overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-burgundy/10 text-burgundy transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold px-4 text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-burgundy/10 text-burgundy transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={handleAddToBag}
                  className="flex-1 bg-burgundy hover:bg-burgundy-light text-white text-xs font-bold tracking-widest uppercase py-4 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
                
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-xl border transition-all ${
                    isLiked 
                      ? 'bg-burgundy/5 border-burgundy text-burgundy' 
                      : 'border-burgundy/10 hover:border-burgundy/30 text-foreground/60'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-burgundy' : ''}`} />
                </button>
              </div>
            </div>

            {/* Tab Accordions (Materials, Shipping, Returns) */}
            <div className="space-y-2.5 pt-6 border-t border-burgundy/5">
              {accordionTabs.map((tab) => {
                const isOpen = activeTab === tab.id;
                return (
                  <div key={tab.id} className="border border-burgundy/5 rounded-xl bg-[#FCFBF7] overflow-hidden">
                    <button
                      onClick={() => setActiveTab(isOpen ? '' : tab.id)}
                      className="w-full px-4 py-3.5 flex justify-between items-center text-left text-xs font-bold text-burgundy tracking-wide uppercase hover:bg-burgundy/5 transition-colors"
                    >
                      <span>{tab.title}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-burgundy/5 animate-fade-in-up duration-200">
                        {tab.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Security trust flags */}
            <div className="grid grid-cols-3 gap-3 text-[9px] font-bold text-foreground/50 uppercase text-center pt-2">
              <div className="flex flex-col items-center space-y-1">
                <Award className="w-5 h-5 text-burgundy/70" />
                <span>100% Quality</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Truck className="w-5 h-5 text-burgundy/70" />
                <span>Secure Ship</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Undo2 className="w-5 h-5 text-burgundy/70" />
                <span>Easy Return</span>
              </div>
            </div>

          </div>
        </div>

        {/* You May Also Like Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8 border-t border-burgundy/10 pt-16">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-burgundy">
                You May Also Like
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => {
                const liked = isInWishlist(p.id);
                return (
                  <div
                    key={p.id}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs border border-burgundy/5 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                      <Link href={`/products/${p.id}`} className="block w-full h-full">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-w-728px) 50vw, 25vw"
                          style={{ objectFit: 'cover' }}
                          className="group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      
                      <button
                        onClick={() => toggleWishlist(p)}
                        className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-burgundy rounded-full shadow-xs hover:scale-105 transition-all"
                      >
                        <Heart className={`w-4 h-4 ${liked ? 'fill-burgundy text-burgundy' : 'text-burgundy/80'}`} />
                      </button>
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <Link
                        href={`/products/${p.id}`}
                        className="font-serif text-sm font-bold text-foreground hover:text-burgundy transition-colors line-clamp-1 block"
                      >
                        {p.name}
                      </Link>
                      <div className="mt-4 pt-3 border-t border-burgundy/5 flex items-center justify-between">
                        <span className="text-sm font-extrabold text-burgundy">
                          Rs. {p.price}
                        </span>
                        <button
                          onClick={() => addToCart(p, 1, p.sizes[0] || 'M')}
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
          </div>
        )}

      </div>
    </div>
  );
}
