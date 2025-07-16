import React from 'react';
import type { SVGProps } from 'react';

export function Up(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M4.5 9.5L8 6l3.5 3.5"
        strokeWidth={1}
      ></path>
    </svg>
  );
}
