'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightProps {
    className?: string;
    size?: number;
}

export function Spotlight({ className, size = 500 }: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

    const mouseX = useSpring(0, { bounce: 0, damping: 30, stiffness: 200 });
    const mouseY = useSpring(0, { bounce: 0, damping: 30, stiffness: 200 });

    const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
    const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

    useEffect(() => {
        if (containerRef.current) {
            const parent = containerRef.current.parentElement;
            if (parent) {
                parent.style.position = 'relative';
                setParentElement(parent);
            }
        }
    }, []);

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!parentElement) return;
            const { left, top } = parentElement.getBoundingClientRect();
            mouseX.set(event.clientX - left);
            mouseY.set(event.clientY - top);
        },
        [mouseX, mouseY, parentElement]
    );

    useEffect(() => {
        if (!parentElement) return;
        const enter = () => setIsHovered(true);
        const leave = () => setIsHovered(false);
        parentElement.addEventListener('mousemove', handleMouseMove);
        parentElement.addEventListener('mouseenter', enter);
        parentElement.addEventListener('mouseleave', leave);
        return () => {
            parentElement.removeEventListener('mousemove', handleMouseMove);
            parentElement.removeEventListener('mouseenter', enter);
            parentElement.removeEventListener('mouseleave', leave);
        };
    }, [parentElement, handleMouseMove]);

    return (
        <motion.div
            ref={containerRef}
            className={cn(
                'pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300 z-[1]',
                'bg-[radial-gradient(circle_at_center,rgba(115,112,255,0.28)_0%,rgba(156,153,255,0.12)_45%,transparent_70%)]',
                isHovered ? 'opacity-100' : 'opacity-0',
                className
            )}
            style={{
                width: size,
                height: size,
                left: spotlightLeft,
                top: spotlightTop,
            }}
        />
    );
}
