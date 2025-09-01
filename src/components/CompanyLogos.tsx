
import React from "react";

const CompanyLogos: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">Trusted by the Best</h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          <img src="/logos/google.svg" alt="Google" className="h-10 filter grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/facebook.svg" alt="Facebook" className="h-10 filter grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/amazon.svg" alt="Amazon" className="h-10 filter grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/microsoft.svg" alt="Microsoft" className="h-10 filter grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/apple.svg" alt="Apple" className="h-10 filter grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
