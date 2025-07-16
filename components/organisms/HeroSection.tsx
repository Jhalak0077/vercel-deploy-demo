'use client';
import CompanyCard from '@/components/molecules/CompanyCard';
import { useState } from 'react';
import ConsultationForm from '@/components/molecules/ConsultationForm';
import { RealState } from '@/components/atoms/icons/RealState';
import { Technology } from '@/components/atoms/icons/Technology';
import { AgriTech } from '@/components/atoms/icons/AgriTech';
import { Button } from '../atoms';
const companies = [
  {
    href: '#',
    image: '/images/Thabhorealstate.png',
    title: 'Thabho RealEstate',
    icon: <RealState />,
  },
  {
    href: '#',
    image: '/images/Thabhotechnology.png',
    title: 'Thabho Technology',
    icon: <Technology />,
  },
  {
    href: '#',
    image: '/images/Thabhoagritech.png',
    title: 'Thabho Agritech',
    icon: <AgriTech />,
  },
];

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    // <section className="relative w-full min-h-screen  bg-[url('/images/bg-forest.jpg')] bg-cover bg-center bg-no-repeat text-white flex items-start px-0  before:absolute before:inset-0 before:bg-black/70 before:z-0">
    //   <div className="relative z-10 w-full px-4  flex-col flex my-12 md:px-8    md:items-end lg:my-0 lg:translate-y-26 lg:flex-row gap-10 justify-between  ">
    <section className=" section relative w-full bg-[url('/images/bg-forest.jpg')] pt-16 bg-cover bg-center bg-no-repeat text-white flex items-start px-0   before:absolute before:inset-0 before:bg-black/70 before:z-0 ">
      <div className="relative z-10 w-full px-4 my-18 flex-col flex md:px-8 gap-10 justify-between md:items-end lg:flex-row">
        <div className=" w-full  lg:w-1/2 text-[#D7EDDB]  ">
          <div className="flex flex-col items-center justify-center  md:items-start md:justify-start text-3xl">
            <h1 className="text-3xl md:text-[4rem] font-bold mb-4 ">
              Welcome to Thabho
            </h1>
            <h2 className=" text-2xl md:text-[3rem] font-semibold  ">
              Group of Companies.
            </h2>
            <p className="text-gray-300 text-sm text-center mt-4 md:text-lg md:mt-6  md:text-left">
              Innovation, Growth, and Sustainability Across Industries.
            </p>
            <div className=" mt-6 md:mt-8 lg:hidden ">
              <Button
                type="submit"
                variant="primary"
                className="flex-1 whitespace-nowrap"
                onClick={() => setShowForm(true)}
              >
                BOOK A CONSULTATION
              </Button>
            </div>
          </div>

          {/* <div className="w-full  mt-8 flex flex-col items-center gap-4   md:items-start lg:mb-0 lg:flex-row lg:items-end lg:gap-6 lg:h-[128px]">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                href={company.href}
                image={company.image}
                title={company.title}
                icon={company.icon}
              />
            ))}
          </div> */}
          <div className="relative w-full">
            <div className=" pt-[50px] relative z-10 lg:pt-[100px]">
              {/* <div className="mt-18 md:pt-16 lg:pt-0"> */}
              <div className="flex flex-col items-center gap-4 md:items-start lg:flex-row lg:items-end lg:gap-6 lg:h-[128px]">
                {companies.map((company, index) => (
                  <CompanyCard
                    key={index}
                    href={company.href}
                    image={company.image}
                    title={company.title}
                    icon={company.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:hidden  lg:block lg:max-w-[45%] xl:max-w-[34.6rem] ">
          <ConsultationForm />
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 items-center justify-center z-50 flex lg:hidden">
            <div className="bg-[#1a1a1a] p-6 rounded-xl w-full max-w-md mx-auto relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                &times;
              </button>
              <ConsultationForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
