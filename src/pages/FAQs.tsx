import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  Search,
  Sparkles,
  Users,
  Briefcase,
  Building,
  DollarSign,
  Clock,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    name: "For Job Seekers",
    icon: Users,
    questions: [
      {
        question: "How do I apply for jobs through TekSquilt?",
        answer: "You can browse our job listings and apply directly through our website. Simply click on the job you're interested in and follow the application instructions. You can also submit your resume for our talent pool, and we'll match you with suitable opportunities."
      },
      {
        question: "Is there a fee for job seekers?",
        answer: "No, our services are completely free for job seekers. We are compensated by the employers who hire through us. You'll never be charged for applying to jobs or using our career services."
      },
      {
        question: "How long does the recruitment process typically take?",
        answer: "The timeline varies depending on the position and employer requirements. On average, the process takes 2-4 weeks from application to offer. We work to expedite the process while ensuring the best match for both parties."
      },
      {
        question: "Can you help with resume writing and interview preparation?",
        answer: "Yes! We offer career coaching services including resume optimization, interview preparation, and salary negotiation guidance. Our team will work with you to present your best self to potential employers."
      },
      {
        question: "What types of positions do you recruit for?",
        answer: "We recruit for a wide range of positions across multiple industries including technology, healthcare, finance, manufacturing, and more. From entry-level to executive positions, we cover full-time, contract, and remote opportunities."
      }
    ]
  },
  {
    name: "For Employers",
    icon: Building,
    questions: [
      {
        question: "What recruitment services do you offer?",
        answer: "We offer comprehensive recruitment services including onsite recruitment, remote staffing, dedicated team building, executive search, and contract staffing. Our services are tailored to meet your specific hiring needs and company culture."
      },
      {
        question: "How do you screen candidates?",
        answer: "Our screening process includes initial resume review, skills assessment, behavioral interviews, reference checks, and background verification. We can also customize the screening process based on your specific requirements."
      },
      {
        question: "What is your success rate?",
        answer: "We maintain a 95% placement success rate with a 90-day guarantee. If a placed candidate doesn't work out within the first 90 days, we'll find a replacement at no additional cost."
      },
      {
        question: "How quickly can you fill a position?",
        answer: "Our average time-to-fill is 2-3 weeks for most positions. For specialized or executive roles, it may take 4-6 weeks. We maintain an extensive talent pool that allows us to present qualified candidates quickly."
      },
      {
        question: "What industries do you specialize in?",
        answer: "We have expertise across multiple industries including technology, healthcare, finance, manufacturing, retail, and professional services. Our industry-specific recruiters understand the unique requirements of each sector."
      }
    ]
  },
  {
    name: "Services & Process",
    icon: Briefcase,
    questions: [
      {
        question: "What makes TekSquilt different from other staffing agencies?",
        answer: "We combine industry expertise with personalized service, advanced technology, and a commitment to long-term partnerships. Our 98% client retention rate and 95% placement success rate speak to our quality and dedication."
      },
      {
        question: "Do you offer temporary or contract staffing?",
        answer: "Yes, we provide both temporary and contract staffing solutions. Whether you need coverage for a specific project, maternity leave, or seasonal demands, we can provide qualified professionals for any duration."
      },
      {
        question: "Can you handle high-volume recruiting?",
        answer: "Absolutely. We have successfully managed high-volume recruitment projects, placing 50+ employees for single clients. Our scalable processes and extensive network enable us to meet large-scale hiring needs efficiently."
      },
      {
        question: "Do you provide remote recruitment services?",
        answer: "Yes, we specialize in remote recruitment and have successfully placed remote workers across the globe. We assess candidates for remote work capabilities and help establish effective remote working relationships."
      },
      {
        question: "What is your guarantee policy?",
        answer: "We offer a 90-day replacement guarantee for all permanent placements. If a candidate doesn't meet expectations within this period, we'll find a suitable replacement at no additional charge."
      }
    ]
  },
  {
    name: "Pricing & Terms",
    icon: DollarSign,
    questions: [
      {
        question: "How are your services priced?",
        answer: "Our pricing structure varies based on the type of service. For permanent placements, we typically charge a percentage of the candidate's first-year salary. Contract and temporary staffing are billed at an hourly or project rate. Contact us for a customized quote."
      },
      {
        question: "Are there any upfront fees?",
        answer: "No, we don't charge any upfront fees for standard recruitment services. Our fees are success-based, meaning you only pay when we successfully place a candidate who starts working for you."
      },
      {
        question: "What payment terms do you offer?",
        answer: "We offer flexible payment terms including net 30 days for most services. For long-term contracts or high-volume recruiting, we can arrange customized payment schedules to suit your budget."
      },
      {
        question: "Do you offer discounts for multiple hires?",
        answer: "Yes, we offer volume discounts for clients hiring multiple positions. The discount structure depends on the number of hires and the timeframe. Contact our sales team for more information."
      }
    ]
  }
];

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(faqCategories[0].name);
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  const activeCategory = filteredFAQs.find(c => c.name === selectedCategory) || filteredFAQs[0];

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
              <HelpCircle className="w-4 h-4" />
              <span>Help Center</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can 
              help you achieve your goals.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 w-full border-2 border-gray-200 rounded-xl focus:border-blue-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200",
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-lg"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* Questions */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {activeCategory.questions.length > 0 ? (
                activeCategory.questions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(item.question)}
                      className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">Q</span>
                        </div>
                        <h3 className="font-semibold text-gray-900">
                          {item.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-gray-500 transition-transform flex-shrink-0",
                          expandedQuestions.includes(item.question) && "rotate-180"
                        )}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {expandedQuestions.includes(item.question) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 pt-2">
                            <div className="flex gap-3">
                              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-gray-600 text-xs font-bold">A</span>
                              </div>
                              <p className="text-gray-600 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No questions found matching your search.</p>
                </div>
              )}
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 text-center"
            >
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team is here to help. Contact us directly and we'll get back to you 
                within 24 hours with personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+19728377530"
                  className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-all duration-300"
                >
                  <Clock className="w-4 h-4 inline mr-2" />
                  Call: +1 972-837-7530
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;