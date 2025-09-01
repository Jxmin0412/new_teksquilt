
import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-8 text-balance">Stay up to date with the latest news and offers from Tekquilt.</p>
          <form>
            <div className="flex items-center max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
