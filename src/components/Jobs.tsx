import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

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
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white to-cyan-500 text-transparent bg-clip-text mb-16 text-balance ">
          Featured Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-white text-black rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400">
              Software Engineer
            </h3>
            <p className="text-gray-500 mb-4 group-hover:text-black">
              San Francisco, CA
            </p>
            <p className="text-gray-700 group-hover:text-black ">
              We are looking for a talented Software Engineer to join our team.
              The ideal candidate will have experience in developing web
              applications using React and Node.js.
            </p>
            <Button className="mt-6 font-bold group-hover:text-cyan-400">
              Apply Now
            </Button>
          </motion.div>
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group bg-white text-black rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 ">
              Product Manager
            </h3>
            <p className="text-gray-500 mb-4 group-hover:text-black">
              New York, NY
            </p>
            <p className="text-gray-700 group-hover:text-black">
              We are seeking an experienced Product Manager to lead the
              development of our new products. The successful candidate will
              have a proven track record of launching successful products.
            </p>
            <Button className="mt-6 font-bold group-hover:text-cyan-400">
              Apply Now
            </Button>
          </motion.div>
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className=" group bg-gradient-1 text-black rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400">
              UX Designer
            </h3>
            <p className="text-gray-500 mb-4 group-hover:text-black">Remote</p>
            <p className="text-gray-700 group-hover:text-black">
              We are looking for a creative UX Designer to design intuitive and
              user-friendly interfaces for our web and mobile applications. The
              ideal candidate will have a strong portfolio of successful
              projects.
            </p>
            <Button className="mt-6 font-bold group-hover:text-cyan-400">
              Apply Now
            </Button>
          </motion.div>
        </div>
        <Button className="mt-8 bg-blue-700 font-bold text-white hover:bg-cyan-700 mx-auto block">
          View All Jobs
        </Button>
      </div>
    </motion.section>
  );
};

export default Jobs;
