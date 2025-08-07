
"use client";

import { getCategories } from '@/lib/products';
import { ProductCategoryCard } from '@/components/ProductCategoryCard';
import { motion } from 'framer-motion';
import { ProductSubcategoryCard } from '@/components/ProductSubcategoryCard';
import { useEffect } from 'react';

export default function ProductsPage() {
  const categories = getCategories();
  const mainCategory = categories[0];
  const subcategories = mainCategory.subcategories || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

    useEffect(() => {
      document.title = "Prodcuts | R-3"
    },[])

  return (
    <div>
      <section className="relative bg-card/50 py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/slider/2.jpg')", backgroundSize: 'cover' }}
        >
          <div className="absolute inset-0 bg-black/80 z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Products</h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Explore our curated collections of exquisite hardware and furniture.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-6 px-4 py-16 md:py-24 bg-[#161414]">
        <div 
          className="relative"
          style={{ backgroundImage: 'url(/img/vector/product-path.svg)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
        >
          <motion.div 
            className="container mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col gap-30 md:gap-40">
              {subcategories.map((subcategory, index) => (
                <ProductSubcategoryCard
                  key={subcategory.slug}
                  categorySlug={mainCategory.slug}
                  subcategory={subcategory}
                  align={index % 2 === 0 ? 'right' : 'left'}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
