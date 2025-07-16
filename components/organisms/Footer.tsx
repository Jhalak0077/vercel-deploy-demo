'use client';
import {
  FooterColumn,
  SocialLinks,
  FooterBrand,
  LocationMap,
  CTASectionWithConditionalRender,
  CTASection,
} from '@/components/molecules';

const footerData = {
  column1: [
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/news', label: 'News & Blogs' },
    { href: '/faq', label: 'FAQs' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
  ],
  column2: [
    { href: '/real-estate', label: 'Real Estate' },
    { href: '/technology', label: 'Technology' },
    { href: '/agritech', label: 'AgriTech' },
  ],
  column3: [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/career', label: 'Career' },
  ],
};

const Footer = ({ map = true }: { map?: boolean }) => (
  <footer className="relative bg-[#1E1E1E] text-white pb-[20px] px-4 lg:pb-[40px] lg:mb-0 lg:px-[40px]">
    <CTASectionWithConditionalRender />

    <div className="w-full">
      {/* Top Section with Brand and Tagline */}
      <div className="mb-4 pt-[200px] md:pt-[150px] lg:pt-[250px] lg:mb-6">
        <FooterBrand />
      </div>

      {/* Divider Line */}
      <hr className="border-[#656565] mb-[20px]" />

      {/* Main Footer Content - Stack on mobile */}
      <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-6">
        {/* Footer Columns - On mobile, 3 columns */}
        <div className="whitespace-nowrap lg:col-span-3 grid lg:w-[500px] grid-cols-3 gap-x-[40px] gap-y-[12px] lg:[grid-template-columns:120px_105px_1fr] lg:gap-x-[128px] lg:gap-y-[20px] mb-[20px] lg:mb-0 ">
          <FooterColumn links={footerData.column1} />
          <FooterColumn links={footerData.column2} />
          <FooterColumn links={footerData.column3} />
        </div>

        {/* Contact Info, Social, and Map */}
        <div className="lg:col-span-2 flex flex-col">
          <p className="text-[#656565] text-[16px] mb-4 text-left md:text-[28px] lg:text-[24px] lg:leading-[28.8px] lg:text-right">
            thabhogroup@gmail.com
          </p>
          <div className="flex  justify-start  lg:justify-end mb-6">
            <SocialLinks />
          </div>
          {map && (
            <div className="flex justify-start lg:justify-end ">
              <LocationMap />
            </div>
          )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
