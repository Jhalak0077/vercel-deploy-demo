import Image from 'next/image';
import { Clock } from '@/components/atoms/icons/Clock';
import { Calendar } from '../atoms/icons/Calendar';
import LabelBadge from '../atoms/LabelBadge';

type BlogCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  time: string;
};

export default function BlogCard({
  image,
  category,
  title,
  description,
  date,
  time,
}: BlogCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 bg-transparent text-[#D7EDDB] md:gap-4">
      {/* Image */}
      <div className="relative w-full md:w-3/5 aspect-[5/2] md:aspect-[5/3] rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col  flex-grow py-1 ">
        <div className="space-y-2 lg:space-y-4">
          <LabelBadge>{category}</LabelBadge>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="text-sm md:text-[16px] text-[#B0B0B0]">{description}</p>
        </div>

        <div className="flex gap-4 mt-1 text-sm text-[#B0B0B0] flex-wrap md:mt-2 md:text-[16px] ">
          <p className="flex items-center gap-1 md:text-sm ">
            <Calendar className="w-4 h-4 shrink-0 text-[#D7EDDB]" />
            {date}
          </p>
          <p className="flex items-center gap-1 md:text-sm  ">
            <Clock className="w-4 h-4 shrink-0 text-[#D7EDDB]" />
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}
