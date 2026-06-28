

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';
import type { Product } from '@/lib/products';
import { Button } from './ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { PriceDisplay } from './PriceDisplay';
import { cn } from '@/lib/utils';

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(product.images[0]);
  
  const handleError = () => {
    setImgSrc('https://placehold.co/600x600.png');
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="flex flex-col sm:flex-row">
          <div className="relative sm:w-1/3 aspect-video sm:aspect-square overflow-hidden bg-muted/50">
             {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            <Image
              src={imgSrc}
              alt={product.name}
              data-ai-hint={product.dataAiHint}
              fill
              className={cn(
                "object-cover transition-opacity duration-500 group-hover:scale-105",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              onLoadingComplete={() => setIsLoading(false)}
              onError={handleError}
            />
          </div>
          <div className="p-6 sm:w-2/3 flex flex-col">
            <h3 className="font-headline text-xl font-semibold text-primary">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{product.category} / {product.subcategory}</p>
            <PriceDisplay price={product.price} />
            <p className="text-muted-foreground text-sm leading-5 line-clamp-2 min-h-10 flex-grow">
              {product.description}
            </p>
            <div className="mt-4">
              <Button variant="outline" size="sm">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
