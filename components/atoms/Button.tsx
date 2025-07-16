import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({
  type = 'button',
  children,
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) => {
  const baseClasses =
    'px-4 py-2 rounded-md font-semibold cursor-pointer xl:whitespace-nowrap';
  const variantClasses =
    variant === 'primary'
      ? 'bg-[#FF5112] hover:bg-[#FF511290] text-white text-base xl:text-lg '
      : 'border border-gray-500 text-white text-[1rem]';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
