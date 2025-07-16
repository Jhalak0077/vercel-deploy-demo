// import Link from 'next/link';

// type Props = {
//   href: string;
//   image: string;
//   title: string;
//   position: string;
//   icon: React.ReactNode;
// };

// const CompanyCard = ({ href, image, title, position, icon }: Props) => (
//   <Link
//     href={href}
//     className="group  bottom-0   bg-black/50 bg-cover bg-center rounded-lg border-white shadow-md flex justify-between items-end overflow-hidden transition-all duration-400 hover:h-[202px] hover:border-b-3 w-full mt-4 h-[250px] lg:h-[128px] lg:mt-0 lg:w-[210px] lg:absolute"
//     style={{ backgroundImage: `url(${image})`, left: position }}
//   >
//     <div
//       className="w-full h-full bg-black/60 text-white py-3 font-semibold flex items-center justify-center gap-6 px-2 group-hover:h-full
//                group-hover:flex-col group-hover:justify-center group-hover:gap-1 transition-all duration-400 flex-col  lg:justify-start lg:flex-row lg:h-auto"
//     >
//       <div className="text-xl group-hover:w-16 group-hover:h-16 transition-all duration-400  w-16 h-16 lg:w-[24px] lg:h-[24px] ">
//         {icon}
//       </div>
//       <span className="text-lg lg:text-sm mt-1">{title}</span>
//     </div>
//   </Link>
// );

// export default CompanyCard;

import Link from 'next/link';

type Props = {
  href: string;
  image: string;
  title: string;
  icon: React.ReactNode;
};

const CompanyCard = ({ href, image, title, icon }: Props) => {
  return (
    <Link
      href={href}
      className="group bottom-0 bg-black/50 bg-cover bg-center rounded-lg border-white shadow-md flex justify-between items-end overflow-hidden transition-all duration-400 hover:h-[202px] hover:border-b-3 w-full h-[250px] lg:h-[128px] lg:w-[210px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="w-full h-full bg-black/60 text-white py-3 font-semibold flex items-center justify-center gap-4 px-2 group-hover:h-full
        group-hover:flex-col group-hover:justify-center group-hover:gap-1 transition-all duration-400 flex-col lg:justify-start lg:flex-row lg:h-auto"
      >
        <div className="text-xl group-hover:w-16 group-hover:h-16 transition-all duration-400 w-16 h-16 lg:w-[24px] lg:h-[24px]">
          {icon}
        </div>
        <span className="text-lg  truncate mt-1 lg:text-sm">{title}</span>
      </div>
    </Link>
  );
};

export default CompanyCard;
