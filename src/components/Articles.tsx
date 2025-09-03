import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  TrendingUp,
  Users,
  Briefcase,
  Calendar,
  Eye,
  Heart,
  Share2,
  Sparkles,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const articles = [
  {
    id: 1,
    title: "The Future of Remote Work: Trends and Predictions for 2025",
    excerpt: "Explore how remote work is evolving and what it means for both employers and job seekers in the coming years.",
    category: "Workplace Trends",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/articles/remote-work.jpg",
    views: "2.3k",
    likes: 145,
    featured: true,
    tags: ["Remote Work", "Future of Work", "Technology"]
  },
  {
    id: 2,
    title: "10 Essential Skills Every Tech Professional Needs in 2025",
    excerpt: "Stay ahead of the curve with these must-have skills that top companies are looking for in tech candidates.",
    category: "Career Development",
    author: "Michael Chen",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "/articles/tech-skills.jpg",
    views: "3.1k",
    likes: 234,
    featured: true,
    tags: ["Skills", "Technology", "Career Growth"]
  },
  {
    id: 3,
    title: "How AI is Transforming the Recruitment Process",
    excerpt: "Discover how artificial intelligence is revolutionizing hiring practices and what it means for your job search.",
    category: "Industry Insights",
    author: "Emily Rodriguez",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "/articles/ai-recruitment.jpg",
    views: "1.8k",
    likes: 98,
    featured: false,
    tags: ["AI", "Recruitment", "Innovation"]
  },
  {
    id: 4,
    title: "Mastering the Virtual Interview: Tips from Top Recruiters",
    excerpt: "Expert advice on how to ace your next video interview and make a lasting impression from anywhere.",
    category: "Interview Tips",
    author: "David Park",
    date: "Dec 8, 2024",
    readTime: "4 min read",
    image: "/articles/virtual-interview.jpg",
    views: "4.2k",
    likes: 312,
    featured: false,
    tags: ["Interviews", "Remote", "Tips"]
  },
  {
    id: 5,
    title: "Building a Personal Brand That Gets You Hired",
    excerpt: "Learn how to create and maintain a strong personal brand that attracts recruiters and opens doors.",
    category: "Personal Branding",
    author: "Jessica Lee",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    image: "/articles/personal-brand.jpg",
    views: "2.7k",
    likes: 189,
    featured: false,
    tags: ["Branding", "LinkedIn", "Networking"]
  },
  {
    id: 6,
    title: "Salary Negotiation Strategies That Actually Work",
    excerpt: "Professional negotiators share their secrets for getting the compensation package you deserve.",
    category: "Career Advice",
    author: "Robert Kim",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    image: "/articles/salary-negotiation.jpg",
    views: "5.3k",
    likes: 421,
    featured: true,
    tags: ["Salary", "Negotiation", "Career"]
  }
];

const categories = ["All", "Workplace Trends", "Career Development", "Industry Insights", "Interview Tips", "Personal Branding", "Career Advice"];

const Articles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured || article.id !== featuredArticle?.id);

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
            <BookOpen className="w-4 h-4" />
            <span>Insights & Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Career Insights &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Industry Trends
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest trends, tips, and strategies to advance your career
            and make informed hiring decisions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="relative group bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-100 to-cyan-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white rounded-full text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {featuredArticle.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredArticle.readTime}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag, index) => (
                      <span key={index} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredArticle.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {featuredArticle.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </span>
                    </div>

                    <Button className="group bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Article Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredArticle(article.id)}
              onMouseLeave={() => setHoveredArticle(null)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {article.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400 text-white rounded-full text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs text-gray-500">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {article.likes}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                      <Share2 className="w-4 h-4 text-gray-500" />
                    </button>
                    <ArrowRight className={cn(
                      "w-4 h-4 transition-all duration-300",
                      hoveredArticle === article.id 
                        ? "text-blue-600 translate-x-1" 
                        : "text-gray-400"
                    )} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 hover:border-gray-400"
          >
            Load More Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Don't Miss Our Latest Insights
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and get career tips delivered to your inbox weekly.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white">
            Subscribe Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;