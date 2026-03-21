import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => (
    <div className={cn('grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3', className)}>
        {children}
    </div>
);

interface BentoCardProps {
    name: string;
    className?: string;
    background?: ReactNode;
    icon: ReactNode;
    description: string;
    tags?: string[];
}

export const BentoCard = ({ name, className, background, icon, description, tags }: BentoCardProps) => (
    <div
        className={cn(
            'group relative flex flex-col overflow-hidden rounded-2xl',
            'bg-white border border-zinc-200',
            'hover:border-[#7370FF]/40 hover:shadow-[0_12px_48px_rgba(115,112,255,0.12)]',
            'hover:-translate-y-1.5 transition-all duration-500 p-7 min-h-[14rem]',
            className
        )}
    >
        {/* Background layer */}
        {background && (
            <div className="pointer-events-none absolute inset-0 z-0 opacity-40 group-hover:opacity-90 transition-opacity duration-700">
                {background}
            </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
            <div className="mb-5 w-11 h-11 rounded-xl bg-[#7370FF]/10 flex items-center justify-center group-hover:bg-[#7370FF]/20 group-hover:scale-110 transition-all duration-300 origin-left">
                <div className="text-[#7370FF]">{icon}</div>
            </div>
            <h3 className="text-[15px] font-bold text-zinc-900 mb-1.5 group-hover:text-[#7370FF] transition-colors duration-300">
                {name}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1">{description}</p>
            {tags && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-semibold bg-zinc-50 border border-zinc-200 text-zinc-500 px-2.5 py-1 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7370FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);
