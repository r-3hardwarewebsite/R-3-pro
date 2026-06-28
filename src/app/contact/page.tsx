
"use client";

import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { handleContactForm } from "./actions";
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { useEffect } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await handleContactForm(values);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message || "There was a problem with your request.",
      });
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2 
      } 
    }
  };
  
  const fromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2 
      } 
    }
  }

  const fromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2 
      } 
    }
  }

    useEffect(() => {
      document.title = "Contact Us | R-3"
    },[])

  return (<div className="bg-background text-foreground">
    <section className="relative py-20 md:py-32 bg-black/80 md:mb-8 mb-4">
      <div className="absolute inset-0">
        <Image
          src="/img/vector/vector-contact.webp"
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
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Have a question or a any request for new developemnt? <br />Fill out this form below or reach out to us through our contact details.
        </p>
      </motion.div>
    </section>

    <motion.section
      className="container overflow-hidden py-[50px] md:py-[100px] space-y-20 "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          variants={fromLeft} 
          className="space-y-6"
        >
          <div className="relative aspect-video rounded-lg">
            <Image 
              src="/img/contact/get-in-touch.svg"
              alt="Contact us"
              data-ai-hint="office interior"
              fill
              className="object-fill"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re here to help you with any questions or inquiries. Fill out the form, and we&apos;ll get back to you as soon as possible. For immediate assistance, feel free to call us.
          </p>
          
        </motion.div>
        <motion.div
          className="bg-card p-8 rounded-lg"
          variants={fromRight}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sara Sharma" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="support@r-3.in" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can help..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </motion.section>

    <motion.section
      className="py-16 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      style={{ 
        backgroundImage: 'url(/img/vector/contact.png)', 
        backgroundAttachment: 'fixed', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundSize:'auto',
        backgroundBlendMode: 'color',
        backgroundColor: '#000000bd'
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-12">LOCATION</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            className="space-y-12"
            variants={fromLeft}
          >
            <div>
              <h3 className="font-semibold text-xl text-foreground/90 mb-2">Office Address</h3>
              <p className="text-muted-foreground mb-4">
                Office No.101, First Floor, Royal Empire, Ranjeet Sagar Road,<br />
                Jamnagar, Gujarat 361005.
              </p>
              <Link href="#" className="group inline-flex items-center text-sm font-semibold text-primary">
                GET DIRECTION
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-foreground/90 mb-2">Factory Address</h3>
              <p className="text-muted-foreground mb-4">
              Plot No.320, Vision Industrial Park, Jamnagar - Lalpur Road,<br />
              Changa, Gujarat - 361012
              </p>
              <Link href="#" className="group inline-flex items-center text-sm font-semibold text-primary">
                GET DIRECTION
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="space-y-12"
            variants={fromRight}
          >
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Telephone</h4>
              <a href="tel:+919081833533" className="text-xl text-foreground/90 hover:text-primary transition-colors">+91 908 183 3533</a>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Mail ID</h4>
              <a href="mailto:support@r-3.in" className="text-xl text-foreground/90 hover:text-primary transition-colors">support@r-3.in</a>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Telephone</h4>
              <a href="tel:+919081833533" className="text-xl text-foreground/90 hover:text-primary transition-colors">+91 908 183 3533</a>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Mail ID</h4>
              <a href="mailto:sales@r-3.in" className="text-xl text-foreground/90 hover:text-primary transition-colors">sales@r-3.in</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

  </div>);
}
