import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building, 
  Send, 
  Sparkles, 
  CheckCircle,
  Users,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const EmployerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    industry: "",
    companySize: "",
    positionTitle: "",
    positionType: "",
    experience: "",
    skills: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        location: "",
        industry: "",
        companySize: "",
        positionTitle: "",
        positionType: "",
        experience: "",
        skills: "",
        description: ""
      });
    }, 5000);
  };

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
              <Building className="w-4 h-4" />
              <span>For Employers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Find Your Perfect
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Team Member
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your hiring needs and we'll connect you with the best talent in the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Employer Information</h2>
                  <p className="text-gray-600">Fill out the form below to get started</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    Company Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName" className="text-gray-700 mb-2 block">
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson" className="text-gray-700 mb-2 block">
                        Contact Person *
                      </Label>
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="company@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-gray-700 mb-2 block">
                        Company Website
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        value={formData.website}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-gray-700 mb-2 block">
                        Location *
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="City, State"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry" className="text-gray-700 mb-2 block">
                        Industry *
                      </Label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="companySize" className="text-gray-700 mb-2 block">
                        Company Size *
                      </Label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Position Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Position Requirements
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="positionTitle" className="text-gray-700 mb-2 block">
                        Position Title *
                      </Label>
                      <Input
                        id="positionTitle"
                        name="positionTitle"
                        type="text"
                        value={formData.positionTitle}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="e.g., Senior Software Engineer"
                      />
                    </div>
                    <div>
                      <Label htmlFor="positionType" className="text-gray-700 mb-2 block">
                        Position Type *
                      </Label>
                      <select
                        id="positionType"
                        name="positionType"
                        value={formData.positionType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Type</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="temporary">Temporary</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-gray-700 mb-2 block">
                        Experience Level *
                      </Label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Level</option>
                        <option value="entry">Entry Level</option>
                        <option value="mid">Mid Level</option>
                        <option value="senior">Senior Level</option>
                        <option value="lead">Lead/Manager</option>
                        <option value="executive">Executive</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="skills" className="text-gray-700 mb-2 block">
                        Required Skills
                      </Label>
                      <Input
                        id="skills"
                        name="skills"
                        type="text"
                        value={formData.skills}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="e.g., React, Node.js, Python"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="description" className="text-gray-700 mb-2 block">
                      Additional Requirements
                    </Label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="Tell us more about the position and your ideal candidate..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={cn(
                    "w-full py-3 rounded-xl font-medium transition-all duration-300",
                    isSubmitted 
                      ? "bg-green-500 hover:bg-green-600" 
                      : "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700",
                    "text-white"
                  )}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Successfully Submitted!
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit Request
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                <p className="text-gray-600">+1 (234) 567-890</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                <p className="text-gray-600">employers@teksquilt.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmployerForm;