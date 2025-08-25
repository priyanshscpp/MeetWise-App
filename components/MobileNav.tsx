'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[280px]">
      <Sheet>
        <SheetTrigger asChild>
          <div className="cursor-pointer sm:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
            <Image
              src="/icons/hamburger.svg"
              width={32}
              height={32}
              alt="hamburger icon"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1/95 backdrop-blur-xl border-r border-white/10">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="relative">
              <Image
                src="/icons/logo.svg"
                width={36}
                height={36}
                alt="meetwise logo"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-extrabold text-white group-hover:text-sky-1 transition-colors duration-300">
                MeetWise
              </p>
              <p className="text-xs text-sky-2 font-medium">
                Professional Meetings
              </p>
            </div>
          </Link>
          
          <div className="flex h-[calc(100vh-120px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-3 pt-4 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn(
                          'group flex gap-4 items-center p-4 rounded-xl w-full max-w-60 transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10',
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
                          'font-semibold transition-colors duration-300',
                          {
                            'text-white': isActive,
                            'text-sky-2 group-hover:text-white': !isActive,
                          }
                        )}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
            
            {/* Footer section */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-xs text-sky-2 font-medium">MeetWise v1.0</p>
                <p className="text-xs text-sky-2/60 mt-1">Professional Meetings</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
