
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function WhatsAppWidget() {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.5,
        }}
        className="rounded-full"
      >
        <Button
          asChild
          size="icon"
          className="h-12 w-12 rounded-full bg-black text-primary border border-primary shadow-lg hover:text-white"
        >
          <Link href="https://wa.me/9081833533?text=Hello%20Team,%20R-3%20Hardware" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="h-12 w-12" />
            <span className="sr-only">Chat on WhatsApp</span>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
