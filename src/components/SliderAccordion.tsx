import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { initialSliderItems } from '@/store/slider';

const SliderAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoplay = () => {
        autoplayRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % initialSliderItems.length);
        }, 3000);
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);

    const handleSlideClick = (clickedIndex: number) => {
        stopAutoplay();
        setActiveIndex(clickedIndex);
        startAutoplay();
    };

    const contentVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };



    return (<section className="relative w-full h-screen text-white flex flex-col md:flex-row overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
            <AnimatePresence>
                <motion.div
                    key={activeIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    exit={{ opacity: 0 }}
                >
                    <Image
                        src={initialSliderItems[activeIndex].image}
                        alt={initialSliderItems[activeIndex].title}
                        data-ai-hint={initialSliderItems[activeIndex].dataAiHint}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        <div className="relative z-20 w-full flex flex-col md:flex-row overflow-hidden">
            {/* Desktop: Vertical Nav */}
            <div className="hidden md:flex flex-row w-full">
                {initialSliderItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={cn(
                            'relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out flex flex-col justify-end',
                            activeIndex === index ? 'w-[85%]' : 'min-w-[60px] w-[5%]'
                        )}
                        onClick={() => handleSlideClick(index)}
                    >
                        {activeIndex === index ? (
                            <div className="h-screen w-full">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        className="relative w-full h-screen flex flex-col items-start justify-center text-left max-w-4xl p-8 md:p-16"
                                        variants={contentVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        <motion.h1 variants={itemVariants} className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary">
                                            {item.title}
                                        </motion.h1>
                                        <motion.p variants={itemVariants} className="mt-4 text-lg md:text-xl text-white/90 max-w-lg">
                                            {item.description}
                                        </motion.p>
                                        <motion.div variants={itemVariants}>
                                            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                                                <Link href="/products/sofas-couches">
                                                    {item.buttonText}
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="border-t-0 border-b-0 border border-primary/40 w-full py-5 h-[60vh] bg-black/40 flex items-end justify-center">
                                <h2
                                    className="font-headline text-2xl text-primary whitespace-nowrap p-4"
                                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                                >
                                    {item.title}
                                </h2>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile: Horizontal Nav */}
            <section className="md:hidden relative w-full h-[100vh] text-white flex flex-col overflow-hidden">
                {initialSliderItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={cn(
                            'relative w-full h-full cursor-pointer overflow-hidden transition-all duration-700 ease-in-out',
                            activeIndex === index
                                ? 'h-[80%]'
                                : 'h-[calc(25%/3)]'
                        )}
                        onClick={() => handleSlideClick(index)}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            data-ai-hint={item.dataAiHint}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <div
                            className={cn(
                                "relative z-20 h-full flex flex-col items-start justify-center text-left max-w-4xl mx-auto px-12 transition-all duration-700 ease-in-out",
                                activeIndex === index ? 'opacity-100' : 'opacity-0'
                            )}
                        >
                            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary">
                                {item.title}
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-lg">
                                {item.description}
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                                <Link href="/products/sofas-couches">
                                    {item.buttonText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                        <div
                            className={cn(
                                "absolute inset-0 z-20 transition-opacity duration-700 ease-in-out",
                                activeIndex === index ? 'opacity-0' : 'opacity-100'
                            )}
                        >
                            <div className="relative h-full w-full bg-gradient-to-b from-primary-forground bg-black flex items-center justify-center">
                                <h2 className="font-headline text-[25px] text-primary whitespace-nowrap">
                                    {item.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    </section>)
}