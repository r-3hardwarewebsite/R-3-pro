
"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Menu, ChevronDown, Sun, Moon, Download, X } from 'lucide-react';
import { getCategories } from '@/lib/products';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { handleContactForm } from "@/app/contact/actions";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});


const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <Link href={href} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[16px]", isActive ? "text-primary font-semibold bg-transparent" : "")}>
        {children}
      </Link>
    </NavigationMenuLink>
  );
};


const MobileNavLink = ({ href, children, onLinkClick }: { href: string, children: React.ReactNode, onLinkClick: () => void }) => {
  return (
    <Link href={href} onClick={onLinkClick}>
      <span className="block px-4 py-2 rounded-md text-lg hover:bg-card">
        {children}
      </span>
    </Link>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categories = getCategories();
  const mainCategory = categories[0];
  const subcategories = mainCategory.subcategories || [];

  const pathname = usePathname();
  const isProductsActive = pathname.startsWith('/products');
  const { setTheme, theme } = useTheme();

  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await handleContactForm(values);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      form.reset();
      setIsDialogOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message || "There was a problem with your request.",
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isDialogOpen) {
      form.clearErrors(); // Clear form errors when dialog closes
    }
  }, [isDialogOpen])

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-black"
        : "bg-transparent"
    )}>
      <div className="w-full mx-auto flex h-[70px] md:h-20 items-center justify-between px-4">
        <div className='flex flex-row items-center gap-6'>
          <Link href="/" className="flex items-center gap-2 mr-8 ml-3">
            <img src="/img/logo/logo-black.svg" alt="Company Logo" className='w-[40px] sm:w-[40px] md:w-[60px]' />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-4 mr-8">
          <nav className="hidden md:flex items-center gap-1 text-lg font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavLink href="/">Home</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("bg-transparent text-[16px]", isProductsActive ? "text-primary font-semibold bg-transparent" : "")}>
                    <Link href={`/products`} className='focus:outline-none'>Products</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {subcategories.map((subcategory) => (
                        <ListItem
                          key={subcategory.slug}
                          href={`/products/${mainCategory.slug}?subcategory=${subcategory.slug}`}
                          title={subcategory.name}
                        >
                          Explore our collection of {subcategory.name.toLowerCase()}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/about">Our Story</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/contact">Contact Us</NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Button onClick={() => setIsDialogOpen(true)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Get Support
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-black">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <img src="/img/logo/logo-black.svg" alt="Company Logo" className='w-[40px] sm:w-[40px] md:w-[50px]' />
                </Link>
                <nav className="flex flex-col gap-4">
                  <MobileNavLink href="/" onLinkClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink href={`/products`} onLinkClick={() => setIsMobileMenuOpen(false)}>Products</MobileNavLink>
                  <div className="flex flex-col gap-2 pl-4">
                    {subcategories.map(subcategory => (
                      <MobileNavLink key={subcategory.slug} href={`/products/${mainCategory.slug}?subcategory=${subcategory.slug}`} onLinkClick={() => setIsMobileMenuOpen(false)}>{subcategory.name}</MobileNavLink>
                    ))}
                  </div>
                  <MobileNavLink href="/about" onLinkClick={() => setIsMobileMenuOpen(false)}>Our Story</MobileNavLink>
                  <MobileNavLink href="/contact" onLinkClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
                </nav>
                <div className='flex flex-row justify-between items-center'>
                  <Button onClick={() => setIsDialogOpen(true)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Get Support
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className='mt-6 hidden'
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>

          <DialogContent
            className="max-w-4xl p-0 bg-black"
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative h-64 md:h-auto md:w-1/2">
                <Image
                  src="/img/statics/form.jpg"
                  alt="Get support"
                  data-ai-hint="support illustration"
                  fill
                  className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  style={{ filter: 'brightness(0.9)' }}
                />
              </div>
              <div className="w-full p-6 md:w-1/2">
                <DialogHeader>
                  <DialogTitle>Contact Us Now</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
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
                            <Input placeholder="Enter your email" {...field} />
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
                          <FormLabel>Your Message / Feedback</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
