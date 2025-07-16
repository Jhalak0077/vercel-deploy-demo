'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

interface FooterLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const FooterLink = ({ href, children, className = '' }: FooterLinkProps) => (
  <Link
    href={href}
    className={` font-normal relative group transition-all duration-200 ${className}`}
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
  </Link>
);

export default FooterLink;
