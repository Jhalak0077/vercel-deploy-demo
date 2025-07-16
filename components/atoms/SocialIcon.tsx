'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  children: ReactNode;
  ariaLabel: string;
}

const SocialIcon = ({ href, children, ariaLabel }: SocialIconProps) => (
  <Link
    href={href}
    className="w-8 h-8 flex items-center justify-center hover:scale-150 transition ease-out duration-300"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

export default SocialIcon;
