import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Users, Briefcase, AlertTriangle, Shield, Globe, CheckCircle } from "lucide-react";

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using TekSquilt's services, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, you should not use our services.",
        "We reserve the right to update these terms at any time with notice posted on our website.",
        "Continued use of our services after changes constitutes acceptance of the new terms."
      ]
    },
    {
      icon: Briefcase,
      title: "Services Provided",
      content: [
        "TekSquilt provides recruitment and staffing services connecting job seekers with employers.",
        "Services include job matching, resume review, interview preparation, and career counseling.",
        "For employers, we offer candidate sourcing, screening, and placement services.",
        "We do not guarantee employment or successful hiring outcomes.",
        "Services may be modified or discontinued at our discretion."
      ]
    },
    {
      icon: CheckCircle,
      title: "User Responsibilities",
      content: [
        "Provide accurate, current, and complete information in all interactions.",
        "Maintain the confidentiality of your account credentials.",
        "Notify us immediately of any unauthorized use of your account.",
        "Use our services in compliance with all applicable laws and regulations.",
        "Respect the intellectual property rights of TekSquilt and other users."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "Providing false or misleading information about qualifications or job requirements.",
        "Using our services for any illegal or unauthorized purpose.",
        "Attempting to gain unauthorized access to our systems or user accounts.",
        "Interfering with or disrupting our services or servers.",
        "Harvesting or collecting user information without consent.",
        "Posting discriminatory, harassing, or inappropriate content."
      ]
    },
    {
      icon: Scale,
      title: "Liability and Disclaimers",
      content: [
        "Services are provided 'as is' without warranties of any kind.",
        "We are not liable for any hiring decisions or employment outcomes.",
        "We do not guarantee the accuracy of information provided by users.",
        "Our liability is limited to the amount paid for our services.",
        "We are not responsible for third-party websites or services linked from our platform."
      ]
    },
    {
      icon: Shield,
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold TekSquilt harmless from any claims arising from your use of our services.",
        "This includes violations of these terms or infringement of any third-party rights.",
        "We reserve the right to assume exclusive defense of any claim subject to indemnification.",
        "You agree to cooperate with our defense of such claims."
      ]
    },
    {
      icon: Globe,
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of the State of Texas, United States.",
        "Any disputes shall be resolved in the courts of Collin County, Texas.",
        "You waive any objection to jurisdiction or venue in these courts.",
        "If any provision is found unenforceable, the remaining provisions shall continue in effect."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
              <FileText className="w-4 h-4" />
              <span>Legal</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Terms of
              </span>
              {" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Please read these terms carefully before using TekSquilt's services. 
              These terms govern your use of our website and recruitment services.
            </p>

            <p className="text-sm text-gray-500">
              Effective Date: January 1, 2025
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you 
                and TekSquilt ("Company," "we," "us," or "our") concerning your access to and use 
                of the teksquilt.com website and any related services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our services, you represent that you are at least 18 years old and have 
                the legal capacity to enter into these Terms. If you are using our services on 
                behalf of an organization, you represent that you have the authority to bind that 
                organization to these Terms.
              </p>
            </motion.div>

            {/* Terms Sections */}
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

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior 
                notice or liability, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use our services will cease immediately. All provisions 
                of these Terms which by their nature should survive termination shall survive, including 
                ownership provisions, warranty disclaimers, and limitations of liability.
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
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Questions About Terms</h2>
              </div>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@teksquilt.com</p>
                <p><strong>Phone:</strong> +1 972-837-7530</p>
                <p><strong>Address:</strong> 5700 Tennyson Pkwy Suite 300, Plano, TX 75024</p>
              </div>
            </motion.div>

            {/* Agreement Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 text-center bg-gray-100 rounded-xl p-6"
            >
              <p className="text-sm text-gray-600 font-medium">
                By using TekSquilt's services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;