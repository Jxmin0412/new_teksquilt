import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  MessageSquare,
  ArrowRight,
  Building,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "++1 972-837-7530",
    link: "tel:+1 972-837-7530",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@teksquilt.com",
    link: "mailto:contact@teksquilt.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "5700 Tennyson Pkwy Suite 300, Plano, TX 75024",
    link: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 9:00 AM - 6:00 PM PST",
    link: "#",
    color: "from-orange-500 to-red-500",
  },
];

const offices = [
  {
    city: "Plano, TX",
    address: "5700 Tennyson Pkwy Suite 300, Plano, TX 75024",
    phone: "+1 972-837-7530",
  },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full text-sm font-medium text-purple-700 mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Let's Start a
              </span>
              <br />
              <span className="bg-gradient-to-tr from-blue-600 via-cyan-500 to blue-600 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to hire top talent or advance your career,
              we're here to help. Reach out and let's discuss how we can work
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                      "bg-gradient-to-br",
                      item.color
                    )}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {item.content}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 mb-2 block"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-700 mb-2 block"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-gray-700 mb-2 block"
                      >
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 mb-2 block"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-gray-700 mb-2 block"
                    >
                      Subject *
                    </Label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="hiring">Hiring Needs</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-gray-700 mb-2 block"
                    >
                      Message *
                    </Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Our Offices
                </h2>
                <p className="text-gray-600 mb-8">
                  Visit us at any of our locations across the United States.
                </p>
              </div>

              {/* Office Cards */}
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {office.city}
                        </h3>
                        <p className="text-gray-600 text-sm mb-1">
                          {office.address}
                        </p>
                        <a
                          href={`tel:${office.phone}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500">Interactive map coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Connect With Us
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Follow us on social media for the latest updates and opportunities
            </p>

            <div className="flex justify-center gap-4 mb-12">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/teksquilt/",
                  label: "LinkedIn",
                  color: "hover:bg-blue-700",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/teksquilt",
                  label: "Facebook",
                  color: "hover:bg-blue-800",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/teksquilt/",
                  label: "Instagram",
                  color: "hover:bg-pink-600",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={cn(
                      "w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center",
                      "hover:bg-white/30 transition-all duration-300"
                    )}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.a>
                );
              })}
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-sm opacity-75 mb-4">
                Prefer to chat? Our support team is available
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Live Chat
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
