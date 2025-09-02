import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StickyContentProps {
  services: Service[];
}

const StickyContent: React.FC<StickyContentProps> = ({ services }) => {
  const [activeService, setActiveService] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: i === activeService ? 1 : 0.5,
      y: i === activeService ? 0 : 20,
    }));
  }, [activeService, controls]);

  return (
    <div className="flex">
      <div className="w-1/3 sticky top-0 h-screen flex flex-col items-center justify-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={controls}
            className="my-4"
          >
            {service.icon}
          </motion.div>
        ))}
      </div>
      <div className="w-2/3">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            service={service}
            onInView={() => setActiveService(index)}
          />
        ))}
      </div>
    </div>
  );
};

interface ServiceSectionProps {
  service: Service;
  onInView: () => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, onInView }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <div ref={ref} className="h-screen flex items-center">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
        <p className="text-lg">{service.description}</p>
      </div>
    </div>
  );
};

export default StickyContent;