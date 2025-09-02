import React, { useState } from "react";
import JobCard from "../components/JobCard";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Software Engineer",
    location: "San Francisco, CA",
    description:
      "We are looking for a talented Software Engineer to join our team.",
    fullDescription:
      "The ideal candidate will have experience in developing web applications using React and Node.js. You will be responsible for designing, developing, and deploying new features, as well as maintaining and improving existing ones.",
    remote: false,
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    description:
      "We are seeking an experienced Product Manager to lead the development of our new products.",
    fullDescription:
      "The successful candidate will have a proven track record of launching successful products. You will be responsible for the entire product lifecycle, from ideation to launch and beyond.",
    remote: false,
  },
  {
    title: "UX Designer",
    location: "Remote",
    description:
      "We are looking for a creative UX Designer to design intuitive and user-friendly interfaces.",
    fullDescription:
      "The ideal candidate will have a strong portfolio of successful projects. You will be responsible for creating wireframes, mockups, and prototypes, as well as conducting user research and testing.",
    remote: true,
  },
];

const JobsPage: React.FC = () => {
  const [showRemoteOnly, setShowRemoteOnly] = useState(false);

  const filteredJobs = showRemoteOnly ? jobs.filter((job) => job.remote) : jobs;

  return (
    <div className="bg-white text-black py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Available Roles</h1>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Label>Show Remote Only</Label>
          <Switch
            id="remote-only"
            checked={showRemoteOnly}
            onCheckedChange={setShowRemoteOnly}
          />
        </div>
        <div className="flex flex-col gap-8">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="bg-blue-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
            View All Jobs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;