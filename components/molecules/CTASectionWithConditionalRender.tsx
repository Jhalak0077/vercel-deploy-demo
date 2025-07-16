'use client';
import { usePathname } from 'next/navigation';
import { CTASection } from '@/components/molecules';
import { NewsLetter } from '@/components/organisms';

export default function CTASectionWithConditionalRender() {
  const pathname = usePathname();
  // Show map only on homepage (root path)
  const renderer = pathname === '/';

  if (renderer)
    return (
      <div className="absolute top-[-350px] left-0 md:top-[-550px] md:left-0 lg:top-[-350px] lg:left-0 m-0 p-0 w-full flex items-center justify-center">
        <NewsLetter />
      </div>
    );

  return (
    <div className="absolute top-[-250px] left-0 md:top-[-350px] md:left-0 lg:top-[-350px] lg:left-0 m-0 p-0 w-full flex items-center justify-center">
      <CTASection />
    </div>
  );
}
