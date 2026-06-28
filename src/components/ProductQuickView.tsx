
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, Loader2 } from 'lucide-react';
import type { Product } from '@/lib/products';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PriceDisplay } from './PriceDisplay';
import { Badge } from './ui/badge';

interface ProductQuickViewProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ThumbnailItem = ({ src, alt, dataAiHint, isActive, onClick }: { src: string, alt: string, dataAiHint: string, isActive: boolean, onClick: () => void }) => {
  const [isThumbLoading, setIsThumbLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('https://placehold.co/400x400.png');
  };

  return (
    <div
      className={cn("overflow-hidden rounded-md cursor-pointer", isActive ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100")}
      onClick={onClick}
    >
      <Card className="aspect-square relative bg-muted/50">
        <CardContent className="p-0 h-full w-full">
          {isThumbLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
            </div>
          )}
          <Image
            src={imgSrc}
            alt={alt}
            data-ai-hint={dataAiHint}
            fill
            className={cn("object-cover transition-opacity duration-300", isThumbLoading ? 'opacity-0' : 'opacity-100')}
            onLoadingComplete={() => setIsThumbLoading(false)}
            onError={handleError}
          />
        </CardContent>
      </Card>
    </div>
  )
}

const CarouselImage = ({ src, alt, dataAiHint, isPriority, onLoadingComplete }: { src: string, alt: string, dataAiHint: string, isPriority: boolean, onLoadingComplete: () => void }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('https://placehold.co/600x600.png');
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      data-ai-hint={dataAiHint}
      fill
      className={cn(
        "object-cover transition-opacity duration-500",
      )}
      onLoadingComplete={onLoadingComplete}
      onError={handleError}
      priority={isPriority}
    />
  );
};


export function ProductQuickView({ product, isOpen, onOpenChange }: ProductQuickViewProps) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (!mainApi || !thumbApi) {
      return;
    }

    const onSelect = () => {
      if (!mainApi) return;
      setIsImageLoading(true);
      setCurrent(mainApi.selectedScrollSnap());
      thumbApi.scrollTo(mainApi.selectedScrollSnap());
    };

    mainApi.on("select", onSelect);

    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, thumbApi]);

  const onThumbClick = (index: number) => {
    mainApi?.scrollTo(index);
  }

  // Reset loading state when dialog opens with a new product
  useEffect(() => {
    if (!isOpen) return;

    queueMicrotask(() => {
      setIsImageLoading(true);
      setCurrent(0);
      mainApi?.scrollTo(0, true);
    });
  }, [isOpen, product, mainApi]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black max-w-4xl w-full p-4 flex flex-col h-full md:h-auto md:max-h-[90vh] md:rounded-lg overflow-hidden">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="md:grid md:grid-cols-2 flex-grow min-h-0 flex flex-col">
          <div className="p-6 flex flex-col order-1 md:order-1">
            <Carousel setApi={setMainApi} className="w-full">
              <CarouselContent>
                {product.images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square relative overflow-hidden md:rounded-lg bg-muted/50">
                      {isImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                          <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                      )}
                      <div className={cn("w-full h-full transition-opacity duration-300", isImageLoading ? "opacity-0" : "opacity-100")}>
                        <CarouselImage
                          src={src}
                          alt={`${product.name} - view ${index + 1}`}
                          dataAiHint={product.dataAiHint}
                          isPriority={index === 0}
                          onLoadingComplete={() => setIsImageLoading(false)}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel setApi={setThumbApi} opts={{ align: "start", slidesToScroll: 1, skipSnaps: true, containScroll: 'trimSnaps' }} className="w-full mt-4 shrink-0 px-6 md:px-0">
              <CarouselContent className="-ml-2 h-full">
                {product.images.map((src, index) => (
                  <CarouselItem key={src} className="pl-2 basis-1/4">
                    <ThumbnailItem
                      key={src}
                      src={src}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      dataAiHint={product.dataAiHint}
                      isActive={current === index}
                      onClick={() => onThumbClick(index)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="p-6 flex flex-col overflow-y-auto order-2 md:order-2 flex-grow min-h-0">
            <h2 className="text-3xl font-headline font-bold text-primary">{product.name}</h2>
            <PriceDisplay price={product.price} />
            <Separator className="my-4" />
            <p className="text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            <Separator className="my-4" />
            <div className="space-y-3 text-sm">
              <div className="flex">
                <strong className="w-1/3 text-foreground">Materials:</strong>
                <span className="w-2/3 text-muted-foreground">{product.materials}</span>
              </div>
              {product?.dimensions && <div className="flex">
                <strong className="w-1/3 text-foreground">Dimensions:</strong>
                <span className="w-2/3 text-muted-foreground">{product.dimensions}</span>
              </div>}
              {product.tags && product.tags.length > 0 && (
                <div className="flex items-start">
                  <strong className="w-1/3 text-foreground">Style:</strong>
                  <div className="w-2/3 flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                      <Badge key={tag.slug} variant="secondary">{tag.title}</Badge>
                    ))}
                  </div>
                </div>
              )}
              {product.tabs && product.tabs.length > 0 && (
                <div className="flex items-start">
                  <strong className="w-1/3 text-foreground">Type:</strong>
                  <div className="w-2/3 flex flex-wrap gap-2">
                    {product.tabs.map(tab => (
                      <Badge key={tab.slug} variant="outline">{tab.title}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-auto pt-6">
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href={`/product/${product.slug}`} onClick={() => onOpenChange(false)}>
                  View Full Details <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
