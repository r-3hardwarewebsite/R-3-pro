
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function LoadingShutter() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem("wasLoaded");
  });

  useEffect(() => {
    if (!loading) return;

    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("wasLoaded", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  const shutterVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.7, ease: [0.87, 0, 0.13, 1] } },
  }

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const logoVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }


  return (
    <AnimatePresence onExitComplete={() => document.body.style.overflow = 'auto'}>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#110f0fdb] backdrop-blur-sm"
          variants={shutterVariants}
          initial="initial"
          exit="exit"
        >
          <motion.div
            className="flex flex-col items-center gap-4 w-full"
            variants={containerVariants}
            exit="exit"
          >
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/img/logo/logo-black.svg"
                alt="R3 Hardware Logo"
                width={120}
                height={120}
                priority
              />
            </motion.div>
            <motion.p
              className="text-lg font-[900] text-white"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Upgrading Your Choice
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
