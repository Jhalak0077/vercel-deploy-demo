'use client';

import { useState } from 'react';
import { Button } from '../atoms';
import { AgriTech } from '../atoms/icons/AgriTech';
import { RealState } from '../atoms/icons/RealState';
import { Technology } from '../atoms/icons/Technology';
import CollapseItem from '../molecules/CollapseItem';
import { cn } from '@/utils';

const offerings = [
  {
    title: 'Thabho RealEstate',
    icon: <RealState className="w-[24px] h-[24px]" />,
    content: {
      heading: 'Connecting You to Your Dream Property',
      desc: 'Thabho Real Estate simplifies property transactions with reliable, transparent, and commission-based services.',
      services: [
        'Buy & Sell: Assistance in purchasing and selling lands, homes, and apartments.',
        'Renting: Helping clients find the right rental properties.',
        'Consulting: Expert advice on real estate investments and market trends.',
      ],
    },
  },
  {
    title: 'Thabho Technology',
    icon: <Technology className="w-[24px] h-[24px]" />,
    content: {
      heading: 'Powering Digital Innovation',
      desc: 'We provide innovative IT solutions tailored for business growth and operational efficiency.',
      services: ['Web & App Development', 'Cloud Solutions', 'AI Integrations'],
    },
  },
  {
    title: 'Thabho Agritech',
    icon: <AgriTech className="w-[24px] h-[24px]" />,
    content: {
      heading: 'Modernizing Agriculture',
      desc: 'Thabho Agritech empowers farmers with modern tools, data-driven decisions, and better yields.',
      services: [
        'Precision Farming',
        'Smart Irrigation',
        'Agri Market Insights',
      ],
    },
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      className=" section relative  text-white py-12 px-6   md:items-center md:py-20 md:px-8 h-fit
"
    >
      <h3 className="section-title">Our Offerings</h3>
      <h2 className="section-heading">
        What do we as a Group of Company Offer?
      </h2>
      {/* lg screen */}
      {
        <div className="hidden lg:flex gap-10 mt-8 min-h-[400px]">
          {/* LEFT PART */}
          <div className="w-1/3 flex flex-col gap-5">
            {offerings.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <button
                  className={cn(
                    'flex font-semibold cursor-pointer text-[#656565] items-center gap-2 w-full px-6 py-5 text-left border-b border-gray-700',
                    activeIndex === index && 'bg-[#1E1E1E] text-[#D7EDDB]',
                  )}
                >
                  {item.icon}
                  <span className="text ml-2">{item.title}</span>
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT PART */}
          {/* <div className="flex-1 bg-gradient-to-b from-[#1E1E1E] to-[#121212] px-8 py-6 rounded-md shadow-md transition-all duration-300 ease-in-out min-h-[480px]">
            <h3 className="section-heading">
              {offerings[activeIndex].content.heading}
            </h3>
            <p className="text mb-4">{offerings[activeIndex].content.desc}</p>

            <p className="font-semibold text-lg mb-4 text-[#D7EDDB]">
              SERVICES:
            </p>
            <ul className="text list-disc pl-5 mb-6">
              {offerings[activeIndex].content.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>

            <div className="flex gap-4 mt-2">
              <Button
                type="button"
                variant="primary"
                className="whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                CONTACT US
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="whitespace-nowrap px-10 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                VISIT SITE
              </Button>
            </div>
          </div> */}
          <div className="flex-1 flex flex-col justify-between bg-gradient-to-b from-[#1E1E1E] to-[#121212] px-8 py-6 rounded-md shadow-md transition-all duration-300 ease-in-out min-h-[400px] overflow-hidden">
            <div>
              <h3 className="section-heading">
                {offerings[activeIndex].content.heading}
              </h3>
              <p className="text mb-2">{offerings[activeIndex].content.desc}</p>

              <p className="font-semibold text-lg mb-2 text-[#D7EDDB]">
                SERVICES:
              </p>
              <ul className="text list-disc pl-5 mb-4">
                {offerings[activeIndex].content.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="primary"
                className="whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                CONTACT US
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="whitespace-nowrap px-10 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                VISIT SITE
              </Button>
            </div>
          </div>
        </div>
      }

      {/* Mobile and mdeium */}
      <div className="w-full lg:hidden flex flex-col gap-4">
        {offerings.map((item, index) => (
          <CollapseItem
            key={index}
            icon={item.icon}
            title={item.title}
            isOpen={activeIndex === index}
            onToggle={() =>
              setActiveIndex((prev) => (prev === index ? -1 : index))
            }
          >
            <h3 className="section-heading">{item.content.heading}</h3>
            <p className="text mb-4">{item.content.desc}</p>

            <p className="font-semibold text-sm mb-2 text-[#D7EDDB]">
              SERVICES:
            </p>
            <ul className="text list-disc pl-5 mb-4">
              {item.content.services.map((service: string, idx: number) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                CONTACT US
              </button>
              <button className="border border-gray-400 text-gray-300 px-4 py-2 rounded-md text-sm font-semibold">
                VISIT SITE
              </button>
            </div>
          </CollapseItem>
        ))}
      </div>
    </section>
  );
}

/*DONT REMOVE*/
/*This is same as figma */
{
  /* <div className="hidden flex-col mt-8  gap-10 relative md:flex-row lg:flex">
  
  <div className="w-full md:w-1/3 flex flex-col gap-5  relative z-10">
    {offerings.map((item, index) => (
      <div
        key={index}
        onClick={() => setActiveIndex(index)}
        className="relative"
      >
        <button
          className={cn(
            'flex font-semibold cursor-pointer text-[#656565] items-center gap-2 w-full px-6 py-5 text-left border-b border-gray-700',
            activeIndex === index && 'bg-[#1E1E1E] text-[#D7EDDB]',
          )}
        >
          {item.icon}
          <span className="text ml-2">{item.title}</span>
        </button>

        <div
          className={cn(
            'transition-all duration-300 ease-in-out absolute top-0 left-[95%] w-[90vw] md:w-[920px] bg-gradient-to-b from-[#1E1E1E] to-[#121212] px-8 py-2 rounded-md shadow-md z-20',
            activeIndex === index
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none absolute',
          )}
        >
          <h3 className="section-heading">{item.content.heading}</h3>
          <p className="text mb-4">{item.content.desc}</p>

          <p className="font-semibold text-lg mb-4 text-[#D7EDDB]">SERVICES:</p>
          <ul className="text list-disc pl-5 mb-6">
            {item.content.services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-2">
            <Button
              type="button"
              variant="primary"
              className="whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              CONTACT US
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="whitespace-nowrap px-10 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              VISIT SITE
            </Button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>; */
}
