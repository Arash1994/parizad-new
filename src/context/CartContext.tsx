'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  wishlistItems: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Load cart and wishlist from localStorage on client-side mount
  useEffect(() => {
    const savedCart = localStorage.getItem('parizaad_cart');
    const savedWishlist = localStorage.getItem('parizaad_wishlist');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save to localStorage whenever cart/wishlist changes
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('parizaad_cart', JSON.stringify(items));
  };

  const saveWishlist = (items: Product[]) => {
    setWishlistItems(items);
    localStorage.setItem('parizaad_wishlist', JSON.stringify(items));
  };

  const addToCart = (product: Product, quantity: number, size: string) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.product.id === product.id && item.selectedSize === size
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      saveCart(updated);
    } else {
      saveCart([...cartItems, { product, quantity, selectedSize: size }]);
    }
    setIsCartOpen(true); // Automatically open cart to show confirmation
  };

  const removeFromCart = (productId: string, size: string) => {
    const updated = cartItems.filter(
      (item) => !(item.product.id === productId && item.selectedSize === size)
    );
    saveCart(updated);
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    const updated = cartItems.map((item) =>
      item.product.id === productId && item.selectedSize === size
        ? { ...item, quantity }
        : item
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlistItems.some((item) => item.id === product.id);
    if (exists) {
      const updated = wishlistItems.filter((item) => item.id !== product.id);
      saveWishlist(updated);
    } else {
      saveWishlist([...wishlistItems, product]);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
