
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { getProduct, getProductsByCategory, Product } from '@/lib/products';
import { notFound, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, Loader2 } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PriceDisplay } from '@/components/PriceDisplay';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

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
      className="object-contain transition-opacity duration-500 group-hover:scale-105"
      onLoadingComplete={onLoadingComplete}
      onError={handleError}
      priority={isPriority}
    />
  );
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProduct(slug);
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getProductsByCategory(product.categorySlug)
      .filter((p) => p.slug !== product.slug)
      .slice(0, 3);
  }, [product]);
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [bannerError, setBannerError] = useState(false);

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

  useEffect(() => {
    if(product) {
      document.title = `${product.name} | R-3`
    } else {
      document.title = `Product | R-3`
    }
  },[product])

  if (!product) {
    return notFound();
  }

  const bannerImgSrc = bannerError
    ? 'https://placehold.co/1200x600.png'
    : product.images[0];

  const handleBannerError = () => {
    setBannerError(true);
  }

  return (
    <div className='bg-[#211e1ec7]'>
      <section className="relative bg-card/50 py-20 md:py-32">
        <div className="absolute inset-0">
          {bannerImgSrc &&
            <Image
              src={bannerImgSrc}
              alt={product.name}
              data-ai-hint={product.dataAiHint}
              fill
              className="object-cover"
              priority
              onError={handleBannerError}
            />
          }
          <div className="absolute inset-0 bg-black/80 z-10" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{product.category}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {product.subcategory}
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href={`/products/${product.categorySlug}`} className="hover:text-primary">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href={`/products/${product.categorySlug}?subcategory=${product.subcategorySlug}`} className="hover:text-primary">
              {product.subcategory}
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <Carousel setApi={setMainApi} className="w-full">
              <CarouselContent>
                {product.images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="group aspect-square relative overflow-hidden rounded-lg">
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
            <Carousel setApi={setThumbApi} opts={{ align: "start", slidesToScroll: 1, skipSnaps: true, containScroll: 'trimSnaps' }} className="w-full mt-4">
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
          <div className="lg:col-span-3">
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary">{product.name}</h1>
            <PriceDisplay price={product.price} />
            <Separator className="my-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            <Separator className="my-6" />
            <div className="space-y-4 text-sm">
              <div className="flex">
                <strong className="w-1/3 text-foreground">Materials:</strong>
                <span className="w-2/3 text-muted-foreground">{product.materials}</span>
              </div>
              {product?.dimensions !== "" && <div className="flex">
                <strong className="w-1/3 text-foreground">Dimensions:</strong>
                <span className="w-2/3 text-muted-foreground">{product.dimensions}</span>
              </div>}
              {product?.weight !== "" && <div className="flex">
                <strong className="w-1/3 text-foreground">Weight:</strong>
                <span className="w-2/3 text-muted-foreground">{product.weight}</span>
              </div>}
              <div className="flex">
                <strong className="w-1/3 text-foreground">Category:</strong>
                <Link href={`/products/${product.categorySlug}`} className="w-2/3 text-primary hover:underline">
                  {product.category}
                </Link>
              </div>
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
            <Button size="lg" className="mt-8 w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Inquiry
            </Button>
          </div>
        </div>

        {/* {relatedProducts.length > 0 && (
          <div className="mt-24">
            <Separator className="mb-12" />
            <h2 className="text-3xl font-headline font-bold text-center text-primary mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
