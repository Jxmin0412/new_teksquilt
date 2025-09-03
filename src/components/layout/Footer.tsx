import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/jobs" },
  ],
  services: [
    { name: "Onsite Recruitment", href: "/services#onsite" },
    { name: "Remote Services", href: "/services#remote" },
    { name: "Dedicated Staffing", href: "/services#dedicated" },
  ],
  resources: [
    { name: "Job Board", href: "/jobs" },
    { name: "Industry Reports", href: "/industry-reports" },
    { name: "FAQs", href: "/faqs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Top Section - Newsletter */}
        <div className="border-b border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-400">
                  Get the latest job opportunities and career tips delivered to
                  your inbox.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white">
                    Subscribe
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-lg blur opacity-50" />
                  <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-xl">
                    TQ
                  </div>
                </div>
                <span className="text-2xl font-bold">TekSquilt</span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted partner in talent acquisition.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3 relative z-10">
              <a
                href="tel:+19728377530"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group relative z-20"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-blue-500 transition-colors pointer-events-none" />
                <span className="pointer-events-none">+1 972-837-7530</span>
              </a>
              <a
                href="mailto:contact@teksquilt.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group relative z-20"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-blue-500 transition-colors pointer-events-none" />
                <span className="pointer-events-none">
                  contact@teksquilt.com
                </span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  5700 Tennyson Pkwy Suite 300,
                  <br />
                  Plano, TX 75024
                </span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className=" text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name} className="relative z-10">
                  <Link
                    to={link.href}
                    className="block py-1 text-gray-400 hover:text-white transition-all duration-200 group"
                  >
                    <span className="inline-flex items-center gap-1">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name} className="relative z-10">
                  <Link
                    to={link.href}
                    className="block py-1 text-gray-400 hover:text-white transition-all duration-200 group"
                  >
                    <span className="inline-flex items-center gap-1">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name} className="relative z-10">
                  <Link
                    to={link.href}
                    className="block py-1 text-gray-400 hover:text-white transition-all duration-200 group"
                  >
                    <span className="inline-flex items-center gap-1">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name} className="relative z-10">
                  <Link
                    to={link.href}
                    className="block py-1 text-gray-400 hover:text-white transition-all duration-200 group"
                  >
                    <span className="inline-flex items-center gap-1">
                      <span>{link.name} </span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-400"
              >
                © 2025 TekSquilt. All rights reserved.
              </motion.div>

              {/* Social Links */}
              <div
                className="flex items-center gap-4"
                style={{ position: "relative", zIndex: 50 }}
              >
                <a
                  href="https://www.linkedin.com/company/teksquilt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-block p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.linkedin.com/company/teksquilt/",
                      "_blank"
                    );
                  }}
                >
                  <Linkedin className="w-5 h-5 pointer-events-none" />
                </a>
                <a
                  href="https://www.facebook.com/teksquilt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-block p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.facebook.com/teksquilt", "_blank");
                  }}
                >
                  <Facebook className="w-5 h-5 pointer-events-none" />
                </a>
                <a
                  href="https://www.instagram.com/teksquilt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-block p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.instagram.com/teksquilt/",
                      "_blank"
                    );
                  }}
                >
                  <Instagram className="w-5 h-5 pointer-events-none" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
