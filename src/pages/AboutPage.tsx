import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AboutPage: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="bg-white text-black  py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">
          About Teksquilt
        </h1>
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center">
            Teksquilt is a leading staffing and recruiting agency dedicated to
            connecting top talent with innovative companies. We believe that the
            right person in the right role can make all the difference, and we
            are passionate about helping businesses build their dream teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <Card className="border-gray-700 h-full">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900">
                  Our mission is to provide exceptional staffing solutions that
                  are tailored to the unique needs of our clients. We strive to
                  be a trusted partner for both businesses and job seekers, and
                  we are committed to building long-lasting relationships based
                  on trust, integrity, and mutual success.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <Card className=" border-gray-700 h-full">
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900">
                  We offer a wide range of staffing services, including
                  permanent placement, contract staffing, and recruitment
                  process outsourcing. Our team of experienced recruiters has a
                  deep understanding of the industries we serve, and we are
                  dedicated to finding the best possible candidates for our
                  clients.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <Card className=" border-gray-700 h-full">
              <CardHeader>
                <CardTitle>Target Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900">
                  We work with businesses of all sizes, from startups to Fortune
                  500 companies. Our target audience includes companies in the
                  technology, healthcare, and creative industries. We also work
                  with a diverse range of job seekers, from recent graduates to
                  experienced professionals.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
