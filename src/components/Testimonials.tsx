
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">What Our Clients Say</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 md:p-12">
                <p className="text-xl text-muted-foreground mb-6 text-balance">Tekquilt helped us find the perfect candidate for our team. They were professional, efficient, and a pleasure to work with.</p>
                <div className="flex items-center">
                  <img src="/avatars/avatar1.png" alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-bold">John Doe</p>
                    <p className="text-muted-foreground">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 md:p-12">
                <p className="text-xl text-muted-foreground mb-6 text-balance">We have been working with Tekquilt for several years and they have always provided us with top talent. We highly recommend them.</p>
                <div className="flex items-center">
                  <img src="/avatars/avatar2.png" alt="Jane Smith" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-bold">Jane Smith</p>
                    <p className="text-muted-foreground">HR Manager, XYZ Corp.</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 md:p-12">
                <p className="text-xl text-muted-foreground mb-6 text-balance">The team at Tekquilt is amazing. They are dedicated, knowledgeable, and always go the extra mile to help us find the right people.</p>
                <div className="flex items-center">
                  <img src="/avatars/avatar3.png" alt="Peter Jones" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-bold">Peter Jones</p>
                    <p className="text-muted-foreground">CTO, ABC LLC</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
