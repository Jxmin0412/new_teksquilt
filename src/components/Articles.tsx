import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "./ui/button";

const Articles: React.FC = () => {
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
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">
          Recent Articles
        </h2>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="group bg-white text-black rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <img
                  src="/articles/article1.jpg"
                  alt="Article 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-balance group-hover:text-cyan-400">
                    How to Find the Right Job for You
                  </h3>
                  <p className="text-gray-900 mb-6 text-balance flex-grow">
                    In this article, we share some tips on how to find the right job
                    for you. We cover everything from self-assessment to networking
                    and interviewing.
                  </p>
                  <Button variant="secondary" className="group-hover:text-cyan-500">Read More</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="group bg-white text-black rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <img
                  src="/articles/article2.jpg"
                  alt="Article 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-balance group-hover:text-cyan-400">
                    The Importance of a Good Resume
                  </h3>
                  <p className="text-gray-900 mb-6 text-balance flex-grow">
                    A good resume is essential for landing your dream job. In this
                    article, we provide some tips on how to create a resume that
                    will impress recruiters.
                  </p>
                  <Button variant="secondary" className="group-hover:text-cyan-500">Read More</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="group bg-white text-black rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <img
                  src="/articles/article3.jpg"
                  alt="Article 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-balance group-hover:text-cyan-400">
                    How to Prepare for a Job Interview
                  </h3>
                  <p className="text-gray-900 mb-6 text-balance flex-grow">
                    Job interviews can be stressful, but with the right preparation,
                    you can ace any interview. In this article, we share some tips
                    on how to prepare for a job interview.
                  </p>
                  <Button variant="secondary" className="group-hover:text-cyan-500">Read More</Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Articles;