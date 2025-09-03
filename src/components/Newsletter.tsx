import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Mail, 
  Send, 
  Sparkles, 
  CheckCircle,
  Bell,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Bell,
    title: "Weekly Updates",
    description: "Get the latest job openings and career tips"
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Be first to know about exclusive opportunities"
  },
  {
    icon: Shield,
    title: "No Spam",
    description: "Quality content only, unsubscribe anytime"
  }
];

const Newsletter: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubscribed(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 5000);
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Join 10,000+ Professionals</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Stay Ahead in Your
                <br />
                <span className="text-yellow-300">Career Journey</span>
              </h2>

              <p className="text-lg text-white/90 mb-8">
                Get exclusive insights, job opportunities, and career advice delivered 
                straight to your inbox every week. No spam, just value.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-yellow-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-white/80">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Subscribe to Newsletter
                  </h3>
                  <p className="text-gray-600">
                    Join our community and never miss an update
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                      disabled={isSubmitting || isSubscribed}
                    />
                  </div>

                  {/* Preferences */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">I'm interested in:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {["Job Alerts", "Career Tips", "Industry News", "Events"].map((item) => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            disabled={isSubmitting || isSubscribed}
                          />
                          <span className="text-sm text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubscribed}
                    className={cn(
                      "w-full py-3 rounded-xl font-medium transition-all duration-300",
                      isSubscribed 
                        ? "bg-green-500 hover:bg-green-600" 
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
                      "text-white"
                    )}
                  >
                    {isSubscribed ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Successfully Subscribed!
                      </span>
                    ) : isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Subscribe Now
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-gray-500">
                    By subscribing, you agree to our{" "}
                    <a 
                      href="/privacy-policy" 
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/privacy-policy');
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    {" "}and{" "}
                    <a 
                      href="/terms-of-service"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/terms-of-service');
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      Terms of Service
                    </a>
                  </p>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10K+</p>
                    <p className="text-xs text-gray-600">Subscribers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                    <p className="text-xs text-gray-600">Open Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9★</p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center text-white"
          >
            <p className="text-sm opacity-90 mb-4">
              Want to see past newsletters?
            </p>
            <Button
              variant="outline"
              onClick={() => navigate('/industry-reports')}
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Browse Archive
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;