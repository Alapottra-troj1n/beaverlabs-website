'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMail, IoCall, IoLocation, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram, IoArrowForward } from "react-icons/io5";
import { gerbilFont } from "@/components/utils/font";
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            Swal.fire({
                title: 'Missing Information',
                text: 'Please fill in all fields before sending your message.',
                icon: 'warning',
                background: '#040309',
                color: '#fff',
                confirmButtonColor: '#7370FF'
            });
            return;
        }
        console.log("Form submitted:", formData);
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            background: '#040309',
            color: '#fff',
            confirmButtonColor: '#7370FF'
        });
    };

    return (
        <div className="min-h-screen bg-[#1E1E1E] pt-32 pb-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h1
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Have a project in mind? We'd love to hear from you. Let's create something extraordinary together.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        className="space-y-12"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="space-y-8">
                            <h2 className={`${gerbilFont.className} text-white text-3xl mb-8`}>Contact Information</h2>

                            <div className="flex items-start gap-5 group">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#7370FF]/20 group-hover:border-[#7370FF]/50 transition-all duration-300">
                                    <IoMail className="text-[#9C99FF] w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest">Email us</p>
                                    <p className="text-white text-xl font-medium">hello@beaverlabs.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#7370FF]/20 group-hover:border-[#7370FF]/50 transition-all duration-300">
                                    <IoCall className="text-[#9C99FF] w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest">Call us</p>
                                    <p className="text-white text-xl font-medium">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#7370FF]/20 group-hover:border-[#7370FF]/50 transition-all duration-300">
                                    <IoLocation className="text-[#9C99FF] w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest">Our Studio</p>
                                    <p className="text-white text-xl font-medium">
                                        123 Design Street, Creative Valley<br />CA 94103, USA
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-white text-lg font-medium mb-6">Follow our journey</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: <IoLogoLinkedin />, label: 'LinkedIn' },
                                    { icon: <IoLogoTwitter />, label: 'Twitter' },
                                    { icon: <IoLogoInstagram />, label: 'Instagram' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7370FF] hover:border-[#7370FF] transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <span className="text-xl">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"

                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"

                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"

                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm ml-1">Message</label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."

                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF] transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 px-8 font-bold bg-linear-to-r from-[#9C99FF] to-[#7370FF] text-white rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all group overflow-hidden relative shadow-lg shadow-[#7370FF]/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Send Message <IoArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;