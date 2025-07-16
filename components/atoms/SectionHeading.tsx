const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-[28px] font-normal leading-[39.2px] lg:text-[36px] lg:font-normal lg:leading-[50.4px] text-[#D7EDDB]"
    style={{ fontFamily: 'var(--font-poppins)' }}
  >
    {children}
  </h2>
);

export default SectionHeading;
