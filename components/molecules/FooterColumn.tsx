'use client';
import FooterLink from '@/components/atoms/FooterLink';

interface FooterColumnProps {
  title?: string;
  links: Array<{
    href: string;
    label: string;
  }>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col  space-y-3  text-[#D7EDDB]">
    {title && <h3 className="text-white font-medium text-sm mb-2">{title}</h3>}
    {links.map((link) => (
      <FooterLink
        key={link.href}
        href={link.href}
        className=" text-[16px] leading-[25.6px] md:text-[26px]  lg:text-[18px] lg:leading-[28.8px] important"
      >
        {link.label}
      </FooterLink>
    ))}
  </div>
);

export default FooterColumn;
