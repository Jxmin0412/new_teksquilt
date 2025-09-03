import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Send,
  CheckCircle,
  User,
  MapPin,
  Phone,
  Mail,
  FileText,
  ArrowRight,
  GraduationCap,
  Briefcase,
  X,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ResumeSubmission: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedinProfile: "",
    portfolioWebsite: "",
    expectedSalary: "",
    availability: "",
    experience: "",
    coverLetter: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateFile = (file: File): string | null => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      return 'Please upload a PDF, DOC, or DOCX file.';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 10MB.';
    }

    return null;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleFileSelection = (file: File) => {
    setUploadError(null);
    const error = validateFile(file);
    
    if (error) {
      setUploadError(error);
      return;
    }

    setResumeFile(file);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    setUploadError(null);
    // Reset the input value
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        linkedinProfile: "",
        portfolioWebsite: "",
        expectedSalary: "",
        availability: "",
        experience: "",
        coverLetter: "",
      });
      setResumeFile(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}

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
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Resume Submission
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below to apply for positions
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-gray-700 mb-2 block"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-gray-700 mb-2 block"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="Doe"
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
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 mb-2 block"
                      >
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
                      <Label
                        htmlFor="location"
                        className="text-gray-700 mb-2 block"
                      >
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
                      <Label
                        htmlFor="linkedinProfile"
                        className="text-gray-700 mb-2 block"
                      >
                        LinkedIn Profile
                      </Label>
                      <Input
                        id="linkedinProfile"
                        name="linkedinProfile"
                        type="url"
                        value={formData.linkedinProfile}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Professional Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="experience"
                        className="text-gray-700 mb-2 block"
                      >
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
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (2-5 years)</option>
                        <option value="senior">Senior Level (5+ years)</option>
                        <option value="lead">Lead/Manager</option>
                        <option value="executive">Executive</option>
                      </select>
                    </div>
                    <div>
                      <Label
                        htmlFor="portfolioWebsite"
                        className="text-gray-700 mb-2 block"
                      >
                        Portfolio Website
                      </Label>
                      <Input
                        id="portfolioWebsite"
                        name="portfolioWebsite"
                        type="url"
                        value={formData.portfolioWebsite}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="expectedSalary"
                        className="text-gray-700 mb-2 block"
                      >
                        Expected Salary Range
                      </Label>
                      <Input
                        id="expectedSalary"
                        name="expectedSalary"
                        type="text"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 rounded-xl"
                        placeholder="$80,000 - $120,000"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="availability"
                        className="text-gray-700 mb-2 block"
                      >
                        Availability *
                      </Label>
                      <select
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Availability</option>
                        <option value="immediate">Immediate</option>
                        <option value="2weeks">2 weeks notice</option>
                        <option value="1month">1 month</option>
                        <option value="2months">2+ months</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Upload className="w-5 h-5 text-blue-600" />
                    Resume Upload
                  </h3>
                  <div 
                    className={cn(
                      "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300",
                      isDragging
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300",
                      uploadError ? "border-red-300 bg-red-50" : ""
                    )}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    {resumeFile ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                          <div className="flex-1 text-left">
                            <p className="font-medium text-green-800">{resumeFile.name}</p>
                            <p className="text-sm text-green-600">
                              {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-1 hover:bg-green-100 rounded-full transition-colors"
                          >
                            <X className="w-4 h-4 text-green-600" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500">
                          File uploaded successfully! You can upload a different file if needed.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className={cn(
                          "w-12 h-12 mx-auto transition-colors",
                          isDragging ? "text-blue-500" : "text-gray-400"
                        )} />
                        <div>
                          <label
                            htmlFor="resume"
                            className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Click to upload your resume
                          </label>
                          <span className="text-gray-500 ml-2">
                            or drag and drop
                          </span>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            required
                          />
                        </div>
                        <p className="text-sm text-gray-500">
                          PDF, DOC, DOCX files up to 10MB
                        </p>
                      </div>
                    )}
                    
                    {uploadError && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-red-600">
                        <AlertCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{uploadError}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <Label
                    htmlFor="coverLetter"
                    className="text-gray-700 mb-2 block text-lg font-semibold flex items-center gap-2"
                  >
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Cover Letter
                  </Label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Tell us about yourself, your career goals, and why you're interested in opportunities with our partner companies..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={cn(
                      "py-3 rounded-xl font-medium transition-all duration-300",
                      isSubmitted
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700",
                      "text-white"
                    )}
                  >
                    {isSubmitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Resume Submitted Successfully!
                      </span>
                    ) : isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Submit Resume
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResumeSubmission;
