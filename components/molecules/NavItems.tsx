'use client';
import NavLink from '@/components/atoms/NavLink';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/blogs', label: 'News & Blogs' },
  { href: '/companies', label: 'Companies' },
];

const NavItems = () => {
  return (
    <>
      {navLinks.map((link, index) => (
        <NavLink
          key={link.href}
          href={link.href}
          className="text-center"
        >
          {link.label}
        </NavLink>
      ))}
      {/* <div className="w-full">
        {navLinks.map((link, index) => (
          <NavLink
            key={link.href}
            href={link.href}
            className="block w-full text-center py-4 border-b border-zinc-700 hover:bg-zinc-800 transition"
          >
            {link.label}
          </NavLink>
        ))}
      </div> */}
    </>
  );
};

export default NavItems;
