
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Quote, Gem, ShieldCheck, Hammer, CheckCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getFeatureProducts } from '@/lib/products';
import { Faq } from '@/components/Faq';
import AnimationSlider from '@/components/AnimationSlider';
import Autoplay from "embla-carousel-autoplay";


const testimonials = [
  {
    quote: "The attention to detail in their products is simply unmatched. Our home has been transformed with their beautiful door handles.",
    author: "Samantha Reynolds",
    title: "Interior Designer",
  },
  {
    quote: "From start to finish, the service was impeccable. The quality of the mortise handles we purchased exceeded all our expectations.",
    author: "James Peterson",
    title: "Homeowner",
  },
  {
    quote: "A truly luxurious experience. The furniture pieces are works of art, and the customer service is second to none. Highly recommended!",
    author: "Alice Worthington",
    title: "Architect",
  },
  {
    quote: "We were looking for unique, high-quality hardware for our new office, and Gilded Emporium delivered beyond our wildest dreams. Fantastic products!",
    author: "David Chen",
    title: "Business Owner"
  }
];

const socialPosts = [
  {
    platform: 'instagram',
    image: '/img/posts/4.jpg',
    dataAiHint: 'New Arrival',
    link: 'https://www.instagram.com/p/DMBZtU7zz6V/?utm_source=ig_web_copy_link&igsh=cGxrZ252YW5jbHA2',
  },
  {
    platform: 'instagram',
    image: '/img/posts/2.jpg',
    dataAiHint: 'a spindle',
    link: 'https://www.instagram.com/p/DKlp5oONA8r/?utm_source=ig_web_copy_link&igsh=MTNjaG4xZmJiODI4Yw%3D%3D#',
  },
  {
    platform: 'instagram',
    image: '/img/posts/3.jpg',
    dataAiHint: 'refined refaxation',
    link: 'https://www.instagram.com/p/DJ3KpxqsD60/?utm_source=ig_web_copy_link&igsh=MWU2Zmk4ejh2OTk5ZQ%3D%3D',
  },
  {
    platform: 'linkedin',
    image: '/img/posts/1.jpg',
    dataAiHint: 'polished perfection',
    link: 'https://www.linkedin.com/company/r-3-hardware/posts/?feedView=all&viewAsMember=true',
  },
  {
    platform: 'linkedin',
    image: '/img/posts/5.jpg',
    dataAiHint: 'innovative excellence',
    link: 'https://www.linkedin.com/company/r-3-hardware/people/?viewAsMember=true',
  },
  {
    platform: 'pinterest',
    image: '/img/posts/6.jpg',
    dataAiHint: 'brass pull handles',
    link: 'https://in.pinterest.com/R_3Hardware/',
  }
];


const InspirationSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const moodboard1Y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const moodboard2Y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const moodboard3Y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const moodboard4Y = useTransform(scrollYProgress, [0, 1], ['5%', '-25%']);

  const moodboardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageHoverVariants = {
    rest: { zIndex: 1, scale: 1 },
    hover: { zIndex: 10, scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
  };


  return (
    <motion.section
      ref={targetRef}
      className="py-16 md:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
      style={{ 
        backgroundImage: 'url(/img/vector/vector-water.webp)', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'color',
        backgroundColor: 'rgba(0, 0, 0, 35%)'
      }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] md:h-[600px]">
          <motion.div
            className="absolute top-[5%] left-[10%] w-[280px] h-[400px] shadow-2xl rounded-xl cursor-pointer"
            style={{ y: moodboard1Y }}
            variants={{ ...moodboardVariants, ...imageHoverVariants }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Image src="/img/vector/lock-vector.jpg" alt="Art-Deco Moodboard" data-ai-hint="art deco" fill className="object-cover rounded-xl" />
          </motion.div>
          <motion.div
            className="absolute top-[20%] left-[40%] w-[250px] h-[350px] shadow-2xl rounded-xl cursor-pointer"
            style={{ y: moodboard2Y }}
            variants={{ ...moodboardVariants, ...imageHoverVariants }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Image src="/img/vector/vector-2.webp" alt="Maximalism Moodboard" data-ai-hint="maximalist interior" fill className="object-cover rounded-xl" />
          </motion.div>
          <motion.div
            className="absolute bottom-[10%] left-[0%] w-[220px] h-[320px] shadow-2xl rounded-xl cursor-pointer"
            style={{ y: moodboard3Y }}
            variants={{ ...moodboardVariants, ...imageHoverVariants }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Image src="/img/vector/vector-handle.webp" alt="Whimsical Kids Moodboard" data-ai-hint="kids room" fill className="object-cover rounded-xl" />
          </motion.div>
          <motion.div
            className="absolute bottom-[2%] right-[5%] w-[300px] h-[420px] shadow-2xl rounded-xl cursor-pointer"
            style={{ y: moodboard4Y }}
            variants={{ ...moodboardVariants, ...imageHoverVariants }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Image src="/img/vector/knob-vector.jpg" alt="Mid-Century Modern Moodboard" data-ai-hint="mid-century modern" fill className="object-cover rounded-xl" />
          </motion.div>
        </div>
        <motion.div variants={moodboardVariants}>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Inspiration Starts Here</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-md">
            Discover our specially curated mood boards and let us inspire your journey of creativity.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/products">
              Explore Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default function Home() {
  const featureProducts = getFeatureProducts()
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* slider 1 */}
      <AnimationSlider />
      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        style={{ 
          backgroundImage: 'url(/img/statics/texture-2.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundColor: '#0a090b'
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Featured Collections</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of fine hardware and accessories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureProducts.map((category) => (
              <Link href={category?.href || "/"} key={category.slug}>
                <Card className="group overflow-hidden relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    data-ai-hint={category.dataAiHint}
                    width={400}
                    height={500}
                    className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <CardContent className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-headline font-semibold text-white">{category.name}</h3>
                    <div className="flex items-center text-accent mt-2">
                      <span>Explore</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } }
        }}
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Commitment to Quality</h2>
            <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
              Every piece we create is a testament to our dedication to craftsmanship and timeless design.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div className="flex flex-col items-center" variants={sectionVariants}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Gem className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-primary">Timeless Design</h3>
              <p className="text-white mt-2">Our products are designed to be cherished for generations, blending classic aesthetics with modern functionality.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center" variants={sectionVariants}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-primary">Premium Materials</h3>
              <p className="text-white mt-2">We source only the finest materials, ensuring durability, beauty, and a luxurious feel in every detail.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center" variants={sectionVariants}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-primary">Expert Craftsmanship</h3>
              <p className="text-white mt-2">Each piece is meticulously crafted by skilled artisans who take pride in their work, ensuring impeccable quality.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
              <div className="relative aspect-square">
                <Image src="/img/vector/r3-vec.jpg" alt="Craftsmanship" data-ai-hint="artisan hands" fill className="object-cover rounded-lg shadow-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-48 h-48 bg-accent/10 rounded-full -z-10"></div>
              </div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Experience the R-3 Difference</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are more than just a hardware company. We are partners in your design journey, dedicated to bringing your vision to life.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Bespoke Creations</h4>
                    <p className="text-muted-foreground">Collaborate with our designers to create custom hardware tailored to your exact specifications.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Unrivaled Service</h4>
                    <p className="text-muted-foreground">Our team provides expert guidance and support from concept to installation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Lasting Legacy</h4>
                    <p className="text-muted-foreground">Invest in pieces that are built to last, combining enduring style with robust functionality.</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <InspirationSection />

      <motion.section
        className="py-16 md:py-24 bg-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We take pride in our craftsmanship and the satisfaction of our customers.
            </p>
          </div>
          <Carousel
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="bg-background/50 border-border/50 h-full">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[280px]">
                        <Quote className="w-12 h-12 text-primary/50 mb-4" />
                        <p className="text-lg italic text-foreground/90 flex-grow whitespace-normal">"{testimonial.quote}"</p>
                        <div className="mt-6">
                          <p className="font-semibold text-accent">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Follow Our Journey</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest designs, projects, and inspirations on social media.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {socialPosts.map((post, index) => (
              <Link href={post.link} key={post.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="relative aspect-square group overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={post.image}
                    alt={`Social media post ${index + 1}`}
                    data-ai-hint={post.dataAiHint}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      {post.platform === 'instagram' && <Instagram className="h-8 w-8" />}
                      {post.platform === 'linkedin' && <Linkedin className="h-8 w-8" />}
                      {post.platform === 'pinterest' && <Linkedin className="h-8 w-8" />}
                      <p className="text-sm mt-1">View Post</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="#">
                Follow Us on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <Faq />

      {/* <Newsletter /> */}
    </div>
  );
}
