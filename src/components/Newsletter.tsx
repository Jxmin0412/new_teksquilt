import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
const Newsletter: React.FC = () => {
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
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8 text-balance">
            Stay up to date with the latest news and offers from Teksquilt.
          </p>
          <form>
            <div className="flex items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white text-shadow-gray-700 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                className="border-b-gray-300 text-primary-foreground px-8 py-3 rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
