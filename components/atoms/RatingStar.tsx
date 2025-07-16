import React from 'react';

const RatingStar = () => {
  return (
    <div className="flex items-center space-x-1">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 fill-current text-yellow-400"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.6 12.545.721 8.91l6.211-.903L10 2.5l3.068 5.507 6.211.903-4.879 3.635 1.478 5.545z" />
          </svg>
        ))}
    </div>
  );
};

export default RatingStar;
