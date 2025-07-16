import React from 'react';
import Link from 'next/link';

const Sitemap: React.FC = () => {
  return (
    <section className="w-full h-10 bg-[#2E2E2E]">
      <div className="w-full max-w-[412px] lg:max-w-[1440px] mx-auto px-4 h-full flex items-center justify-between ">
        {/* Copyright Text - Left */}
        <div className="text-[#D7EDDB] text-[14px] leading-[21px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[24px]">
          Copyright 2024
        </div>

        {/* Sitemap Link - Center */}
        <div className="text-[#D7EDDB] text-[14px] leading-[21px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[24px]">
          <Link
            href="/sitemap.xml"
            className="hover:opacity-80 transition-opacity"
          >
            Sitemap
          </Link>
        </div>

        {/* Privacy Policy - Right */}
        <div className="text-[#D7EDDB] text-[14px] leading-[21px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[24px]">
          <Link
            href="/privacy-policy"
            className="hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
