import React from "react";
import { Briefcase, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services: React.FC = () => {
  const { ref, variants, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial=""
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 bg-white py-16 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-3 text-black rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <Briefcase className="h-12 w-12 mx-auto mb-6 text-black" />
            <h3 className="text-2xl font-bold mb-4">Permanent Placement</h3>
            <p className="text-gray-700">
              We help you find the right talent for your long-term needs. Our
              team of experts will work with you to understand your requirements
              and find the perfect match for your company.
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white text-black rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <Users className="h-12 w-12 mx-auto mb-6 text-black" />
            <h3 className="text-2xl font-bold mb-4">Contract Staffing</h3>
            <p className="text-gray-700">
              We provide flexible staffing solutions to help you manage your
              workload. Whether you need temporary staff for a short-term
              project or a long-term assignment, we have you covered.
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white text-black rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <FileText className="h-12 w-12 mx-auto mb-6 text-black" />
            <h3 className="text-2xl font-bold mb-4">
              Recruitment Process Outsourcing
            </h3>
            <p className="text-gray-700">
              We can handle your entire recruitment process, from sourcing and
              screening to onboarding and training. Our RPO services are
              designed to save you time and money.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
