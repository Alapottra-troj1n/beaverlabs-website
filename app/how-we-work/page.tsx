'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import discover from '../../public/images/how-we-work/Discovery.jpg'
import design from '../../public/images/how-we-work/Design.jpg'
import engineering from '../../public/images/how-we-work/Engineering.jpg'
import deploy from '../../public/images/how-we-work/Deploy.png'

const steps = [
    {
        id: '01',
        title: 'Discovery & Strategy',
        description: 'Every great product begins with a deep understanding of the problem. We dive into your business goals, target audience, and market landscape to build a roadmap for success.',
        icon: discover,
        details: [
            'Market & Competitor Analysis',
            'Technical Feasibility Study',
            'User Persona Development',
            'Project Roadmap & Milestones'
        ],
        gradient: 'from-blue-500/20 to-purple-500/10'
    },
    {
        id: '02',
        title: 'Design & Experience',
        description: 'We believe good design is invisible. We craft intuitive user journeys and stunning interfaces that not only look beautiful but also feel effortless to use.',
        icon: design,
        details: [
            'High-Fidelity Wireframes',
            'Interactive Prototypes',
            'Visual Design System',
            'User Experience (UX) Audit'
        ],
        gradient: 'from-purple-500/20 to-pink-500/10'
    },
    {
        id: '03',
        title: 'Development & Engineering',
        description: 'Our engineers turn designs into reality using state-of-the-art tech stacks. We focus on writing clean, scalable code that performs flawlessly across all devices.',
        icon: engineering,
        details: [
            'Full-Stack Implementation',
            'Performance Optimization',
            'Third-Party Integrations',
            'Rigorous Unit Testing'
        ],
        gradient: 'from-blue-600/20 to-cyan-500/10'
    },
    {
        id: '04',
        title: 'Launch & Evolution',
        description: 'Launching is just the beginning. We manage the deployment process and provide ongoing support to ensure your product continues to evolve and grow with your users.',
        icon: deploy,
        details: [
            'Deployment Strategy',
            'Post-Launch Monitoring',
            'Performance Scaling',
            'Continuous Improvements'
        ],
        gradient: 'from-indigo-500/20 to-blue-500/10'
    }
];

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const HowWeWork = () => {
    return (
        <div className="min-h-screen bg-[#1E1E1E] overflow-x-hidden">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pt-36 pb-20 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(0)}
                >
                    {/* <span className="text-[#9C99FF] text-xs font-semibold tracking-widest uppercase mb-4 block">Our Process</span> */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                        From Concept <br className="hidden md:block" /> to <span className="text-[#7370FF]">Digital Reality</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        We don&apos;t just build products; we build experiences. Our structured approach ensures
                        transparency, speed, and technical excellence at every stage of the journey.
                    </p>
                </motion.div>
            </section>

            {/* Process Steps */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-20 divide-y divide-white/5">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 1;
                    return (
                        <div key={step.id} className="py-24 md:py-32">
                            <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                                {/* Text Content */}
                                <motion.div
                                    className="flex-1"
                                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-5xl font-black text-white/10 tracking-tighter">{step.id}</span>
                                        <div className="h-[2px] w-12 bg-[#7370FF]/50" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                                        {step.title}
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {step.description}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {step.details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#7370FF]" />
                                                <span className="text-sm font-medium">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Visual Element */}
                                <motion.div
                                    className="flex-1 w-full"
                                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className={`relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br ${step.gradient} group shadow-2xl`}>
                                        <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out">
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                fill
                                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                            />
                                            {/* Subtle overlay to help text readability if needed */}
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                                        </div>
                                        {/* Decorative glass card */}
                                        <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-lg">
                                            <p className="text-white text-sm font-bold mb-1">{step.title} Phase</p>
                                            <p className="text-gray-400 text-xs">Precision excellence at every milestone.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-28">
                <motion.div
                    className="bg-gradient-to-br from-[#7370FF]/25 via-white/5 to-[#9C99FF]/10 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Animated background element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#7370FF]/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 relative z-10">
                        Have a Vision? <br /> Let&apos;s Build it Together.
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
                        Whether you&apos;re an early-stage founder or a growing enterprise, we have the
                        process and the talent to bring your product to life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <a
                            href="tel:+09433443"
                            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#7370FF] text-white font-bold text-lg hover:bg-[#625df5] transition-all duration-300 shadow-[0_0_40px_rgba(115,112,255,0.3)] hover:scale-105"
                        >
                            Book a Discovery Call
                        </a>
                        <a
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default HowWeWork;
