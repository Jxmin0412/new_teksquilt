
import React from "react";

const Jobs: React.FC = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
            <p className="text-muted-foreground mb-4">San Francisco, CA</p>
            <p className="text-muted-foreground">We are looking for a talented Software Engineer to join our team. The ideal candidate will have experience in developing web applications using React and Node.js.</p>
            <a href="#" className="text-primary hover:underline mt-6 inline-block font-semibold">Apply Now</a>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">Product Manager</h3>
            <p className="text-muted-foreground mb-4">New York, NY</p>
            <p className="text-muted-foreground">We are seeking an experienced Product Manager to lead the development of our new products. The successful candidate will have a proven track record of launching successful products.</p>
            <a href="#" className="text-primary hover:underline mt-6 inline-block font-semibold">Apply Now</a>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">UX Designer</h3>
            <p className="text-muted-foreground mb-4">Remote</p>
            <p className="text-muted-foreground">We are looking for a creative UX Designer to design intuitive and user-friendly interfaces for our web and mobile applications. The ideal candidate will have a strong portfolio of successful projects.</p>
            <a href="#" className="text-primary hover:underline mt-6 inline-block font-semibold">Apply Now</a>
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="#" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-colors">View All Jobs</a>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
