
import React from "react";
import { Briefcase, Users, FileText } from "lucide-react";

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <Briefcase className="h-12 w-12 mx-auto mb-6 text-primary " />
            <h3 className="text-2xl font-bold mb-4">Permanent Placement</h3>
            <p className="text-muted-foreground">We help you find the right talent for your long-term needs. Our team of experts will work with you to understand your requirements and find the perfect match for your company.</p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <Users className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Contract Staffing</h3>
            <p className="text-muted-foreground">We provide flexible staffing solutions to help you manage your workload. Whether you need temporary staff for a short-term project or a long-term assignment, we have you covered.</p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <FileText className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Recruitment Process Outsourcing</h3>
            <p className="text-muted-foreground">We can handle your entire recruitment process, from sourcing and screening to onboarding and training. Our RPO services are designed to save you time and money.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
