import React from 'react';
import type { SVGProps } from 'react';

export function Down(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
