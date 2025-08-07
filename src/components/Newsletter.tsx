
"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Newsletter() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      className="py-16 md:py-24 bg-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Join Our Newsletter</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay up to date with the latest product releases, exclusive offers, and design inspiration.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="max-w-lg w-full"
              aria-label="Email address"
            />
            <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
