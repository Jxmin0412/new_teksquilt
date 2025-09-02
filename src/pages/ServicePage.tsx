import React from "react";
import StickyContent from "../components/StickyContent";
import { Briefcase, Users, FileText } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="h-12 w-12 text-autumnYellow" />,
    title: "Permanent Placement",
    description:
      "We help you find the right talent for your long-term needs. Our team of experts will work with you to understand your requirements and find the perfect match for your company.",
  },
  {
    icon: <Users className="h-12 w-12 text-autumnYellow" />,
    title: "Contract Staffing",
    description:
      "We provide flexible staffing solutions to help you manage your workload. Whether you need temporary staff for a short-term project or a long-term assignment, we have you covered.",
  },
  {
    icon: <FileText className="h-12 w-12 text-autumnYellow" />,
    title: "Recruitment Process Outsourcing",
    description:
      "We can handle your entire recruitment process, from sourcing and screening to onboarding and training. Our RPO services are designed to save you time and money.",
  },
];

const ServicePage: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <StickyContent services={services} />
    </div>
  );
};

export default ServicePage;
