import React from 'react';
import type { SVGProps } from 'react';

export function Clock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8.5-.207V6.97a.5.5 0 1 0-1 0v5.015a.5.5 0 0 0 .146.369l2.829 2.828a.5.5 0 1 0 .707-.707z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
