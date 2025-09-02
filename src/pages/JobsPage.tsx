import React from "react";
import JobCard from "../components/JobCard";

const jobs = [
  {
    title: "Software Engineer",
    location: "San Francisco, CA",
    description:
      "We are looking for a talented Software Engineer to join our team.",
    fullDescription:
      "The ideal candidate will have experience in developing web applications using React and Node.js. You will be responsible for designing, developing, and deploying new features, as well as maintaining and improving existing ones.",
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    description:
      "We are seeking an experienced Product Manager to lead the development of our new products.",
    fullDescription:
      "The successful candidate will have a proven track record of launching successful products. You will be responsible for the entire product lifecycle, from ideation to launch and beyond.",
  },
  {
    title: "UX Designer",
    location: "Remote",
    description:
      "We are looking for a creative UX Designer to design intuitive and user-friendly interfaces.",
    fullDescription:
      "The ideal candidate will have a strong portfolio of successful projects. You will be responsible for creating wireframes, mockups, and prototypes, as well as conducting user research and testing.",
  },
];

const JobsPage: React.FC = () => {
  return (
    <div className="bg-white text-black py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">
          Available Roles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
