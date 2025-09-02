import React from "react";
import { motion } from "framer-motion";
import { Building, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Google", logo: "/logos/google.svg", industry: "Technology" },
  { name: "Microsoft", logo: "/logos/microsoft.svg", industry: "Technology" },
  { name: "Amazon", logo: "/logos/amazon.svg", industry: "E-commerce" },
  { name: "Meta", logo: "/logos/facebook.svg", industry: "Social Media" },
  { name: "Apple", logo: "/logos/apple.svg", industry: "Technology" },
  { name: "Netflix", logo: "/logos/netflix.svg", industry: "Entertainment" },
  { name: "Tesla", logo: "/logos/tesla.svg", industry: "Automotive" },
  { name: "Adobe", logo: "/logos/adobe.svg", industry: "Software" },
  { name: "Spotify", logo: "/logos/spotify.svg", industry: "Music" },
  { name: "Oracle", logo: "/logos/oracle.svg", industry: "Enterprise" },
  { name: "Salesforce", logo: "/logos/salesforce.svg", industry: "CRM" },
  { name: "LinkedIn", logo: "/logos/linkedin.svg", industry: "Professional" }
];

const CompanyLogos: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Building className="w-4 h-4" />
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Trusted by
            </span>
            {" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Leading Companies
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped over 500+ companies find exceptional talent and build 
            world-class teams across various industries.
          </p>
        </motion.div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* First Row - Scrolling Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 overflow-hidden"
          >
            <motion.div
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              className="flex gap-12 items-center"
            >
              {/* Duplicate the array for seamless loop */}
              {[...companies.slice(0, 6), ...companies.slice(0, 6)].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative px-8 py-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="w-32 h-12 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
                      {/* Placeholder for logo */}
                      <span className="text-xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                        {company.name}
                      </span>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {company.industry}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Second Row - Scrolling Right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden"
          >
            <motion.div
              animate={{
                x: [-1920, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              className="flex gap-12 items-center"
            >
              {/* Duplicate the array for seamless loop */}
              {[...companies.slice(6, 12), ...companies.slice(6, 12)].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative px-8 py-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="w-32 h-12 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
                      {/* Placeholder for logo */}
                      <span className="text-xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                        {company.name}
                      </span>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {company.industry}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Partner Companies", icon: Building },
            { value: "50+", label: "Industries Served", icon: Sparkles },
            { value: "10K+", label: "Placements Made", icon: Building },
            { value: "98%", label: "Retention Rate", icon: Sparkles }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl mb-3"
              >
                <stat.icon className="w-8 h-8 text-blue-600" />
              </motion.div>
              <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Join these industry leaders in finding your perfect talent match
          </p>
          <div className="inline-flex items-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Become a Partner
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;