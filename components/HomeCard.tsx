'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 px-6 py-8 flex flex-col justify-between w-full xl:max-w-[280px] min-h-[280px] rounded-2xl cursor-pointer border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-large',
        'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
        className
      )}
      onClick={handleClick}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container with enhanced styling */}
      <div className="relative z-10 flex-center glassmorphism-card size-14 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <Image src={img} alt="meeting" width={28} height={28} className="transition-transform duration-300 group-hover:rotate-3" />
      </div>
      
      {/* Content with better typography */}
      <div className="relative z-10 flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-white group-hover:text-sky-1 transition-colors duration-300">
          {title}
        </h1>
        <p className="text-base font-medium text-sky-2 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/30 transition-colors duration-300" />
    </section>
  );
};

export default HomeCard;
