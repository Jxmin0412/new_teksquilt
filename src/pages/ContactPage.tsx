import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 mb-8">
            Have a question or want to work with us? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              type="text"
              placeholder="Name"
              className="bg-gray-800 border-gray-700"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-gray-800 border-gray-700"
            />
          </div>
          <Input
            type="text"
            placeholder="Subject"
            className="bg-gray-800 border-gray-700 mb-4"
          />
          <textarea
            placeholder="Message"
            className="w-full bg-gray-800 border-gray-700 rounded-md p-4 mb-4"
            rows={5}
          ></textarea>
          <Button type="submit" className="w-full font-bold">
            Send Message
          </Button>
        </form>
        <div className="max-w-2xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Instagram className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
