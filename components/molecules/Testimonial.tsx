import { cn } from '@/utils';
import { Quote } from '../atoms/icons/quote';

interface TestimonialProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const Testimonial = ({ children, footer, className }: TestimonialProps) => {
  return (
    <div
      className={cn(
        'Review bg-[#1E1E1ECC] rounded-xl px-8 py-6 w-full text-[#B0B0B0] lg:max-w-[34.68rem] lg:flex-1',
        className,
      )}
    >
      <div>
        <div className="Review-icon w-18 h-18 scale-x-[-1] rotate-180 text-[#D7EDDB] ">
          <Quote />
        </div>
        {children}
      </div>

      {footer && (
        <>
          <div className="border-t border-gray-700 my-4"></div>
          {footer}
        </>
      )}
    </div>
  );
};

export default Testimonial;
