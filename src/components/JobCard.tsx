import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface Job {
  title: string;
  location: string;
  description: string;
  fullDescription: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white text-black rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400">
            {job.title}
          </h3>
          <p className="text-gray-900 mb-4">{job.location}</p>
          <p className="text-gray-900">{job.description}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white text-black border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{job.title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text--black mb-4">{job.location}</p>
          <p className="text-gray-900">{job.fullDescription}</p>
        </div>
        <Button className="mt-4 bg-cyan-400 font-bold text-white hover:bg-cyan-700">
          Apply Now
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default JobCard;
