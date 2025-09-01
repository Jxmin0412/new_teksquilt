import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Tekquilt</h3>
            <p className="text-gray-400">We are a staffing company that specializes in providing top talent to businesses of all sizes.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Jobs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Socials</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Instagram</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legalities</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2025 Tekquilt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;