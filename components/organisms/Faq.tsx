'use client';
import CollapseItem from '@/components/molecules/CollapseItem';
import React, { useState } from 'react';

const faqs = [
  {
    title: 'What are Some Services offered by Thabho Group ?',
    content: (
      <>
        <p>
          At Thabho Group of Companies, we are committed to driving innovation
          and sustainable growth across technology, real estate, and
          agriculture. Based in Nepal, our mission is to empower businesses,
          create opportunities, and make services more accessible and reliable.
        </p>
        <p className="mt-2">
          Thabho Group's expertise in market research and distribution has given
          us a competitive edge. Their strategic insights and seamless execution
          have helped us expand into new territories with confidence. Truly an
          invaluable partner!
        </p>
      </>
    ),
  },
  {
    title: 'Can you provide demo Services to us ?',
    content: (
      <p>
        Yes, we offer demo services tailored to your business needs. Contact us
        for scheduling.
      </p>
    ),
  },
  {
    title: 'What are your Portfolio?',
    content: (
      <p>
        We work in real estate, tech solutions, and agritech. Check out our site
        to view the full portfolio.
      </p>
    ),
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className=" section relative  text-white py-12 px-6   md:items-center md:py-20 md:px-8 ">
      <h3 className="section-title">Frequently Asked Questions</h3>
      <h2 className="section-heading">Any Confusion, Here are some FAQs.</h2>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <CollapseItem
            key={index}
            title={faq.title}
            isOpen={activeIndex === index}
            onToggle={() =>
              setActiveIndex((prev) => (prev === index ? -1 : index))
            }
          >
            <div className="text-sm md:text-[16px] text-[#B0B0B0]  py-4">
              {faq.content}
            </div>
          </CollapseItem>
        ))}
      </div>
    </section>
  );
};

export default Faq;
