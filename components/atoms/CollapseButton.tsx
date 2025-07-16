'use client';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface CollapseButtonProps {
  title: string;
  icon: ReactNode;
  chevron: ReactNode;
  onToggle: () => void;
  className?: string;
}

const CollapseButton = ({
  title,
  icon,
  chevron,
  onToggle,
  className = '',
}: CollapseButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'flex justify-between gap-4 items-center w-full px-4 py-4 text-left active:bg-[#1E1E1E] text-[#D7EDDB] transition-colors !cursor-pointer duration-200  lg:py-6 lg:px-6',
        className,
      )}
    >
      {/* Left icon with title */}

      <div className="flex items-center gap-3 ">
        {icon && (
          <div className="flex  items-center justify-center ">{icon}</div>
        )}
        <span className="text-base font-semibold md:text-lg">{title}</span>
      </div>

      {/* Right icon */}
      <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-white !text-black">
        {chevron}
      </div>
    </button>
  );
};

export default CollapseButton;
