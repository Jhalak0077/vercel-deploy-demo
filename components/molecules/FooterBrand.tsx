'use client';
import Link from 'next/link';

const FooterBrand = () => (
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:mb-[20px]">
    <Link
      href="/"
      className="mb-2 md:mt-8 lg:mb-0"
    >
      <span className="text-[#FFFFFF] text-[60px] leading-[100px] md:text-[80px] lg:text-[100px] lg:leading-[100%]">
        thabho<span className="text-[#FF5112]">.</span>
      </span>
    </Link>
    <div className="text-center lg:text-right">
      <p className="text-[#656565] text-[48px] leading-[57.6px] md:pt-16 md:text-[58px] lg:text-[64px] lg:leading-[76.8px] lg:pt-14 font-bold">
        #NOWIKNOW
      </p>
    </div>
  </div>
);

export default FooterBrand;
