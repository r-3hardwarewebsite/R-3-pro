"use client";

import { motion } from 'framer-motion';
import { HardHat } from 'lucide-react';
import Image from 'next/image';

const MaintenancePage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="relative py-20 md:py-32 bg-card/50">
        <div className="absolute inset-0">
          <Image
            src="/img/about/about-banner.jpg"
            alt="Under Construction"
            data-ai-hint="construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Under Construction</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We are currently working on something amazing.
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <HardHat className="h-24 w-24 mx-auto text-primary" />
          </motion.div>
          <motion.h2 
            className="mt-8 text-3xl md:text-4xl font-headline text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            This Page is Being Built
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Our team is working hard to bring you this new feature. Please check back soon to see what we&apos;ve been up to!
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;
