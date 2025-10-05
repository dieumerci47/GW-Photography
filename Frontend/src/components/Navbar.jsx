import { useState } from "react";
import { Camera, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 fixed w-full top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              >
                <Camera className="h-8 w-8 text-white" strokeWidth={1.5} />
                <span className="text-white text-xl font-bold tracking-wide">
                  GW
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Accueil
                </Link>
                <Link
                  to="/galerie"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Galerie
                </Link>
                <Link
                  to="/apropos"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  À propos
                </Link>
                <Link
                  to="/reservation"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Réservation
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center">
              <Link
                to="/devis"
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Devis Gratuit
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                to="/galerie"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                Galerie
              </Link>
              <Link
                to="/apropos"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                À propos
              </Link>
              <Link
                to="/reservation"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                Réservation
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              
              {/* Mobile Action Button */}
              <div className="px-3 py-4 border-t border-gray-700">
                <Link
                  to="/devis"
                  className="w-full block text-center bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
