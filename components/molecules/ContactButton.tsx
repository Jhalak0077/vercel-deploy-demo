'use client';
import Link from 'next/link';

interface Props {
  className?: string;
}

const ContactButton = ({ className = '' }: Props) => (
  <Link
    href="/contact"
    className={`bg-[#FF5112] hover:bg-[#FF511290] w-fit text-white  rounded-md text-[18px]  font-semibold px-[26px] py-[10px] text-center mx-auto ${className}`}
  >
    CONTACT US
  </Link>
);

// <Link
//   href="/contact"
//   className={`inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold ${className}`}
// >
//   CONTACT US
// </Link>

export default ContactButton;
