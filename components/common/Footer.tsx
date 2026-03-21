"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoLogoYoutube, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';
import { ArrowUpRight } from 'lucide-react';
import { manrope } from '../utils/font';

const Footer = () => {
    return (
        <footer className={`${manrope.className} w-full bg-white border-t border-zinc-100`}>
            {/* CTA Strip */}
    

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-10">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-8 pb-12">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <Link href="/" className={`${manrope.className} text-zinc-900 text-2xl font-bold tracking-tight`}>
                            Beaver Labs
                        </Link>
                        <p className={`${manrope.className} text-zinc-500 text-sm leading-relaxed mt-4`}>
                            A product design & engineering studio building beautiful, fast digital products for founders worldwide.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <Link href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#7370FF] hover:text-[#7370FF] hover:bg-[#7370FF]/5 transition-all duration-300">
                                <IoLogoYoutube size={15} />
                            </Link>
                            <Link href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#7370FF] hover:text-[#7370FF] hover:bg-[#7370FF]/5 transition-all duration-300">
                                <IoLogoTwitter size={15} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#7370FF] hover:text-[#7370FF] hover:bg-[#7370FF]/5 transition-all duration-300">
                                <IoLogoLinkedin size={15} />
                            </Link>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                        <div>
                            <h4 className={`${manrope.className} text-zinc-900 text-xs font-bold uppercase tracking-[0.15em] mb-5`}>Studio</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/about" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>About Us</Link>
                                <Link href="/how-we-work" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>How We Work</Link>
                                <Link href="/contact" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>Contact</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className={`${manrope.className} text-zinc-900 text-xs font-bold uppercase tracking-[0.15em] mb-5`}>Work</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/projects" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>Projects</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className={`${manrope.className} text-zinc-900 text-xs font-bold uppercase tracking-[0.15em] mb-5`}>Get in touch</h4>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:hello@beaverlabs.com" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>hello@beaverlabs.com</a>
                                <a href="tel:+09433443" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>+0943 3443</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className={`${manrope.className} text-zinc-400 text-xs`}>© 2026 Beaver Labs. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className={`${manrope.className} text-zinc-400 text-xs hover:text-zinc-600 transition-colors`}>Privacy Policy</Link>
                        <Link href="#" className={`${manrope.className} text-zinc-400 text-xs hover:text-zinc-600 transition-colors`}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
