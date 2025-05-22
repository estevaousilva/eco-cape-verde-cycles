
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/fdbda015-4a35-462f-9f14-4a4000e6f68d.png" alt="Cycling CV Tourism Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <h1 className="font-bold text-primary text-xl">CYCLING TOURISM</h1>
              <p className="text-xs text-gray-600">Cape Verde Islands</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-primary font-medium">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>About Us</Link>
            <Link to="/services" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/gallery" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Gallery</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
