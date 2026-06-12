import React from 'react';
import { Metadata } from 'next';
import { getProductById, getProductsByCategory } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | PARIZAAD'
    };
  }

  return {
    title: `${product.name} | PARIZAAD`,
    description: product.description
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div className="py-24 text-center bg-[#FCFBF7] space-y-4">
        <h1 className="font-serif text-3xl font-extrabold text-burgundy">Creation Not Found</h1>
        <p className="text-sm text-foreground/50 max-w-md mx-auto">
          The product design you are looking for does not exist or has been retired.
        </p>
      </div>
    );
  }

  // Fetch up to 4 other items from the same category
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={related} />;
}
