import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "./ui/button";

const Jobs: React.FC = () => {
  const { ref, variants, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">
          Featured Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white text-black rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
            <p className="text-gray-500 mb-4">San Francisco, CA</p>
            <p className="text-gray-700">
              We are looking for a talented Software Engineer to join our team.
              The ideal candidate will have experience in developing web
              applications using React and Node.js.
            </p>
            <Button className="mt-6 font-bold">Apply Now</Button>
          </motion.div>
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white text-black rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">Product Manager</h3>
            <p className="text-gray-500 mb-4">New York, NY</p>
            <p className="text-gray-700">
              We are seeking an experienced Product Manager to lead the
              development of our new products. The successful candidate will
              have a proven track record of launching successful products.
            </p>
            <Button className="mt-6 font-bold">Apply Now</Button>
          </motion.div>
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-1 text-black rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">UX Designer</h3>
            <p className="text-gray-500 mb-4">Remote</p>
            <p className="text-gray-700">
              We are looking for a creative UX Designer to design intuitive and
              user-friendly interfaces for our web and mobile applications. The
              ideal candidate will have a strong portfolio of successful
              projects.
            </p>
            <Button className="mt-6 font-bold">Apply Now</Button>
          </motion.div>
        </div>
        <div className="text-center mt-16">
          <a
            href="#"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-colors"
          >
            View All Jobs
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Jobs;
