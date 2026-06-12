'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Heart, ShoppingBag, User, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    wishlistItems,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart
  } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { name: 'Kurtas', href: '/products?category=Kurtas' },
    { name: 'Kurta Sets', href: '/products?category=Kurta%20Sets' },
    { name: 'Anarkali', href: '/products?category=Anarkali' },
    { name: 'Skirt Sets', href: '/products?category=Skirt%20Sets' },
    { name: 'Ethnic Dresses', href: '/products?category=Ethnic%20Dresses' },
    { name: 'Tunics', href: '/products?category=Tunics' },
  ];

  const filteredSearchProducts = searchQuery
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* 1. Promotional Header */}
      <div className="bg-burgundy text-white text-xs py-2 px-4 text-center font-medium tracking-widest uppercase select-none relative z-50">
        ✨ Get Free Shipping on Orders Above Rs. 4999 | COD Available ✨
      </div>

      {/* 2. Main Header Container */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b border-burgundy/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Search | Logo | Icons */}
          <div className="flex items-center justify-between h-20">
            
            {/* Search Bar Action */}
            <div className="flex-1 flex items-center">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-foreground/80 hover:text-burgundy p-2 rounded-full hover:bg-burgundy/5 transition-colors focus:outline-none"
                aria-label="Search products"
              >
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>
              <div className="hidden lg:block text-xs text-foreground/50 tracking-wider ml-2 uppercase font-medium">
                Search Catalog
              </div>
            </div>

            {/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Link href="/" className="relative block h-14 w-44 hover:opacity-90 transition-opacity">
                <Image
                  src="/logo.png"
                  alt="Parizaad Brand Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
            </div>

            {/* Utility Icons */}
            <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-4">
              <Link 
                href="/products" 
                className="hidden md:inline-block text-xs font-semibold tracking-wider text-burgundy hover:text-burgundy-light uppercase mr-2 border border-burgundy/20 px-3 py-1.5 rounded-full transition-all hover:bg-burgundy/5"
              >
                Shop All
              </Link>
              
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative text-foreground/80 hover:text-burgundy p-2 rounded-full hover:bg-burgundy/5 transition-all focus:outline-none"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 stroke-[1.5]" />
                {wishlistItems.length > 0 && (
                  <span className="absolute top-1 right-1 bg-gold text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-foreground/80 hover:text-burgundy p-2 rounded-full hover:bg-burgundy/5 transition-all focus:outline-none"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-burgundy text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="text-foreground/80 hover:text-burgundy p-2 rounded-full hover:bg-burgundy/5 transition-colors focus:outline-none"
                aria-label="Account profile"
              >
                <User className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Bottom Row: Navigation Links */}
          <nav className="hidden md:flex justify-center items-center space-x-8 pb-3 text-xs tracking-widest font-semibold uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 border-b-2 transition-all duration-200 ${
                    isActive
                      ? 'border-burgundy text-burgundy'
                      : 'border-transparent text-foreground/70 hover:text-burgundy hover:border-burgundy/30'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* 3. Dropdown Search Box overlay */}
      {showSearch && (
        <div className="fixed inset-x-0 top-0 z-50 bg-cream/98 border-b border-burgundy/20 shadow-xl p-6 animate-fade-in-up duration-300">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif text-lg font-bold text-burgundy">Search our collections</span>
              <button
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className="p-1 rounded-full hover:bg-burgundy/10 text-foreground transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="What are you looking for today? e.g. Silk Kurta, Anarkali..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-burgundy/30 focus:border-burgundy px-4 py-3 text-lg text-foreground placeholder-foreground/40 outline-none transition-all duration-200"
                autoFocus
              />
              <button type="submit" className="absolute right-2 top-3 text-burgundy">
                <Search className="w-6 h-6" />
              </button>
            </form>

            {/* Quick search suggestions */}
            {searchQuery && (
              <div className="mt-4 bg-white/70 border border-burgundy/5 rounded-lg p-4 max-h-[350px] overflow-y-auto shadow-md">
                <div className="text-xs font-semibold text-burgundy tracking-wider uppercase mb-2">Suggestions</div>
                {filteredSearchProducts.length > 0 ? (
                  <div className="divide-y divide-burgundy/5">
                    {filteredSearchProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        onClick={() => {
                          setShowSearch(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center py-2.5 hover:bg-burgundy/5 px-2 rounded transition-all"
                      >
                        <div className="relative w-12 h-16 rounded overflow-hidden mr-3">
                          <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{p.name}</div>
                          <div className="text-xs text-foreground/60">{p.category}</div>
                          <div className="text-sm font-bold text-burgundy mt-0.5">Rs. {p.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-foreground/50 py-4 text-center">No products found matching &quot;{searchQuery}&quot;</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. Sliding Cart Drawer overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsCartOpen(false)}
          />
          {/* Drawer content */}
          <div className="relative w-full max-w-md bg-cream h-full flex flex-col shadow-2xl z-10 animate-fade-in-up duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-burgundy/10 bg-white">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-burgundy" />
                <span className="font-serif text-xl font-bold text-burgundy">Your Shopping Bag</span>
                <span className="bg-burgundy/10 text-burgundy text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full hover:bg-burgundy/10 text-foreground transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <ShoppingBag className="w-16 h-16 text-foreground/20 stroke-[1]" />
                  <div className="font-serif text-lg font-bold text-burgundy">Your bag is empty</div>
                  <p className="text-sm text-foreground/60 max-w-xs">
                    Looks like you haven&apos;t added any items to your bag yet. Let&apos;s find something beautiful!
                  </p>
                  <Link
                    href="/products"
                    onClick={() => setIsCartOpen(false)}
                    className="bg-burgundy text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-burgundy-light shadow-md transition-colors inline-block"
                  >
                    Browse Collection
                  </Link>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${index}`}
                    className="flex space-x-4 bg-white p-3 rounded-xl shadow-xs border border-burgundy/5"
                  >
                    {/* Product Image */}
                    <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Link
                            href={`/products/${item.product.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-serif text-sm font-bold text-foreground hover:text-burgundy transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-foreground/40 hover:text-red-600 p-0.5 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          Category: {item.product.category}
                        </div>
                        <div className="inline-block bg-burgundy/5 text-burgundy text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5 uppercase">
                          Size: {item.selectedSize}
                        </div>
                      </div>
                      
                      {/* Price & Quantity Controls */}
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-sm font-bold text-burgundy">
                          Rs. {item.product.price * item.quantity}
                        </div>
                        <div className="flex items-center border border-burgundy/10 rounded-md bg-cream overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                            className="p-1 hover:bg-burgundy/10 text-burgundy transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-semibold px-2.5 text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                            className="p-1 hover:bg-burgundy/10 text-burgundy transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer and Checkout button */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-burgundy/10 bg-white space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>Subtotal</span>
                    <span>Rs. {cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">
                      {cartTotal >= 4999 ? 'Free' : 'Rs. 150'}
                    </span>
                  </div>
                  <div className="border-t border-burgundy/5 my-2 pt-2 flex justify-between font-serif text-base font-bold text-burgundy">
                    <span>Estimated Total</span>
                    <span>Rs. {cartTotal >= 4999 ? cartTotal : cartTotal + 150}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert('Order simulation successful! Thank you for shopping with Parizaad.');
                    clearCart();
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3 bg-burgundy hover:bg-burgundy-light text-white text-xs font-bold tracking-widest uppercase rounded-lg shadow-md transition-colors"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-xs text-burgundy hover:underline font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. Sliding Wishlist Drawer overlay */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsWishlistOpen(false)}
          />
          {/* Drawer content */}
          <div className="relative w-full max-w-md bg-cream h-full flex flex-col shadow-2xl z-10 animate-fade-in-up duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-burgundy/10 bg-white">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-burgundy fill-burgundy" />
                <span className="font-serif text-xl font-bold text-burgundy">Your Wishlist</span>
                <span className="bg-burgundy/10 text-burgundy text-xs font-bold px-2 py-0.5 rounded-full">
                  {wishlistItems.length}
                </span>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-1 rounded-full hover:bg-burgundy/10 text-foreground transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Wishlist Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {wishlistItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <Heart className="w-16 h-16 text-foreground/20 stroke-[1]" />
                  <div className="font-serif text-lg font-bold text-burgundy">Wishlist is empty</div>
                  <p className="text-sm text-foreground/60 max-w-xs">
                    Save items you love here to easily find them later.
                  </p>
                  <Link
                    href="/products"
                    onClick={() => setIsWishlistOpen(false)}
                    className="bg-burgundy text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-burgundy-light shadow-md transition-colors inline-block"
                  >
                    Discover Products
                  </Link>
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 bg-white p-3 rounded-xl shadow-xs border border-burgundy/5"
                  >
                    {/* Product Image */}
                    <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Link
                            href={`/products/${item.id}`}
                            onClick={() => setIsWishlistOpen(false)}
                            className="font-serif text-sm font-bold text-foreground hover:text-burgundy transition-colors line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => toggleWishlist(item)}
                            className="text-burgundy p-0.5 hover:scale-110 transition-transform"
                          >
                            <Trash2 className="w-4 h-4 text-foreground/45 hover:text-red-500" />
                          </button>
                        </div>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          Category: {item.category}
                        </div>
                        <div className="text-sm font-bold text-burgundy mt-2">
                          Rs. {item.price}
                        </div>
                      </div>
                      
                      {/* Add to Bag trigger */}
                      <button
                        onClick={() => {
                          addToCart(item, 1, item.sizes[0] || 'M');
                          toggleWishlist(item); // Remove from wishlist after adding to cart
                          setIsWishlistOpen(false);
                        }}
                        className="mt-2 text-center text-xs bg-burgundy hover:bg-burgundy-light text-white font-bold py-1.5 px-3 rounded uppercase transition-colors"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
