import React from 'react';

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-[#121212] overflow-hidden">
      {/* Tiled background image with opacity */}
      <div
        className="absolute inset-0 bg-[url('/images/bg.png')] bg-repeat opacity-50 pointer-events-none"
        aria-hidden="true"
      />
      {/* Main content */}
      <div className="relative z-10 pb-[300px] md:pb-[500px] lg:pb-[350px]">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
