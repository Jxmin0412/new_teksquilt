import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp, 
  BarChart,
  PieChart,
  ArrowRight,
  Sparkles,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    id: 1,
    title: "Tech Industry Hiring Trends 2025",
    category: "Technology",
    date: "January 2025",
    views: "5.2k",
    description: "Comprehensive analysis of technology sector hiring patterns, salary trends, and emerging skill demands.",
    fileSize: "2.4 MB",
    featured: true
  },
  {
    id: 2,
    title: "Remote Work Impact Study",
    category: "Workplace",
    date: "December 2024",
    views: "3.8k",
    description: "In-depth research on how remote work is reshaping recruitment strategies and employee expectations.",
    fileSize: "1.8 MB",
    featured: true
  },
  {
    id: 3,
    title: "Healthcare Talent Shortage Report",
    category: "Healthcare",
    date: "December 2024",
    views: "2.9k",
    description: "Analysis of the healthcare industry's talent gap and strategic recommendations for employers.",
    fileSize: "3.1 MB",
    featured: false
  },
  {
    id: 4,
    title: "Q4 2024 Salary Benchmark Guide",
    category: "Compensation",
    date: "November 2024",
    views: "7.3k",
    description: "Detailed salary benchmarks across various industries and positions for competitive compensation planning.",
    fileSize: "1.5 MB",
    featured: false
  },
  {
    id: 5,
    title: "AI in Recruitment: Current State",
    category: "Innovation",
    date: "November 2024",
    views: "4.1k",
    description: "How artificial intelligence is transforming talent acquisition and what it means for the future.",
    fileSize: "2.2 MB",
    featured: false
  },
  {
    id: 6,
    title: "Finance Sector Employment Outlook",
    category: "Finance",
    date: "October 2024",
    views: "3.3k",
    description: "Projections and insights for finance industry hiring, including emerging roles and skill requirements.",
    fileSize: "2.8 MB",
    featured: false
  }
];

const IndustryReports: React.FC = () => {
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
              <BarChart className="w-4 h-4" />
              <span>Research & Insights</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Industry
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Reports & Research
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive industry reports and data-driven insights to make 
              informed decisions about talent acquisition and workforce planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Reports</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reports.filter(r => r.featured).map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {report.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {report.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {report.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {report.views}
                    </span>
                    <span>{report.fileSize}</span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Reports</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.filter(r => !r.featured).map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <PieChart className="w-8 h-8 text-blue-600" />
                    <span className="text-xs text-gray-500">{report.fileSize}</span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">
                    {report.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {report.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{report.date}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {report.views}
                    </span>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 hover:border-blue-500 hover:text-blue-600"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 text-center"
          >
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Research?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can provide tailored industry research and analysis specific to 
              your organization's needs and challenges.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white">
              Request Custom Report
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryReports;