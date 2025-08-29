import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarHeight = 80; // adjust based on your navbar's height in px

  useEffect(() => {
    if (location.pathname === "/" && !location.hash) {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        setTimeout(() => {
          const yOffset = -navbarHeight;
          const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }

    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -navbarHeight;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -navbarHeight;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 shadow-lg px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Title */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNavClick("hero")}
        >
          <img src="/clogo.png" alt="CarValue" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-white font-sans">CarValue</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-sans items-center">
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("hero")}>Home</button>
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("about")}>About</button>
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("features")}>Features</button>
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("how-it-works")}>How it Works</button>
          <Link
            to="/carform"
            className="relative inline-block px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-600 shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700 hover:shadow-2xl"
          >
            Predict
            <span className="absolute inset-0 rounded-lg border-2 border-white opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-center bg-gradient-to-b from-blue-900 to-blue-950 rounded-xl p-6 shadow-xl font-sans">
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("hero")}>Home</button>
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("about")}>About</button>
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("features")}>Features</button>
          <button className="text-white hover:text-green-300 transition-colors" onClick={() => handleNavClick("how-it-works")}>How it Works</button>
          <Link className="text-white hover:text-green-300 transition-colors" to="/carform" onClick={() => setMenuOpen(false)}>Predict</Link>
        </div>
      )}
    </nav>
  );
}
