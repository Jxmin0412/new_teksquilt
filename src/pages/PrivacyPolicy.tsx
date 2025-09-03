import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, UserCheck, Bell, Globe, Mail } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Employment information (Resume, work history, skills, education)",
        "Usage data (How you interact with our website and services)",
        "Communication data (Emails, messages, and feedback you provide)"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To match job seekers with appropriate employment opportunities",
        "To provide recruitment services to our employer clients",
        "To communicate with you about opportunities and services",
        "To improve our services and user experience",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: [
        "We share candidate information with potential employers only with your consent",
        "We may share data with service providers who assist in our operations",
        "We never sell your personal information to third parties",
        "We may disclose information when required by law or to protect rights"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Regular security audits and updates to our systems",
        "Encrypted data transmission and storage",
        "Limited access to personal information on a need-to-know basis",
        "Incident response procedures for potential data breaches"
      ]
    },
    {
      icon: Globe,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request corrections to inaccurate data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications",
        "Data portability - receive your data in a structured format"
      ]
    },
    {
      icon: FileCheck,
      title: "Cookies and Tracking",
      content: [
        "We use cookies to enhance your browsing experience",
        "Analytics cookies help us understand how you use our website",
        "You can control cookie preferences through your browser settings",
        "Third-party services may use their own cookies subject to their policies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Shield className="w-4 h-4" />
              <span>Legal</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Privacy
              </span>
              {" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>

            <p className="text-sm text-gray-500">
              Last Updated: January 1, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TekSquilt ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our website and services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our services, you agree to the collection and use of information 
                in accordance with this policy. If you do not agree with our policies and 
                practices, please do not use our services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 flex-1">
                        {section.title}
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our 
                services and fulfill the purposes outlined in this privacy policy. Job seeker 
                profiles are retained for up to 2 years after last activity, unless you request 
                earlier deletion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When your personal information is no longer required, we will securely delete 
                or anonymize it in accordance with applicable data protection laws.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@teksquilt.com</p>
                <p><strong>Phone:</strong> +1 972-837-7530</p>
                <p><strong>Address:</strong> 5700 Tennyson Pkwy Suite 300, Plano, TX 75024</p>
              </div>
            </motion.div>

            {/* Updates Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-gray-500">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;