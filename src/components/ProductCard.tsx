
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import type { Product } from '@/lib/products';
import { Button } from './ui/button';
import { Eye, Loader2 } from 'lucide-react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ProductQuickView } from './ProductQuickView';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";
import { PriceDisplay } from './PriceDisplay';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const hasMultipleImages = product.images.length > 1;

  const handleMouseEnter = () => {
    if (hasMultipleImages && autoplay.current) {
      autoplay.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (hasMultipleImages && autoplay.current) {
      autoplay.current.stop();
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button, .dot-button')) {
      return;
    }
    setQuickViewOpen(true);
  };

  useEffect(() => {
    if (!api) return;

    // Stop autoplay initially when the component mounts
    if (hasMultipleImages) {
      autoplay.current.stop();
    }

    const onSelect = (api: CarouselApi) => {
      setCurrent(api?.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, hasMultipleImages]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <>
      <Card
        className="bg-card/40 group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 flex flex-col"
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent className="p-0 cursor-pointer flex flex-col flex-grow">
          <div className="relative aspect-square w-full overflow-hidden">
             {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {hasMultipleImages ? (
              <Carousel
                setApi={setApi}
                plugins={[autoplay.current]}
                className="w-full h-full"
              >
                <CarouselContent>
                  {product.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-full aspect-square">
                        <Image
                          src={src}
                          alt={`${product.name} - view ${index + 1}`}
                          data-ai-hint={product.dataAiHint}
                          fill
                          className={cn("object-cover transition-opacity duration-500 group-hover:scale-105", isLoading ? "opacity-0" : "opacity-100")}
                          onLoadingComplete={() => setIsLoading(false)}
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollTo(index);
                      }}
                      className={cn(
                        "dot-button w-2 h-2 rounded-full transition-colors",
                        index === current ? "bg-primary" : "bg-primary/50 hover:bg-primary"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            ) : (
              <Image
                src={product.images[0]}
                alt={product.name}
                data-ai-hint={product.dataAiHint}
                fill
                className={cn("object-cover transition-opacity duration-500 group-hover:scale-105", isLoading ? "opacity-0" : "opacity-100")}
                onLoadingComplete={() => setIsLoading(false)}
              />
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-headline text-lg font-semibold text-primary truncate">{product.name}</h3>
            {/* <p className="text-sm text-muted-foreground mt-1">{product.category}</p> */}

            {product.tags && product.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <Badge key={tag.slug} variant="secondary">{tag.title}</Badge>
                ))}
              </div>
            )}

            <div className="flex-grow"></div>

            <div className="flex justify-between items-center mt-3">
              <PriceDisplay price={product.price} />
              <Button asChild variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity z-10 h-8 w-8">
                <Link href={`/product/${product.slug}`}>
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View Details</span>
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onOpenChange={setQuickViewOpen}
      />
    </>
  );
}
