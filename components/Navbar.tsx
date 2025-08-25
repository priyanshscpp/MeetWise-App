import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 lg:px-10 shadow-medium">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative">
          <Image
            src="/icons/logo.svg"
            width={36}
            height={36}
            alt="meetwise logo"
            className="max-sm:size-10 transition-transform duration-300 group-hover:scale-110"
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-extrabold text-white max-sm:hidden group-hover:text-sky-1 transition-colors duration-300">
            MeetWise
          </p>
          <p className="text-xs text-sky-2 max-sm:hidden font-medium">
            Professional Meetings
          </p>
        </div>
      </Link>
      
      <div className="flex-between gap-5">
        <SignedIn>
          <div className="transition-transform duration-300 hover:scale-105">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
