
"use client"
import Link from 'next/link';
import { Button } from './ui/button';
import { Facebook, Instagram, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const footerSections = [
    {
        title: 'Navigation',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Our Story', href: '/about' },
            { label: 'Product', href: '/products' },
            { label: 'Contact Us', href: '/contact' },
        ],
    },
    {
        title: 'Contact Us',
        content: (
            <>
                <p className='flex flex-row items-center'><FaPhone /> &nbsp; +91 908 183 3533</p>
                <p className='flex flex-row items-center'><FaEnvelope /> &nbsp; sales@r-3.in</p>
            </>
        ),
    },
    {
        title: '',
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-primary/90 mb-4">Office Address</h4>
                    <p style={{ lineHeight: '30px' }}>
                        Office No.101, First Floor, Royal Empire, Ranjeet Sagar Road,
                        <br />
                        Jamnagar - 361005
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-primary/90 mb-4">Factory Address</h4>
                    <p style={{ lineHeight: '30px' }}>
                        Plot No.320, Vision Industrial Park, Jamnagar - Lalpur Road,
                        <br />
                        Changa, Gujarat - 361012
                    </p>
                </div>
            </div>
        ),
    },
];

const socialLinks = [
    { icon: <Facebook />, href: 'https://www.facebook.com/share/1E4BRnMQa9/?mibextid=wwXIfr', name: 'Facebook' },
    { icon: <Instagram />, href: 'https://www.instagram.com/r_3hardware?igsh=MTN3MjNrdTc1ejAxZQ%3D%3D&utm_source=qr', name: 'Instagram' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/9081833533?text=Hello%20Team,%20R-3%20Hardware', name: 'Whatsapp' },
    { icon: <Linkedin />, href: 'https://www.linkedin.com/company/r-3-hardware/', name: 'LinkedIn' },
    { icon: <FaPinterestP />, href: 'https://www.linkedin.com/company/r-3-hardware/', name: 'LinkedIn' },
]

export function Footer() {
    const year = new Date().getFullYear();

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <footer className="border-t border-border/40 bg-background/95" style={{
            backgroundImage: 'url(/img/statics/footer.jpg)',
            backgroundSize: 'auto',
            backgroundPositionX: 'center',
            backgroundPositionY: '50%',
            backgroundBlendMode: 'color',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <motion.div
                        className="lg:col-span-1 flex flex-col items-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={variants}
                    >
                        <div className='flex items-center gap-2'>
                            <Image src="/img/logo/logo-black.svg" alt="Company Logo" width={100} height={100} className='md:w-50' />
                        </div>
                        <div className="flex items-center gap-3 mt-6 relative right-[30px]">
                            {socialLinks.map(social => (
                                <Button key={social.name} asChild variant="outline" size="icon" className="rounded-full border-white hover:border-white text-white hover:bg-white">
                                    <Link href={social.href} target='_blank'>
                                        {social.icon}
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>

                    </motion.div>

                    {footerSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            className={section.title.includes('Address') ? 'md:col-span-2 lg:col-span-1' : ''}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            variants={{
                                ...variants,
                                visible: {
                                    ...variants.visible,
                                    transition: {
                                        ...variants.visible.transition,
                                        delay: (index + 1) * 0.3
                                    }
                                }
                            }}
                        >
                            <h3 className="font-headline text-lg font-semibold text-primary mb-4">{section.title}</h3>
                            {section.links ? (
                                <ul className="space-y-4">
                                    {section.links.map(link => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-muted-foreground space-y-4">
                                    {section.content}
                                </div>
                            )}
                        </motion.div>
                    ))}

                </div>
                <motion.div
                    className="border-t border-border/40 mt-12 pt-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={variants}
                >
                    <p className="text-sm text-muted-foreground">
                        &copy; {year} R-3 HARDWARE. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
