import react from "react";
import nciclogo from "@/assets/nciclogoinwhitec.png";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

{/* <motion.img
  src="/path-to-logo.png"
  alt="New Creation Logo"
  className="h-12 w-auto"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
/> */}


export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (path: string) => {
      if (path === "/" || path === "/#hero") {
        // Navigate to home and scroll to hero (top of page)
        if (location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate("/");
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }
      } else if (path === "/#contact") {
        // Special handling for contact - check if on Bible College page
        if (location.pathname === "/bible-college") {
          const element = document.getElementById("contact-college");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else if (location.pathname === "/") {
          // Already on home page, scroll to contact
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Navigate to home page first, then scroll to contact
          navigate("/");
          setTimeout(() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      } else if (path.startsWith("/#")) {
        const sectionId = path.substring(2);
        if (location.pathname === "/") {
          // Already on home page, just scroll
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Navigate to home page first, then scroll
          navigate("/");
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    };

    const navLinks = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/discover" },
    { name: "Ministry", path: "/ministry" },
    { name: "Devotion", path: "/#devotional" },
    { name: "Testimony", path: "/testimonies" },
    { name: "Service", path: "/services" },
    { name: "Teaching", path: "/teachings" },
  ];

  return(
    <nav className={`w-full px-6 py-3 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#2B1F66]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
        <div className="flex-shrink-0 animate-fade-in-down ml-20 cursor-pointer" onClick={() => handleNavClick("/")}>
            <img 
            src={nciclogo}
            alt="New Creation Logo"
            className="h-16 w-auto"
            />
        </div>

        <ul className="hidden md:flex flex-1 justify-center items-center gap-8 font-['Outfit'] font-medium text-white">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-gold transition-colors cursor-pointer animate-fade-in-delay"
              /* style={{ animationDelay: `${index * 0.2}s` }} */
            >
              {link.path.startsWith("/#") ? (
                <button onClick={() => handleNavClick(link.path)}>{link.name}</button>
              ) : link.path === "/" ? (
                <button onClick={() => handleNavClick("/")}>{link.name}</button>
              ) : (
                <Link to={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
          <li className="animate-fade-in-delay">
            <Link to="/bible-college">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-['Outfit'] font-bold px-6 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Bible College
              </button>
            </Link>
          </li>
        </ul>

        <div className="flex-shrink-0 mr-20">
          <button 
            onClick={() => handleNavClick("/#contact")}
            className="border-2 border-white text-white font-['Outfit'] font-medium px-6 py-2 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
          >
            Contact Us
          </button>
      </div>

    </nav>

  );
}