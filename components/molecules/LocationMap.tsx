'use client';

const LocationMap = () => {
  return (
    <div className="w-full h-[157px] lg:max-w-[325px] lg:h-[149px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.924591125588!2d85.32951859040064!3d27.694703218582784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e908b36f51%3A0x6bdb7054ec60a79d!2sEyeplex%20Mall!5e0!3m2!1sen!2snp!4v1752138438046!5m2!1sen!2snp"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Eyeplex Mall Location Map"
      ></iframe>
    </div>
  );
};

export default LocationMap;
