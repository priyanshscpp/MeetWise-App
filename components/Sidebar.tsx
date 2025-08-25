'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1/95 backdrop-blur-xl border-r border-white/10 p-6 pt-28 text-white max-sm:hidden lg:w-[280px] shadow-medium">
      <div className="flex flex-1 flex-col gap-4">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'group flex gap-4 items-center p-4 rounded-xl justify-start transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10',
                {
                  'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 shadow-medium': isActive,
                  'hover:scale-105': !isActive,
                }
              )}
            >
              <div className={cn(
                'flex-center size-10 rounded-lg transition-all duration-300',
                {
                  'bg-blue-500/20 text-blue-400': isActive,
                  'bg-white/5 text-sky-2 group-hover:bg-blue-500/10 group-hover:text-blue-400': !isActive,
                }
              )}>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className={cn(
                'text-base font-semibold transition-colors duration-300',
                {
                  'text-white': isActive,
                  'text-sky-2 group-hover:text-white': !isActive,
                }
              )}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      
      {/* Footer section */}
      <div className="pt-6 border-t border-white/10">
        <div className="text-center">
          <p className="text-xs text-sky-2 font-medium">MeetWise v1.0</p>
          <p className="text-xs text-sky-2/60 mt-1">Professional Meetings</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
