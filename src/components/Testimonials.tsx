import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Building,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc.",
    image: "/avatars/avatar1.png",
    content: "TekSquilt transformed our hiring process completely. They found us exceptional talent that not only met our technical requirements but also fit perfectly with our company culture. The quality of candidates and speed of placement exceeded our expectations.",
    rating: 5,
    highlight: "Found our CTO in just 3 weeks",
    industry: "Technology"
  },
  {
    id: 2,
    name: "David Chen",
    role: "HR Director",
    company: "Global Finance Corp",
    image: "/avatars/avatar2.png",
    content: "We've been partnering with TekSquilt for over 5 years. Their understanding of our needs and ability to deliver consistently high-quality candidates has made them an invaluable extension of our HR team. They've helped us scale from 50 to 500 employees.",
    rating: 5,
    highlight: "450+ successful placements",
    industry: "Finance"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "VP of Engineering",
    company: "InnovateLabs",
    image: "/avatars/avatar3.png",
    content: "The team at TekSquilt goes above and beyond. They don't just fill positions; they understand our technical challenges and find people who can solve them. Their screening process saves us countless hours, and their candidates have a 95% retention rate.",
    rating: 5,
    highlight: "95% retention rate after 2 years",
    industry: "Software"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Founder",
    company: "StartupHub",
    image: "/avatars/avatar4.png",
    content: "As a startup, finding the right talent quickly is crucial. TekSquilt understood our urgency and budget constraints, delivering top-tier candidates who were excited about our mission. They helped us build our entire engineering team from scratch.",
    rating: 5,
    highlight: "Built entire team in 2 months",
    industry: "Startup"
  },
  {
    id: 5,
    name: "Jessica Park",
    role: "COO",
    company: "Healthcare Plus",
    image: "/avatars/avatar5.png",
    content: "TekSquilt's expertise in healthcare recruitment is unmatched. They understand the unique requirements of our industry and consistently deliver qualified professionals who meet our strict compliance standards. A true partner in our growth.",
    rating: 5,
    highlight: "100% compliance rate",
    industry: "Healthcare"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      }
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with TekSquilt.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative min-h-[400px] sm:min-h-[350px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  {/* Industry Badge */}
                  <div className="absolute -top-4 right-8 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
                    {testimonials[activeIndex].industry}
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                    "{testimonials[activeIndex].content}"
                  </blockquote>

                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-8">
                    <Sparkles className="w-4 h-4" />
                    {testimonials[activeIndex].highlight}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <Building className="w-12 h-12 text-gray-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full border-2 border-gray-300 hover:border-gray-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index 
                      ? "w-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full border-2 border-gray-300 hover:border-gray-400"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Client Retention" },
            { value: "24hr", label: "Response Time" }
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;