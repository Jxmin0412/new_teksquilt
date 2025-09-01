import React from "react";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import CompanyLogos from "../components/CompanyLogos";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Articles from "../components/Articles";

const Home: React.FC = () => {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/hero-video.mp4" autoPlay loop muted />
        <div className="z-20 animate-fade-in-up">
          <h1 className="text-6xl font-bold mb-4 text-balance">Find Your Dream Team</h1>
          <p className="text-xl mb-8 text-balance">We connect top talent with innovative companies.</p>
          <a href="#" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-colors">Get Started</a>
        </div>
      </section>
      <Services />
      <Jobs />
      <CompanyLogos />
      <Testimonials />
      <Newsletter />
      <Articles />
    </div>
  );
};

export default Home;