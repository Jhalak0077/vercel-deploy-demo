'use client';
import { ReactNode, useState } from 'react';
import { Up } from '../atoms/icons/Up';
import { Down } from '../atoms/icons/Down';
import CollapseButton from '../atoms/CollapseButton';
import { cn } from '@/utils';

interface CollapseItemProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const CollapseItem = ({
  icon,
  title,
  children,
  isOpen,
  onToggle,
}: CollapseItemProps) => {
  return (
    <div className="border-b border-gray-700">
      <CollapseButton
        title={title}
        icon={icon}
        chevron={
          isOpen ? (
            <Up className="w-[24px] h-[24px] text-black" />
          ) : (
            <Down className="w-[24px] h-[24px] text-black" />
          )
        }
        onToggle={onToggle}
        className={cn(isOpen && 'bg-[#1E1E1E]')}
      />

      <div
        className={cn(
          'transition-all duration-300 overflow-hidden bg-gradient-to-b from-[#121212] to-[#1E1E1E] px-4 text-sm text-gray-300 space-y-4 lg:px-6',
          isOpen ? 'max-h-[1000px] pb-4 opacity-100' : 'max-h-0 py-0 opacity-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapseItem;
