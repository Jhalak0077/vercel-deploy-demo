'use client';
import AdImage from '@/components/atoms/AdImage';
import { Up } from '../atoms/icons/Up';

const Newsletter = () => {
  return (
    <section className=" section w-full py-12 px-6 md:py-20 md:px-8">
      {/* max-w-[1360px] */}
      <div className="w-full min-h-[442px] mx-auto bg-[#2E2E2E] rounded-[51px] overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full p-6 lg:p-12 gap-6 lg:gap-0">
          {/* Mobile/Tablet Layout */}
          <div className="flex lg:hidden flex-col gap-4 w-full">
            {/* AdImage */}
            <div className="w-full">
              <AdImage />
            </div>

            {/* Text */}
            <div className="text-[#D7EDDB] text-left md:text-center lg:text-left w-full">
              <p className="section-title">Want to get updates from us ?</p>
              <h2 className="font-bold text-[36px] leading-[48px] tracking-normal font-poppins sm:text-[48px] sm:leading-[56px] md:text-[56px] md:leading-[66px]">
                Subscribe to Our <br /> Newsletter.
              </h2>
            </div>

            {/* Inputs */}
            <div className="w-full flex flex-col gap-3 md:text-center">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md text-black placeholder:text-gray-500 text-sm bg-[#D7EDDB] md:max-w-[60%] lg:w-full"
                />
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Jhondoe@example.com"
                  className="w-full px-4 py-3 pr-12 rounded-md text-black placeholder:text-gray-500 text-sm bg-[#D7EDDB] md:max-w-[60%] lg:w-full"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#FF5112] hover:bg-[#FF511290] text-white"
                >
                  <Up className="w-[16px] h-[16px] rotate-90" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-1 flex-col justify-end text-[#D7EDDB]">
            <p className="section-title">Want to get updates from us ?</p>
            <h2 className="font-bold text-[64px] leading-[76.8px] tracking-normal font-poppins">
              Subscribe to Our <br /> Newsletter.
            </h2>
          </div>

          <div className="hidden lg:flex flex-1 flex-col justify-end gap-4">
            <div className="w-full max-w-[579px] self-end">
              <AdImage />
            </div>

            <div className="w-full max-w-[579px] flex flex-col sm:flex-row items-center gap-3 self-end">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-3 rounded-md text-black placeholder:text-gray-500 text-sm bg-[#D7EDDB]"
              />
              <div className="relative w-full sm:flex-1">
                <input
                  type="email"
                  placeholder="Jhondoe@example.com"
                  className="w-full px-4 py-3 pr-12 rounded-md text-black placeholder:text-gray-500 text-sm bg-[#D7EDDB]"
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#FF5112] hover:bg-[#FF511290] text-white"
                >
                  <Up className="w-[16px] h-[16px] rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
