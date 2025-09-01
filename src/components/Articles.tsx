
import React from "react";

const Articles: React.FC = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src="/articles/article1.jpg" alt="Article 1" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-balance">How to Find the Right Job for You</h3>
              <p className="text-muted-foreground mb-6 text-balance">In this article, we share some tips on how to find the right job for you. We cover everything from self-assessment to networking and interviewing.</p>
              <a href="#" className="text-primary hover:underline font-semibold">Read More</a>
            </div>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src="/articles/article2.jpg" alt="Article 2" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-balance">The Importance of a Good Resume</h3>
              <p className="text-muted-foreground mb-6 text-balance">A good resume is essential for landing your dream job. In this article, we provide some tips on how to create a resume that will impress recruiters.</p>
              <a href="#" className="text-primary hover:underline font-semibold">Read More</a>
            </div>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src="/articles/article3.jpg" alt="Article 3" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-balance">How to Prepare for a Job Interview</h3>
              <p className="text-muted-foreground mb-6 text-balance">Job interviews can be stressful, but with the right preparation, you can ace any interview. In this article, we share some tips on how to prepare for a job interview.</p>
              <a href="#" className="text-primary hover:underline font-semibold">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
