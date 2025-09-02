import React, { useState, useEffect } from "react";
import { Briefcase, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Briefcase className="h-6 w-6 text-cyan-500" />,
    title: "Permanent Placement",
    content:
      "We help you find the right talent for your long-term needs. Our team of experts will work with you to understand your requirements and find the perfect match for your company.",
  },
  {
    icon: <Users className="h-6 w-6 text-cyan-500" />,
    title: "Contract Staffing",
    content:
      "We provide flexible staffing solutions to help you manage your workload. Whether you need temporary staff for a short-term project or a long-term assignment, we have you covered.",
  },
  {
    icon: <FileText className="h-6 w-6 text-cyan-500" />,
    title: "Recruitment Process Outsourcing",
    content:
      "We can handle your entire recruitment process, from sourcing and screening to onboarding and training. Our RPO services are designed to save you time and money.",
  },
];

const Services: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-cyan-500 text-transparent bg-clip-text">
          Our Services
        </h2>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          {/* Left Side */}
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative px-6 py-4 rounded-lg cursor-pointer overflow-hidden border-2 border-gray-300 font-bold transition-all duration-300 h-14 flex items-center ${
                  activeServiceIndex === index ? "border-cyan-500" : ""
                }`}
                onClick={() => setActiveServiceIndex(index)}
              >
                {activeServiceIndex === index && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-cyan-100"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10">
                    {service.icon}
                  </span>
                  <h3 className="text-lg  font-bold text-black">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 w-full">
            <div className="bg-white text-black rounded-lg shadow-lg p-8 border-2 border-gray-300 font-bold h-full w-120 flex flex-col justify-center items-center">
              <div className="flex items-center mb-4">
                {services[activeServiceIndex].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {services[activeServiceIndex].title}
              </h3>
              <p className="text-gray-900 text-center">
                {services[activeServiceIndex].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
