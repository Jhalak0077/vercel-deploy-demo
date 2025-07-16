'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavItems from '@/components/molecules/NavItems';
import ContactButton from '@/components/molecules/ContactButton';
import HamburgerButton from '@/components/atoms/HamburgerButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    //Clean up function to remove above code in unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <header className=" section text-white fixed top-0 left-0 w-full z-50  bg-black/90 lg:bg-[#393939]/60 lg:backdrop-blur-md  ">
      <nav className="mx-auto px-4  md:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center w-auto space-x-2"
        >
          <span className="flex items-center space-x-2 lg:space-x-4">
            <Image
              src="/images/Vector.png"
              alt="Vector Logo"
              width={30}
              height={30}
              priority
            />
            <Image
              src="/images/thabho.png"
              alt="Thabho Logo"
              width={90}
              height={30}
              priority
            />
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavItems />
          <ContactButton />
        </div>

        <div className="lg:hidden">
          <HamburgerButton onClick={() => setIsOpen(!isOpen)} />
        </div>
      </nav>

      {isOpen && (
        <div className="bg-[#111111] fixed top-16 left-0 right-0 bottom-0 z-50  py-4 flex flex-col gap-4 lg:gap-8  lg:hidden">
          <NavItems />

          <ContactButton />

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 mt-auto  text-sm"
          >
            <hr className="text-white" />
            <span className="inline-block mt-4">← GO BACK</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
