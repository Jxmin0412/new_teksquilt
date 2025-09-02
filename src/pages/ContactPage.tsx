import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>Name</Label>
              <Input
                type="text"
                id="name"
                className="bg-gray-100 border-gray-300 text-black"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                id="email"
                className="bg-gray-100 border-gray-300 text-black"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label>Subject</Label>
            <Input
              type="text"
              id="subject"
              className="bg-gray-100 border-gray-300 text-black"
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label>Message</Label>
            <textarea
              id="message"
              className="w-full bg-gray-100 border-gray-300 rounded-md p-4 text-black"
              rows={5}
            ></textarea>
          </div>
          <Button type="submit" className="w-full font-bold">
            Send Message
          </Button>
        </form>
        <div className="max-w-2xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="hover:bg-pink-500">
              <Instagram className="h-6 w-6 text-pink-500" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-600">
              <Facebook className="h-6 w-6 text-blue-600" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-500">
              <Linkedin className="h-6 w-6 text-blue-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;