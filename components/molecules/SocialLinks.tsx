'use client';
import Image from 'next/image';
import SocialIcon from '@/components/atoms/SocialIcon';

const socialLinks = [
  {
    href: 'https://facebook.com/thabho',
    icon: '/icons/fb.svg',
    label: 'Facebook',
  },
  {
    href: 'https://instagram.com/thabho',
    icon: '/icons/insta.svg',
    label: 'Instagram',
  },
  {
    href: 'https://tiktok.com/@thabho',
    icon: '/icons/tiktok.svg',
    label: 'TikTok',
  },
  { href: 'https://x.com/thabho', icon: '/icons/x.svg', label: 'X (Twitter)' },
  {
    href: 'https://youtube.com/@thabho',
    icon: '/icons/yt.svg',
    label: 'YouTube',
  },
];

const SocialLinks = () => (
  <div className="flex items-center gap-x-[8px] md:gap-x-[12px] lg:gap-x-[18px]">
    {socialLinks.map((social) => (
      <SocialIcon
        key={social.href}
        href={social.href}
        ariaLabel={social.label}
      >
        <Image
          src={social.icon}
          alt={social.label}
          width={20}
          height={20}
          className="w-8 h-8"
        />
      </SocialIcon>
    ))}
  </div>
);

export default SocialLinks;
