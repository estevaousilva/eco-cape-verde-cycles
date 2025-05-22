
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/fdbda015-4a35-462f-9f14-4a4000e6f68d.png" alt="Cycling CV Tourism Logo" className="h-12 w-auto mr-3" />
              <h2 className="text-xl font-bold">Cycling CV Tourism</h2>
            </div>
            <p className="mb-4">Tourism with Purpose</p>
            <p className="text-sm text-gray-400">
              Promoting sustainable tourism and authentic experiences through cycling
              in the beautiful Cape Verde islands.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+238 999 9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@cyclingcv.com</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Follow Us:</h4>
              <div className="flex space-x-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>© {new Date().getFullYear()} Cycling CV Tourism. All rights reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
