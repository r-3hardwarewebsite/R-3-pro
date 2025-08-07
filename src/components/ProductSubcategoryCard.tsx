
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Subcategory } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductSubcategoryCardProps {
  categorySlug: string;
  subcategory: Subcategory;
  align: 'left' | 'right';
}

export function ProductSubcategoryCard({ categorySlug, subcategory, align }: ProductSubcategoryCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: align === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: align === 'left' ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };
  
  const link = `/products/${categorySlug}?subcategory=${subcategory.slug}`;

  return (
    <motion.div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-20 items-center mb-8',
        align === 'right' ? 'md:grid-flow-col-dense' : ''
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      style={{ zIndex: 5 }}
    >
      <motion.div 
        className={cn('relative aspect-video', align === 'right' ? 'md:col-start-2' : '')}
        variants={imageVariants}
        viewport={{ once: false }}
      >
        <Link href={link}>
          <Image
            src={subcategory.image}
            alt={subcategory.name}
            data-ai-hint={subcategory.dataAiHint}
            fill
            className={cn("product-cat object-cover rounded-3xl hover:scale-105 transition-transform duration-500 w-full")}
            style={{ boxShadow: align === 'right'? '-30px 40px 0px #c3c3c382' : '30px 40px 0px #c3c3c382'}}
          />
        </Link>
      </motion.div>
      <motion.div 
        className={cn('flex flex-col', align === 'right' ? 'md:items-center' : 'md:items-start')} 
        style={{ zIndex: '1'}}
        variants={contentVariants}
        viewport={{ once: false }}
      >
        <div className={cn('max-w-md p-6 rounded-lg', align === 'right' ? 'text-right' : 'text-left')}>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">{subcategory.name}</h2>
          <p className="mt-4 text-muted-foreground">{subcategory.description}</p>
          <Button asChild variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href={link}>
              Explore Further <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
