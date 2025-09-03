import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Briefcase,
  Building,
  Users,
  Filter,
  Search,
  TrendingUp,
  Star,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  department: string;
  experience: string;
  description: string;
  tags: string[];
  featured: boolean;
  posted: string;
  logo?: string;
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150k - $200k",
    department: "Engineering",
    experience: "5+ years",
    description:
      "We are looking for a talented Software Engineer to join our team. The ideal candidate will have experience in developing web applications using React and Node.js.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    featured: true,
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovation Labs",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    department: "Product",
    experience: "3-5 years",
    description:
      "We are seeking an experienced Product Manager to lead the development of our new products. The successful candidate will have a proven track record of launching successful products.",
    tags: ["Agile", "Strategy", "Analytics", "Leadership"],
    featured: true,
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio Pro",
    location: "Remote",
    type: "Contract",
    salary: "$90k - $120k",
    department: "Design",
    experience: "2-4 years",
    description:
      "We are looking for a creative UX Designer to design intuitive and user-friendly interfaces for our web and mobile applications.",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
    featured: false,
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Cloud Systems Inc",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$140k - $180k",
    department: "Infrastructure",
    experience: "4+ years",
    description:
      "Join our infrastructure team to build and maintain scalable cloud solutions.",
    tags: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
    featured: true,
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$135k - $175k",
    department: "Data",
    experience: "3-5 years",
    description:
      "Looking for a Data Scientist to help us derive insights from complex datasets.",
    tags: ["Python", "Machine Learning", "SQL", "Statistics"],
    featured: false,
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Marketing Manager",
    company: "Growth Marketing Co",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    department: "Marketing",
    experience: "3-5 years",
    description:
      "Lead our marketing initiatives and drive growth across all channels.",
    tags: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    featured: false,
    posted: "2 weeks ago",
  },
];

const departments = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Infrastructure",
  "Data",
  "Marketing",
];
const jobTypes = ["All", "Full-time", "Contract", "Remote"];

const Jobs: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = jobsData.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesType =
      selectedType === "All" ||
      (selectedType === "Remote"
        ? job.location === "Remote"
        : job.type === selectedType);
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesDepartment && matchesType && matchesSearch;
  });

  const featuredJobs = filteredJobs.filter((job) => job.featured);
  const regularJobs = filteredJobs.filter((job) => !job.featured);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Career Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Find Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore exciting opportunities with top companies. We connect
            talented professionals with their perfect roles.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border-2 border-gray-200 hover:border-gray-300"
            >
              <Filter className="w-4 h-4" />
              Filters
              {(selectedDepartment !== "All" || selectedType !== "All") && (
                <span className="ml-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">
                  Active
                </span>
              )}
            </Button>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 overflow-hidden"
              >
                {/* Department Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Department
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {departments.map((dept) => (
                      <button
                        key={dept}
                        onClick={() => setSelectedDepartment(dept)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                          selectedDepartment === dept
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                        )}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Job Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {jobTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                          selectedType === type
                            ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-md"
                            : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Job Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
        >
          {[
            {
              icon: Briefcase,
              value: filteredJobs.length,
              label: "Open Positions",
            },
            { icon: Building, value: "50+", label: "Companies" },
            { icon: Users, value: "1000+", label: "Placed Candidates" },
            { icon: TrendingUp, value: "95%", label: "Success Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-gray-100 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-900">
                Featured Jobs
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} featured={true} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Jobs */}
        {regularJobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              All Jobs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  featured={false}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or search terms
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Submit your resume and we'll match you with opportunities that fit
            your skills and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white"
            >
              Submit Your Resume
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400"
            >
              Create Job Alert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface JobCardProps {
  job: Job;
  index: number;
  featured: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, index, featured }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1",
        featured
          ? "border-2 border-blue-200 shadow-lg hover:shadow-xl"
          : "border border-gray-100 shadow hover:shadow-lg"
      )}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Star className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Company and Posted */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600">{job.company}</p>
          <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
        </div>
        <span className="text-xs text-gray-500">{job.posted}</span>
      </div>

      {/* Job Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>
            {job.type} • {job.experience}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <DollarSign className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
          >
            {tag}
          </span>
        ))}
        {job.tags.length > 3 && (
          <span className="px-2 py-1 text-gray-500 text-xs">
            +{job.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Apply Button */}
      <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-blue-600 transition-all duration-300">
        Apply Now
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

export default Jobs;
