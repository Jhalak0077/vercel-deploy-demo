'use client';
import Image from 'next/image';
import Ad from '@/public/images/ad-image.png';

const AdImage = () => {
  return (
    <div className="w-full max-w-[579px] h-auto mx-auto ">
      <Image
        src={Ad}
        alt="Ad Banner"
        width={579}
        height={241}
        className="rounded-[12px] w-full h-auto object-cover"
      />
    </div>
  );
};

export default AdImage;
