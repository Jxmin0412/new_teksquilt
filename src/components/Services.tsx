import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Briefcase, 
  Users, 
  Building,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    icon: Building,
    title: "Onsite Recruitment",
    shortDesc: "Direct placement solutions",
    content: "We provide comprehensive onsite recruitment services, placing top talent directly at your location. Our team works closely with you to understand your company culture and find candidates who will thrive in your environment.",
    features: ["Direct Placement", "Cultural Fit Assessment", "Onboarding Support", "90-Day Guarantee"],
    color: "from-blue-600 via-cyan-500 to-blue-600",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    id: 2,
    icon: Users,
    title: "Remote Services",
    shortDesc: "Virtual talent solutions",
    content: "Access global talent with our remote recruitment services. We specialize in finding skilled professionals who can work effectively from anywhere, ensuring productivity and seamless collaboration.",
    features: ["Global Talent Pool", "Remote Work Assessment", "Virtual Onboarding", "Time Zone Matching"],
    color: "from-blue-600 via-cyan-500 to-blue-600",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Dedicated Staffing",
    shortDesc: "Exclusive team building",
    content: "Build your dedicated team with our specialized staffing solutions. We provide committed resources who work exclusively for your projects, ensuring consistency and deep domain knowledge.",
    features: ["Dedicated Resources", "Team Scalability", "Project Management", "Performance Tracking"],
    color: "from-blue-600 via-cyan-500 to-blue-600",
    bgColor: "from-blue-50 to-cyan-50"
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const activeService = services[activeServiceIndex];

  useEffect(() => {
    // Reset progress when service changes
    setProgress(0);
  }, [activeServiceIndex]);

  useEffect(() => {
    // Progress timer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / 30); // 3 seconds = 30 intervals of 100ms
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeServiceIndex]);

  useEffect(() => {
    // Auto-switch service every 3 seconds
    const switchInterval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(switchInterval);
  }, []);

  const handleServiceClick = (index: number) => {
    setActiveServiceIndex(index);
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
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
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Tailored Solutions for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Every Hiring Need
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From onsite placement to remote teams, we offer comprehensive 
            recruitment services designed to build exceptional teams.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Service Cards */}
          <div className="col-span-1 lg:col-span-5 space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeServiceIndex;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleServiceClick(index)}
                  className={cn(
                    "relative p-6 rounded-2xl cursor-pointer transition-all duration-300",
                    "border-2 bg-white hover:shadow-lg",
                    isActive 
                      ? "border-transparent shadow-xl" 
                      : "border-gray-100 hover:border-gray-200"
                  )}
                >
                  {/* Background Gradient for Active */}
                  {isActive && (
                    <div className={cn(
                      "absolute inset-0 rounded-2xl opacity-5 bg-gradient-to-r",
                      service.color
                    )} />
                  )}

                  <div className="relative flex items-center gap-4">
                    {/* Icon Container */}
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300",
                      isActive
                        ? `bg-gradient-to-r ${service.color}`
                        : "bg-gray-100"
                    )}>
                      <Icon className={cn(
                        "w-7 h-7 transition-colors duration-300",
                        isActive ? "text-white" : "text-gray-600"
                      )} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={cn(
                      "w-5 h-5 transition-all duration-300",
                      isActive 
                        ? "text-blue-600 translate-x-1" 
                        : "text-gray-400"
                    )} />
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Service Details */}
          <div className="col-span-1 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className={cn(
                  "relative h-full p-8 sm:p-10 rounded-3xl border-2 border-gray-100",
                  "bg-gradient-to-br", activeService.bgColor
                )}>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/50 to-transparent rounded-full blur-2xl" />

                  <div className="relative space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={cn(
                          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3",
                          "bg-white/80 backdrop-blur-sm"
                        )}>
                          <Target className="w-3 h-3" />
                          <span>Specialized Service</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {activeService.title}
                        </h3>
                      </div>
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center",
                        "bg-gradient-to-r", activeService.color, "shadow-lg"
                      )}>
                        <activeService.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {activeService.content}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        <Zap className="w-4 h-4" />
                        <span>Key Features</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button 
                        onClick={() => navigate('/services')}
                        className={cn(
                          "group bg-gradient-to-r text-white px-6 py-3 rounded-xl",
                          "hover:shadow-lg transition-all duration-300",
                          activeService.color
                        )}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your unique requirements.
          </p>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/contact')}
            className="border-2 border-gray-300 hover:border-gray-400"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;