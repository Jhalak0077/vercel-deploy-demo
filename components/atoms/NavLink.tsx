// 'use client';
// import Link from 'next/link';
// import { ReactNode } from 'react';
// import { cn } from '@/utils/cn'; // adjust path as needed

// interface NavLinkProps {
//   href: string;
//   children: ReactNode;
//   className?: string;
// }

// const NavLink = ({ href, children, className = '' }: NavLinkProps) => (
//   <Link
//     href={href}
//     className={cn(
//       'font-normal relative group transition-all duration-200',
//       className,
//     )}
//   >
//     {children}
//     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
//   </Link>
// );

// export default NavLink;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'font-normal px-4 py-2 rounded-md transition-colors duration-200 hover:!underline',
        isActive && 'bg-[#393939]',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
