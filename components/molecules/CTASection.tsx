import React from 'react';
import { Button } from '@/components/atoms';

const CTASection: React.FC = () => {
  return (
    // <section className="relative w-full h-[385px] lg:h-[442px] overflow-hidden rounded-[51px] mx-[16px] md:mx-[28px] lg:mx-[40px] xl:max-width-[1360px]">
    //   {/* Background Image */}
    //   <div
    //     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //     style={{
    //       backgroundImage: "url('/images/CTA-bg.png')",
    //     }}
    //   >
    //     {/* Dark Overlay */}
    //     <div className="absolute inset-0 bg-black/68"></div>
    //   </div>
    //   {/* Content */}
    //   <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
    //     {/* Nepali Text */}
    //     <p className="text-[#D7EDDB] text-[16px] leading-[19.2px] md:text-[24px] lg:text-[18px] lg:leading-[21.6px] font-semibold mb-2 opacity-80">
    //       अब थाभो ?
    //     </p>

    //     {/* Main Heading */}
    //     <h2 className="text-[#D7EDDB] text-[36px] leading-[46.8px] md:text-[28px] lg:text-[64px] lg:leading-[76.8px] font-semibold mb-6 max-w-2xl">
    //       Ready to work with us ?
    //     </h2>

    //     {/* CTA Button */}
    //     <Button
    //       variant="primary"
    //       className="bg-[#FF5112] hover:bg-[#e6460f] text-[#D7EDDB] text-[16px] leading-[19.2px] md:text-[24px] lg:text-[18px] lg:leading-[21.6px] px-6 py-3 rounded-md transition-colors duration-200"
    //     >
    //       BOOK A CONSULTATION
    //     </Button>
    //   </div>
    // </section>

    <section className="w-full py-12 px-6 md:py-20 md:px-8">
      {/* CTA Card container */}
      <div
        className="w-full min-h-[385px] lg:min-h-[442px] mx-auto rounded-[51px] overflow-hidden relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/CTA-bg.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/68"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <p className="text-[#D7EDDB] text-[16px] leading-[19.2px] md:text-[24px] lg:text-[18px] lg:leading-[21.6px] font-semibold mb-2 opacity-80">
            अब थाभो ?
          </p>
          <h2 className="text-[#D7EDDB] text-[36px] leading-[46.8px] md:text-[28px] lg:text-[64px] lg:leading-[76.8px] font-semibold mb-6 max-w-2xl">
            Ready to work with us ?
          </h2>
          <Button
            variant="primary"
            className="bg-[#FF5112] hover:bg-[#e6460f] text-[#D7EDDB] text-[16px] leading-[19.2px] md:text-[24px] lg:text-[18px] lg:leading-[21.6px] px-6 py-3 rounded-md transition-colors duration-200"
          >
            BOOK A CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
