
"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  useEffect(() => {
    document.title = "Our Story | R-3"
  },[])

  return (
    <div className="bg-background text-foreground">
      <section className="relative py-20 md:py-32 bg-card/50">
        <div className="absolute inset-0">
          <Image
            src="/img/about/about-banner.jpg"
            alt="R3 Hardware workshop"
            data-ai-hint="workshop background"
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
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Our Story</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            From a small workshop to a beacon of luxury design, our journey is one of passion, precision, and the pursuit of perfection.
          </p>
        </motion.div>
      </section>

      <section className="w-full overflow-hidden py-[50px] md:py-[100px] space-y-20 ">

        <motion.div
          className="container mx-auto flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="relative w-full md:w-1/2 h-[280px] md:h-auto md:aspect-square">
            <Image src="/img/about/about-2.png" alt="How it all started" data-ai-hint="vintage workshop" fill className="object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className='text-4xl md:text-5xl font-medium font-headline text-primary mb-4'>How It All Started</h2>
            <p className="mb-4 text-muted-foreground" style={{ lineHeight: '30px'}}>
              R-3 Hardware begin with a simple belief: Quality and timely delivery. Our customers were looking for the OEM partner, who helps them in design, development and timely delivery. <br /> That’s how we got into this industry to serve premium quality, custom-crafted brass door hardware and accessories. And we’ve never looked back.
            </p>
            {/* <p className="mb-6 text-muted-foreground">
              Nearly 30 years later, we’re still a family-owned business with an unwavering commitment to extraordinary quality, authentic American craftsmanship and exceptional customer service.
            </p> */}
            <Button variant="outline">Our Story</Button>
          </div>
        </motion.div>

        <motion.div
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="relative w-full md:w-1/2 h-[280px] md:h-auto md:aspect-square">
            <Image src="/img/about/about-3.jpg" alt="Craftsmanship" data-ai-hint="artisan working" fill className="object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className='text-4xl md:text-5xl font-medium font-headline text-primary mb-4'>We Don’t Do Shortcuts</h2>
            <p className="mb-4 text-muted-foreground" style={{ lineHeight: '30px'}}>
              At R-3 Hardware, we know what it takes to create premium quality, custom-made brass door hardware. We produce the premium quality brass, and we put it in the hands of expert craftsmen, who follow a proven process to transform raw brass material into a functional piece of art.
            </p>
            <p className="mb-6 text-muted-foreground" style={{ lineHeight: '30px'}}>
              We don’t do shortcuts. Our products are made in our fully setup manufacturing facility by our highly skilled technical experts.
            </p>
            <Button variant="outline">Craftsmanship</Button>
          </div>
        </motion.div>

        <motion.div
          className="container mx-auto flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="relative w-full md:w-1/2 h-[280px] md:h-auto md:aspect-square">
            <Image src="/img/about/about-4.jpg" data-ai-hint="sustainable factory" alt="Sustainability" fill className="object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className='text-4xl md:text-5xl font-medium font-headline text-primary mb-4'>Match Quality Expectation</h2>
            <p className="mb-6 text-muted-foreground" style={{ lineHeight: '30px'}}>
              At R-3 Hardware, meeting customer quality expectations isn&apos;t just a goal — it&apos;s our foundation. Every product, from door mortise handles to cabinet knobs, is crafted with precision, durability, and consistency in mind. We follow strict quality control processes to ensure each piece reflects international standards. Our team listens, adapts, and delivers exactly what customers expect — and often, more.
            </p>
            <Button variant="outline">Sustainability</Button>
          </div>
        </motion.div>

      </section>

      <motion.section
        className="py-16 md:py-24 bg-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">Let&apos;s go through our portfolio</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Send a request to get a portfolio and our one of the expert will be get in touch with you
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            TO GET OUR PORTFOLIO
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
