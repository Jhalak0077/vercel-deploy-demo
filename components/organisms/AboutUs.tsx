'use client';
import React from 'react';
import { Button } from '../atoms';
import RatingStar from '../atoms/RatingStar';
import Testimonial from '../molecules/Testimonial';

const AboutUs = () => {
  return (
    <section className=" section py-12  md:items-center md:py-20 flex lg:h-fit">
      <div className=" flex items-center px-6 gap-12 flex-col  md:gap-18 lg:gap-28 md:px-8 lg:mt-0 lg:flex-row  ">
        <div className="About-us-text   text-[#B0B0B0] lg:flex-1  ">
          <p className="section-title">About Us</p>
          <h3 className="section-heading">Who We Are, What We Stand For</h3>
          <p className="mb-4 text text-left lg:text-justify ">
            At Thabho Group of Companies, we are committed to driving innovation
            and sustainable growth across technology, real estate, and
            agriculture. Based in Nepal, our mission is to empower businesses,
            create opportunities, and make services more accessible and
            reliable.
          </p>
          <Button
            type="button"
            variant="primary"
            className="flex-1 whitespace-nowrap  "
          >
            Know More
          </Button>
        </div>
        <Testimonial
          footer={
            <div className="Review-rating flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/images/profile.png"
                  alt="Mr. Abhay Singh"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-base md:text-lg">
                  <p className="font-semibold text-[#D7EDDB] text-xs md:text-sm">
                    Mr. Abhay Singh
                  </p>
                  <p className="text-xs text-gray-400 md:text-base">
                    CFO, Gorkha Breweries
                  </p>
                </div>
              </div>
              <RatingStar />
            </div>
          }
        >
          <p className="text my-4 text-left md:my-6">
            Thabho Group's expertise in market research and distribution has
            given us a competitive edge. Their strategic insights and seamless
            execution have helped us expand into new territories with
            confidence. Truly an invaluable partner!
          </p>
        </Testimonial>

        {/* <Testimonial
          className="lg:max-w-[785px]"
          footer={
            <div className="mt-6">
              <p className="text-2xl md:text-3xl font-semibold text-[#D7EDDB]">
                Mr. Subash Poudel
              </p>
              <LabelBadge>CEO, Thabho Group of companies</LabelBadge>
            </div>
          }
        >
          <p className="text mb-4 text-[#B0B0B0] text-left">
            At Thabho Group, we believe in the power of innovation, technology,
            and sustainability to transform industries and create lasting
            impact. Our journey spans IT consultancy, agritech, and real estate,
            where we continuously strive to deliver cutting-edge solutions that
            drive growth and efficiency.
          </p>
          <p className="text mb-4 text-[#B0B0B0] text-left">
            As we move forward, our commitment remains strong—to empower
            businesses, modernize agriculture, and shape communities with
            visionary leadership and strategic execution. We are grateful for
            the trust and collaboration of our clients, partners, and team
            members who make this journey possible.
          </p>
          <p className="text text-[#B0B0B0] text-left">
            Together, we are building a smarter, greener, and more connected
            future.
          </p>
        </Testimonial> */}
      </div>
    </section>
  );
};

export default AboutUs;

//*previous code before making the component reusable"
{
  /* <div className="Review  bg-[#1E1E1ECC] rounded-xl px-8 py-6  w-full text-[#B0B0B0] lg:max-w-[34.68rem] lg:flex-1"> */
}
//   <div className="Review-icon w-18 h-18 scale-x-[-1] rotate-180 text-[#D7EDDB] ">
//     <Quote />
//   </div>
//   <p className="text my-4  text-left md:my-6">
//     Thabho Group&apos;s expertise in market research and distribution
//     has given us a competitive edge. Their strategic insights and
//     seamless execution have helped us expand into new territories with
//     confidence. Truly an invaluable partner!
//   </p>
//   <div className="border-t border-gray-700 mb-4"></div>
//   <div className="Review-rating flex items-center justify-between">
//     <div className="flex items-center gap-4">
//       {/* Avatar */}
//       <img
//         src="/images/profile.png"
//         alt="Mr. Abhay Singh"
//         className="w-10 h-10 rounded-full object-cover"
//       />
//       <div className="text-base md:text-lg">
//         <p className="font-semibold text-[#D7EDDB] text-xs md:text-sm ">
//           Mr. Abhay Singh
//         </p>
//         <p className="text-xs text-gray-400 md:text-base">
//           CFO, Gorkha Breweries
//         </p>
//       </div>
//     </div>
//     <div>
//       <RatingStar />
//     </div>
//   </div>
// </div>
