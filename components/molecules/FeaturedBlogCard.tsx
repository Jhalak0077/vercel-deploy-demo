'use client';

import Image from 'next/image';

import LabelBadge from '@/components/atoms/LabelBadge';
import { Calendar } from '../atoms/icons/Calendar';
import { Clock } from '../atoms/icons/Clock';

interface FeaturedBlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  time: string;
}

const FeaturedBlogCard = ({
  image,
  category,
  title,
  date,
  time,
}: FeaturedBlogCardProps) => {
  return (
    <div className="flex-1 hidden lg:block overflow-hidden rounded-lg">
      <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden bg-zinc-900 cursor-pointer hover:scale-110 transition ease-in-out">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          // sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />

        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 p-6 flex flex-col justify-end items-center text-center h-full">
          <LabelBadge>{category}</LabelBadge>

          {/* <h2 className="text-2xl md:text-3xl font-semibold text-[#D7EDDB] mt-4 leading-snug">
            {title.split('\n')[0]}
            <br />
            <span className="inline-block mt-2">{title.split('\n')[1]}</span>
          </h2> */}

          <h2 className="text-2xl md:text-3xl font-semibold text-[#D7EDDB] mt-4 leading-snug">
            {title.split('\n').map((line, index) => (
              <span
                key={index}
                className={index > 0 ? 'inline-block mt-2' : ''}
              >
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="flex gap-4 mt-2 text-gray-400 text-sm justify-center">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 shrink-0 text-[#D7EDDB]" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 shrink-0 text-[#D7EDDB]" />
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
